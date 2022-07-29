/* checksum : e5b83373c059b5b53874bd7b7f5ba740 */
function SAPB1.LicenseService_GetInstallationNumber() returns LargeString;

function SAPB1.SBOBobService_GetLocalCurrency() returns LargeString;

function SAPB1.SBOBobService_GetSystemCurrency() returns LargeString;

function SAPB1.SBOBobService_GetCurrencyRate(
  Currency : LargeString,
  Date : LargeString
) returns Double;

function SAPB1.MessagesService_GetOutbox() returns many SAPB1.MessageHeader;

function SAPB1.MessagesService_GetInbox() returns many SAPB1.MessageHeader;

function SAPB1.SBOBobService_GetIndexRate(
  Index : LargeString,
  Date : LargeString
) returns Double;

function SAPB1.UserMenuService_GetCurrentUserMenu() returns many SAPB1.UserMenuItem;

function SAPB1.SBOBobService_GetSystemPermission(
  UserCode : LargeString,
  PermissionID : LargeString
) returns Integer;

function SAPB1.CompanyService_GetCompanyInfo() returns SAPB1.CompanyInfo;

function SAPB1.ElectronicDocumentService_GetProtocols() returns many SAPB1.ElectronicDocuments;

function SAPB1.CompanyService_GetPathAdmin() returns SAPB1.PathAdmin;

function SAPB1.SBOBobService_Format_MoneyToString(
  InMoney : Double,
  InPrecision : LargeString
) returns LargeString;

function SAPB1.SBOBobService_GetDueDate(
  CardCode : LargeString,
  RefDate : LargeString
) returns LargeString;

function SAPB1.CompanyService_GetAdminInfo() returns SAPB1.AdminInfo;

action SAPB1.QueryService_PostQuery(
  QueryPath : LargeString,
  QueryOption : LargeString
) returns LargeString;

action SAPB1.SBOBobService_SetCurrencyRate(
  RateDate : LargeString,
  Currency : LargeString,
  Rate : LargeString
);

action SAPB1.AlertService_RunAlert() returns Integer;

action SAPB1.SBOBobService_SetSystemPermission(
  UserCode : LargeString,
  PermissionID : LargeString,
  Permission : Integer
);

action SAPB1.MessagesService_GetSentMessages() returns many SAPB1.MessageHeader;

action SAPB1.CreditLinesService_GetCreditLine(
  CreditLineParams : SAPB1.CreditLineParams
) returns SAPB1.CreditLine;

action SAPB1.ProjectsService_GetProjectList() returns many SAPB1.ProjectParams;

action SAPB1.DistributionRulesService_GetDistributionRuleList() returns many SAPB1.DistributionRuleParams;

action SAPB1.InventoryGenExitService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.InventoryGenExitService_HandleApprovalRequest();

action SAPB1.InventoryGenExitService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.InventoryGenEntryService_HandleApprovalRequest();

action SAPB1.BrazilFuelIndexersService_GetList() returns many SAPB1.BrazilFuelIndexerParams;

action SAPB1.NFModelsService_GetList() returns many SAPB1.NFModelParams;

action SAPB1.AccrualTypesService_GetAccrualTypeList() returns many SAPB1.AccrualTypeParams;

action SAPB1.RecurringTransactionService_ExecuteRecurringTransactions(
  RclRecurringTransactionParamsCollection : many SAPB1.RclRecurringTransactionParams,
  RclRecurringExecutionParams : SAPB1.RclRecurringExecutionParams
) returns many SAPB1.RclRecurringTransaction;

action SAPB1.RecurringTransactionService_GetAvailableRecurringTransactions() returns many SAPB1.RclRecurringTransaction;

action SAPB1.RecurringTransactionService_DeleteRecurringTransactions(
  RclRecurringTransactionParamsCollection : many SAPB1.RclRecurringTransactionParams
);

action SAPB1.PurchaseQuotationsService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.MobileAddOnSettingService_GetMobileAddOnSettingList() returns many SAPB1.MobileAddOnSettingParams;

action SAPB1.TransactionCodesService_GetList() returns many SAPB1.TransactionCodeParams;

action SAPB1.BusinessPartnerPropertiesService_GetBusinessPartnerPropertyList() returns many SAPB1.BusinessPartnerPropertyParams;

action SAPB1.ElectronicFileFormatsService_GetElectronicFileFormatList() returns many SAPB1.ElectronicFileFormatParams;

action SAPB1.PaymentTermsTypesService_UpdateWithBPs(
  PaymentTermsType : SAPB1.PaymentTermsTypes
);

action SAPB1.ItemsService_InitData() returns SAPB1.Items;

action SAPB1.SeriesService_GetDefaultElectronicSeries(
  SeriesParams : SAPB1.SeriesParams
) returns SAPB1.ElectronicSeriesParams;

action SAPB1.SeriesService_RemoveElectronicSeries(
  ElectronicSeriesParams : SAPB1.ElectronicSeriesParams
);

action SAPB1.SeriesService_GetElectronicSeries(
  ElectronicSeriesParams : SAPB1.ElectronicSeriesParams
) returns SAPB1.ElectronicSeries;

action SAPB1.SeriesService_GetDocumentChangedMenuName(
  DocumentTypeParams : SAPB1.DocumentTypeParams
) returns SAPB1.DocumentChangeMenuName;

action SAPB1.SeriesService_GetSeries(
  SeriesParams : SAPB1.SeriesParams
) returns SAPB1.Series;

action SAPB1.SeriesService_GetDefaultSeries(
  DocumentTypeParams : SAPB1.DocumentTypeParams
) returns SAPB1.Series;

action SAPB1.SeriesService_UpdateSeries(
  Series : SAPB1.Series
);

action SAPB1.SeriesService_SetDefaultSeriesForCurrentUser(
  DocumentSeriesParams : SAPB1.DocumentSeriesParams
);

action SAPB1.SeriesService_AttachSeriesToDocument(
  DocumentSeriesParams : SAPB1.DocumentSeriesParams
);

action SAPB1.SeriesService_RemoveSeries(
  SeriesParams : SAPB1.SeriesParams
);

action SAPB1.SeriesService_AddSeries(
  Series : SAPB1.Series
) returns SAPB1.SeriesParams;

action SAPB1.InventoryOpeningBalancesService_GetList() returns many SAPB1.InventoryOpeningBalanceParams;

action SAPB1.RouteStagesService_GetList() returns many SAPB1.RouteStageParams;

action SAPB1.ResourceGroupsService_GetList() returns many SAPB1.ResourceGroupParams;

action SAPB1.ResourcePropertiesService_GetList() returns many SAPB1.ResourcePropertyParams;

action SAPB1.ResourcesService_GetList() returns many SAPB1.ResourceParams;

action SAPB1.JournalVouchersService_Add(
  JournalVoucher : many SAPB1.JournalEntries
);

action SAPB1.CheckLinesService_GetValidCheckLineList() returns many SAPB1.CheckLineParams;

action SAPB1.ScheduleJobService_RunJobCallback() returns Integer;

action SAPB1.BOEInstructionsService_GetBOEInstructionList() returns many SAPB1.BOEInstructionParams;

action SAPB1.BOEPortfoliosService_GetBOEPortfolioList() returns many SAPB1.BOEPortfolioParams;

action SAPB1.TaxCodeDeterminationsTCDService_GetTaxCodeDeterminationTCDList() returns many SAPB1.TaxCodeDeterminationTCDParams;

action SAPB1.NFTaxCategoriesService_GetList() returns many SAPB1.NFTaxCategoryParams;

action SAPB1.ExternalReconciliationsService_CancelReconciliation(
  ExternalReconciliationParams : SAPB1.ExternalReconciliationParams
);

action SAPB1.IndiaSacCodeService_GetList() returns many SAPB1.IndiaSacCodeParams;

action SAPB1.ValueMappingService_RemoveMappedValue(
  VM_ThirdPartyValuesData : SAPB1.VM_ThirdPartyValuesData
);

action SAPB1.ValueMappingService_GetThirdPartyValuesForB1Value(
  VM_B1ValuesData : SAPB1.ValueMapping
) returns many SAPB1.VM_ThirdPartyValuesData;

action SAPB1.MobileAppService_GetCurrentServerDateTime() returns SAPB1.MobileServerDateTime;

action SAPB1.MobileAppService_GetDppChangeParams(
  DppChangeParams : SAPB1.DppChangeParams
) returns SAPB1.DppChangeParams;

action SAPB1.SeriesService_SetDefaultElectronicSeries(
  DefaultElectronicSeriesParams : SAPB1.DefaultElectronicSeriesParams
);

action SAPB1.MobileAppService_GetServiceAppReportContent(
  ServiceAppReportParams : SAPB1.ServiceAppReportParams
) returns SAPB1.ServiceAppReportContent;

action SAPB1.MobileAppService_UpdateTechnicianSettingsGroup(
  TechnicianSettingsGroup : SAPB1.TechnicianSettingsGroup
);

action SAPB1.MobileAppService_GetTechnicianSettings(
  TechnicianSettingsParams : SAPB1.TechnicianSettingsParams
) returns SAPB1.TechnicianSettings;

action SAPB1.MobileAppService_GetEmployeeFullNames(
  EmployeeFullNamesParamsCollection : many SAPB1.EmployeeFullNamesParams
) returns many SAPB1.EmployeeFullNamesParams;

action SAPB1.MobileAppService_GetTechnicianSchedulings(
  TechnicianSchedulingsParams : SAPB1.TechnicianSchedulingsParams
) returns many SAPB1.TechnicianSchedulings;

action SAPB1.CampaignResponseTypeService_GetResponseTypeList() returns many SAPB1.CampaignResponseTypeParams;

action SAPB1.CashFlowLineItemsService_GetCashFlowLineItemList() returns many SAPB1.CashFlowLineItemParams;

action SAPB1.BOEDocumentTypesService_GetBOEDocumentTypeList() returns many SAPB1.BOEDocumentTypeParams;

action SAPB1.BankChargesAllocationCodesService_GetBankChargesAllocationCodeList() returns many SAPB1.BankChargesAllocationCodeParams;

action SAPB1.AccountCategoryService_GetCategoryList() returns many SAPB1.AccountCategoryParams;

action SAPB1.BPVatExemptionsService_GetList() returns many SAPB1.BPVatExemptionsParams;

action SAPB1.QRCodeService_AddOrUpdateQRCode(
  QRCodeData : SAPB1.QRCodeData
);

action SAPB1.WebClientRecentActivityService_GetList() returns many SAPB1.WebClientRecentActivityParams;

action SAPB1.WebClientDashboardService_GetList() returns many SAPB1.WebClientDashboardParams;

action SAPB1.WebClientNotificationService_GetList() returns many SAPB1.WebClientNotificationParams;

action SAPB1.IdentificationCodeService_GetList() returns many SAPB1.IdentificationCodes;

action SAPB1.WebClientListviewFilterService_GetList() returns many SAPB1.WebClientListviewFilterParams;

action SAPB1.WebClientBookmarkTileService_GetList() returns many SAPB1.WebClientBookmarkTileParams;

action SAPB1.WebClientLaunchpadService_GetList() returns many SAPB1.WebClientLaunchpadParams;

action SAPB1.ActivityRecipientListsService_GetList() returns many SAPB1.ActivityRecipientListParams;

action SAPB1.ReturnRequestService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ReturnRequestService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.ReturnRequestService_HandleApprovalRequest();

action SAPB1.ProjectManagementConfigurationService_AddTasks(
  PMC_TaskCollection : many SAPB1.PMC_TaskData
);

action SAPB1.ProjectManagementConfigurationService_GetTasks() returns many SAPB1.PMC_TaskData;

action SAPB1.PurchaseQuotationsService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.ProjectManagementConfigurationService_GetActivities() returns many SAPB1.PMC_ActivityData;

action SAPB1.ProjectManagementConfigurationService_DeletePriorities(
  PMC_PriorityCollection : many SAPB1.PMC_PriorityData
);

action SAPB1.ProjectManagementConfigurationService_UpdatePriorities(
  PMC_PriorityCollection : many SAPB1.PMC_PriorityData
);

action SAPB1.EmployeeTransfersService_GetEmployeeTransferList() returns many SAPB1.EmployeeTransferParams;

action SAPB1.ProjectManagementConfigurationService_DeleteAreas(
  PMC_AreaCollection : many SAPB1.PMC_AreaData
);

action SAPB1.ProjectManagementConfigurationService_AddAreas(
  PMC_AreaCollection : many SAPB1.PMC_AreaData
);

action SAPB1.ProjectManagementConfigurationService_UpdateStageTypes(
  PMC_StageTypeCollection : many SAPB1.PMC_StageTypeData
);

action SAPB1.ProjectManagementConfigurationService_AddStageTypes(
  PMC_StageTypeCollection : many SAPB1.PMC_StageTypeData
);

action SAPB1.ProjectManagementConfigurationService_GetStageTypes() returns many SAPB1.PMC_StageTypeData;

action SAPB1.ProjectManagementConfigurationService_DeleteSubprojectTypes(
  PMC_SubprojectTypesCollection : many SAPB1.PMC_SubprojectTypeData
);

action SAPB1.DepositsService_CancelCheckRowbyCurrentSystemDate(
  CancelCheckRowParams : SAPB1.CancelCheckRowParams
);

action SAPB1.ProjectManagementConfigurationService_AddSubprojectTypes(
  PMC_SubprojectTypesCollection : many SAPB1.PMC_SubprojectTypeData
);

action SAPB1.ProjectManagementConfigurationService_GetSubprojectTypes() returns many SAPB1.PMC_SubprojectTypeData;

action SAPB1.ProjectManagementService_AddSubproject(
  PM_SubprojectDocumentData : SAPB1.PM_SubprojectDocumentData
) returns SAPB1.PM_SubprojectDocumentParams;

action SAPB1.ProjectManagementService_GetSubproject(
  PM_SubprojectDocumentParams : SAPB1.PM_SubprojectDocumentParams
) returns SAPB1.PM_SubprojectDocumentData;

action SAPB1.QueryAuthGroupService_GetQueryAuthGroupList() returns many SAPB1.QueryAuthGroups;

action SAPB1.ProjectManagementService_GetSubprojectsList(
  PM_SubprojectParams : SAPB1.PM_SubprojectParams
) returns many SAPB1.PM_SubprojectDocumentParams;

action SAPB1.GoodsReturnRequestService_HandleApprovalRequest();

action SAPB1.ProjectManagementConfigurationService_AddPriorities(
  PMC_PriorityCollection : many SAPB1.PMC_PriorityData
);

action SAPB1.ServiceCallProblemSubTypesService_GetServiceCallProblemSubTypeList() returns many SAPB1.ServiceCallProblemSubTypeParams;

action SAPB1.ExternalReconciliationsService_Reconcile(
  ExternalReconciliation : SAPB1.ExternalReconciliation
);

action SAPB1.MobileAppService_UpdateServiceAppReport(
  ServiceAppReport : SAPB1.ServiceAppReport
);

action SAPB1.ReportLayoutsService_DeleteReportLayoutAndMenu(
  ReportLayoutParams : SAPB1.ReportLayoutParams
);

action SAPB1.ReportLayoutsService_AddReportLayoutToMenu(
  ReportLayout : SAPB1.ReportLayout,
  ReportInputParams : SAPB1.ReportInputParams
) returns SAPB1.ReportLayoutParams;

action SAPB1.ReportLayoutsService_GetReportLayoutList(
  ReportParams : SAPB1.ReportParams
) returns many SAPB1.ReportLayoutParams;

action SAPB1.ReportLayoutsService_GetDefaultReportLayout(
  ReportParams : SAPB1.ReportParams
) returns SAPB1.ReportLayout;

action SAPB1.ReportLayoutsService_UpdatePrinterSettings(
  ReportLayout : SAPB1.ReportLayout
);

action SAPB1.ReportLayoutsService_GetDefaultReport(
  ReportParams : SAPB1.ReportParams
) returns SAPB1.DefaultReportParams;

action SAPB1.SensitiveDataAccessService_IsDataSensitive(
  SensitiveDataAccess : SAPB1.SensitiveDataAccess
) returns SAPB1.DataSensitiveStatus;

action SAPB1.UserGroupService_GetUserGroupList() returns many SAPB1.UserGroupParams;

action SAPB1.QuotationsService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.QuotationsService_HandleApprovalRequest();

action SAPB1.QuotationsService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.SeriesService_GetDocumentSeries(
  DocumentTypeParams : SAPB1.DocumentTypeParams
) returns many SAPB1.Series;

action SAPB1.PurchaseOrdersService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.InventoryGenExitService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ProjectManagementConfigurationService_DeleteStageTypes(
  PMC_StageTypeCollection : many SAPB1.PMC_StageTypeData
);

action SAPB1.ReportLayoutsService_GetReportLayout(
  ReportLayoutParams : SAPB1.ReportLayoutParams
) returns SAPB1.ReportLayout;

action SAPB1.PurchaseOrdersService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.RecurringTransactionService_GetRecurringTransaction(
  RclRecurringTransactionParams : SAPB1.RclRecurringTransactionParams
) returns SAPB1.RclRecurringTransaction;

action SAPB1.SensitiveDataAccessService_Access(
  SensitiveDataAccess : SAPB1.SensitiveDataAccess
) returns SAPB1.SensitiveDataAccess;

action SAPB1.MobileAppService_GetServiceAppReport(
  ServiceAppReportParams : SAPB1.ServiceAppReportParams
) returns SAPB1.ServiceAppReport;

action SAPB1.PurchaseOrdersService_HandleApprovalRequest();

action SAPB1.PurchaseOrdersService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.PurchaseReturnsService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.PurchaseReturnsService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.ActivitySubjectService_GetListByTypeCode(
  ActivitySubject : SAPB1.ActivitySubjects
) returns many SAPB1.ActivitySubjectParams;

action SAPB1.PurchaseReturnsService_HandleApprovalRequest();

action SAPB1.PurchaseReturnsService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.PurchaseDownPaymentsService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.SeriesService_SetDefaultSeriesForAllUsers(
  DocumentSeriesParams : SAPB1.DocumentSeriesParams
);

action SAPB1.ExternalReconciliationsService_GetReconciliation(
  ExternalReconciliationParams : SAPB1.ExternalReconciliationParams
) returns SAPB1.ExternalReconciliation;

action SAPB1.PurchaseDownPaymentsService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.PurchaseDownPaymentsService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.InventoryGenEntryService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.DownPaymentsService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.DownPaymentsService_HandleApprovalRequest();

action SAPB1.DownPaymentsService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.UserMenuService_UpdateUserMenu(
  UserMenuParams : SAPB1.UserMenuParams,
  UserMenuItems : many SAPB1.UserMenuItem
);

action SAPB1.ProjectManagementConfigurationService_DeleteActivities(
  PMC_ActivityCollection : many SAPB1.PMC_ActivityData
);

action SAPB1.UserMenuService_GetUserMenu(
  UserMenuParams : SAPB1.UserMenuParams
) returns many SAPB1.UserMenuItem;

action SAPB1.ProjectManagementConfigurationService_GetPriorities() returns many SAPB1.PMC_PriorityData;

action SAPB1.UserMenuService_UpdateCurrentUserMenu(
  UserMenuItems : many SAPB1.UserMenuItem
);

action SAPB1.TaxCodeDeterminationsService_GetTaxCodeDeterminationList() returns many SAPB1.TaxCodeDeterminationParams;

action SAPB1.ServiceCallStatusService_GetServiceCallStatusList() returns many SAPB1.ServiceCallStatusParams;

action SAPB1.ServiceCallSolutionStatusService_GetServiceCallSolutionStatusList() returns many SAPB1.ServiceCallSolutionStatusParams;

action SAPB1.OccurrenceCodesService_GetList() returns many SAPB1.OccurenceCodeParams;

action SAPB1.ExtendedTranslationsService_GetExtendedTranslationList() returns many SAPB1.ExtendedTranslationParams;

action SAPB1.DeductionTaxSubGroupsService_GetDeductionTaxSubGroupList() returns many SAPB1.DeductionTaxSubGroupParams;

action SAPB1.TargetGroupsService_GetList() returns many SAPB1.TargetGroupParams;

action SAPB1.ElectronicCommunicationActionService_ConfirmSuccessOfCommunication(
  ECMCodeParams : SAPB1.ECMCodeParams
);

action SAPB1.CostCenterTypesService_GetCostCenterTypeList() returns many SAPB1.CostCenterTypeParams;

action SAPB1.EmployeeIDTypeService_GetList() returns many SAPB1.EmployeeIDTypeParams;

action SAPB1.ProjectManagementService_UpdateSubproject(
  PM_SubprojectDocumentData : SAPB1.PM_SubprojectDocumentData
);

action SAPB1.PurchaseInvoicesService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.KPIsService_GetList() returns many SAPB1.KPIParams;

action SAPB1.ChangeLogsService_GetChangeLogDifferences(
  ShowDifferenceParams : SAPB1.ShowDifferenceParams
) returns many SAPB1.ChangeLogDifferenceParams;

action SAPB1.InventoryPostingsService_GetList() returns many SAPB1.InventoryPostingParams;

action SAPB1.PaymentCalculationService_GetPaymentAmount(
  PaymentBPCode : SAPB1.PaymentBPCode,
  PaymentInvoiceEntries : many SAPB1.PaymentInvoiceEntry
) returns many SAPB1.PaymentAmountParams;

action SAPB1.Logout();

action SAPB1.ChangeLogsService_GetChangeLog(
  GetChangeLogParams : SAPB1.GetChangeLogParams
) returns many SAPB1.ChangeLogParams;

action SAPB1.ScheduleJobService_RunTask(
  PermissionID : LargeString
) returns Integer;

action SAPB1.PurchaseInvoicesService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.StatesService_GetStateList() returns many SAPB1.StateParams;

action SAPB1.GoodsReturnRequestService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.InvoicesService_RequestApproveCancellation(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.CorrectionPurchaseInvoiceReversalService_HandleApprovalRequest();

action SAPB1.InvoicesService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.CountriesService_GetCountryList() returns many SAPB1.CountryParams;

action SAPB1.MobileAppService_UpdateSalesAppSetting(
  SalesAppSetting : SAPB1.SalesAppSetting
);

action SAPB1.WebClientVariantService_GetList() returns many SAPB1.WebClientVariantParams;

action SAPB1.CockpitsService_PublishCockpit(
  Cockpit : SAPB1.Cockpits
);

action SAPB1.CorrectionInvoiceService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.ReturnRequestService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ServiceCallTypesService_GetServiceCallTypeList() returns many SAPB1.ServiceCallTypeParams;

action SAPB1.BlanketAgreementsService_GetBlanketAgreementList() returns many SAPB1.BlanketAgreementParams;

action SAPB1.ProjectManagementConfigurationService_UpdateTasks(
  PMC_TaskCollection : many SAPB1.PMC_TaskData
);

action SAPB1.InventoryTransferRequestsService_HandleApprovalRequest();

action SAPB1.EmployeePositionService_GetList() returns many SAPB1.EmployeePositionParams;

action SAPB1.InternalReconciliationsService_GetOpenTransactions(
  InternalReconciliationOpenTransParams : SAPB1.InternalReconciliationOpenTransParams
) returns SAPB1.InternalReconciliationOpenTrans;

action SAPB1.SeriesService_UpdateElectronicSeries(
  ElectronicSeries : SAPB1.ElectronicSeries
);

action SAPB1.DepositsService_CancelCheckRow(
  CancelCheckRowParams : SAPB1.CancelCheckRowParams
);

action SAPB1.CreditNotesService_RequestApproveCancellation(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.BarCodesService_GetList() returns many SAPB1.BarCodeParams;

action SAPB1.DepreciationTypesService_GetList() returns many SAPB1.DepreciationTypeParams;

action SAPB1.LandedCostsService_GetLandedCostList() returns many SAPB1.LandedCostParams;

action SAPB1.CockpitsService_GetCockpitList() returns many SAPB1.CockpitParams;

action SAPB1.ApprovalTemplatesService_GetApprovalTemplateList() returns many SAPB1.ApprovalTemplateParams;

action SAPB1.GLAccountAdvancedRulesService_GetList() returns many SAPB1.GLAccountAdvancedRuleParams;

action SAPB1.PurchaseInvoicesService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.CompanyService_CreatePeriodWithFinanceParams(
  PeriodCategory : SAPB1.PeriodCategory,
  FinancePeriodParams : SAPB1.FinancePeriodParams
) returns SAPB1.PeriodCategoryParams;

action SAPB1.DepartmentsService_GetDepartmentList() returns many SAPB1.DepartmentParams;

action SAPB1.GovPayCodesService_GetList() returns many SAPB1.GovPayCodeParams;

action SAPB1.ElectronicDocumentService_GetMappingByHash(
  EDFMappingInputParams : SAPB1.EDFMappingInputParams
) returns SAPB1.EDFMapping;

action SAPB1.StockTransferDraftService_HandleApprovalRequest();

action SAPB1.ProjectManagementConfigurationService_UpdateAreas(
  PMC_AreaCollection : many SAPB1.PMC_AreaData
);

action SAPB1.ElectronicCommunicationActionsService_DeleteEcmAction(
  EcmAction : SAPB1.EcmAction
);

action SAPB1.ElectronicDocumentService_ExportEntryLog(
  EDFEntryLogInputParams : SAPB1.EDFEntryLogInputParams
);

action SAPB1.ActivitySubjectService_GetActivitySubjectList() returns many SAPB1.ActivitySubjectParams;

action SAPB1.ReportLayoutsService_AddReportLayout(
  ReportLayout : SAPB1.ReportLayout
) returns SAPB1.ReportLayoutParams;

action SAPB1.TaxWebSitesService_GetDefaultWebSite() returns SAPB1.TaxWebSiteParams;

action SAPB1.CostElementService_GetCostElementList() returns many SAPB1.CostElementParams;

action SAPB1.ReportLayoutsService_UpdateLanguageReport(
  ReportLayout : SAPB1.ReportLayout
);

action SAPB1.InventoryTransferRequestsService_GetApprovalTemplates(
  StockTransfer : SAPB1.StockTransfers
) returns SAPB1.StockTransfers;

action SAPB1.EWBTransporterService_GetEWBTransporterList() returns many SAPB1.EWBTransporterParams;

action SAPB1.SeriesService_AddElectronicSeries(
  ElectronicSeries : SAPB1.ElectronicSeries
) returns SAPB1.ElectronicSeriesParams;

action SAPB1.ActivitiesService_GetTopNActivityInstances(
  ActivityInstancesListParams : SAPB1.ActivityInstancesListParams
) returns many SAPB1.ActivityInstanceParams;

action SAPB1.SeriesService_UnattachSeriesFromDocument(
  DocumentSeriesParams : SAPB1.DocumentSeriesParams
);

action SAPB1.UnitOfMeasurementsService_GetList() returns many SAPB1.UnitOfMeasurementParams;

action SAPB1.ReturnsService_HandleApprovalRequest();

action SAPB1.CampaignsService_GetList() returns many SAPB1.CampaignParams;

action SAPB1.DraftsService_SaveDraftToDocument(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.GoodsReturnRequestService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ChangePassword(
  CompanyDB : LargeString,
  UserName : LargeString,
  Password : LargeString,
  NewPassword : LargeString
);

action SAPB1.ElectronicCommunicationActionService_GetAction(
  ECMCodeParams : SAPB1.ECMCodeParams
) returns SAPB1.ECMActionStatusData;

action SAPB1.CompanyService_GetPeriod(
  PeriodCategoryParams : SAPB1.PeriodCategoryParams
) returns SAPB1.PeriodCategory;

action SAPB1.AlternativeItemsService_UpdateItem(
  OriginalItem : SAPB1.OriginalItem
);

action SAPB1.CompanyService_GetPeriods() returns many SAPB1.PeriodCategoryParams;

action SAPB1.StockTransferService_HandleApprovalRequest();

action SAPB1.CompanyService_UpdateCompanyInfo(
  CompanyInfo : SAPB1.CompanyInfo
);

action SAPB1.CompanyService_UpdateAdminInfo(
  AdminInfo : SAPB1.AdminInfo
);

action SAPB1.CreditLinesService_GetValidCreditLineList() returns many SAPB1.CreditLineParams;

action SAPB1.ProjectManagementService_DeleteSubproject(
  PM_SubprojectDocumentParams : SAPB1.PM_SubprojectDocumentParams
);

action SAPB1.CockpitsService_GetTemplateCockpitList() returns many SAPB1.CockpitParams;

action SAPB1.AlternativeItemsService_AddItem(
  OriginalItem : SAPB1.OriginalItem
) returns SAPB1.OriginalItemParams;

action SAPB1.ApprovalRequestsService_GetOpenApprovalRequestList() returns many SAPB1.ApprovalRequestParams;

action SAPB1.WarehouseSublevelCodesService_GetList() returns many SAPB1.WarehouseSublevelCodeParams;

action SAPB1.MobileAppService_GetSalesAppSetting(
  SalesAppSettingParams : SAPB1.SalesAppSettingParams
) returns SAPB1.SalesAppSetting;

action SAPB1.ActivitiesService_InitData() returns SAPB1.Activities;

action SAPB1.PurchaseCreditNotesService_HandleApprovalRequest();

action SAPB1.ResourceCapacitiesService_GetList() returns many SAPB1.ResourceCapacityParams;

action SAPB1.ServiceGroupsService_GetServiceGroupList() returns many SAPB1.ServiceGroupParams;

action SAPB1.CompanyService_GetFinancePeriods(
  PeriodCategoryParams : SAPB1.PeriodCategoryParams
) returns many SAPB1.FinancePeriod;

action SAPB1.BinLocationsService_GetList() returns many SAPB1.BinLocationParams;

action SAPB1.ProjectManagementConfigurationService_GetAreas() returns many SAPB1.PMC_AreaData;

action SAPB1.BinLocationAttributesService_GetList() returns many SAPB1.BinLocationAttributeParams;

action SAPB1.DepreciationTypePoolsService_GetList() returns many SAPB1.DepreciationTypePoolParams;

action SAPB1.CreditNotesService_HandleApprovalRequest();

action SAPB1.BinLocationFieldsService_GetList() returns many SAPB1.BinLocationFieldParams;

action SAPB1.ExternalCallsService_UpdateCall(
  ExternalCall : SAPB1.ExternalCall
);

action SAPB1.ApprovalRequestsService_GetAllApprovalRequestsList() returns many SAPB1.ApprovalRequestParams;

action SAPB1.IntrastatConfigurationService_GetList() returns many SAPB1.IntrastatConfigurationParams;

action SAPB1.InventoryPostingsService_SetCopyOption(
  InventoryPostingCopyOption : SAPB1.InventoryPostingCopyOption
);

action SAPB1.ExternalCallsService_SendCall(
  ExternalCall : SAPB1.ExternalCall
) returns SAPB1.ExternalCallParams;

action SAPB1.CreditNotesService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.RetornoCodesService_GetList() returns many SAPB1.RetornoCodeParams;

action SAPB1.SectionsService_GetSectionList() returns many SAPB1.SectionParams;

action SAPB1.ActivitiesService_UpdateSingleInstanceInSeries(
  Activity : SAPB1.Activities
) returns SAPB1.ActivityParams;

action SAPB1.CertificateSeriesService_GetCertificateSeriesList() returns many SAPB1.CertificateSeriesParams;

action SAPB1.ReturnsService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.AlternativeItemsService_GetItem(
  OriginalItemParams : SAPB1.OriginalItemParams
) returns SAPB1.OriginalItem;

action SAPB1.ApprovalStagesService_GetApprovalStageList() returns many SAPB1.ApprovalStageParams;

action SAPB1.NatureOfAssesseesService_GetNatureOfAssesseeList() returns many SAPB1.NatureOfAssesseeParams;

action SAPB1.PostingTemplatesService_GetList() returns many SAPB1.PostingTemplatesParams;

action SAPB1.DNFCodeSetupService_GetDNFCodeSetupList() returns many SAPB1.DNFCodeSetupParams;

action SAPB1.CreditNotesService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.DepreciationAreasService_GetList() returns many SAPB1.DepreciationAreaParams;

action SAPB1.ProjectManagementConfigurationService_AddActivities(
  PMC_ActivityCollection : many SAPB1.PMC_ActivityData
);

action SAPB1.RecurringPostingsService_GetList() returns many SAPB1.RecurringPostingsParams;

action SAPB1.ReportTypesService_GetReportTypeList() returns many SAPB1.ReportTypeParams;

action SAPB1.CompanyService_CreatePeriod(
  PeriodCategory : SAPB1.PeriodCategory
) returns SAPB1.PeriodCategoryParams;

action SAPB1.AssetTransferService_Cancel(
  AssetDocumentParams : SAPB1.AssetDocumentParams
);

action SAPB1.CompanyService_GetFinancePeriod(
  FinancePeriodParams : SAPB1.FinancePeriodParams
) returns SAPB1.FinancePeriod;

action SAPB1.ElectronicDocumentService_GetLastLog(
  EDFEntryLogInputParams : SAPB1.EDFEntryLogInputParams
) returns SAPB1.EDFEntryLog;

action SAPB1.TaxWebSitesService_GetTaxWebSiteList() returns many SAPB1.TaxWebSiteParams;

action SAPB1.MaterialRevaluationFIFOService_GetMaterialRevaluationFIFO(
  MaterialRevaluationFIFOParams : SAPB1.MaterialRevaluationFIFOParams
) returns SAPB1.MaterialRevaluationFIFO;

action SAPB1.CockpitsService_GetUserCockpitList() returns many SAPB1.CockpitParams;

action SAPB1.CompanyService_UpdateFinancePeriod(
  FinancePeriod : SAPB1.FinancePeriod
);

action SAPB1.DraftsService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.AssetCapitalizationService_Cancel(
  AssetDocumentParams : SAPB1.AssetDocumentParams
);

action SAPB1.PurchaseDownPaymentsService_HandleApprovalRequest();

action SAPB1.TrackingNotesService_GetList() returns many SAPB1.TrackingNoteParams;

action SAPB1.CompanyService_UpdatePathAdmin(
  PathAdmin : SAPB1.PathAdmin
);

action SAPB1.ActivitiesService_GetActivityList() returns many SAPB1.ActivityParams;

action SAPB1.GTIsService_Import(
  GTIParams : SAPB1.GTIParams
) returns many SAPB1.GTIParams;

action SAPB1.BusinessPartnersService_CreateOpenBalance(
  OpenningBalanceAccount : SAPB1.OpenningBalanceAccount,
  BPCodes : many SAPB1.BPCode
);

action SAPB1.ValueMappingService_GetMappedB1Value(
  VM_B1ValuesData : SAPB1.ValueMapping
) returns many SAPB1.ValueMapping;

action SAPB1.AlternativeItemsService_DeleteItem(
  OriginalItemParams : SAPB1.OriginalItemParams
);

action SAPB1.StockTransferService_GetApprovalTemplates(
  StockTransfer : SAPB1.StockTransfers
) returns SAPB1.StockTransfers;

action SAPB1.CompanyService_GetAdvancedGLAccount(
  AdvancedGLAccountParams : SAPB1.AdvancedGLAccountParams
) returns SAPB1.AdvancedGLAccountReturnParams;

action SAPB1.BankStatementsService_GetBankStatementList(
  BankStatementsFilter : SAPB1.BankStatementsFilter
) returns many SAPB1.BankStatementParams;

action SAPB1.FinancialYearsService_GetFinancialYearList() returns many SAPB1.FinancialYearParams;

action SAPB1.DraftsService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.SeriesService_ChangeDocumentMenuName(
  DocumentChangeMenuName : SAPB1.DocumentChangeMenuName
);

action SAPB1.PurchaseDeliveryNotesService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ActivitiesService_GetSingleInstanceFromSeries(
  ActivityInstanceParams : SAPB1.ActivityInstanceParams
) returns SAPB1.Activities;

action SAPB1.MobileAppService_GetTechnicianSettingsGroup(
  TechnicianSettingsGroupParams : SAPB1.TechnicianSettingsGroupParams
) returns SAPB1.TechnicianSettingsGroup;

action SAPB1.ApprovalRequestsService_GetApprovalRequestList() returns many SAPB1.ApprovalRequestParams;

action SAPB1.BusinessPartnersService_InitData() returns SAPB1.BusinessPartners;

action SAPB1.CompanyService_GetFeaturesStatus() returns many SAPB1.FeatureStatus;

action SAPB1.ActivitiesService_DeleteSingleInstanceFromSeries(
  ActivityInstanceParams : SAPB1.ActivityInstanceParams
);

action SAPB1.CorrectionPurchaseInvoiceReversalService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.DimensionsService_GetDimensionList() returns many SAPB1.DimensionParams;

action SAPB1.ActivitiesService_GetListByAttendUser(
  Activity : SAPB1.Activities
) returns many SAPB1.ActivityParams;

action SAPB1.CompanyService_RemoveFinancePeriod(
  FinancePeriodParams : SAPB1.FinancePeriodParams
);

action SAPB1.ResourceCapacitiesService_GetListWithFilter(
  ResourceCapacityWithFilterParams : SAPB1.ResourceCapacityWithFilterParams
) returns many SAPB1.ResourceCapacityParams;

action SAPB1.DeliveryNotesService_HandleApprovalRequest();

action SAPB1.SalesOpportunityReasonsSetupService_GetSalesOpportunityReasonSetupList() returns many SAPB1.SalesOpportunityReasonSetupParams;

action SAPB1.BPOpeningBalanceService_CreateOpenBalance(
  OpenningBalanceAccount : SAPB1.OpenningBalanceAccount,
  BPCodes : many SAPB1.BPCode
);

action SAPB1.DownPaymentsService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.InvoicesService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.RoutingDateCalculationService_Calculate(
  RoutingDateCalculationInput : SAPB1.RoutingDateCalculationInput
) returns SAPB1.RoutingDateCalculationOutput;

action SAPB1.PartnersSetupsService_GetList() returns many SAPB1.PartnersSetupParams;

action SAPB1.PurchaseDeliveryNotesService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.CashDiscountsService_GetCashDiscountList() returns many SAPB1.CashDiscountParams;

action SAPB1.MaterialGroupsService_GetMaterialGroupList() returns many SAPB1.MaterialGroupParams;

action SAPB1.OrdersService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.SalesOpportunityCompetitorsSetupService_GetSalesOpportunityCompetitorSetupList() returns many SAPB1.SalesOpportunityCompetitorSetupParams;

action SAPB1.WebClientPreferenceService_GetList() returns many SAPB1.WebClientPreferenceParams;

action SAPB1.EmailGroupsService_GetList() returns many SAPB1.EmailGroupParams;

action SAPB1.PurchaseCreditNotesService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.Login(
  CompanyDB : LargeString,
  UserName : LargeString,
  Password : LargeString,
  Language : LargeString
) returns SAPB1.B1Sessions;

action SAPB1.GoodsReturnRequestService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.AssetClassesService_GetList() returns many SAPB1.AssetClassParams;

action SAPB1.AssetGroupsService_GetList() returns many SAPB1.AssetGroupParams;

action SAPB1.BranchesService_GetBranchList() returns many SAPB1.BranchParams;

action SAPB1.ElectronicDocumentService_GetEntryList(
  EDFEntryListInputParams : SAPB1.EDFEntryListInputParams
) returns many SAPB1.EDFEntry;

action SAPB1.DeterminationCriteriasService_GetList() returns many SAPB1.DeterminationCriteriaParams;

action SAPB1.AssetCapitalizationCreditMemoService_Cancel(
  AssetDocumentParams : SAPB1.AssetDocumentParams
);

action SAPB1.InventoryGenEntryService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.FiscalPrinterService_GetFiscalPrinterList() returns many SAPB1.FiscalPrinterParams;

action SAPB1.EmployeeStatusService_GetList() returns many SAPB1.EmployeeStatusParams;

action SAPB1.InventoryCountingsService_GetList() returns many SAPB1.InventoryCountingParams;

action SAPB1.CorrectionInvoiceService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.CreditNotesService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ElectronicCommunicationActionService_ReportErrorAndContinue(
  ECMCodeParams : SAPB1.ECMCodeParams
);

action SAPB1.InvoicesService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ElectronicCommunicationActionService_ReportErrorAndStop(
  ECMCodeParams : SAPB1.ECMCodeParams
);

action SAPB1.FixedAssetItemsService_GetAssetValuesList(
  FixedAssetValuesParams : SAPB1.FixedAssetValuesParams
) returns many SAPB1.FixedAssetValues;

action SAPB1.FixedAssetItemsService_GetAssetEndBalance(
  FixedAssetValuesParams : SAPB1.FixedAssetValuesParams
) returns SAPB1.FixedAssetEndBalance;

action SAPB1.DeliveryNotesService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.PurchaseRequestService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.FixedAssetItemsService_UpdateAssetEndBalance(
  FixedAssetValuesParams : SAPB1.FixedAssetValuesParams,
  FixedAssetEndBalance : SAPB1.FixedAssetEndBalance
);

action SAPB1.QuotationsService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.CorrectionInvoiceReversalService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.MobileAppService_UpdateTechnicianSettings(
  TechnicianSettings : SAPB1.TechnicianSettings
);

action SAPB1.AssetManualDepreciationService_Cancel(
  AssetDocumentParams : SAPB1.AssetDocumentParams
);

action SAPB1.MobileAppService_UpdateServiceAppReportContent(
  ServiceAppReportParams : SAPB1.ServiceAppReportParams,
  ServiceAppReportContent : SAPB1.ServiceAppReportContent
);

action SAPB1.DunningTermsService_GetDunningTermList() returns many SAPB1.DunningTermParams;

action SAPB1.AssetManualDepreciationService_GetList() returns many SAPB1.AssetDocumentParams;

action SAPB1.EnhancedDiscountGroupsService_GetList() returns many SAPB1.EnhancedDiscountGroupParams;

action SAPB1.AssetRetirementService_Cancel(
  AssetDocumentParams : SAPB1.AssetDocumentParams
);

action SAPB1.PurchaseCreditNotesService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.EmployeeRolesSetupService_GetEmployeeRoleSetupList() returns many SAPB1.EmployeeRoleSetupParams;

action SAPB1.AssetTransferService_GetList() returns many SAPB1.AssetDocumentParams;

action SAPB1.CycleCountDeterminationsService_GetList() returns many SAPB1.CycleCountDeterminationParams;

action SAPB1.ReportLayoutsService_DeleteReportLayout(
  ReportLayoutParams : SAPB1.ReportLayoutParams
);

action SAPB1.AssetRetirementService_GetList() returns many SAPB1.AssetDocumentParams;

action SAPB1.ProjectManagementConfigurationService_UpdateSubprojectTypes(
  PMC_SubprojectTypesCollection : many SAPB1.PMC_SubprojectTypeData
);

action SAPB1.StockTransferDraftService_GetApprovalTemplates(
  StockTransfer : SAPB1.StockTransfers
) returns SAPB1.StockTransfers;

action SAPB1.PurchaseRequestService_HandleApprovalRequest();

action SAPB1.CorrectionInvoiceService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.AssetDepreciationGroupsService_GetList() returns many SAPB1.AssetDepreciationGroupParams;

action SAPB1.ElectronicDocumentService_GetLogs(
  EDFEntryLogInputParams : SAPB1.EDFEntryLogInputParams
) returns many SAPB1.EDFEntryLog;

action SAPB1.ProfitCentersService_GetProfitCenterList() returns many SAPB1.ProfitCenterParams;

action SAPB1.CompanyService_RoundDecimal(
  DecimalData : SAPB1.DecimalData
) returns SAPB1.RoundedData;

action SAPB1.AttributeGroupsService_GetList() returns many SAPB1.AttributeGroupParams;

action SAPB1.UnitOfMeasurementGroupsService_GetList() returns many SAPB1.UnitOfMeasurementGroupParams;

action SAPB1.IntegrationPackagesConfigureService_GetList() returns many SAPB1.IntegrationPackageParams;

action SAPB1.JournalEntryDocumentTypeService_GetList() returns many SAPB1.JournalEntryDocumentTypeParams;

action SAPB1.FAAccountDeterminationsService_GetList() returns many SAPB1.FAAccountDeterminationParams;

action SAPB1.CorrectionInvoiceReversalService_HandleApprovalRequest();

action SAPB1.MaterialRevaluationSNBService_Add(
  MaterialRevaluationSNBParam : SAPB1.MaterialRevaluationSNBParam
) returns SAPB1.MaterialRevaluationSNBParams;

action SAPB1.DeliveryNotesService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.PurchaseRequestService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.DeliveryNotesService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ServiceTaxPostingService_PostServiceTax(
  ServiceTaxPostingParams : SAPB1.ServiceTaxPostingParams
);

action SAPB1.ServiceTaxPostingService_GetTaxableDeliveries() returns many SAPB1.ServiceTaxPostingParams;

action SAPB1.PickListsService_Close(
  PickList : SAPB1.PickLists
);

action SAPB1.NCMCodesSetupService_GetNCMCodeSetupList() returns many SAPB1.NCMCodeSetupParams;

action SAPB1.PickListsService_UpdateReleasedAllocation(
  PickList : SAPB1.PickLists
);

action SAPB1.SalesOpportunityInterestsSetupService_GetSalesOpportunityInterestSetupList() returns many SAPB1.SalesOpportunityInterestSetupParams;

action SAPB1.AssetCapitalizationService_GetList() returns many SAPB1.AssetDocumentParams;

action SAPB1.PaymentBlocksService_GetPaymentBlockList() returns many SAPB1.PaymentBlockParams;

action SAPB1.ExternalCallsService_GetCall(
  ExternalCallParams : SAPB1.ExternalCallParams
) returns SAPB1.ExternalCall;

action SAPB1.ReportFilterService_GetTaxReportFilterList(
  TaxReportFilterParams : SAPB1.TaxReportFilterParams
) returns many SAPB1.TaxReportFilterParams;

action SAPB1.CheckLinesService_GetCheckLine(
  CheckLineParams : SAPB1.CheckLineParams
) returns SAPB1.CheckLine;

action SAPB1.ReturnsService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.ProjectManagementConfigurationService_UpdateActivities(
  PMC_ActivityCollection : many SAPB1.PMC_ActivityData
);

action SAPB1.ReturnsService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.DraftsService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.OrdersService_HandleApprovalRequest();

action SAPB1.BrazilBeverageIndexersService_GetList() returns many SAPB1.BrazilBeverageIndexerParams;

action SAPB1.SeriesService_SetDefaultSeriesForUser(
  DocumentSeriesUserParams : SAPB1.DocumentSeriesUserParams
);

action SAPB1.WebClientFormSettingService_GetList() returns many SAPB1.WebClientFormSettingParams;

action SAPB1.PurchaseRequestService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.WorkflowTaskService_Complete(
  WorkflowTaskCompleteParams : SAPB1.WorkflowTaskCompleteParams
);

action SAPB1.WorkflowTaskService_GetApprovalTaskList(
  WorkflowApprovalTaskListParams : SAPB1.WorkflowApprovalTaskListParams
) returns many SAPB1.WorkflowTask;

action SAPB1.PredefinedTextsService_GetPredefinedTextList() returns many SAPB1.PredefinedTextParams;

action SAPB1.CorrectionPurchaseInvoiceService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.CorrectionPurchaseInvoiceService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.DraftsService_HandleApprovalRequest();

action SAPB1.CompanyService_UpdatePeriod(
  PeriodCategory : SAPB1.PeriodCategory
);

action SAPB1.MaterialRevaluationSNBService_GetList(
  MaterialRevaluationSNBParam : SAPB1.MaterialRevaluationSNBParam
) returns many SAPB1.MaterialRevaluationSNBParams;

action SAPB1.DashboardPackagesService_ImportDashboardPackage(
  DashboardPackageImportParams : SAPB1.DashboardPackageImportParams
) returns SAPB1.DashboardPackageParams;

action SAPB1.CorrectionPurchaseInvoiceService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.CorrectionPurchaseInvoiceReversalService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ProjectManagementConfigurationService_DeleteTasks(
  PMC_TaskCollection : many SAPB1.PMC_TaskData
);

action SAPB1.SalesOpportunitySourcesSetupService_GetSalesOpportunitySourceSetupList() returns many SAPB1.SalesOpportunitySourceSetupParams;

action SAPB1.CorrectionPurchaseInvoiceReversalService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ExternalReconciliationsService_GetReconciliationList(
  ExternalReconciliationFilterParams : SAPB1.ExternalReconciliationFilterParams
) returns many SAPB1.ExternalReconciliationParams;

action SAPB1.WebClientVariantGroupService_GetList() returns many SAPB1.WebClientVariantGroupParams;

action SAPB1.CorrectionInvoiceService_HandleApprovalRequest();

action SAPB1.ElectronicCommunicationActionService_UpdateAction(
  ECMActionStatusData : SAPB1.ECMActionStatusData
);

action SAPB1.CorrectionInvoiceReversalService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ServiceCallProblemTypesService_GetServiceCallProblemTypeList() returns many SAPB1.ServiceCallProblemTypeParams;

action SAPB1.OrdersService_Preview(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.PurchaseDeliveryNotesService_HandleApprovalRequest();

action SAPB1.CompanyService_GetItemPrice(
  ItemPriceParams : SAPB1.ItemPriceParams
) returns SAPB1.ItemPriceReturnParams;

action SAPB1.OrdersService_ExportEWayBill(
  Document : SAPB1.PurchaseDeliveryNotes
);

action SAPB1.InvoicesService_HandleApprovalRequest();

action SAPB1.ElectronicCommunicationActionsService_GetEcmAction(
  EcmActionParams : SAPB1.EcmActionParams
) returns SAPB1.EcmAction;

action SAPB1.ElectronicCommunicationActionsService_AddEcmAction(
  EcmAction : SAPB1.EcmAction
) returns SAPB1.EcmAction;

action SAPB1.DepositsService_GetDepositList() returns many SAPB1.DepositParams;

action SAPB1.TerminationReasonService_GetList() returns many SAPB1.TerminationReasonParams;

action SAPB1.CorrectionPurchaseInvoiceService_HandleApprovalRequest();

action SAPB1.PurchaseInvoicesService_HandleApprovalRequest();

action SAPB1.PurchaseQuotationsService_HandleApprovalRequest();

action SAPB1.ReportLayoutsService_SetDefaultReport(
  DefaultReportParams : SAPB1.DefaultReportParams
);

action SAPB1.ElectronicCommunicationActionsService_UpdateEcmAction(
  EcmAction : SAPB1.EcmAction
);

action SAPB1.ElectronicCommunicationActionsService_GetEcmActionByDoc(
  EcmActionDocParams : SAPB1.EcmActionDocParams
) returns SAPB1.EcmAction;

action SAPB1.PurchaseQuotationsService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ElectronicCommunicationActionsService_GetEcmActionLog(
  EcmActionLogParams : SAPB1.EcmActionLogParams
) returns SAPB1.EcmActionLog;

action SAPB1.ElectronicCommunicationActionsService_AddEcmActionLog(
  EcmActionLog : SAPB1.EcmActionLog
) returns SAPB1.EcmActionLog;

action SAPB1.ElectronicDocumentService_GetEntry(
  EDFEntryInputParams : SAPB1.EDFEntryInputParams
) returns SAPB1.EDFEntry;

action SAPB1.ElectronicDocumentService_UpdateEntry(
  EDFEntry : SAPB1.EDFEntry
);

action SAPB1.ElectronicDocumentService_AddLog(
  EDFEntryAddLogInputParams : SAPB1.EDFEntryAddLogInputParams
);

action SAPB1.OrdersService_InitData() returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.BOELinesService_GetBOELine(
  BOELineParams : SAPB1.BOELineParams
) returns SAPB1.BOELine;

action SAPB1.PurchaseCreditNotesService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.AccountsService_CreateOpenBalance(
  OpenningBalanceAccount : SAPB1.OpenningBalanceAccount,
  GLAccounts : many SAPB1.GLAccount
);

action SAPB1.AssetCapitalizationCreditMemoService_GetList() returns many SAPB1.AssetDocumentParams;

action SAPB1.ElectronicCommunicationActionsService_GetEcmActionLogList(
  EcmAction : SAPB1.EcmAction
) returns many SAPB1.EcmActionLog;

action SAPB1.InventoryGenEntryService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.ServiceCallOriginsService_GetServiceCallOriginList() returns many SAPB1.ServiceCallOriginParams;

action SAPB1.CorrectionInvoiceReversalService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

action SAPB1.PurchaseDeliveryNotesService_GetApprovalTemplates(
  Document : SAPB1.PurchaseDeliveryNotes
) returns SAPB1.PurchaseDeliveryNotes;

@cds.persistence.skip : true
entity SAPB1.U_VERTRIEB_PLANUNG {
  key Code : LargeString;
  Name : LargeString;
  U_Jahr : Integer;
  U_TerritryID : Integer;
  U_Verteilschluessel : Integer;
  U_planwert : Integer;
  U_Plan1Prozent : Integer;
  U_Plan2Prozent : Integer;
  U_Plan3Prozent : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_CTO_CFG {
  key Code : LargeString;
  Name : LargeString;
  U_Section : LargeString;
  U_Key : LargeString;
  U_Value : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BS_BESTELLMONITOR {
  key Code : LargeString;
  Name : LargeString;
  U_WhsCode : LargeString;
  U_ZDIFFGELB : Integer;
  U_ZDIFFROT : Integer;
  U_ZDIFFSCHWARZ : Integer;
  U_UHRZEITVORGABE : Time;
  U_ZDIFFINFOSERVICE : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BS_AUFTRAGSMONITOR {
  key Code : LargeString;
  Name : LargeString;
  U_Lieferart_ID : Integer;
  U_ZDIFFGELB : Integer;
  U_ZDIFFROT : Integer;
  U_ZDIFFSCHWARZ : Integer;
  U_ASGRENZEGELB : Integer;
  U_ASGRENZEROT : Integer;
  U_ASGRENZESCHWARZ : Integer;
  U_UHRZEITVORGABE : Time;
  U_ZDIFFINFOSERVICE : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BPRSTRT {
  key Code : LargeString;
  Name : LargeString;
  U_BPLOGIN : LargeString;
  U_BPDATE : LargeString;
  U_BPRSTRT : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BOWORD {
  key Code : LargeString;
  Name : LargeString;
  U_FollowUp : LargeString;
  U_Activity : Integer;
  U_FlwTime : Integer;
  U_FlwUnit : Integer;
  U_FlwDur : Integer;
  U_FlwDurUn : Integer;
  U_Reminder : LargeString;
  U_RemTime : Integer;
  U_RemUnit : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BOSYNCLOG {
  key Code : LargeString;
  Name : LargeString;
  U_UserID : LargeString;
  U_Start : LargeString;
  U_End : LargeString;
  U_Status : Integer;
  U_SyncCa : LargeString;
  U_SyncCo : LargeString;
  U_SyncTa : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BOSTP1 {
  key Code : LargeString;
  Name : LargeString;
  U_Sequence : Integer;
  U_TplCode : LargeString;
  U_QueryID : Integer;
  U_NumRec : Integer;
  U_ReadLast : LargeString;
  U_RgData : LargeString;
  U_QCatID : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BOQUOT {
  key Code : LargeString;
  Name : LargeString;
  U_MyQ : Integer;
  U_Status : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_FromD : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ToD : DateTime;
  U_LastDs : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BOOSTP {
  key Code : LargeString;
  Name : LargeString;
  U_TplName : LargeString;
  U_Language : Integer;
  U_CPData : LargeString;
  U_CatID : Integer;
  U_LFileXls : LargeString;
  U_LFileTxt : LargeString;
  U_CrtUser : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CrtTime : DateTime;
  U_ChgUser : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ChgTime : DateTime;
  U_Default : LargeString;
  U_Version : LargeString;
  U_Host : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BOEXCEL {
  key Code : LargeString;
  Name : LargeString;
  U_FollowUp : LargeString;
  U_Activity : Integer;
  U_FlwTime : Integer;
  U_FlwUnit : Integer;
  U_FlwDur : Integer;
  U_FlwDurUn : Integer;
  U_Reminder : LargeString;
  U_RemTime : Integer;
  U_RemUnit : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BOEMAIL {
  key Code : LargeString;
  Name : LargeString;
  U_FollowUp : LargeString;
  U_Activity : Integer;
  U_FlwTime : Integer;
  U_FlwUnit : Integer;
  U_FlwDur : Integer;
  U_FlwDurUn : Integer;
  U_Reminder : LargeString;
  U_RemTime : Integer;
  U_RemUnit : Integer;
  U_SaveMsg : LargeString;
  U_AttMode : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BNOINT2 {
  key Code : LargeString;
  Name : LargeString;
  U_HeaderID : Integer;
  U_ItemID : Integer;
  U_RowStat : LargeString;
  U_DocNum : LargeString;
  U_LineNum : LargeString;
  U_RecType : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DocDDate : DateTime;
  U_BpCntry : LargeString;
  U_DstState : LargeString;
  U_Incoterm : LargeString;
  U_TAType : LargeString;
  U_TrnMode : LargeString;
  U_Port : LargeString;
  U_CommCode : LargeString;
  U_OriCntry : LargeString;
  U_OriState : LargeString;
  U_CustProc : LargeString;
  U_TaxCdExt : LargeString;
  U_NetMasSg : LargeString;
  U_NetMass : Double;
  U_NetMasUn : LargeString;
  U_SupMasSg : LargeString;
  U_SupMass : Double;
  U_SupMasUn : LargeString;
  U_ValueSg : LargeString;
  U_Value : Double;
  U_ValueFC : Double;
  U_FrgnCurr : LargeString;
  U_BrdValSg : LargeString;
  U_BrdValue : Double;
  U_DomFrgId : LargeString;
  U_ReturnId : LargeString;
  U_CorrMon : Integer;
  U_CorrYear : Integer;
  U_CorrSign : LargeString;
  U_CorrDoc : LargeString;
  U_CorrItem : LargeString;
  U_CorrType : LargeString;
  U_VATRegNB : LargeString;
  U_Changed : LargeString;
  U_ChgID : LargeString;
  U_ChgUser : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ChgTime : DateTime;
  U_Deleted : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCPRT {
  key Code : LargeString;
  Name : LargeString;
  U_Export : LargeString;
  U_Import : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCCRY {
  key Code : LargeString;
  Name : LargeString;
  U_NumCode : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCCOM {
  key Code : LargeString;
  Name : LargeString;
  U_SuppUnit : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCADM {
  key Code : LargeString;
  Name : LargeString;
  U_VATRegNo : LargeString;
  U_VATRegEx : LargeString;
  U_ObligLvl : LargeString;
  U_TaxState : LargeString;
  U_ComDecID : LargeString;
  U_DeclDel : LargeString;
  U_DeclInv : LargeString;
  U_DeclDept : Integer;
  U_ContName : LargeString;
  U_ContFon : LargeString;
  U_ContFax : LargeString;
  U_ValidKey : LargeString;
  U_DNSCE : LargeString;
  U_RetAccnt : LargeString;
  U_ForceCmp : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BFUSERFORMS {
  key Code : LargeString;
  Name : LargeString;
  U_FormType : LargeString;
  U_User : LargeString;
  U_Top : Integer;
  U_Left : Integer;
  U_Height : Integer;
  U_Width : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BFEXTDBVERSION {
  key Code : LargeString;
  Name : LargeString;
  U_ExtID : LargeString;
  U_Version : LargeString;
  U_Status : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_Rdate : DateTime;
  U_EFNum : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BEOLIC {
  key Code : LargeString;
  Name : LargeString;
  U_BEUSER : LargeString;
  U_BEDATE : LargeString;
  U_BESTAT : LargeString;
  U_BETESM : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BD_SREP {
  key Code : LargeString;
  Name : LargeString;
  U_Turnov : Double;
  U_BookKey : LargeString;
  U_Account : LargeString;
  U_AccBal : LargeString;
  U_Nr1 : LargeString;
  U_Nr2 : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_Dt : DateTime;
  U_Txt : LargeString;
  U_VATID : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BD_SERR {
  key Code : LargeString;
  Name : LargeString;
  U_LineNum : Integer;
  U_Field : LargeString;
  U_Value : LargeString;
  U_Err : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BD_CTAX {
  key Code : LargeString;
  Name : LargeString;
  U_TCode : LargeString;
  U_DTCode : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BD_CSET {
  key Code : LargeString;
  Name : LargeString;
  U_Name : LargeString;
  U_Desc : LargeString;
  U_Val : LargeString;
  U_Typ : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BBTEXT {
  key Code : LargeString;
  Name : LargeString;
  U_BC_Code : LargeString;
  U_Languag : Integer;
  U_Descr : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BBSBCS {
  key Code : LargeString;
  Name : LargeString;
  U_BC_Code : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CrtDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ModDate : DateTime;
  U_User_ : Integer;
  U_MinRels : Integer;
  U_MaxRels : Integer;
  U_CodeATV : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BBOATV {
  key Code : LargeString;
  Name : LargeString;
  U_CodeATV : Integer;
  U_Languag : Integer;
  U_Name : LargeString;
  U_Level_ : Integer;
  U_Enable : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BOOADM {
  key Code : LargeString;
  Name : LargeString;
  U_LFPath : LargeString;
  U_CrtUser : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CrtTime : DateTime;
  U_ChgUser : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ChgTime : DateTime;
  U_LFSPath : LargeString;
  U_Version : LargeString;
  U_Host : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BBLOGM {
  key Code : LargeString;
  Name : LargeString;
  U_LogID : Integer;
  U_LineNum : Integer;
  U_MsgTxt : LargeString;
  U_MsgType : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BBLOG {
  key Code : LargeString;
  Name : LargeString;
  U_LogID : Integer;
  U_BC_Code : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CrtDate : DateTime;
  U_User_ : Integer;
  U_Languag : Integer;
  U_BCSType : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BBHBCS {
  key Code : LargeString;
  Name : LargeString;
  U_Code : LargeString;
  U_BC_Code : LargeString;
  U_SortNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CrtDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ModDate : DateTime;
  U_User_ : Integer;
  U_MinRels : Integer;
  U_MaxRels : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BBATV2 {
  key Code : LargeString;
  Name : LargeString;
  U_CodeATV : Integer;
  U_TblName : LargeString;
  U_Languag : Integer;
  U_FldName : LargeString;
  U_Descr : LargeString;
  U_FldType : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BBATV1 {
  key Code : LargeString;
  Name : LargeString;
  U_CodeATV : Integer;
  U_TblName : LargeString;
  U_Languag : Integer;
  U_Descr : LargeString;
  U_AllFlds : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BBVALS {
  key Code : LargeString;
  Name : LargeString;
  U_BC_Code : LargeString;
  U_Languag : Integer;
  U_TblName : LargeString;
  U_FldName : LargeString;
  U_RecID : Integer;
  U_Value_ : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_STRN {
  key Code : LargeString;
  Name : LargeString;
  U_TrnsID : LargeString;
  U_TrnsName : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_SSTA1 {
  key Code : LargeString;
  Name : LargeString;
  U_StatusID : Integer;
  U_Lang : LargeString;
  U_Name : LargeString;
  U_Desc : LargeString;
  U_Country : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCTRN {
  key Code : LargeString;
  Name : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_SSTA {
  key Code : LargeString;
  Name : LargeString;
  U_StatusID : Integer;
  U_DefName : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_SMOD {
  key Code : LargeString;
  Name : LargeString;
  U_SysInit : Integer;
  U_SysMode : Integer;
  U_DeprCalc : LargeString;
  U_ThresVal : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_OOCR {
  key Code : LargeString;
  Name : LargeString;
  U_AsstNum : LargeString;
  U_PosNum : Integer;
  U_OCRCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_FrmDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ToDate : DateTime;
};

@cds.persistence.skip : true
entity SAPB1.U_BLD_BLOB {
  key Code : LargeString;
  Name : LargeString;
  U_LaytID : Integer;
  U_ConIdx : Integer;
  U_FileType : LargeString;
  U_FileCont : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODRN3 {
  key Code : LargeString;
  Name : LargeString;
  U_RunID : Integer;
  U_AcctDetn : Integer;
  U_AsstNum : LargeString;
  U_DprArID : Integer;
  U_AcOrdDp : LargeString;
  U_AcBalanc : LargeString;
  U_Debit : Double;
  U_Credit : Double;
  U_AcSpeDp : LargeString;
  U_AcSpeBal : LargeString;
  U_DebiSpDp : Double;
  U_CredSpDp : Double;
};

@cds.persistence.skip : true
entity SAPB1.U_BNOINT {
  key Code : LargeString;
  Name : LargeString;
  U_DeclYear : Integer;
  U_DeclMon : Integer;
  U_ImExInd : LargeString;
  U_Country : LargeString;
  U_VATRegNo : LargeString;
  U_VATRegEx : LargeString;
  U_DeclNum : LargeString;
  U_DecNoEx : Integer;
  U_HeaderID : Integer;
  U_CompName : LargeString;
  U_CompAddr : LargeString;
  U_CompInd : LargeString;
  U_DeclStat : LargeString;
  U_DeclDept : Integer;
  U_MainCurr : LargeString;
  U_ObligLvl : LargeString;
  U_TaxState : LargeString;
  U_CustOffc : LargeString;
  U_CustID : LargeString;
  U_CustSer : LargeString;
  U_ComDecID : LargeString;
  U_ICtrlRef : LargeString;
  U_ContName : LargeString;
  U_ContFon : LargeString;
  U_ContFax : LargeString;
  U_Addr1_3p : LargeString;
  U_Addr2_3p : LargeString;
  U_Addr3_3p : LargeString;
  U_Addr4_3p : LargeString;
  U_Cont_3p : LargeString;
  U_Fon_3p : LargeString;
  U_Fax_3p : LargeString;
  U_FreeTxt1 : LargeString;
  U_FreeTxt2 : LargeString;
  U_FreeTxt3 : LargeString;
  U_FreeTxt4 : LargeString;
  U_FreeTxt5 : LargeString;
  U_ValidKey : LargeString;
  U_DNSCE : LargeString;
  U_Release : LargeString;
  U_CrtUser : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CrtTime : DateTime;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODRN2 {
  key Code : LargeString;
  Name : LargeString;
  U_RunID : Integer;
  U_AcctDetn : Integer;
  U_GLDocNum : LargeString;
  U_DprArID : Integer;
  U_AcOrdDp : LargeString;
  U_AcBalanc : LargeString;
  U_Debit : Double;
  U_Credit : Double;
  U_AcSpeDp : LargeString;
  U_AcSpeBal : LargeString;
  U_DebiSpDp : Double;
  U_CredSpDp : Double;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODPVN {
  key Code : LargeString;
  Name : LargeString;
  U_AsstNum : LargeString;
  U_DprArID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_RefFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_RefTo : DateTime;
  U_FisYear : LargeString;
  U_PrftCntr : LargeString;
  U_Project : LargeString;
  U_OrDpPlan : Double;
  U_SpDpKey : LargeString;
  U_SpDpPlan : Double;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODPV {
  key Code : LargeString;
  Name : LargeString;
  U_AsstNum : LargeString;
  U_FisYear : LargeString;
  U_DprArID : Integer;
  U_Period : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DateTo : DateTime;
  U_OrDpPlan : Double;
  U_OrDpAct : Double;
  U_SpDpPlan : Double;
  U_SpDpAct : Double;
  U_SpDpKey : LargeString;
  U_PrftCntr : LargeString;
  U_Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DateFrom : DateTime;
  U_OrDpArd : Double;
  U_SpDpArd : Double;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODOC3 {
  key Code : LargeString;
  Name : LargeString;
  U_DocNum : LargeString;
  U_PosNum : Integer;
  U_DprArID : Integer;
  U_Canceled : LargeString;
  U_Account : LargeString;
  U_FisYear : LargeString;
  U_PostPrd : Integer;
  U_TrnsID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_PostDate : DateTime;
  U_APC : Double;
  U_OrDp : Double;
  U_UnDp : Double;
  U_SpDpKey : LargeString;
  U_SpDp : Double;
  U_SalesRev : Double;
  U_RetirExp : Double;
  U_RetirRev : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_RetirDat : DateTime;
  U_TrnfAsst : LargeString;
  U_DprTypID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DprDate : DateTime;
  U_UseLife : Integer;
  U_RemLife : Integer;
  U_Qty : Double;
  U_SalvageV : Double;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODOC {
  key Code : LargeString;
  Name : LargeString;
  U_DocNum : LargeString;
  U_FisYear : LargeString;
  U_TrnsID : LargeString;
  U_Canceled : LargeString;
  U_GLDocNum : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_PostDate : DateTime;
  U_PostPrd : Integer;
  U_PostDesc : LargeString;
  U_DocType : LargeString;
  U_Code : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CreaDate : DateTime;
  U_CreaTime : Time;
  U_CreaUser : LargeString;
  U_DprTypID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_GLPostDt : DateTime;
  U_Ref : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_OAMD3 {
  key Code : LargeString;
  Name : LargeString;
  U_AsstNum : LargeString;
  U_FisYear : LargeString;
  U_DprArID : Integer;
  U_APC : Double;
  U_APCHist : Double;
  U_APCAlt : Double;
  U_OrDpAcc : Double;
  U_UnDpAcc : Double;
  U_SpDpKey1 : LargeString;
  U_SpDpAcc1 : Double;
  U_SpDpKey2 : LargeString;
  U_SpDpAcc2 : Double;
  U_SpDpKey3 : LargeString;
  U_SpDpAcc3 : Double;
  U_Qty : Double;
  U_SalvageV : Double;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_OAMD2 {
  key Code : LargeString;
  Name : LargeString;
  U_AsstNum : LargeString;
  U_FisYear : LargeString;
  U_DprArID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DprDate : DateTime;
  U_UseLife : Integer;
  U_RemLife : Integer;
  U_DprTypID : LargeString;
  U_DprTypCa : LargeString;
  U_UseLifeC : Integer;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_OAMD {
  key Code : LargeString;
  Name : LargeString;
  U_AsstNum : LargeString;
  U_ItemCode : LargeString;
  U_StatusID : Integer;
  U_InvNum : LargeString;
  U_Desc : LargeString;
  U_DescS : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CapDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_AcqDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_RetDate : DateTime;
  U_VendCode : LargeString;
  U_VendDesc : LargeString;
  U_SerNum : LargeString;
  U_User01 : LargeString;
  U_User02 : LargeString;
  U_User03 : Double;
  U_User04 : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DxDate : DateTime;
  U_DxFsYear : LargeString;
  U_DxPeriod : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CreaDate : DateTime;
  U_CreaTime : Time;
  U_CreaUser : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_UpdtDate : DateTime;
  U_UpdtTime : Time;
  U_UpdtUser : LargeString;
  U_ToBeDeact : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CUDF1 {
  key Code : LargeString;
  Name : LargeString;
  U_ItemCode : LargeString;
  U_FieldID : LargeString;
  U_Lang : LargeString;
  U_Desc : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CPOL1 {
  key Code : LargeString;
  Name : LargeString;
  U_DeprTpID : LargeString;
  U_Lang : LargeString;
  U_Country : LargeString;
  U_Desc : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CPOL {
  key Code : LargeString;
  Name : LargeString;
  U_DeprTpID : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CNUM {
  key Code : LargeString;
  Name : LargeString;
  U_Key : Integer;
  U_ID : Integer;
  U_Name : LargeString;
  U_First : Integer;
  U_Last : Integer;
  U_Next : Integer;
  U_Prefix : LargeString;
  U_Suffix : LargeString;
  U_ReadOnly : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CMDIM {
  key Code : LargeString;
  Name : LargeString;
  U_ImpID : Integer;
  U_Status : Integer;
  U_NumProc : Integer;
  U_NumSave : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ImpDate : DateTime;
  U_ImpTime : Time;
  U_ImpUser : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CDTN {
  key Code : LargeString;
  Name : LargeString;
  U_AcctDetn : Integer;
  U_Desc : LargeString;
  U_AcBalanc : LargeString;
  U_AcClrAcq : LargeString;
  U_AcOrd : LargeString;
  U_AcOrdAcc : LargeString;
  U_AcUnp : LargeString;
  U_AcUnpAcc : LargeString;
  U_AcSaRevN : LargeString;
  U_AcReExpN : LargeString;
  U_AcReRevN : LargeString;
  U_AcSaRevG : LargeString;
  U_AcReExpG : LargeString;
  U_AcReRevG : LargeString;
  U_AcReNBVe : LargeString;
  U_AcReNBVr : LargeString;
  U_AcClrDsc : LargeString;
  U_AcSp : LargeString;
  U_AcSpAcc : LargeString;
  U_AcRevRe : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CDPT1 {
  key Code : LargeString;
  Name : LargeString;
  U_DprTypID : LargeString;
  U_Lang : LargeString;
  U_Desc : LargeString;
  U_Country : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CDPA1 {
  key Code : LargeString;
  Name : LargeString;
  U_DprArID : Integer;
  U_Lang : LargeString;
  U_Desc : LargeString;
  U_Country : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCNTA {
  key Code : LargeString;
  Name : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CCLSDPA {
  key Code : LargeString;
  Name : LargeString;
  U_ItemCode : LargeString;
  U_DprArID : Integer;
  U_Active : LargeString;
  U_AcctDetn : Integer;
  U_DprTypID : LargeString;
  U_UseLife : Integer;
};

@cds.persistence.skip : true
entity SAPB1.Masterartikel {
  key Code : LargeString;
  Name : LargeString;
  DocEntry : Integer;
  Canceled : LargeString;
  Object : LargeString;
  LogInst : Integer;
  UserSign : Integer;
  Transfered : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  DataSource : LargeString;
  U_ItemCode : LargeString;
} actions {
  action Cancel();
};

@cds.persistence.skip : true
entity SAPB1.Kalkulation {
  key Code : LargeString;
  Name : LargeString;
  DocEntry : Integer;
  Canceled : LargeString;
  Object : LargeString;
  LogInst : Integer;
  UserSign : Integer;
  Transfered : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  DataSource : LargeString;
  U_Artikelgruppe : LargeString;
  U_Warengruppe : LargeString;
  U_Beschreibung : LargeString;
  U_L1 : LargeString;
  U_L2 : LargeString;
  U_L3 : LargeString;
  U_L4 : LargeString;
  U_L5 : LargeString;
  U_S1 : LargeString;
  U_S2 : LargeString;
  U_S3 : LargeString;
  U_S4 : LargeString;
  U_S5 : LargeString;
  U_A1 : LargeString;
  U_A2 : LargeString;
  U_A3 : LargeString;
  U_A4 : LargeString;
  U_A5 : LargeString;
  U_I1 : LargeString;
  U_I2 : LargeString;
  U_I3 : LargeString;
  U_I4 : LargeString;
  U_I5 : LargeString;
} actions {
  action Cancel();
};

@cds.persistence.skip : true
entity SAPB1.UserPermissionTree {
  UserSignature : Integer;
  DisplayOrder : Integer;
  key PermissionID : LargeString;
  Options : Integer;
  Name : LargeString;
  Levels : Integer;
  IsItem : Integer;
  ParentID : LargeString;
  UserPermissionForms : many SAPB1.UserPermissionForm;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
};

@cds.persistence.skip : true
entity SAPB1.FinancialYears {
  key AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  AssessYear : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.Contacts {
  CardCode : LargeString;
  Notes : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ContactDate : DateTime;
  ContactTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Recontact : DateTime;
  Closed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CloseDate : DateTime;
  Phone : LargeString;
  Fax : LargeString;
  Subject : Integer;
  DocType : LargeString;
  DocNum : LargeString;
  DocEntry : LargeString;
  key ContactCode : Integer;
  Priority : Integer;
  Details : LargeString;
  Activity : Integer;
  ActivityType : Integer;
  Location : Integer;
  StartTime : Time;
  EndTime : Time;
  Duration : Double;
  DurationType : Integer;
  SalesEmployee : Integer;
  ContactPersonCode : Integer;
  HandledBy : Integer;
  Reminder : Integer;
  ReminderPeriod : Double;
  ReminderType : Integer;
  City : LargeString;
  Personalflag : Integer;
  Street : LargeString;
  ParentobjectId : Integer;
  Parentobjecttype : LargeString;
  Room : LargeString;
  Inactiveflag : Integer;
  State : LargeString;
  PreviousActivity : Integer;
  Country : LargeString;
  Status : Integer;
  Tentativeflag : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDuedate : DateTime;
  DocTypeEx : LargeString;
  AttachmentEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  ActivitySubject : Association to one SAPB1.ActivitySubjects on ActivitySubject.Code = Subject;
  @cds.ambiguous : 'missing on condition?'
  ActivityType2 : Association to one SAPB1.ActivityTypes on ActivityType2.Code = ActivityType;
  @cds.ambiguous : 'missing on condition?'
  ActivityLocation : Association to one SAPB1.ActivityLocations on ActivityLocation.Code = Location;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesEmployee;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = HandledBy;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  ActivityStatus : Association to one SAPB1.ActivityStatuses on ActivityStatus.StatusId = Status;
};

@cds.persistence.skip : true
entity SAPB1.PackagesTypes {
  Type : LargeString;
  key Code : Integer;
  Length1 : Double;
  Length1Unit : Integer;
  Length2 : Double;
  Length2Unit : Integer;
  Width1 : Double;
  Width1Unit : Integer;
  Width2 : Double;
  Width2Unit : Integer;
  Height1 : Double;
  Height1Unit : Integer;
  Height2 : Double;
  Height2Unit : Integer;
  Volume : Double;
  VolumeUnit : Integer;
  Weight1 : Double;
  Weight1Unit : Integer;
  Weight2 : Double;
  Weight2Unit : Integer;
};

@cds.persistence.skip : true
entity SAPB1.CycleCountDeterminations {
  key WarehouseCode : LargeString;
  CycleBy : Integer;
  CycleCountDeterminationSetupCollection : many SAPB1.CycleCountDeterminationSetup;
};

@cds.persistence.skip : true
entity SAPB1.SalesForecast {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ForecastStartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ForecastEndDate : DateTime;
  ForecastCode : LargeString;
  ForecastName : LargeString;
  key Numerator : Integer;
  View : Integer;
  SalesForecastLines : many SAPB1.SalesForecastLine;
};

@cds.persistence.skip : true
entity SAPB1.InventoryCountings {
  key DocumentEntry : Integer;
  DocumentNumber : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CountDate : DateTime;
  CountTime : Time;
  SingleCounterType : Integer;
  SingleCounterID : Integer;
  DocumentStatus : Integer;
  Remarks : LargeString;
  Reference2 : LargeString;
  BranchID : Integer;
  DocObjectCodeEx : LargeString;
  FinancialPeriod : Integer;
  PeriodIndicator : LargeString;
  CountingType : Integer;
  AttachmentEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  YearEndDate : DateTime;
  TeamCounters : many SAPB1.TeamCounter;
  IndividualCounters : many SAPB1.IndividualCounter;
  InventoryCountingLines : many SAPB1.InventoryCountingLine;
  InventoryCountingDocumentReferencesCollection : many SAPB1.InventoryCountingDocumentReferences;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BranchID;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
} actions {
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.EmployeePosition {
  key PositionID : Integer;
  Name : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
};

@cds.persistence.skip : true
entity SAPB1.DunningTerms {
  key Code : LargeString;
  Name : LargeString;
  GroupingMethod : Integer;
  DaysInYear : Integer;
  DaysInMonth : Integer;
  CalculateInterestMethod : Integer;
  ExchangeRateSelect : Integer;
  YearlyInterestRate : Double;
  LetterFee : Double;
  LetterFeeCurrency : LargeString;
  MinimumBalance : Double;
  MinimumBalanceCurrency : LargeString;
  IncludeInterest : Integer;
  ApplyHighestLetterTemplate : Integer;
  AutomaticPosting : Integer;
  InterestAccount : LargeString;
  FeeAccount : LargeString;
  BaseDateSelect : Integer;
  DunningTermLines : many SAPB1.DunningTermLine;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = InterestAccount;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
};

@cds.persistence.skip : true
entity SAPB1.PartnersSetups {
  key Name : LargeString;
  DefaultRelationship : Integer;
  RelatedBP : LargeString;
  Details : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Relationship : Association to one SAPB1.Relationships on Relationship.RelationshipCode = DefaultRelationship;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = RelatedBP;
};

@cds.persistence.skip : true
entity SAPB1.ServiceCallProblemSubTypes {
  key ProblemSubTypeID : Integer;
  Name : LargeString;
  Description : LargeString;
  Active : Integer;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
};

@cds.persistence.skip : true
entity SAPB1.ActivitySubjects {
  key Code : Integer;
  Description : LargeString;
  ActivityType : Integer;
  IsActive : Integer;
  @cds.ambiguous : 'missing on condition?'
  ActivityType2 : Association to one SAPB1.ActivityTypes on ActivityType2.Code = ActivityType;
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
};

@cds.persistence.skip : true
entity SAPB1.CustomerEquipmentCards {
  key EquipmentCardNum : Integer;
  CustomerCode : LargeString;
  CustomerName : LargeString;
  ContactEmployeeCode : Integer;
  DirectCustomerCode : LargeString;
  DirectCustomerName : LargeString;
  ManufacturerSerialNum : LargeString;
  InternalSerialNum : LargeString;
  RequiredResolutionTime : Integer;
  RequiredResolutionUnit : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  InvoiceCode : Integer;
  InvoiceNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DeliveryDate : DateTime;
  ContactPhone : LargeString;
  Street : LargeString;
  Block : LargeString;
  ZipCode : LargeString;
  City : LargeString;
  County : LargeString;
  CountryCode : LargeString;
  StateCode : LargeString;
  InstallLocation : LargeString;
  ContractCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ContractStartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ContractEndDate : DateTime;
  DeliveryCode : Integer;
  DeliveryNumber : Integer;
  StatusOfSerialNumber : Integer;
  ReplaceSN : Integer;
  DefaultTechnician : Integer;
  ReplacedBySN : Integer;
  Defaultterritory : Integer;
  BuildingFloorRoom : LargeString;
  AttachmentEntry : Integer;
  StreetNo : LargeString;
  ServiceBPType : Integer;
  CustomerEquipmentCardBusinessPartners : many SAPB1.CustomerEquipmentCardBusinessPartner;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CustomerCode;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = CountryCode;
  @cds.ambiguous : 'missing on condition?'
  ServiceContract : Association to one SAPB1.ServiceContracts on ServiceContract.ContractID = ContractCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DefaultTechnician;
  @cds.ambiguous : 'missing on condition?'
  Territory : Association to one SAPB1.Territories on Territory.TerritoryID = Defaultterritory;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
};

@cds.persistence.skip : true
entity SAPB1.ContractTemplates {
  key TemplateName : LargeString;
  TemplateIsDeleted : Integer;
  TemplateIsRenewal : Integer;
  RemindBeforeRenewal : Integer;
  RemindUnit : Integer;
  DurationOfCoverage : Integer;
  ResponseValue : Integer;
  ResolutionUnit : Integer;
  Description : LargeString;
  ContractType : Integer;
  MondayEnabled : Integer;
  TuesdayEnabled : Integer;
  WednesdayEnabled : Integer;
  ThursdayEnabled : Integer;
  FridayEnabled : Integer;
  SaturdayEnabled : Integer;
  SundayEnabled : Integer;
  MondayStart : Time;
  MondayEnd : Time;
  TuesdayStart : Time;
  TuesdayEnd : Time;
  WednesdayStart : Time;
  WednesdayEnd : Time;
  ThursdayStart : Time;
  ThursdayEnd : Time;
  FridayStart : Time;
  FridayEnd : Time;
  SaturdayStart : Time;
  SaturdayEnd : Time;
  SundayStart : Time;
  SundayEnd : Time;
  IncludeParts : Integer;
  IncludeLabor : Integer;
  IncludeTravel : Integer;
  Remarks : LargeString;
  IncludeHolidays : Integer;
  ResponseUnit : Integer;
  ResolutionTime : Integer;
  AttachmentEntry : Integer;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceContracts : Association to many SAPB1.ServiceContracts {  };
};

@cds.persistence.skip : true
entity SAPB1.ElectronicDocuments {
  key Code : Integer;
  Description : LargeString;
  IsActive : Integer;
} actions {
  function GetProtocolParameters() returns SAPB1.EDFProtocolWithParameters;
};

@cds.persistence.skip : true
entity SAPB1.U_BOSETTINGS {
  key Code : LargeString;
  Name : LargeString;
  U_SyncCa : LargeString;
  U_SyncCo : LargeString;
  U_SyncTa : LargeString;
  U_UpdateS : LargeString;
  U_UpdateO : LargeString;
  U_Preview : LargeString;
  U_ResolveC : LargeString;
  U_CflsLog : LargeString;
  U_UseCaCat : LargeString;
  U_CaCat : LargeString;
  U_CaFolder : LargeString;
  U_CaRange : Integer;
  U_UseCoCat : LargeString;
  U_CoCat : LargeString;
  U_CoFolder : LargeString;
  U_CoRange : Integer;
  U_CoFrom : LargeString;
  U_CoTo : LargeString;
  U_BPsFrom : LargeString;
  U_BPsTo : LargeString;
  U_GRsOfBPs : LargeString;
  U_SalesP : LargeString;
  U_UseTaCa : LargeString;
  U_TaCat : LargeString;
  U_TaFolder : LargeString;
  U_CaB1Cr : Integer;
  U_CaBPFrom : LargeString;
  U_CaBPTo : LargeString;
  U_CaSalesP : LargeString;
  U_CaPreB1 : LargeString;
  U_CoSyncBP : LargeString;
  U_CoSyncOC : LargeString;
  U_CoPreB1 : LargeString;
  U_CoSnPath : LargeString;
  U_TaRange : Integer;
  U_TaB1Cr : Integer;
  U_TaBPFrom : LargeString;
  U_TaBPTo : LargeString;
  U_TaSalesP : LargeString;
  U_TaPreB1 : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.FiscalPrinter {
  key EquipmentNo : LargeString;
  Model : LargeString;
  ManufacturerSerialN : LargeString;
  RegisterNo : Integer;
  FiscalDocumentModel : LargeString;
  FiscalPrintersParams : many SAPB1.FiscalPrinterParams;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = FiscalDocumentModel;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to many SAPB1.POSDailySummary {  };
};

@cds.persistence.skip : true
entity SAPB1.UserQueries {
  key InternalKey : Integer;
  key QueryCategory : Integer;
  QueryDescription : LargeString;
  Query : LargeString;
  ProcedureAlias : LargeString;
  ProcedureName : LargeString;
  QueryType : Integer;
  @cds.ambiguous : 'missing on condition?'
  QueryCategory2 : Association to one SAPB1.QueryCategories on QueryCategory2.Code = QueryCategory;
};

@cds.persistence.skip : true
entity SAPB1.ActivityStatuses {
  StatusDescription : LargeString;
  key StatusId : Integer;
  StatusName : LargeString;
  U_OIStatus : Integer;
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
};

@cds.persistence.skip : true
entity SAPB1.ActivityRecipientLists {
  key Code : Integer;
  Name : LargeString;
  Active : Integer;
  IsMultiple : Integer;
  ActivityRecipientCollection : many SAPB1.ActivityRecipient;
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
};

@cds.persistence.skip : true
entity SAPB1.Queue {
  key QueueID : LargeString;
  Description : LargeString;
  Inactive : Integer;
  QueueManager : Integer;
  QueueEmail : LargeString;
  QueueMembers : many SAPB1.QueueMember;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = QueueManager;
};

@cds.persistence.skip : true
entity SAPB1.ServiceCallTypes {
  key CallTypeID : Integer;
  Name : LargeString;
  Description : LargeString;
  Active : Integer;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
};

@cds.persistence.skip : true
entity SAPB1.ApprovalRequests {
  key Code : Integer;
  ApprovalTemplatesID : Integer;
  ObjectType : LargeString;
  IsDraft : LargeString;
  ObjectEntry : Integer;
  Status : Integer;
  Remarks : LargeString;
  CurrentStage : Integer;
  OriginatorID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  CreationTime : Time;
  DraftEntry : Integer;
  DraftType : LargeString;
  ApprovalRequestLines : many SAPB1.ApprovalRequestLine;
  ApprovalRequestDecisions : many SAPB1.ApprovalRequestDecision;
  @cds.ambiguous : 'missing on condition?'
  ApprovalTemplate : Association to one SAPB1.ApprovalTemplates on ApprovalTemplate.Code = ApprovalTemplatesID;
  @cds.ambiguous : 'missing on condition?'
  ApprovalStage : Association to one SAPB1.ApprovalStages on ApprovalStage.Code = CurrentStage;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = OriginatorID;
} actions {
  action CancelApprovalRequest();
  action RestoreApprovalRequest();
};

@cds.persistence.skip : true
entity SAPB1.TrackingNotes {
  key TrackingNoteNumber : Integer;
  CCDNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  CustomsTerminal : LargeString;
  CountryOfOrigin : LargeString;
  IsDirectImport : Integer;
  TrackingNoteItemCollection : many SAPB1.TrackingNoteItem;
  TrackingNoteBrokerCollection : many SAPB1.TrackingNoteBroker;
};

@cds.persistence.skip : true
entity SAPB1.PickLists {
  key Absoluteentry : Integer;
  Name : LargeString;
  OwnerCode : Integer;
  OwnerName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PickDate : DateTime;
  Remarks : LargeString;
  Status : Integer;
  ObjectType : LargeString;
  UseBaseUnits : Integer;
  PickListsLines : many SAPB1.PickListsLine;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = OwnerCode;
} actions {
  function GetReleasedAllocation() returns SAPB1.PickLists;
};

@cds.persistence.skip : true
entity SAPB1.ActivityTypes {
  key Code : Integer;
  Name : LargeString;
  @cds.ambiguous : 'missing on condition?'
  ActivitySubjects : Association to many SAPB1.ActivitySubjects {  };
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
};

@cds.persistence.skip : true
entity SAPB1.KnowledgeBaseSolutions {
  ItemCode : LargeString;
  Status : Integer;
  Owner : Integer;
  CreatedBy : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  LastUpdatedBy : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LastUpdateDate : DateTime;
  Solution : LargeString;
  Symptom : LargeString;
  Cause : LargeString;
  Description : LargeString;
  key SolutionCode : Integer;
  AttachmentEntry : Integer;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
  @cds.ambiguous : 'missing on condition?'
  ServiceCallSolutionStatus : Association to one SAPB1.ServiceCallSolutionStatus on ServiceCallSolutionStatus.StatusId = Status;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = Owner;
};

@cds.persistence.skip : true
entity SAPB1.UserTablesMD {
  key TableName : LargeString;
  TableDescription : LargeString;
  TableType : Integer;
  Archivable : Integer;
  ArchiveDateField : LargeString;
  @cds.ambiguous : 'missing on condition?'
  UserFieldsMD : Association to many SAPB1.UserFieldsMD {  };
  @cds.ambiguous : 'missing on condition?'
  UserObjectsMD : Association to many SAPB1.UserObjectsMD {  };
};

@cds.persistence.skip : true
entity SAPB1.UserFieldsMD {
  Name : LargeString;
  Type : Integer;
  Size : Integer;
  Description : LargeString;
  SubType : Integer;
  LinkedTable : LargeString;
  DefaultValue : LargeString;
  key TableName : LargeString;
  key FieldID : Integer;
  EditSize : Integer;
  Mandatory : Integer;
  LinkedUDO : LargeString;
  LinkedSystemObject : Integer;
  ValidValuesMD : many SAPB1.ValidValueMD;
  @cds.ambiguous : 'missing on condition?'
  UserTablesMD : Association to one SAPB1.UserTablesMD on UserTablesMD.TableName = LinkedTable;
};

@cds.persistence.skip : true
entity SAPB1.EnhancedDiscountGroups {
  key AbsEntry : Integer;
  Type : Integer;
  ObjectCode : LargeString;
  DiscountRelations : Integer;
  Active : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  DiscountGroupLineCollection : many SAPB1.DiscountGroupLine;
};

@cds.persistence.skip : true
entity SAPB1.U_SN_URL {
  key Code : LargeString;
  Name : LargeString;
  U_URL : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BCESETT {
  key Code : LargeString;
  Name : LargeString;
  U_CpyMethod : Integer;
  U_RTCF : Integer;
  U_FRFMUDF : LargeString;
  U_FBACKUP : LargeString;
  U_CFFolder : LargeString;
  U_WSFolder : LargeString;
  U_LFFolder : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.Territories {
  key TerritoryID : Integer;
  Description : LargeString;
  LocationIndex : Integer;
  Inactive : Integer;
  Parent : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
  @cds.ambiguous : 'missing on condition?'
  CustomerEquipmentCards : Association to many SAPB1.CustomerEquipmentCards {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagements : Association to many SAPB1.ProjectManagements {  };
};

@cds.persistence.skip : true
entity SAPB1.WebClientVariants {
  key Guid : LargeString;
  Order : Integer;
  UserId : Integer;
  ViewType : LargeString;
  SubViewType : LargeString;
  ViewId : LargeString;
  ObjectName : LargeString;
  FilterBarLayout : LargeString;
  SystemFilter : LargeString;
  UserFilter : LargeString;
  ConditionFilter : LargeString;
  IsPublic : Integer;
  IsSystem : Integer;
  Name : LargeString;
  Version : Integer;
  OverviewCustomization : LargeString;
  ChartCustomization : LargeString;
  WebClientVariantSelectedColumnCollection : many SAPB1.WebClientVariantSelectedColumn;
  WebClientVariantGroupByCollection : many SAPB1.WebClientVariantGroupBy;
  WebClientVariantSortByCollection : many SAPB1.WebClientVariantSortBy;
  WebClientVariantEmbeddedChartCollection : many SAPB1.WebClientVariantEmbeddedChart;
  WebClientVariantMChartCollection : many SAPB1.WebClientVariantMChart;
};

@cds.persistence.skip : true
entity SAPB1.SingleUserConnections {
  key Code : Integer;
  Action : Integer;
};

@cds.persistence.skip : true
entity SAPB1.ProductionOrders {
  key AbsoluteEntry : Integer;
  DocumentNumber : Integer;
  Series : Integer;
  ItemNo : LargeString;
  ProductionOrderStatus : Integer;
  ProductionOrderType : Integer;
  PlannedQuantity : Double;
  CompletedQuantity : Double;
  RejectedQuantity : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  ProductionOrderOriginEntry : Integer;
  ProductionOrderOriginNumber : Integer;
  ProductionOrderOrigin : Integer;
  UserSignature : Integer;
  Remarks : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReleaseDate : DateTime;
  CustomerCode : LargeString;
  Warehouse : LargeString;
  InventoryUOM : LargeString;
  JournalRemarks : LargeString;
  TransactionNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  Printed : Integer;
  DistributionRule : LargeString;
  Project : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  UoMEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  ProductDescription : LargeString;
  Priority : Integer;
  RoutingDateCalculation : Integer;
  UpdateAllocation : Integer;
  SAPPassport : LargeString;
  AttachmentEntry : Integer;
  ProductionOrderLines : many SAPB1.ProductionOrderLine;
  ProductionOrdersSalesOrderLines : many SAPB1.ProductionOrdersSalesOrderLine;
  ProductionOrdersStages : many SAPB1.ProductionOrdersStage;
  ProductionOrdersDocumentReferences : many SAPB1.ProductionOrdersDocumentReference;
  @cds.ambiguous : 'missing on condition?'
  ProductTree : Association to one SAPB1.ProductTrees on ProductTree.TreeCode = ItemNo;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CustomerCode;
  @cds.ambiguous : 'missing on condition?'
  Warehouse2 : Association to one SAPB1.Warehouses on Warehouse2.WarehouseCode = Warehouse;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransactionNumber;
  @cds.ambiguous : 'missing on condition?'
  DistributionRule6 : Association to one SAPB1.DistributionRules on DistributionRule6.FactorCode = DistributionRule;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurement : Association to one SAPB1.UnitOfMeasurements on UnitOfMeasurement.AbsEntry = UoMEntry;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
} actions {
  action Cancel();
};

@cds.persistence.skip : true
entity SAPB1.ClosingDateProcedure {
  key ClosingDateNum : Integer;
  ClosingDateCode : LargeString;
  BaselineDate : Integer;
  DueMonth : Integer;
  ExtraMonth : Integer;
  ExtraDay : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
};

@cds.persistence.skip : true
entity SAPB1.PaymentBlocks {
  key AbsEntry : Integer;
  PaymentBlockCode : LargeString;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BA_SDPM1 {
  key Code : LargeString;
  Name : LargeString;
  U_DpMethID : Integer;
  U_Lang : LargeString;
  U_Desc : LargeString;
  U_Country : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.BarCodes {
  key AbsEntry : Integer;
  ItemNo : LargeString;
  UoMEntry : Integer;
  Barcode : LargeString;
  FreeText : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemNo;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurement : Association to one SAPB1.UnitOfMeasurements on UnitOfMeasurement.AbsEntry = UoMEntry;
};

@cds.persistence.skip : true
entity SAPB1.BrazilMultiIndexers {
  key ID : Integer;
  IndexerType : Integer;
  Code : LargeString;
  Description : LargeString;
  FirstRefIndexerCode : LargeString;
  SecondRefIndexerCode : LargeString;
  ThirdRefIndexerCode : LargeString;
} actions {
  action GetIndexerTypeList() returns many SAPB1.BrazilMultiIndexerParams;
};

@cds.persistence.skip : true
entity SAPB1.Forms1099 {
  key FormCode : Integer;
  Form1099 : LargeString;
  Boxes1099 : many SAPB1.Boxes1099Item;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.GLAccountAdvancedRules {
  key AbsoluteEntry : Integer;
  Period : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  BeginningofFinancialYear : DateTime;
  FinancialYear : Integer;
  PeriodName : LargeString;
  SubPeriodType : Integer;
  NumberOfPeriods : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromPostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToPostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDueDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDueDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDocumentDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDocumentDate : DateTime;
  ItemCode : LargeString;
  ItemGroup : Integer;
  Warehouse : LargeString;
  BPGroup : Integer;
  FederalTaxID : LargeString;
  ShipToCountry : LargeString;
  ShipToState : LargeString;
  Description : LargeString;
  Code : LargeString;
  GetGLAccountBy : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDate : DateTime;
  ExpensesAccount : LargeString;
  RevenuesAccount : LargeString;
  ExemptIncomeAcc : LargeString;
  InventoryAccount : LargeString;
  CostAccount : LargeString;
  TransferAccount : LargeString;
  VarienceAccount : LargeString;
  PriceDifferenceAcc : LargeString;
  NegativeInventoryAdjustmentAccount : LargeString;
  DecreasingAccount : LargeString;
  IncreasingAccount : LargeString;
  ReturningAccount : LargeString;
  EURevenuesAccount : LargeString;
  EUExpensesAccount : LargeString;
  ForeignRevenueAcc : LargeString;
  ForeignExpensAcc : LargeString;
  PurchaseAcct : LargeString;
  PAReturnAcct : LargeString;
  PurchaseOffsetAcct : LargeString;
  ExchangeRateDifferencesAcct : LargeString;
  GoodsClearingAcct : LargeString;
  GLDecreaseAcct : LargeString;
  GLIncreaseAcct : LargeString;
  WipAccount : LargeString;
  WipVarianceAccount : LargeString;
  WipOffsetProfitAndLossAccount : LargeString;
  InventoryOffsetProfitAndLossAccount : LargeString;
  StockInflationAdjustAccount : LargeString;
  StockInflationOffsetAccount : LargeString;
  CostInflationAccount : LargeString;
  CostInflationOffsetAccount : LargeString;
  ExpenseClearingAct : LargeString;
  ExpenseOffsettingAccount : LargeString;
  StockInTransitAccount : LargeString;
  ShippedGoodsAccount : LargeString;
  VATInRevenueAccount : LargeString;
  SalesCreditAcc : LargeString;
  PurchaseCreditAcc : LargeString;
  ExemptedCredits : LargeString;
  SalesCreditForeignAcc : LargeString;
  ForeignPurchaseCreditAcc : LargeString;
  SalesCreditEUAcc : LargeString;
  EUPurchaseCreditAcc : LargeString;
  PurchaseBalanceAccount : LargeString;
  WHIncomingCenvatAccount : LargeString;
  WHOutgoingCenvatAccount : LargeString;
  IsActive : Integer;
  BusinessPartnerType : Integer;
  VATGroup : LargeString;
  BPCode : LargeString;
  Usage : Integer;
  UDF1 : LargeString;
  UDF2 : LargeString;
  UDF3 : LargeString;
  UDF4 : LargeString;
  UDF5 : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to one SAPB1.ItemGroups on ItemGroups.Number = ItemGroup;
  @cds.ambiguous : 'missing on condition?'
  Warehouse2 : Association to one SAPB1.Warehouses on Warehouse2.WarehouseCode = Warehouse;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartnerGroup : Association to one SAPB1.BusinessPartnerGroups on BusinessPartnerGroup.Code = BPGroup;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = ShipToCountry;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ExpensesAccount;
  @cds.ambiguous : 'missing on condition?'
  VatGroup : Association to one SAPB1.VatGroups on VatGroup.Code = VATGroup;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = BPCode;
  @cds.ambiguous : 'missing on condition?'
  NotaFiscalUsage : Association to one SAPB1.NotaFiscalUsage on NotaFiscalUsage.ID = Usage;
};

@cds.persistence.skip : true
entity SAPB1.AssetTransfer {
  key DocEntry : Integer;
  DocNum : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  Status : Integer;
  Remarks : LargeString;
  Reference : LargeString;
  Currency : LargeString;
  DocumentRate : Double;
  DocumentTotal : Double;
  DocumentTotalFC : Double;
  DocumentTotalSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  DocumentType : Integer;
  SummerizeByProjects : Integer;
  SummerizeByDistributionRules : Integer;
  ManualDepreciationType : LargeString;
  HandWritten : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancellationDate : DateTime;
  DepreciationArea : LargeString;
  BPLId : Integer;
  Origin : Integer;
  LowValueAssetRetirement : Integer;
  CancellationOption : Integer;
  OriginalType : Integer;
  BaseReference : LargeString;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AssetDocumentLineCollection : many SAPB1.AssetDocumentLine;
  AssetDocumentAreaJournalCollection : many SAPB1.AssetDocumentAreaJournal;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
  @cds.ambiguous : 'missing on condition?'
  DepreciationType : Association to one SAPB1.DepreciationTypes on DepreciationType.Code = ManualDepreciationType;
  @cds.ambiguous : 'missing on condition?'
  DepreciationArea2 : Association to one SAPB1.DepreciationAreas on DepreciationArea2.Code = DepreciationArea;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLId;
};

@cds.persistence.skip : true
entity SAPB1.AssetRetirement {
  key DocEntry : Integer;
  DocNum : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  Status : Integer;
  Remarks : LargeString;
  Reference : LargeString;
  Currency : LargeString;
  DocumentRate : Double;
  DocumentTotal : Double;
  DocumentTotalFC : Double;
  DocumentTotalSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  DocumentType : Integer;
  SummerizeByProjects : Integer;
  SummerizeByDistributionRules : Integer;
  ManualDepreciationType : LargeString;
  HandWritten : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancellationDate : DateTime;
  DepreciationArea : LargeString;
  BPLId : Integer;
  Origin : Integer;
  LowValueAssetRetirement : Integer;
  CancellationOption : Integer;
  OriginalType : Integer;
  BaseReference : LargeString;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AssetDocumentLineCollection : many SAPB1.AssetDocumentLine;
  AssetDocumentAreaJournalCollection : many SAPB1.AssetDocumentAreaJournal;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
  @cds.ambiguous : 'missing on condition?'
  DepreciationType : Association to one SAPB1.DepreciationTypes on DepreciationType.Code = ManualDepreciationType;
  @cds.ambiguous : 'missing on condition?'
  DepreciationArea2 : Association to one SAPB1.DepreciationAreas on DepreciationArea2.Code = DepreciationArea;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLId;
};

@cds.persistence.skip : true
entity SAPB1.AssetCapitalization {
  key DocEntry : Integer;
  DocNum : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  Status : Integer;
  Remarks : LargeString;
  Reference : LargeString;
  Currency : LargeString;
  DocumentRate : Double;
  DocumentTotal : Double;
  DocumentTotalFC : Double;
  DocumentTotalSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  DocumentType : Integer;
  SummerizeByProjects : Integer;
  SummerizeByDistributionRules : Integer;
  ManualDepreciationType : LargeString;
  HandWritten : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancellationDate : DateTime;
  DepreciationArea : LargeString;
  BPLId : Integer;
  Origin : Integer;
  LowValueAssetRetirement : Integer;
  CancellationOption : Integer;
  OriginalType : Integer;
  BaseReference : LargeString;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AssetDocumentLineCollection : many SAPB1.AssetDocumentLine;
  AssetDocumentAreaJournalCollection : many SAPB1.AssetDocumentAreaJournal;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
  @cds.ambiguous : 'missing on condition?'
  DepreciationType : Association to one SAPB1.DepreciationTypes on DepreciationType.Code = ManualDepreciationType;
  @cds.ambiguous : 'missing on condition?'
  DepreciationArea2 : Association to one SAPB1.DepreciationAreas on DepreciationArea2.Code = DepreciationArea;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLId;
};

@cds.persistence.skip : true
entity SAPB1.AssetManualDepreciation {
  key DocEntry : Integer;
  DocNum : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  Status : Integer;
  Remarks : LargeString;
  Reference : LargeString;
  Currency : LargeString;
  DocumentRate : Double;
  DocumentTotal : Double;
  DocumentTotalFC : Double;
  DocumentTotalSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  DocumentType : Integer;
  SummerizeByProjects : Integer;
  SummerizeByDistributionRules : Integer;
  ManualDepreciationType : LargeString;
  HandWritten : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancellationDate : DateTime;
  DepreciationArea : LargeString;
  BPLId : Integer;
  Origin : Integer;
  LowValueAssetRetirement : Integer;
  CancellationOption : Integer;
  OriginalType : Integer;
  BaseReference : LargeString;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AssetDocumentLineCollection : many SAPB1.AssetDocumentLine;
  AssetDocumentAreaJournalCollection : many SAPB1.AssetDocumentAreaJournal;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
  @cds.ambiguous : 'missing on condition?'
  DepreciationType : Association to one SAPB1.DepreciationTypes on DepreciationType.Code = ManualDepreciationType;
  @cds.ambiguous : 'missing on condition?'
  DepreciationArea2 : Association to one SAPB1.DepreciationAreas on DepreciationArea2.Code = DepreciationArea;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLId;
};

@cds.persistence.skip : true
entity SAPB1.AssetCapitalizationCreditMemo {
  key DocEntry : Integer;
  DocNum : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  Status : Integer;
  Remarks : LargeString;
  Reference : LargeString;
  Currency : LargeString;
  DocumentRate : Double;
  DocumentTotal : Double;
  DocumentTotalFC : Double;
  DocumentTotalSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  DocumentType : Integer;
  SummerizeByProjects : Integer;
  SummerizeByDistributionRules : Integer;
  ManualDepreciationType : LargeString;
  HandWritten : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancellationDate : DateTime;
  DepreciationArea : LargeString;
  BPLId : Integer;
  Origin : Integer;
  LowValueAssetRetirement : Integer;
  CancellationOption : Integer;
  OriginalType : Integer;
  BaseReference : LargeString;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AssetDocumentLineCollection : many SAPB1.AssetDocumentLine;
  AssetDocumentAreaJournalCollection : many SAPB1.AssetDocumentAreaJournal;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
  @cds.ambiguous : 'missing on condition?'
  DepreciationType : Association to one SAPB1.DepreciationTypes on DepreciationType.Code = ManualDepreciationType;
  @cds.ambiguous : 'missing on condition?'
  DepreciationArea2 : Association to one SAPB1.DepreciationAreas on DepreciationArea2.Code = DepreciationArea;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLId;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CDPT {
  key Code : LargeString;
  Name : LargeString;
  U_DprTypID : LargeString;
  U_DpMethID : Integer;
  U_DeprTo : Double;
  U_Rounding : LargeString;
  U_PerAcq1 : LargeString;
  U_PerAcq2 : LargeString;
  U_PerRet : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ValFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ValTo : DateTime;
  U_sBase : LargeString;
  U_sDivisor : LargeString;
  U_sPercent : Double;
  U_dBase : LargeString;
  U_dPercent : Double;
  U_dFactor : Double;
  U_dAltDTyp : LargeString;
  U_mBase01 : LargeString;
  U_mBase02 : LargeString;
  U_mBase03 : LargeString;
  U_mBase04 : LargeString;
  U_mBase05 : LargeString;
  U_mYear01 : Integer;
  U_mYear02 : Integer;
  U_mYear03 : Integer;
  U_mYear04 : Integer;
  U_mYear05 : Integer;
  U_mPerc01 : Double;
  U_mPerc02 : Double;
  U_mPerc03 : Double;
  U_mPerc04 : Double;
  U_mPerc05 : Double;
  U_DefName : LargeString;
  U_Include : LargeString;
  U_SalvPerc : Double;
  U_DprRtMon : LargeString;
  U_PerDpRev : Double;
  U_AcqPRTyp : LargeString;
  U_SubPRTyp : LargeString;
  U_RtPRTyp : LargeString;
  U_maDecBa : LargeString;
  U_spMeth : LargeString;
  U_spConcP : Integer;
  U_spMaxPe : Double;
  U_spAdDpr : LargeString;
  U_spAlDpr : LargeString;
  U_DeprTpID : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.EmployeesInfo {
  key EmployeeID : Integer;
  LastName : LargeString;
  FirstName : LargeString;
  MiddleName : LargeString;
  Gender : Integer;
  JobTitle : LargeString;
  EmployeeType : Integer;
  Department : Integer;
  Branch : Integer;
  WorkStreet : LargeString;
  WorkBlock : LargeString;
  WorkZipCode : LargeString;
  WorkCity : LargeString;
  WorkCounty : LargeString;
  WorkCountryCode : LargeString;
  WorkStateCode : LargeString;
  Manager : Integer;
  ApplicationUserID : Integer;
  SalesPersonCode : Integer;
  OfficePhone : LargeString;
  OfficeExtension : LargeString;
  MobilePhone : LargeString;
  Pager : LargeString;
  HomePhone : LargeString;
  Fax : LargeString;
  eMail : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  StatusCode : Integer;
  Salary : Double;
  SalaryUnit : Integer;
  EmployeeCosts : Double;
  EmployeeCostUnit : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TerminationDate : DateTime;
  TreminationReason : Integer;
  BankCode : LargeString;
  BankBranch : LargeString;
  BankBranchNum : LargeString;
  BankAccount : LargeString;
  HomeStreet : LargeString;
  HomeBlock : LargeString;
  HomeZipCode : LargeString;
  HomeCity : LargeString;
  HomeCounty : LargeString;
  HomeCountry : LargeString;
  HomeState : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfBirth : DateTime;
  CountryOfBirth : LargeString;
  MartialStatus : Integer;
  NumOfChildren : Integer;
  IdNumber : LargeString;
  CitizenshipCountryCode : LargeString;
  PassportNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PassportExpirationDate : DateTime;
  Picture : LargeString;
  Remarks : LargeString;
  SalaryCurrency : LargeString;
  EmployeeCostsCurrency : LargeString;
  WorkBuildingFloorRoom : LargeString;
  HomeBuildingFloorRoom : LargeString;
  Position : Integer;
  AttachmentEntry : Integer;
  CostCenterCode : LargeString;
  CompanyNumber : LargeString;
  VacationPreviousYear : Integer;
  VacationCurrentYear : Integer;
  MunicipalityKey : LargeString;
  TaxClass : LargeString;
  IncomeTaxLiability : LargeString;
  Religion : LargeString;
  PartnerReligion : LargeString;
  ExemptionAmount : Double;
  ExemptionUnit : Integer;
  ExemptionCurrency : LargeString;
  AdditionalAmount : Double;
  AdditionalUnit : Integer;
  AdditionalCurrency : LargeString;
  TaxOfficeName : LargeString;
  TaxOfficeNumber : LargeString;
  HealthInsuranceName : LargeString;
  HealthInsuranceCode : LargeString;
  HealthInsuranceType : LargeString;
  SocialInsuranceNumber : LargeString;
  ProfessionStatus : LargeString;
  EducationStatus : LargeString;
  PersonGroup : LargeString;
  JobTitleCode : LargeString;
  BankCodeForDATEV : LargeString;
  DeviatingBankAccountOwner : Integer;
  SpouseFirstName : LargeString;
  SpouseSurname : LargeString;
  ExternalEmployeeNumber : LargeString;
  BirthPlace : LargeString;
  PaymentMethod : Integer;
  STDCode : Integer;
  CPF : LargeString;
  CRCNumber : LargeString;
  AccountantResponsible : Integer;
  LegalRepresentative : Integer;
  DIRFResponsible : Integer;
  CRCState : LargeString;
  Active : Integer;
  IDType : LargeString;
  BPLID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PassportIssueDate : DateTime;
  PassportIssuer : LargeString;
  QualificationCode : Integer;
  PRWebAccess : Integer;
  PreviousPRWebAccess : Integer;
  WorkStreetNumber : LargeString;
  HomeStreetNumber : LargeString;
  LinkedVendor : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  EmployeeCode : LargeString;
  U_ZielKB : LargeString;
  U_Zielkon : Integer;
  EmployeeAbsenceInfoLines : many SAPB1.EmployeeAbsenceInfo;
  EmployeeEducationInfoLines : many SAPB1.EmployeeEducationInfo;
  EmployeeReviewsInfoLines : many SAPB1.EmployeeReviewsInfo;
  EmployeePreviousEmpoymentInfoLines : many SAPB1.EmployeePreviousEmpoymentInfo;
  EmployeeRolesInfoLines : many SAPB1.EmployeeRolesInfo;
  EmployeeSavingsPaymentInfoLines : many SAPB1.EmployeeSavingsPaymentInfo;
  EmployeeBranchAssignment : many SAPB1.EmployeeBranchAssignmentItem;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
  @cds.ambiguous : 'missing on condition?'
  Warehouses : Association to many SAPB1.Warehouses {  };
  @cds.ambiguous : 'missing on condition?'
  ProfitCenters : Association to many SAPB1.ProfitCenters {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CustomerEquipmentCards : Association to many SAPB1.CustomerEquipmentCards {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeeRoleSetup : Association to one SAPB1.EmployeeRolesSetup on EmployeeRoleSetup.TypeID = EmployeeType;
  @cds.ambiguous : 'missing on condition?'
  Department2 : Association to one SAPB1.Departments on Department2.Code = Department;
  @cds.ambiguous : 'missing on condition?'
  Branch2 : Association to one SAPB1.Branches on Branch2.Code = Branch;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = WorkCountryCode;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = ApplicationUserID;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeeStatus : Association to one SAPB1.EmployeeStatus on EmployeeStatus.StatusId = StatusCode;
  @cds.ambiguous : 'missing on condition?'
  TerminationReason : Association to one SAPB1.TerminationReason on TerminationReason.ReasonID = TreminationReason;
  @cds.ambiguous : 'missing on condition?'
  Bank : Association to one SAPB1.Banks on Bank.AbsoluteEntry = BankCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeePosition : Association to one SAPB1.EmployeePosition on EmployeePosition.PositionID = Position;
  @cds.ambiguous : 'missing on condition?'
  ProfitCenter : Association to one SAPB1.ProfitCenters on ProfitCenter.CenterCode = CostCenterCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeeIDType : Association to one SAPB1.EmployeeIDType on EmployeeIDType.IDType = IDType;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = LinkedVendor;
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  Campaigns : Association to many SAPB1.Campaigns {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagementTimeSheet : Association to many SAPB1.ProjectManagementTimeSheet {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagements : Association to many SAPB1.ProjectManagements {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
} actions {
  action Cancel();
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.IdentificationCodes {
  key AbsEntry : Integer;
  Codelist : Integer;
  Code : LargeString;
  Description : LargeString;
  SchemaCode : LargeString;
  SchemaDesc : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.DepreciationTypes {
  key Code : LargeString;
  Description : LargeString;
  DepreciationMethod : Integer;
  MinimumDepreciatedValue : Double;
  RoundYearEndBookValue : Integer;
  IncludeSalvageInDepreciation : Integer;
  SalvagePercentage : Double;
  AcquisitionPeriodControl : Integer;
  SubsequentAcquisitionPeriodControl : Integer;
  RetirementPeriodControl : Integer;
  AcquisitionProRataType : Integer;
  SubsequentAcquisitionProRataType : Integer;
  RetirementProRataType : Integer;
  PercentageOfDepreciationReversedInRetirementYear : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  StraightLineCalculationMethod : Integer;
  StraightLinePercentage : Double;
  StraightLinePeriodControlDepreciationPeriods : Integer;
  StraightLinePeriodControlFactor : Double;
  DecliningPercentage : Double;
  DecliningFactor : Double;
  DecliningChangeTo : LargeString;
  SpecialDepreciationCalculationMethod : Integer;
  SpecialDepreciationConcessionPeriodYears : Integer;
  SpecialDepreciationMaximumPercentage : Double;
  SpecialDepreciationNormalDepreciation : LargeString;
  SpecialDepreciationAlternativeDepreciation : LargeString;
  DepreciationTypePool : LargeString;
  ManualDepreciationReduceDepreciationBase : Integer;
  SpecialDepreciationMaximumAmount : Double;
  SpecialDepreciationMaximumFlag : Integer;
  CalculationBase : Integer;
  DepreciationEndAtLastFullYear : Integer;
  IncludePreviousDepreciationInCapitalizationPeriod : Integer;
  DeltaCoefficient : Integer;
  MaximumDepreciableValue : Double;
  FactorOnlyRelevantToFirstFiscalYear : Integer;
  TransferSourcePeriodControl : Integer;
  TransferTargetPeriodControl : Integer;
  TransferSourceProRataType : Integer;
  TransferTargetProRataType : Integer;
  DepreciationLevelCollection : many SAPB1.DepreciationLevel;
  @cds.ambiguous : 'missing on condition?'
  AssetTransfer : Association to many SAPB1.AssetTransfer {  };
  @cds.ambiguous : 'missing on condition?'
  AssetRetirement : Association to many SAPB1.AssetRetirement {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalization : Association to many SAPB1.AssetCapitalization {  };
  @cds.ambiguous : 'missing on condition?'
  DepreciationTypePool2 : Association to one SAPB1.DepreciationTypePools on DepreciationTypePool2.Code = DepreciationTypePool;
  @cds.ambiguous : 'missing on condition?'
  AssetManualDepreciation : Association to many SAPB1.AssetManualDepreciation {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalizationCreditMemo : Association to many SAPB1.AssetCapitalizationCreditMemo {  };
};

@cds.persistence.skip : true
entity SAPB1.WizardPaymentMethods {
  key PaymentMethodCode : LargeString;
  Description : LargeString;
  Type : Integer;
  PaymentMeans : Integer;
  CheckAddress : Integer;
  CheckBankDetails : Integer;
  CollectionAuthorizationCheck : Integer;
  BlockForeignPayment : Integer;
  BlockForeignBank : Integer;
  CurrencyRestriction : Integer;
  PostOfficeBank : Integer;
  MinimumAmount : Double;
  MaximumAmount : Double;
  DefaultBank : LargeString;
  UserSignature : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  BankCountry : LargeString;
  DefaultAccount : LargeString;
  GLAccount : LargeString;
  Branch : LargeString;
  KeyCode : LargeString;
  TransactionType : LargeString;
  Format : LargeString;
  AgentCollection : Integer;
  SendforAcceptance : Integer;
  GroupByDate : Integer;
  DepositNorm : LargeString;
  DebitMemo : Integer;
  GroupByPaymentReference : Integer;
  GroupInvoicesbyPay : Integer;
  DueDateSelection : Integer;
  PaymentTermsCode : Integer;
  PosttoGLInterimAccount : Integer;
  BankAccountKey : Integer;
  DocType : LargeString;
  Accepted : LargeString;
  PortfolioID : LargeString;
  CurCode : LargeString;
  Instruction1 : LargeString;
  Instruction2 : LargeString;
  PaymentPlace : LargeString;
  BarcodeDll : LargeString;
  Active : Integer;
  GroupInvoicesByPayToBank : Integer;
  GroupInvoicesByCurrency : Integer;
  BankChargeRate : Double;
  ReportCode : LargeString;
  CancelInstruction : LargeString;
  OccurenceCode : LargeString;
  MovementCode : LargeString;
  DirectDebit : LargeString;
  CurrencyRestrictions : many SAPB1.CurrencyRestriction;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = BankCountry;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = GLAccount;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentTermsCode;
  @cds.ambiguous : 'missing on condition?'
  HouseBankAccount : Association to one SAPB1.HouseBankAccounts on HouseBankAccount.AbsoluteEntry = BankAccountKey;
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.AssetGroups {
  key Code : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
};

@cds.persistence.skip : true
entity SAPB1.AssetClasses {
  key Code : LargeString;
  Description : LargeString;
  AssetType : Integer;
  ValueLimitFrom : Double;
  ValueLimitTo : Double;
  BPLID : Integer;
  AttributeGroup : Integer;
  AssetClassCollection : many SAPB1.AssetClassLine;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  AttributeGroup2 : Association to one SAPB1.AttributeGroups on AttributeGroup2.Code = AttributeGroup;
};

@cds.persistence.skip : true
entity SAPB1.DunningLetters {
  FeeCurrency : LargeString;
  key RowNumber : Integer;
  LetterFormat : LargeString;
  Effectiveafter : LargeString;
  MinimumBalanceCurrency : LargeString;
  Feeperletter : Double;
  CalcInterest : Integer;
  MinimumBalance : Double;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
};

@cds.persistence.skip : true
entity SAPB1.RouteStages {
  key InternalNumber : Integer;
  Code : LargeString;
  Description : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  GenerationTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfUpdate : DateTime;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_SDPM {
  key Code : LargeString;
  Name : LargeString;
  U_DpMethID : Integer;
  U_DpMethNm : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_RPTS {
  key Code : LargeString;
  Name : LargeString;
  U_SeparatelyDisp : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_From : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_To : DateTime;
};

@cds.persistence.skip : true
entity SAPB1.DeductionTaxHierarchies {
  key AbsEntry : Integer;
  BPCode : LargeString;
  HierarchyCode : LargeString;
  HierarchyName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidUntil : DateTime;
  DeductionPercent : Double;
  MaximumTotal : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LastUpdated : DateTime;
  DeductionTaxHierarchies_Lines : many SAPB1.DeductionTaxHierarchies_Line;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = BPCode;
};

@cds.persistence.skip : true
entity SAPB1.BlanketAgreements {
  key AgreementNo : Integer;
  BPCode : LargeString;
  BPName : LargeString;
  ContactPersonCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TerminateDate : DateTime;
  Description : LargeString;
  AgreementType : Integer;
  Status : Integer;
  Owner : Integer;
  IgnorePricesInAgreement : Integer;
  Renewal : Integer;
  RemindUnit : Integer;
  RemindTime : Integer;
  Remarks : LargeString;
  AttachmentEntry : Integer;
  SettlementProbability : Double;
  AgreementMethod : Integer;
  PaymentTerms : Integer;
  PriceList : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SigningDate : DateTime;
  AmendmentTo : Integer;
  Series : Integer;
  DocNum : Integer;
  HandWritten : Integer;
  PeriodIndicator : LargeString;
  PaymentMethod : LargeString;
  ExchangeRate : Double;
  ShippingType : Integer;
  NumAtCard : LargeString;
  Project : LargeString;
  PriceMode : Integer;
  BPCurrency : LargeString;
  SAPPassport : LargeString;
  BlanketAgreements_ItemsLines : many SAPB1.BlanketAgreements_ItemsLine;
  @cds.ambiguous : 'missing on condition?'
  JournalEntries : Association to many SAPB1.JournalEntries {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = BPCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = Owner;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentTerms;
  @cds.ambiguous : 'missing on condition?'
  PriceList2 : Association to one SAPB1.PriceLists on PriceList2.PriceListNo = PriceList;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  ShippingType2 : Association to one SAPB1.ShippingTypes on ShippingType2.Code = ShippingType;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = BPCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
} actions {
  action CancelBlanketAgreement();
  action GetRelatedDocuments() returns many SAPB1.BlanketAgreementsDocument;
};

@cds.persistence.skip : true
entity SAPB1.CostCenterTypes {
  key CostCenterTypeCode : LargeString;
  CostCenterTypeName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  ProfitCenters : Association to many SAPB1.ProfitCenters {  };
};

@cds.persistence.skip : true
entity SAPB1.ServiceCallProblemTypes {
  key ProblemTypeID : Integer;
  Name : LargeString;
  Description : LargeString;
  Active : Integer;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
};

@cds.persistence.skip : true
entity SAPB1.BrazilBeverageIndexers {
  BeverageGroupCode : LargeString;
  BeverageTableCode : LargeString;
  BeverageCommercialBrandCode : Integer;
  key BeverageID : Integer;
  @cds.ambiguous : 'missing on condition?'
  BrazilStringIndexer : Association to one SAPB1.BrazilStringIndexers on BrazilStringIndexer.ID = BeverageGroupCode;
  @cds.ambiguous : 'missing on condition?'
  BrazilNumericIndexer : Association to one SAPB1.BrazilNumericIndexers on BrazilNumericIndexer.ID = BeverageCommercialBrandCode;
};

@cds.persistence.skip : true
entity SAPB1.SalesTaxAuthoritiesTypes {
  UserSignature : Integer;
  Name : LargeString;
  VAT : Integer;
  key Numerator : Integer;
  TaxCreditControl : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxAuthorities : Association to many SAPB1.SalesTaxAuthorities {  };
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  DepreciationAreas : Association to many SAPB1.DepreciationAreas {  };
};

@cds.persistence.skip : true
entity SAPB1.EmployeeIDType {
  key IDType : LargeString;
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
};

@cds.persistence.skip : true
entity SAPB1.Deposits {
  DepositNumber : Integer;
  key AbsEntry : Integer;
  DepositType : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DepositDate : DateTime;
  DepositCurrency : LargeString;
  DepositAccount : LargeString;
  DepositorName : LargeString;
  Bank : LargeString;
  BankAccountNum : LargeString;
  BankBranch : LargeString;
  BankReference : LargeString;
  JournalRemarks : LargeString;
  TotalLC : Double;
  TotalFC : Double;
  TotalSC : Double;
  AllocationAccount : LargeString;
  DocRate : Double;
  TaxAccount : LargeString;
  TaxAmount : Double;
  CommissionAccount : LargeString;
  Commission : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CommissionDate : DateTime;
  TaxCode : LargeString;
  DepositAccountType : Integer;
  ReconcileAfterDeposit : Integer;
  VoucherAccount : LargeString;
  Series : Integer;
  Project : LargeString;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  CommissionCurrency : LargeString;
  CommissionSC : Double;
  CommissionFC : Double;
  TaxAmountSC : Double;
  TaxAmountFC : Double;
  BPLID : Integer;
  CheckDepositType : Integer;
  AttachmentEntry : Integer;
  IncomeTaxAccount : LargeString;
  IncomeTaxAmount : Double;
  IncomeTaxAmountSC : Double;
  IncomeTaxAmountFC : Double;
  CheckLines : many SAPB1.CheckLine;
  CreditLines : many SAPB1.CreditLine;
  BOELines : many SAPB1.BOELine;
  @cds.ambiguous : 'missing on condition?'
  VatGroup : Association to one SAPB1.VatGroups on VatGroup.Code = TaxCode;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  DistributionRule6 : Association to one SAPB1.DistributionRules on DistributionRule6.FactorCode = DistributionRule;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
} actions {
  action CancelDeposit();
  action CancelDepositbyCurrentSystemDate();
};

@cds.persistence.skip : true
entity SAPB1.TaxWebSites {
  key AbsEntry : Integer;
  WebSiteName : LargeString;
  WebSiteURL : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  TaxInvoiceReport : Association to many SAPB1.TaxInvoiceReport {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
} actions {
  action SetAsDefault();
};

@cds.persistence.skip : true
entity SAPB1.SalesTaxAuthorities {
  UseTaxAccount : LargeString;
  UserSignature : Integer;
  key Type : Integer;
  AOrRTaxAccount : LargeString;
  Rate : Double;
  AOrPTaxAccount : LargeString;
  NonDeductiblePrecent : Double;
  NonDeductibleAccount : LargeString;
  Name : LargeString;
  DeferredTaxAccount : LargeString;
  key Code : LargeString;
  MinTaxableAmount : Double;
  MaxTaxableAmount : Double;
  FlatTaxAmount : Double;
  InclInPrice : Integer;
  Exempt : Integer;
  APExpAccount : LargeString;
  ARExpAccount : LargeString;
  InclInGrossRevenue : Integer;
  TextCode : Integer;
  InclInFirstInstallment : Integer;
  ReverseChargePercent : Double;
  SalesTaxRCMAccount : LargeString;
  SalesTaxRCMClrAccount : LargeString;
  VATExemption : Integer;
  VATExemptionBasePercent : Double;
  VATExemptionPercent : Double;
  TaxDefinitions : many SAPB1.TaxDefinition;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = UseTaxAccount;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxAuthoritiesType : Association to one SAPB1.SalesTaxAuthoritiesTypes on SalesTaxAuthoritiesType.Numerator = Type;
};

@cds.persistence.skip : true
entity SAPB1.CampaignResponseType {
  ResponseTypeDescription : LargeString;
  key ResponseType : LargeString;
  IsActive : Integer;
};

@cds.persistence.skip : true
entity SAPB1.ServiceContracts {
  key ContractID : Integer;
  CustomerCode : LargeString;
  CustomerName : LargeString;
  ContactCode : Integer;
  Owner : Integer;
  Status : Integer;
  ContractTemplate : LargeString;
  ContractType : Integer;
  Renewal : Integer;
  ReminderTime : Integer;
  RemindUnit : Integer;
  DurationOfCoverage : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  ResolutionTime : Integer;
  ResolutionUnit : Integer;
  Description : LargeString;
  MondayEnabled : Integer;
  TuesdayEnabled : Integer;
  WednesdayEnabled : Integer;
  ThursdayEnabled : Integer;
  FridayEnabled : Integer;
  SaturdayEnabled : Integer;
  SundayEnabled : Integer;
  MondayStart : Time;
  MondayEnd : Time;
  TuesdayStart : Time;
  TuesdayEnd : Time;
  WednesdayStart : Time;
  WednesdayEnd : Time;
  ThursdayStart : Time;
  ThursdayEnd : Time;
  FridayStart : Time;
  FridayEnd : Time;
  SaturdayStart : Time;
  SaturdayEnd : Time;
  SundayStart : Time;
  SundayEnd : Time;
  IncludeParts : Integer;
  IncludeLabor : Integer;
  IncludeTravel : Integer;
  TemplateRemarks : LargeString;
  Remarks : LargeString;
  IncludeHolidays : Integer;
  ServiceType : Integer;
  ResponseUnit : Integer;
  ResponseTime : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TerminationDate : DateTime;
  AttachmentEntry : Integer;
  ServiceBPType : Integer;
  ServiceContract_Lines : many SAPB1.ServiceContract_Line;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  CustomerEquipmentCards : Association to many SAPB1.CustomerEquipmentCards {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CustomerCode;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = Owner;
  @cds.ambiguous : 'missing on condition?'
  ContractTemplate2 : Association to one SAPB1.ContractTemplates on ContractTemplate2.TemplateName = ContractTemplate;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
} actions {
  action Cancel();
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.DeductionTaxGroups {
  key GroupKey : Integer;
  GroupCode : Integer;
  GroupName : LargeString;
  MaxRedin : Double;
  GroupExtendedCode : LargeString;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DeductionTaxSubGroup : Association to one SAPB1.DeductionTaxSubGroups on DeductionTaxSubGroup.GroupCode = GroupCode;
};

@cds.persistence.skip : true
entity SAPB1.RetornoCodes {
  key AbsEntry : Integer;
  OccurenceCode : Integer;
  MovementCode : Integer;
  BoeStatus : Integer;
  Description : LargeString;
  Color : Integer;
  FileFormat : LargeString;
  BankCode : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCSTA {
  key Code : LargeString;
  Name : LargeString;
  U_Export : LargeString;
  U_Import : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.SalesOpportunityReasonsSetup {
  key SequenceNo : Integer;
  Description : LargeString;
  Sort : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
};

@cds.persistence.skip : true
entity SAPB1.FactoringIndicators {
  key IndicatorCode : LargeString;
  IndicatorName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  JournalEntries : Association to many SAPB1.JournalEntries {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.AssetDepreciationGroups {
  key Code : LargeString;
  Description : LargeString;
  Group : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
};

@cds.persistence.skip : true
entity SAPB1.NFTaxCategories {
  key AbsId : Integer;
  Code : LargeString;
  Locked : Integer;
  GPCId : Integer;
  @cds.ambiguous : 'missing on condition?'
  GovPayCode : Association to one SAPB1.GovPayCodes on GovPayCode.AbsId = GPCId;
  @cds.ambiguous : 'missing on condition?'
  NotaFiscalCST : Association to many SAPB1.NotaFiscalCST {  };
};

@cds.persistence.skip : true
entity SAPB1.SalesStages {
  key SequenceNo : Integer;
  Name : LargeString;
  Stageno : Integer;
  ClosingPercentage : Double;
  Cancelled : Integer;
  IsSales : Integer;
  IsPurchasing : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
};

@cds.persistence.skip : true
entity SAPB1.ServiceCallSolutionStatus {
  key StatusId : Integer;
  Name : LargeString;
  Description : LargeString;
  Active : Integer;
  @cds.ambiguous : 'missing on condition?'
  KnowledgeBaseSolutions : Association to many SAPB1.KnowledgeBaseSolutions {  };
};

@cds.persistence.skip : true
entity SAPB1.IntegrationPackagesConfigure {
  key AbsEntry : Integer;
  Code : LargeString;
  Name : LargeString;
  IsEnable : Integer;
};

@cds.persistence.skip : true
entity SAPB1.FAAccountDeterminations {
  key Code : LargeString;
  Description : LargeString;
  AssetBalanceSheetAccount : LargeString;
  ClearingAccountAcquisition : LargeString;
  RevaluationReserveAccount : LargeString;
  RevaluationReserveClearing : LargeString;
  OrdinaryDepreciation : LargeString;
  AccumulatedOrdinaryDepr : LargeString;
  UnplannedDepreciation : LargeString;
  AccumulatedUnplannedDepr : LargeString;
  SpecialDepreciation : LargeString;
  AccumulatedSpecialDepr : LargeString;
  RevenuefromAssetSalesNet : LargeString;
  RetirementwithExpenseNet : LargeString;
  RetirementwithRevenueNet : LargeString;
  LeavewithExpenseNBVGross : LargeString;
  LeavewithRevenueNBVGross : LargeString;
  RevenueAccountforRetirement : LargeString;
  RevenueClearingAccount : LargeString;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = AssetBalanceSheetAccount;
};

@cds.persistence.skip : true
entity SAPB1.ProjectManagementTimeSheet {
  key AbsEntry : Integer;
  DocNumber : Integer;
  TimeSheetType : Integer;
  UserID : Integer;
  LastName : LargeString;
  FirstName : LargeString;
  Department : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateTo : DateTime;
  SAPPassport : LargeString;
  AttachmentEntry : Integer;
  PM_TimeSheetLineDataCollection : many SAPB1.PM_TimeSheetLineData;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = UserID;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
};

@cds.persistence.skip : true
entity SAPB1.Activities {
  key ActivityCode : Integer;
  CardCode : LargeString;
  Notes : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActivityDate : DateTime;
  ActivityTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  Closed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CloseDate : DateTime;
  Phone : LargeString;
  Fax : LargeString;
  Subject : Integer;
  DocType : LargeString;
  DocNum : LargeString;
  DocEntry : LargeString;
  Priority : Integer;
  Details : LargeString;
  Activity : Integer;
  ActivityType : Integer;
  Location : Integer;
  StartTime : Time;
  EndTime : Time;
  Duration : Double;
  DurationType : Integer;
  SalesEmployee : Integer;
  ContactPersonCode : Integer;
  HandledBy : Integer;
  Reminder : Integer;
  ReminderPeriod : Double;
  ReminderType : Integer;
  City : LargeString;
  PersonalFlag : Integer;
  Street : LargeString;
  ParentObjectId : Integer;
  ParentObjectType : LargeString;
  Room : LargeString;
  InactiveFlag : Integer;
  State : LargeString;
  PreviousActivity : Integer;
  Country : LargeString;
  Status : Integer;
  TentativeFlag : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDueDate : DateTime;
  DocTypeEx : LargeString;
  AttachmentEntry : Integer;
  RecurrencePattern : Integer;
  EndType : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SeriesStartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SeriesEndDate : DateTime;
  MaxOccurrence : Integer;
  Interval : Integer;
  Sunday : Integer;
  Monday : Integer;
  Tuesday : Integer;
  Wednesday : Integer;
  Thursday : Integer;
  Friday : Integer;
  Saturday : Integer;
  RepeatOption : Integer;
  BelongedSeriesNum : Integer;
  IsRemoved : Integer;
  AddressName : LargeString;
  AddressType : Integer;
  HandledByEmployee : Integer;
  RecurrenceSequenceSpecifier : Integer;
  RecurrenceDayInMonth : Integer;
  RecurrenceMonth : Integer;
  RecurrenceDayOfWeek : Integer;
  SalesOpportunityId : Integer;
  SalesOpportunityLine : Integer;
  HandledByRecipientList : Integer;
  CheckInListParams : many SAPB1.CheckInParams;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  ActivitySubject : Association to one SAPB1.ActivitySubjects on ActivitySubject.Code = Subject;
  @cds.ambiguous : 'missing on condition?'
  ActivityType2 : Association to one SAPB1.ActivityTypes on ActivityType2.Code = ActivityType;
  @cds.ambiguous : 'missing on condition?'
  ActivityLocation : Association to one SAPB1.ActivityLocations on ActivityLocation.Code = Location;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesEmployee;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = HandledBy;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  ActivityStatus : Association to one SAPB1.ActivityStatuses on ActivityStatus.StatusId = Status;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = HandledByEmployee;
  @cds.ambiguous : 'missing on condition?'
  ActivityRecipientList : Association to one SAPB1.ActivityRecipientLists on ActivityRecipientList.Code = HandledByRecipientList;
};

@cds.persistence.skip : true
entity SAPB1.ResourceCapacities {
  key Id : Integer;
  Code : LargeString;
  Warehouse : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  Type : Integer;
  Capacity : Double;
  SourceType : Integer;
  SourceEntry : Integer;
  SourceLineNum : Integer;
  BaseType : Integer;
  BaseEntry : Integer;
  BaseLineNum : Integer;
  Action : Integer;
  OwningType : Integer;
  OwningEntry : Integer;
  OwningLineNum : Integer;
  RevertedType : Integer;
  RevertedEntry : Integer;
  RevertedLineNum : Integer;
  MemoSource : Integer;
  Memo : LargeString;
  SingleRunCapacity : Double;
  SingleRunMemoSource : Integer;
  SingleRunMemo : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Resource : Association to one SAPB1.Resources on Resource.Code = Code;
  @cds.ambiguous : 'missing on condition?'
  Warehouse2 : Association to one SAPB1.Warehouses on Warehouse2.WarehouseCode = Warehouse;
};

@cds.persistence.skip : true
entity SAPB1.ActivityLocations {
  key Code : Integer;
  Name : LargeString;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
};

@cds.persistence.skip : true
entity SAPB1.DeterminationCriterias {
  key DmcId : Integer;
  DeterminationCriteria : LargeString;
  IsActive : Integer;
  Priority : Integer;
};

@cds.persistence.skip : true
entity SAPB1.NotaFiscalCST {
  key ID : Integer;
  Code : LargeString;
  Situation : LargeString;
  TaxCategory : Integer;
  CSTCodeOutgoing : LargeString;
  DescriptionOutgoing : LargeString;
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCodes : Association to many SAPB1.WithholdingTaxCodes {  };
  @cds.ambiguous : 'missing on condition?'
  NFTaxCategory : Association to one SAPB1.NFTaxCategories on NFTaxCategory.AbsId = TaxCategory;
};

@cds.persistence.skip : true
entity SAPB1.CustomsGroups {
  key Code : Integer;
  Name : LargeString;
  Number : LargeString;
  Customs : Double;
  Purchase : Double;
  Other : Double;
  Total : Double;
  Locked : Integer;
  CustomsAllocationAccount : LargeString;
  CustomsExpenseAccount : LargeString;
  PortAddress : LargeString;
  PortState : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = CustomsAllocationAccount;
};

@cds.persistence.skip : true
entity SAPB1.ServiceCallStatus {
  key StatusId : Integer;
  Name : LargeString;
  Description : LargeString;
  Active : Integer;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
};

@cds.persistence.skip : true
entity SAPB1.BinLocations {
  key AbsEntry : Integer;
  Warehouse : LargeString;
  Sublevel1 : LargeString;
  Sublevel2 : LargeString;
  Sublevel3 : LargeString;
  Sublevel4 : LargeString;
  BinCode : LargeString;
  Inactive : Integer;
  Description : LargeString;
  AlternativeSortCode : LargeString;
  BarCode : LargeString;
  Attribute1 : LargeString;
  Attribute2 : LargeString;
  Attribute3 : LargeString;
  Attribute4 : LargeString;
  Attribute5 : LargeString;
  Attribute6 : LargeString;
  Attribute7 : LargeString;
  Attribute8 : LargeString;
  Attribute9 : LargeString;
  Attribute10 : LargeString;
  RestrictedItemType : Integer;
  SpecificItem : LargeString;
  SpecificItemGroup : Integer;
  BatchRestrictions : Integer;
  RestrictedTransType : Integer;
  RestrictionReason : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateRestrictionChanged : DateTime;
  MinimumQty : Double;
  MaximumQty : Double;
  IsSystemBin : Integer;
  ReceivingBinLocation : Integer;
  ExcludeAutoAllocOnIssue : Integer;
  MaximumWeight : Double;
  MaximumWeight1 : Double;
  MaximumWeightUnit : Integer;
  MaximumWeightUnit1 : Integer;
  RestrictedUoMType : Integer;
  SpecificUoM : Integer;
  SpecificUoMGroup : Integer;
  @cds.ambiguous : 'missing on condition?'
  Warehouses : Association to many SAPB1.Warehouses {  };
  @cds.ambiguous : 'missing on condition?'
  Warehouse2 : Association to one SAPB1.Warehouses on Warehouse2.WarehouseCode = Warehouse;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = SpecificItem;
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to one SAPB1.ItemGroups on ItemGroups.Number = SpecificItemGroup;
  @cds.ambiguous : 'missing on condition?'
  WeightMeasure : Association to one SAPB1.WeightMeasures on WeightMeasure.UnitCode = MaximumWeightUnit;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurement : Association to one SAPB1.UnitOfMeasurements on UnitOfMeasurement.AbsEntry = SpecificUoM;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurementGroup : Association to one SAPB1.UnitOfMeasurementGroups on UnitOfMeasurementGroup.AbsEntry = SpecificUoMGroup;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_RPTDT {
  key Code : LargeString;
  Name : LargeString;
  U_MXRowN : Integer;
  U_AssetN : LargeString;
  U_ItemN : LargeString;
  U_APCH : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_AcqD : DateTime;
  U_PlanUL : Integer;
  U_RemL : Integer;
  U_DprT : LargeString;
  U_APCST : Double;
  U_APC : Double;
  U_Retm : Double;
  U_Trsfer : Double;
  U_WrtUp : Double;
  U_AccDpr : Double;
  U_NBVST : Double;
  U_Dpr : Double;
  U_APCEn : Double;
  U_NBVEn : Double;
  U_Level : Integer;
  U_LineType : Integer;
};

@cds.persistence.skip : true
entity SAPB1.UserObjectsMD {
  TableName : LargeString;
  key Code : LargeString;
  LogTableName : LargeString;
  CanCreateDefaultForm : Integer;
  ObjectType : Integer;
  ExtensionName : LargeString;
  CanCancel : Integer;
  CanDelete : Integer;
  CanLog : Integer;
  ManageSeries : Integer;
  CanFind : Integer;
  CanYearTransfer : Integer;
  Name : LargeString;
  CanClose : Integer;
  OverwriteDllfile : Integer;
  UseUniqueFormType : Integer;
  CanArchive : Integer;
  MenuItem : Integer;
  MenuCaption : LargeString;
  FatherMenuID : Integer;
  Position : Integer;
  MenuUID : LargeString;
  EnableEnhancedForm : Integer;
  RebuildEnhancedForm : Integer;
  FormSRF : LargeString;
  UserObjectMD_ChildTables : many SAPB1.UserObjectMD_ChildTable;
  UserObjectMD_FindColumns : many SAPB1.UserObjectMD_FindColumn;
  UserObjectMD_FormColumns : many SAPB1.UserObjectMD_FormColumn;
  UserObjectMD_EnhancedFormColumns : many SAPB1.UserObjectMD_EnhancedFormColumn;
  @cds.ambiguous : 'missing on condition?'
  UserTablesMD : Association to one SAPB1.UserTablesMD on UserTablesMD.TableName = TableName;
};

@cds.persistence.skip : true
entity SAPB1.U_BBFLDS {
  key Code : LargeString;
  Name : LargeString;
  U_BC_Code : LargeString;
  U_TblName : LargeString;
  U_FldName : LargeString;
  U_Flag : LargeString;
  U_FldType : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.ApprovalStages {
  key Code : Integer;
  Name : LargeString;
  NoOfApproversRequired : Integer;
  Remarks : LargeString;
  ApprovalStageApprovers : many SAPB1.ApprovalStageApprover;
  @cds.ambiguous : 'missing on condition?'
  ApprovalRequests : Association to many SAPB1.ApprovalRequests {  };
};

@cds.persistence.skip : true
entity SAPB1.BusinessPartners {
  key CardCode : LargeString;
  CardName : LargeString;
  CardType : Integer;
  GroupCode : Integer;
  Address : LargeString;
  ZipCode : LargeString;
  MailAddress : LargeString;
  MailZipCode : LargeString;
  Phone1 : LargeString;
  Phone2 : LargeString;
  Fax : LargeString;
  ContactPerson : LargeString;
  Notes : LargeString;
  PayTermsGrpCode : Integer;
  CreditLimit : Double;
  MaxCommitment : Double;
  DiscountPercent : Double;
  VatLiable : Integer;
  FederalTaxID : LargeString;
  DeductibleAtSource : Integer;
  DeductionPercent : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DeductionValidUntil : DateTime;
  PriceListNum : Integer;
  IntrestRatePercent : Double;
  CommissionPercent : Double;
  CommissionGroupCode : Integer;
  FreeText : LargeString;
  SalesPersonCode : Integer;
  Currency : LargeString;
  RateDiffAccount : LargeString;
  Cellular : LargeString;
  AvarageLate : Integer;
  City : LargeString;
  County : LargeString;
  Country : LargeString;
  MailCity : LargeString;
  MailCounty : LargeString;
  MailCountry : LargeString;
  EmailAddress : LargeString;
  Picture : LargeString;
  DefaultAccount : LargeString;
  DefaultBranch : LargeString;
  DefaultBankCode : LargeString;
  AdditionalID : LargeString;
  Pager : LargeString;
  FatherCard : LargeString;
  CardForeignName : LargeString;
  FatherType : Integer;
  DeductionOffice : LargeString;
  ExportCode : LargeString;
  MinIntrest : Double;
  CurrentAccountBalance : Double;
  OpenDeliveryNotesBalance : Double;
  OpenOrdersBalance : Double;
  OpenChecksBalance : Double;
  VatGroup : LargeString;
  ShippingType : Integer;
  Password : LargeString;
  Indicator : LargeString;
  IBAN : LargeString;
  CreditCardCode : Integer;
  CreditCardNum : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreditCardExpiration : DateTime;
  DebitorAccount : LargeString;
  OpenOpportunities : Integer;
  Valid : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  ValidRemarks : LargeString;
  Frozen : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FrozenFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FrozenTo : DateTime;
  FrozenRemarks : LargeString;
  Block : LargeString;
  BillToState : LargeString;
  ShipToState : LargeString;
  ExemptNum : LargeString;
  Priority : Integer;
  FormCode1099 : Integer;
  Box1099 : LargeString;
  PeymentMethodCode : LargeString;
  BackOrder : Integer;
  PartialDelivery : Integer;
  BlockDunning : Integer;
  BankCountry : LargeString;
  HouseBank : LargeString;
  HouseBankCountry : LargeString;
  HouseBankAccount : LargeString;
  ShipToDefault : LargeString;
  DunningLevel : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DunningDate : DateTime;
  CollectionAuthorization : Integer;
  DME : LargeString;
  InstructionKey : LargeString;
  SinglePayment : Integer;
  ISRBillerID : LargeString;
  PaymentBlock : Integer;
  ReferenceDetails : LargeString;
  HouseBankBranch : LargeString;
  OwnerIDNumber : LargeString;
  PaymentBlockDescription : Integer;
  TaxExemptionLetterNum : LargeString;
  MaxAmountOfExemption : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  LinkedBusinessPartner : LargeString;
  LastMultiReconciliationNum : Integer;
  DeferredTax : Integer;
  Equalization : Integer;
  SubjectToWithholdingTax : Integer;
  CertificateNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpirationDate : DateTime;
  NationalInsuranceNum : LargeString;
  AccrualCriteria : Integer;
  WTCode : LargeString;
  BillToBuildingFloorRoom : LargeString;
  DownPaymentClearAct : LargeString;
  ChannelBP : LargeString;
  DefaultTechnician : Integer;
  BilltoDefault : LargeString;
  CustomerBillofExchangDisc : LargeString;
  Territory : Integer;
  ShipToBuildingFloorRoom : LargeString;
  CustomerBillofExchangPres : LargeString;
  ProjectCode : LargeString;
  VatGroupLatinAmerica : LargeString;
  DunningTerm : LargeString;
  Website : LargeString;
  OtherReceivablePayable : LargeString;
  BillofExchangeonCollection : LargeString;
  CompanyPrivate : Integer;
  LanguageCode : Integer;
  UnpaidBillofExchange : LargeString;
  WithholdingTaxDeductionGroup : Integer;
  ClosingDateProcedureNumber : Integer;
  Profession : LargeString;
  BankChargesAllocationCode : LargeString;
  TaxRoundingRule : Integer;
  Properties1 : Integer;
  Properties2 : Integer;
  Properties3 : Integer;
  Properties4 : Integer;
  Properties5 : Integer;
  Properties6 : Integer;
  Properties7 : Integer;
  Properties8 : Integer;
  Properties9 : Integer;
  Properties10 : Integer;
  Properties11 : Integer;
  Properties12 : Integer;
  Properties13 : Integer;
  Properties14 : Integer;
  Properties15 : Integer;
  Properties16 : Integer;
  Properties17 : Integer;
  Properties18 : Integer;
  Properties19 : Integer;
  Properties20 : Integer;
  Properties21 : Integer;
  Properties22 : Integer;
  Properties23 : Integer;
  Properties24 : Integer;
  Properties25 : Integer;
  Properties26 : Integer;
  Properties27 : Integer;
  Properties28 : Integer;
  Properties29 : Integer;
  Properties30 : Integer;
  Properties31 : Integer;
  Properties32 : Integer;
  Properties33 : Integer;
  Properties34 : Integer;
  Properties35 : Integer;
  Properties36 : Integer;
  Properties37 : Integer;
  Properties38 : Integer;
  Properties39 : Integer;
  Properties40 : Integer;
  Properties41 : Integer;
  Properties42 : Integer;
  Properties43 : Integer;
  Properties44 : Integer;
  Properties45 : Integer;
  Properties46 : Integer;
  Properties47 : Integer;
  Properties48 : Integer;
  Properties49 : Integer;
  Properties50 : Integer;
  Properties51 : Integer;
  Properties52 : Integer;
  Properties53 : Integer;
  Properties54 : Integer;
  Properties55 : Integer;
  Properties56 : Integer;
  Properties57 : Integer;
  Properties58 : Integer;
  Properties59 : Integer;
  Properties60 : Integer;
  Properties61 : Integer;
  Properties62 : Integer;
  Properties63 : Integer;
  Properties64 : Integer;
  CompanyRegistrationNumber : LargeString;
  VerificationNumber : LargeString;
  DiscountBaseObject : Integer;
  DiscountRelations : Integer;
  TypeReport : Integer;
  ThresholdOverlook : Integer;
  SurchargeOverlook : Integer;
  DownPaymentInterimAccount : LargeString;
  OperationCode347 : Integer;
  InsuranceOperation347 : Integer;
  HierarchicalDeduction : Integer;
  ShaamGroup : Integer;
  WithholdingTaxCertified : Integer;
  BookkeepingCertified : Integer;
  PlanningGroup : LargeString;
  Affiliate : Integer;
  Industry : Integer;
  VatIDNum : LargeString;
  DatevAccount : LargeString;
  DatevFirstDataEntry : Integer;
  UseShippedGoodsAccount : Integer;
  GTSRegNo : LargeString;
  GTSBankAccountNo : LargeString;
  GTSBillingAddrTel : LargeString;
  ETaxWebSite : Integer;
  HouseBankIBAN : LargeString;
  VATRegistrationNumber : LargeString;
  RepresentativeName : LargeString;
  IndustryType : LargeString;
  BusinessType : LargeString;
  Series : Integer;
  AutomaticPosting : Integer;
  InterestAccount : LargeString;
  FeeAccount : LargeString;
  CampaignNumber : Integer;
  AliasName : LargeString;
  DefaultBlanketAgreementNumber : Integer;
  EffectiveDiscount : Integer;
  NoDiscounts : Integer;
  EffectivePrice : Integer;
  EffectivePriceConsidersPriceBeforeDiscount : Integer;
  GlobalLocationNumber : LargeString;
  EDISenderID : LargeString;
  EDIRecipientID : LargeString;
  ResidenNumber : Integer;
  RelationshipCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RelationshipDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RelationshipDateTill : DateTime;
  UnifiedFederalTaxID : LargeString;
  AttachmentEntry : Integer;
  TypeOfOperation : Integer;
  EndorsableChecksFromBP : Integer;
  AcceptsEndorsedChecks : Integer;
  OwnerCode : Integer;
  BlockSendingMarketingContent : Integer;
  AgentCode : LargeString;
  PriceMode : Integer;
  EDocGenerationType : Integer;
  EDocStreet : LargeString;
  EDocStreetNumber : LargeString;
  EDocBuildingNumber : Integer;
  EDocZipCode : LargeString;
  EDocCity : LargeString;
  EDocCountry : LargeString;
  EDocDistrict : LargeString;
  EDocRepresentativeFirstName : LargeString;
  EDocRepresentativeSurname : LargeString;
  EDocRepresentativeCompany : LargeString;
  EDocRepresentativeFiscalCode : LargeString;
  EDocRepresentativeAdditionalId : LargeString;
  EDocPECAddress : LargeString;
  IPACodeForPA : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  ExemptionMaxAmountValidationType : Integer;
  ECommerceMerchantID : LargeString;
  UseBillToAddrToDetermineTax : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  DefaultTransporterEntry : Integer;
  DefaultTransporterLineNumber : Integer;
  FCERelevant : Integer;
  FCEValidateBaseDelivery : Integer;
  MainUsage : Integer;
  EBooksVATExemptionCause : Integer;
  U_Potential : Integer;
  U_FAXBuchhaltung : LargeString;
  U_Planung_E : Integer;
  U_Planung_U : Integer;
  U_Kundenbesuche : Integer;
  U_COR_FormType : Integer;
  U_BuchaltungInfo : LargeString;
  U_ReKopien : Integer;
  U_BD_Erst : LargeString;
  U_BD_Datev : LargeString;
  U_DATANORMK : LargeString;
  U_L_WEBSUCHE : LargeString;
  U_DATANORMI : LargeString;
  U_Kundenbetreuer : LargeString;
  U_KDINFOPREIS : LargeString;
  U_KDINFOLV : LargeString;
  U_KDINFOTECHNIK : LargeString;
  U_KDINFOBESONDERS : LargeString;
  U_ADTOUR : LargeString;
  U_Planung_E_FJ : Integer;
  U_Planung_U_FJ : Integer;
  U_Kundenbesuche_FJ : Integer;
  U_actovent : LargeString;
  U_KDINFOFRACHT : LargeString;
  U_Temp_Preis : LargeString;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  BPAddresses : many SAPB1.BPAddress;
  ContactEmployees : many SAPB1.ContactEmployee;
  BPAccountReceivablePaybleCollection : many SAPB1.BPAccountReceivablePayble;
  BPPaymentMethods : many SAPB1.BPPaymentMethod;
  BPWithholdingTaxCollection : many SAPB1.BPWithholdingTax;
  BPPaymentDates : many SAPB1.BPPaymentDate;
  BPBranchAssignment : many SAPB1.BPBranchAssignmentItem;
  BPBankAccounts : many SAPB1.BPBankAccount;
  BPFiscalTaxIDCollection : many SAPB1.BPFiscalTaxID;
  DiscountGroups : many SAPB1.DiscountGroup;
  BPIntrastatExtension : SAPB1.BPIntrastatExtension;
  BPBlockSendingMarketingContents : many SAPB1.BPBlockSendingMarketingContent;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  LandedCosts : Association to many SAPB1.LandedCosts {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransfers : Association to many SAPB1.StockTransfers {  };
  @cds.ambiguous : 'missing on condition?'
  Warehouses : Association to many SAPB1.Warehouses {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CustomerEquipmentCards : Association to many SAPB1.CustomerEquipmentCards {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  PartnersSetups : Association to many SAPB1.PartnersSetups {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  AlternateCatNum : Association to many SAPB1.AlternateCatNum {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  MaterialRevaluation : Association to many SAPB1.MaterialRevaluation {  };
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceContracts : Association to many SAPB1.ServiceContracts {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryTransferRequests : Association to many SAPB1.InventoryTransferRequests {  };
  @cds.ambiguous : 'missing on condition?'
  DeductionTaxHierarchies : Association to many SAPB1.DeductionTaxHierarchies {  };
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransferDrafts : Association to many SAPB1.StockTransferDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartnerGroup : Association to one SAPB1.BusinessPartnerGroups on BusinessPartnerGroup.Code = GroupCode;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PayTermsGrpCode;
  @cds.ambiguous : 'missing on condition?'
  PriceList : Association to one SAPB1.PriceLists on PriceList.PriceListNo = PriceListNum;
  @cds.ambiguous : 'missing on condition?'
  CommissionGroup : Association to one SAPB1.CommissionGroups on CommissionGroup.CommissionGroupCode = CommissionGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = RateDiffAccount;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  VatGroup2 : Association to one SAPB1.VatGroups on VatGroup2.Code = VatGroup;
  @cds.ambiguous : 'missing on condition?'
  ShippingType2 : Association to one SAPB1.ShippingTypes on ShippingType2.Code = ShippingType;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  CreditCard : Association to one SAPB1.CreditCards on CreditCard.CreditCardCode = CreditCardCode;
  @cds.ambiguous : 'missing on condition?'
  BPPriority : Association to one SAPB1.BPPriorities on BPPriority.Priority = Priority;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = FormCode1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PeymentMethodCode;
  @cds.ambiguous : 'missing on condition?'
  DunningLetter : Association to one SAPB1.DunningLetters on DunningLetter.RowNumber = DunningLevel;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockDescription;
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCode : Association to one SAPB1.WithholdingTaxCodes on WithholdingTaxCode.WTCode = WTCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DefaultTechnician;
  @cds.ambiguous : 'missing on condition?'
  Territory2 : Association to one SAPB1.Territories on Territory2.TerritoryID = Territory;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = ProjectCode;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxCode : Association to one SAPB1.SalesTaxCodes on SalesTaxCode.Code = VatGroupLatinAmerica;
  @cds.ambiguous : 'missing on condition?'
  DunningTerm2 : Association to one SAPB1.DunningTerms on DunningTerm2.Code = DunningTerm;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  DeductionTaxGroup : Association to one SAPB1.DeductionTaxGroups on DeductionTaxGroup.GroupKey = WithholdingTaxDeductionGroup;
  @cds.ambiguous : 'missing on condition?'
  ClosingDateProcedure : Association to one SAPB1.ClosingDateProcedure on ClosingDateProcedure.ClosingDateNum = ClosingDateProcedureNumber;
  @cds.ambiguous : 'missing on condition?'
  BankChargesAllocationCode2 : Association to one SAPB1.BankChargesAllocationCodes on BankChargesAllocationCode2.Code = BankChargesAllocationCode;
  @cds.ambiguous : 'missing on condition?'
  Industry2 : Association to one SAPB1.Industries on Industry2.IndustryCode = Industry;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Campaign : Association to one SAPB1.Campaigns on Campaign.CampaignNumber = CampaignNumber;
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreement : Association to one SAPB1.BlanketAgreements on BlanketAgreement.AgreementNo = DefaultBlanketAgreementNumber;
  @cds.ambiguous : 'missing on condition?'
  EWBTransporter : Association to one SAPB1.EWBTransporters on EWBTransporter.AbsEntry = DefaultTransporterEntry;
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  SalesTaxInvoices : Association to many SAPB1.SalesTaxInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  DepreciationAreas : Association to many SAPB1.DepreciationAreas {  };
  @cds.ambiguous : 'missing on condition?'
  SpecialPrices : Association to many SAPB1.SpecialPrices {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagements : Association to many SAPB1.ProjectManagements {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  BankPages : Association to many SAPB1.BankPages {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseTaxInvoices : Association to many SAPB1.PurchaseTaxInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPlaces : Association to many SAPB1.BusinessPlaces {  };
  @cds.ambiguous : 'missing on condition?'
  BPVatExemptions : Association to many SAPB1.BPVatExemptions {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.PaymentRunExport {
  key AbsoluteEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RunDate : DateTime;
  VendorNum : LargeString;
  CustomerNum : LargeString;
  PaymentMethod : LargeString;
  DocNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FiscalYear : DateTime;
  Countery : LargeString;
  CompanyTaxNum : LargeString;
  PayeeName : LargeString;
  PayeePostalCode : LargeString;
  PayeeCity : LargeString;
  PayeeStreet : LargeString;
  PayeeCountry : LargeString;
  PayeeState : LargeString;
  PayeeBankName : LargeString;
  PayeeBankZip : LargeString;
  PayeeBankCity : LargeString;
  PayeeBankStreet : LargeString;
  PayeeBankCountry : LargeString;
  PayeeBankAccount : LargeString;
  PayeeBankCode : LargeString;
  PayeeBankCtrlKey : LargeString;
  PayeeBankSwiftNum : LargeString;
  PayeeBankIBAN : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  BankAccount : LargeString;
  BankCountry : LargeString;
  BankCode : LargeString;
  BankIBAN : LargeString;
  GLAccount : LargeString;
  Currency : LargeString;
  DocAmountLocal : Double;
  DocCurrnecy : LargeString;
  DocAmountForign : Double;
  DocCashDiscount : Double;
  DocCashDiscountForign : Double;
  DocNumOffieldPaid : Integer;
  DocRate : Double;
  WizCode : Integer;
  CollectionAuthorization : Integer;
  PayeeBankPostOffice : Integer;
  PayeeBankNextCheckNumber : Integer;
  PayeeBankHouseBank : Integer;
  PayeeBankBlock : LargeString;
  PayeeBankCounty : LargeString;
  PayeeBankState : LargeString;
  PayeeBankBISR : Integer;
  PayeeBankUserNum1 : LargeString;
  PayeeBankUserNum2 : LargeString;
  PayeeBankUserNum3 : LargeString;
  PayeeBankUserNum4 : LargeString;
  InstructionKey : LargeString;
  PaymentFormat : LargeString;
  CompanyName : LargeString;
  CompanyAddress : LargeString;
  Status : Integer;
  CompIsrBillerID : LargeString;
  VendorIsrBillerID : LargeString;
  AdditionalIdNumber : LargeString;
  OrganizationNumber : LargeString;
  PayeeBankBranch : LargeString;
  PaymentBankBranch : LargeString;
  UserName : LargeString;
  UserEMail : LargeString;
  UserMobilePhoneNumber : LargeString;
  UserFaxNumber : LargeString;
  UserDepartment : Integer;
  DebitMemo : Integer;
  EUInternalTransfer : Integer;
  FilePath : LargeString;
  OrderingParty : LargeString;
  PaymentBankControlKey : LargeString;
  PayeeTaxNumber : LargeString;
  PaymentKeyCode : LargeString;
  PayeeReferenceDetails : LargeString;
  FormatName : LargeString;
  PaymentDonewithCheck : Integer;
  CompanyBlock : LargeString;
  CompanyCity : LargeString;
  CompanyCounty : LargeString;
  CompanyState : LargeString;
  CompanyStreet : LargeString;
  CompanyZipCode : LargeString;
  PaymentBankCharges : LargeString;
  PaymentBankUserNo1 : LargeString;
  PaymentBankUserNo2 : LargeString;
  PaymentBankUserNo3 : LargeString;
  PaymentBankUserNo4 : LargeString;
  PaymentBankChargesAllocationCode : LargeString;
  PaymentOrderNum : Integer;
  FreeText1 : LargeString;
  FreeText2 : LargeString;
  FreeText3 : LargeString;
  RowType : Integer;
  PaymentRunExport_Lines : many SAPB1.PaymentRunExport_Line;
  @cds.ambiguous : 'missing on condition?'
  BankChargesAllocationCode : Association to one SAPB1.BankChargesAllocationCodes on BankChargesAllocationCode.Code = PaymentBankCharges;
};

@cds.persistence.skip : true
entity SAPB1.U_BBLOG1 {
  key Code : LargeString;
  Name : LargeString;
  U_LogID : Integer;
  U_LineNum : Integer;
  U_TblName : LargeString;
  U_FldName : LargeString;
  U_ValOld : LargeString;
  U_ValNew : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.WebClientNotifications {
  key Guid : LargeString;
  UserId : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActivityDate : DateTime;
  ReadStatus : LargeString;
  IsDismissed : LargeString;
  NotiType : Integer;
};

@cds.persistence.skip : true
entity SAPB1.JournalEntryDocumentTypes {
  key JournalEntryType : LargeString;
  DocTypeDescription : LargeString;
  ShortName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  JournalEntries : Association to many SAPB1.JournalEntries {  };
};

@cds.persistence.skip : true
entity SAPB1.Banks {
  BankCode : LargeString;
  BankName : LargeString;
  AccountforOutgoingChecks : LargeString;
  BranchforOutgoingChecks : LargeString;
  NextCheckNumber : Integer;
  SwiftNo : LargeString;
  IBAN : LargeString;
  CountryCode : LargeString;
  PostOffice : Integer;
  key AbsoluteEntry : Integer;
  DefaultBankAccountKey : Integer;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = CountryCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  HouseBankAccounts : Association to many SAPB1.HouseBankAccounts {  };
};

@cds.persistence.skip : true
entity SAPB1.ServiceCallOrigins {
  key OriginID : Integer;
  Name : LargeString;
  Description : LargeString;
  Active : Integer;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
};

@cds.persistence.skip : true
entity SAPB1.ChooseFromList {
  key ObjectName : LargeString;
  ChooseFromList_Lines : many SAPB1.ChooseFromList_Line;
};

@cds.persistence.skip : true
entity SAPB1.ChartOfAccounts {
  key Code : LargeString;
  Name : LargeString;
  Balance : Double;
  CashAccount : Integer;
  BudgetAccount : Integer;
  ActiveAccount : Integer;
  PrimaryAccount : Integer;
  AccountLevel : Integer;
  DataExportCode : LargeString;
  FatherAccountKey : LargeString;
  ExternalCode : LargeString;
  RateConversion : Integer;
  TaxLiableAccount : Integer;
  TaxExemptAccount : Integer;
  ExternalReconNo : Integer;
  InternalReconNo : Integer;
  AccountType : Integer;
  AcctCurrency : LargeString;
  Balance_syscurr : Double;
  Balance_FrgnCurr : Double;
  Protected : Integer;
  ReconciledAccount : Integer;
  LiableForAdvances : Integer;
  ForeignName : LargeString;
  Details : LargeString;
  ProjectCode : LargeString;
  RevaluationCoordinated : Integer;
  LockManualTransaction : Integer;
  FormatCode : LargeString;
  AllowChangeVatGroup : Integer;
  DefaultVatGroup : LargeString;
  Category : Integer;
  TransactionCode : LargeString;
  LoadingType : Integer;
  LoadingFactorCode : LargeString;
  LoadingFactorCode2 : LargeString;
  LoadingFactorCode3 : LargeString;
  LoadingFactorCode4 : LargeString;
  LoadingFactorCode5 : LargeString;
  PlanningLevel : LargeString;
  DatevAccount : LargeString;
  DatevAutoAccount : Integer;
  DatevFirstDataEntry : Integer;
  AllowMultipleLinking : Integer;
  ProjectRelevant : Integer;
  DistributionRuleRelevant : Integer;
  DistributionRule2Relevant : Integer;
  DistributionRule3Relevant : Integer;
  DistributionRule4Relevant : Integer;
  DistributionRule5Relevant : Integer;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AccountPurposeCode : Integer;
  ReferentialAccountCode : LargeString;
  ValidFor : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  ValidRemarks : LargeString;
  FrozenFor : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FrozenFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FrozenTo : DateTime;
  FrozenRemarks : LargeString;
  BlockManualPosting : Integer;
  CashFlowRelevant : Integer;
  PCN874ReportRelevant : Integer;
  PrimaryClosingAccount : LargeString;
  CostAccountingOnly : Integer;
  CostElementRelevant : Integer;
  CostElementCode : LargeString;
  StandardAccountCode : LargeString;
  TaxonomyCode : LargeString;
  IncomeClassificationCategory : Integer;
  IncomeClassificationType : Integer;
  ExpenseClassificationCategory : Integer;
  ExpenseClassificationType : Integer;
  U_BP_NeSta : Integer;
  U_BP_GLinT : LargeString;
  U_BP_TypCb : LargeString;
  U_BP_TyImp : LargeString;
  U_BP_JESe : LargeString;
  U_BP_IPSe : LargeString;
  U_BP_OPSe : LargeString;
  U_COR_FIN_Cls : LargeString;
  U_BD_Erst : LargeString;
  U_BD_Datev : LargeString;
  U_BD_IsAut : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Warehouses : Association to many SAPB1.Warehouses {  };
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCodes : Association to many SAPB1.WithholdingTaxCodes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  VatGroups : Association to many SAPB1.VatGroups {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  FAAccountDeterminations : Association to many SAPB1.FAAccountDeterminations {  };
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethods : Association to many SAPB1.WizardPaymentMethods {  };
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  AdditionalExpenses : Association to many SAPB1.AdditionalExpenses {  };
  @cds.ambiguous : 'missing on condition?'
  CustomsGroups : Association to many SAPB1.CustomsGroups {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = AcctCurrency;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = ProjectCode;
  @cds.ambiguous : 'missing on condition?'
  AccountCategory : Association to one SAPB1.AccountCategory on AccountCategory.CategoryCode = Category;
  @cds.ambiguous : 'missing on condition?'
  TransactionCode2 : Association to one SAPB1.TransactionCodes on TransactionCode2.Code = TransactionCode;
  @cds.ambiguous : 'missing on condition?'
  DistributionRule : Association to one SAPB1.DistributionRules on DistributionRule.FactorCode = LoadingFactorCode;
  @cds.ambiguous : 'missing on condition?'
  CostElement : Association to one SAPB1.CostElements on CostElement.Code = CostElementCode;
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  SalesTaxAuthorities : Association to many SAPB1.SalesTaxAuthorities {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  DunningTerms : Association to many SAPB1.DunningTerms {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  HouseBankAccounts : Association to many SAPB1.HouseBankAccounts {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  ExpenseTypes : Association to many SAPB1.ExpenseTypes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  BankPages : Association to many SAPB1.BankPages {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPlaces : Association to many SAPB1.BusinessPlaces {  };
  @cds.ambiguous : 'missing on condition?'
  CreditCards : Association to many SAPB1.CreditCards {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to many SAPB1.ItemGroups {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
  @cds.ambiguous : 'missing on condition?'
  AccrualTypes : Association to many SAPB1.AccrualTypes {  };
};

@cds.persistence.skip : true
entity SAPB1.InventoryCycles {
  key CycleCode : Integer;
  CycleName : LargeString;
  Frequency : Integer;
  Day : Integer;
  Hour : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  NextCountingDate : DateTime;
  Interval : Integer;
  Sunday : Integer;
  Monday : Integer;
  Tuesday : Integer;
  Wednesday : Integer;
  Thursday : Integer;
  Friday : Integer;
  Saturday : Integer;
  RepeatOption : Integer;
  RecurrenceSequenceSpecifier : Integer;
  RecurrenceDayInMonth : Integer;
  RecurrenceMonth : Integer;
  RecurrenceDayOfWeek : Integer;
  endType : Integer;
  MaxOccurrence : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SeriesEndDate : DateTime;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to many SAPB1.ItemGroups {  };
};

@cds.persistence.skip : true
entity SAPB1.AdditionalExpenses {
  Name : LargeString;
  RevenuesAccount : LargeString;
  ExpenseAccount : LargeString;
  TaxLiable : Integer;
  FixedAmountRevenues : Double;
  FixedAmountExpenses : Double;
  OutputVATGroup : LargeString;
  InputVATGroup : LargeString;
  DistributionMethod : Integer;
  Includein1099 : Integer;
  FreightOffsetAccount : LargeString;
  WTLiable : LargeString;
  key ExpensCode : Integer;
  ExpenseExemptedAccount : LargeString;
  RevenuesExemptedAccount : LargeString;
  DistributionRule : LargeString;
  DrawingMethod : Integer;
  FreightType : Integer;
  Stock : Integer;
  LastPurchasePrice : Integer;
  Project : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = RevenuesAccount;
  @cds.ambiguous : 'missing on condition?'
  VatGroup : Association to one SAPB1.VatGroups on VatGroup.Code = OutputVATGroup;
  @cds.ambiguous : 'missing on condition?'
  DistributionRule6 : Association to one SAPB1.DistributionRules on DistributionRule6.FactorCode = DistributionRule;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODRN {
  key Code : LargeString;
  Name : LargeString;
  U_RunID : Integer;
  U_DprArID : Integer;
  U_Status : Integer;
  U_Canceled : LargeString;
  U_RvrslRun : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_PostDate : DateTime;
  U_FisYear : LargeString;
  U_Period : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_KeyDate : DateTime;
  U_Remark : LargeString;
  U_NumDocs : Integer;
  U_SumDepr : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_RelDate : DateTime;
  U_RelTime : Time;
  U_RelUser : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.BrazilStringIndexers {
  IndexerType : Integer;
  Code : LargeString;
  Description : LargeString;
  key ID : Integer;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCodes : Association to many SAPB1.WithholdingTaxCodes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPlaces : Association to many SAPB1.BusinessPlaces {  };
  @cds.ambiguous : 'missing on condition?'
  BrazilBeverageIndexers : Association to many SAPB1.BrazilBeverageIndexers {  };
} actions {
  action GetIndexerTypeList() returns many SAPB1.BrazilStringIndexerParams;
};

@cds.persistence.skip : true
entity SAPB1.Warehouses {
  Street : LargeString;
  StockInflationOffsetAccount : LargeString;
  ZipCode : LargeString;
  DecreasingAccount : LargeString;
  PurchaseAccount : LargeString;
  EURevenuesAccount : LargeString;
  ReturningAccount : LargeString;
  ShippedGoodsAccount : LargeString;
  StockInflationAdjustAccount : LargeString;
  AllowUseTax : Integer;
  CostInflationAccount : LargeString;
  ForeignExpensesAccount : LargeString;
  EUExpensesAccount : LargeString;
  CostInflationOffsetAccount : LargeString;
  ExpensesClearingAccount : LargeString;
  PurchaseReturningAccount : LargeString;
  VATInRevenueAccount : LargeString;
  FederalTaxID : LargeString;
  Location : Integer;
  Block : LargeString;
  ExpenseAccount : LargeString;
  DecreaseGLAccount : LargeString;
  RevenuesAccount : LargeString;
  TaxGroup : LargeString;
  ExemptRevenuesAccount : LargeString;
  PurchaseOffsetAccount : LargeString;
  CostOfGoodsSold : LargeString;
  key WarehouseCode : LargeString;
  State : LargeString;
  City : LargeString;
  PriceDifferencesAccount : LargeString;
  VarianceAccount : LargeString;
  Country : LargeString;
  IncreaseGLAccount : LargeString;
  ExchangeRateDifferencesAccount : LargeString;
  WIPMaterialAccount : LargeString;
  WarehouseName : LargeString;
  DropShip : Integer;
  WIPMaterialVarianceAccount : LargeString;
  TransfersAcc : LargeString;
  InternalKey : Integer;
  ForeignRevenuesAcc : LargeString;
  BuildingFloorRoom : LargeString;
  County : LargeString;
  Nettable : Integer;
  IncreasingAcc : LargeString;
  ExpenseOffsetingAct : LargeString;
  GoodsClearingAcc : LargeString;
  StockAccount : LargeString;
  BusinessPlaceID : Integer;
  PurchaseCreditAcc : LargeString;
  EUPurchaseCreditAcc : LargeString;
  ForeignPurchaseCreditAcc : LargeString;
  SalesCreditAcc : LargeString;
  SalesCreditEUAcc : LargeString;
  ExemptedCredits : LargeString;
  SalesCreditForeignAcc : LargeString;
  NegativeInventoryAdjustmentAccount : LargeString;
  WHShipToName : LargeString;
  Excisable : Integer;
  WHIncomingCenvatAccount : LargeString;
  WHOutgoingCenvatAccount : LargeString;
  StockInTransitAccount : LargeString;
  WipOffsetProfitAndLossAccount : LargeString;
  InventoryOffsetProfitAndLossAccount : LargeString;
  AddressType : LargeString;
  StreetNo : LargeString;
  Storekeeper : Integer;
  Shipper : LargeString;
  ManageSerialAndBatchNumbers : Integer;
  GlobalLocationNumber : LargeString;
  EnableBinLocations : Integer;
  BinLocCodeSeparator : LargeString;
  DefaultBin : Integer;
  DefaultBinEnforced : Integer;
  AutoAllocOnIssue : Integer;
  EnableReceivingBinLocations : Integer;
  ReceivingBinLocationsBy : Integer;
  PurchaseBalanceAccount : LargeString;
  Inactive : Integer;
  RestrictReceiptToEmptyBinLocation : Integer;
  ReceiveUpToMaxQuantity : Integer;
  AutoAllocOnReceipt : Integer;
  ReceiveUpToMaxWeight : Integer;
  ReceiveUpToMethod : Integer;
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransfers : Association to many SAPB1.StockTransfers {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = StockInflationOffsetAccount;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = Location;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxCode : Association to one SAPB1.SalesTaxCodes on SalesTaxCode.Code = TaxGroup;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = Storekeeper;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = Shipper;
  @cds.ambiguous : 'missing on condition?'
  BinLocation : Association to one SAPB1.BinLocations on BinLocation.AbsEntry = DefaultBin;
  @cds.ambiguous : 'missing on condition?'
  BinLocations : Association to many SAPB1.BinLocations {  };
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryTransferRequests : Association to many SAPB1.InventoryTransferRequests {  };
  @cds.ambiguous : 'missing on condition?'
  ResourceCapacities : Association to many SAPB1.ResourceCapacities {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransferDrafts : Association to many SAPB1.StockTransferDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPlaces : Association to many SAPB1.BusinessPlaces {  };
  @cds.ambiguous : 'missing on condition?'
  StockTakings : Association to many SAPB1.StockTakings {  };
};

@cds.persistence.skip : true
entity SAPB1.BinLocationAttributes {
  Attribute : Integer;
  Code : LargeString;
  key AbsEntry : Integer;
  @cds.ambiguous : 'missing on condition?'
  BinLocationField : Association to one SAPB1.BinLocationFields on BinLocationField.AbsEntry = Attribute;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseDeliveryNotes {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
} actions {
  action Cancel();
  action Close();
  action Reopen();
  action CreateCancellationDocument() returns SAPB1.PurchaseDeliveryNotes;
};

@cds.persistence.skip : true
entity SAPB1.CorrectionPurchaseInvoice {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.CorrectionInvoiceReversal {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.CorrectionInvoice {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.InventoryGenEntries {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.Orders {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.InventoryGenExits {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.Drafts {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseCreditNotes {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.ReturnRequest {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.DeliveryNotes {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseInvoices {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.Invoices {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.CreditNotes {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.DownPayments {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseDownPayments {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseReturns {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseOrders {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.Quotations {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.Returns {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.GoodsReturnRequest {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseRequests {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.CorrectionPurchaseInvoiceReversal {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.PurchaseQuotations {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  NumAtCard : LargeString;
  DocTotal : Double;
  AttachmentEntry : Integer;
  DocCurrency : LargeString;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PaymentGroupCode : Integer;
  DocTime : Time;
  SalesPersonCode : Integer;
  TransportationCode : Integer;
  Confirmed : Integer;
  ImportFileNum : Integer;
  SummeryType : Integer;
  ContactPersonCode : Integer;
  ShowSCN : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  PartialSupply : Integer;
  DocObjectCode : Integer;
  ShipToCode : LargeString;
  Indicator : LargeString;
  FederalTaxID : LargeString;
  DiscountPercent : Double;
  PaymentReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  VatSum : Double;
  VatSumSys : Double;
  VatSumFc : Double;
  NetProcedure : Integer;
  DocTotalFc : Double;
  DocTotalSys : Double;
  Form1099 : Integer;
  Box1099 : LargeString;
  RevisionPo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequriedDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  BlockDunning : Integer;
  Submitted : Integer;
  Segment : Integer;
  PickStatus : Integer;
  Pick : Integer;
  PaymentMethod : LargeString;
  PaymentBlock : Integer;
  PaymentBlockEntry : Integer;
  CentralBankIndicator : LargeString;
  MaximumCashDiscount : Integer;
  Reserve : Integer;
  Project : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExemptionValidityDateTo : DateTime;
  WareHouseUpdateType : Integer;
  Rounding : Integer;
  ExternalCorrectedDocNum : LargeString;
  InternalCorrectedDocNum : Integer;
  NextCorrectingDocument : Integer;
  DeferredTax : Integer;
  TaxExemptionLetterNum : LargeString;
  WTApplied : Double;
  WTAppliedFC : Double;
  BillOfExchangeReserved : Integer;
  AgentCode : LargeString;
  WTAppliedSC : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NumberOfInstallments : Integer;
  ApplyTaxOnFirstInstallment : Integer;
  WTNonSubjectAmount : Double;
  WTNonSubjectAmountSC : Double;
  WTNonSubjectAmountFC : Double;
  WTExemptedAmount : Double;
  WTExemptedAmountSC : Double;
  WTExemptedAmountFC : Double;
  BaseAmount : Double;
  BaseAmountSC : Double;
  BaseAmountFC : Double;
  WTAmount : Double;
  WTAmountSC : Double;
  WTAmountFC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  DocumentsOwner : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocumentSubType : Integer;
  BPChannelCode : LargeString;
  BPChannelContact : Integer;
  Address2 : LargeString;
  DocumentStatus : Integer;
  PeriodIndicator : LargeString;
  PayToCode : LargeString;
  ManualNumber : LargeString;
  UseShpdGoodsAct : Integer;
  IsPayToBank : Integer;
  PayToBankCountry : LargeString;
  PayToBankCode : LargeString;
  PayToBankAccountNo : LargeString;
  PayToBankBranch : LargeString;
  BPL_IDAssignedToInvoice : Integer;
  DownPayment : Double;
  ReserveInvoice : Integer;
  LanguageCode : Integer;
  TrackingNumber : LargeString;
  PickRemark : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  SequenceCode : Integer;
  SequenceSerial : Integer;
  SeriesString : LargeString;
  SubSeriesString : LargeString;
  SequenceModel : LargeString;
  UseCorrectionVATGroup : Integer;
  TotalDiscount : Double;
  DownPaymentAmount : Double;
  DownPaymentPercentage : Double;
  DownPaymentType : Integer;
  DownPaymentAmountSC : Double;
  DownPaymentAmountFC : Double;
  VatPercent : Double;
  ServiceGrossProfitPercent : Double;
  OpeningRemarks : LargeString;
  ClosingRemarks : LargeString;
  RoundingDiffAmount : Double;
  RoundingDiffAmountFC : Double;
  RoundingDiffAmountSC : Double;
  Cancelled : Integer;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  ControlAccount : LargeString;
  InsuranceOperation347 : Integer;
  ArchiveNonremovableSalesQuotation : Integer;
  GTSChecker : Integer;
  GTSPayee : Integer;
  ExtraMonth : Integer;
  ExtraDays : Integer;
  CashDiscountDateOffset : Integer;
  StartFrom : Integer;
  NTSApproved : Integer;
  ETaxWebSite : Integer;
  ETaxNumber : LargeString;
  NTSApprovedNumber : LargeString;
  EDocGenerationType : Integer;
  EDocSeries : Integer;
  EDocNum : LargeString;
  EDocExportFormat : Integer;
  EDocStatus : Integer;
  EDocErrorCode : LargeString;
  EDocErrorMessage : LargeString;
  DownPaymentStatus : Integer;
  GroupSeries : Integer;
  GroupNumber : Integer;
  GroupHandWritten : Integer;
  ReopenOriginalDocument : Integer;
  ReopenManuallyClosedOrCanceledDocument : Integer;
  CreateOnlineQuotation : Integer;
  POSEquipmentNumber : LargeString;
  POSManufacturerSerialNumber : LargeString;
  POSCashierNumber : Integer;
  ApplyCurrentVATRatesForDownPaymentsToDraw : Integer;
  ClosingOption : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SpecifiedClosingDate : DateTime;
  OpenForLandedCosts : Integer;
  AuthorizationStatus : Integer;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
  RelevantToGTS : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AnnualInvoiceDeclarationReference : Integer;
  Supplier : LargeString;
  Releaser : Integer;
  Receiver : Integer;
  BlanketAgreementNumber : Integer;
  IsAlteration : Integer;
  CancelStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssetValueDate : DateTime;
  Requester : LargeString;
  RequesterName : LargeString;
  RequesterBranch : Integer;
  RequesterDepartment : Integer;
  RequesterEmail : LargeString;
  SendNotification : Integer;
  ReqType : Integer;
  InvoicePayment : Integer;
  DocumentDelivery : Integer;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  ReuseDocumentNum : Integer;
  ReuseNotaFiscalNum : Integer;
  PrintSEPADirect : Integer;
  FiscalDocNum : LargeString;
  POSDailySummaryNo : Integer;
  POSReceiptNo : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  InterimType : Integer;
  RelatedType : Integer;
  RelatedEntry : Integer;
  SAPPassport : LargeString;
  DocumentTaxID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfReportingControlStatementVAT : DateTime;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  POS_CashRegister : Integer;
  UpdateTime : Time;
  CreateQRCodeFrom : LargeString;
  PriceMode : Integer;
  DownPaymentTrasactionID : LargeString;
  Revision : Integer;
  OriginalRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalRefDate : DateTime;
  GSTTransactionType : Integer;
  OriginalCreditOrDebitNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalCreditOrDebitDate : DateTime;
  ECommerceOperator : LargeString;
  ECommerceGSTIN : LargeString;
  TaxInvoiceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxInvoiceDate : DateTime;
  ShipFrom : LargeString;
  CommissionTrade : Integer;
  CommissionTradeReturn : Integer;
  UseBillToAddrToDetermineTax : Integer;
  IssuingReason : Integer;
  Cig : Integer;
  Cup : Integer;
  EDocType : Integer;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  Document_ApprovalRequests : many SAPB1.Document_ApprovalRequest;
  DocumentLines : many SAPB1.DocumentLine;
  EWayBillDetails : SAPB1.EWayBillDetails;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  DocumentAdditionalExpenses : many SAPB1.DocumentAdditionalExpense;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  DocumentPackages : many SAPB1.DocumentPackage;
  DocumentSpecialLines : many SAPB1.DocumentSpecialLine;
  DocumentInstallments : many SAPB1.DocumentInstallment;
  DownPaymentsToDraw : many SAPB1.DownPaymentToDraw;
  TaxExtension : SAPB1.TaxExtension;
  AddressExtension : SAPB1.AddressExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  BaseType : Integer;
  BaseEntry : Integer;
  SOIWizardId : Integer;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PaymentGroupCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportationCode;
  @cds.ambiguous : 'missing on condition?'
  LandedCost : Association to one SAPB1.LandedCosts on LandedCost.DocEntry = ImportFileNum;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  Forms1099 : Association to one SAPB1.Forms1099 on Forms1099.FormCode = Form1099;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethod : Association to one SAPB1.WizardPaymentMethods on WizardPaymentMethod.PaymentMethodCode = PaymentMethod;
  @cds.ambiguous : 'missing on condition?'
  PaymentBlock2 : Association to one SAPB1.PaymentBlocks on PaymentBlock2.AbsEntry = PaymentBlockEntry;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DocumentsOwner;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPL_IDAssignedToInvoice;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
  @cds.ambiguous : 'missing on condition?'
  NFModel : Association to one SAPB1.NFModels on NFModel.AbsEntry = SequenceModel;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ControlAccount;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
  @cds.ambiguous : 'missing on condition?'
  Branch : Association to one SAPB1.Branches on Branch.Code = RequesterBranch;
  @cds.ambiguous : 'missing on condition?'
  Department : Association to one SAPB1.Departments on Department.Code = RequesterDepartment;
  @cds.ambiguous : 'missing on condition?'
  POSDailySummary : Association to one SAPB1.POSDailySummary on POSDailySummary.AbsEntry = POSDailySummaryNo;
};

@cds.persistence.skip : true
entity SAPB1.U_BD_SPATH {
  key Code : LargeString;
  Name : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ExpDate : DateTime;
  U_Path : LargeString;
  U_Form : LargeString;
  U_AdvName : LargeString;
  U_AdvNum : LargeString;
  U_ClNum : LargeString;
  U_DFVShort : LargeString;
  U_DNR : LargeString;
  U_ANR : LargeString;
  U_PP : LargeString;
  U_PWD : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ToDate : DateTime;
};

@cds.persistence.skip : true
entity SAPB1.BinLocationFields {
  key AbsEntry : Integer;
  FieldType : Integer;
  FieldNumber : Integer;
  Name : LargeString;
  Activated : Integer;
  DefaultFieldName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  WarehouseSublevelCodes : Association to many SAPB1.WarehouseSublevelCodes {  };
  @cds.ambiguous : 'missing on condition?'
  BinLocationAttributes : Association to many SAPB1.BinLocationAttributes {  };
};

@cds.persistence.skip : true
entity SAPB1.ServiceCalls {
  key ServiceCallID : Integer;
  Subject : LargeString;
  CustomerCode : LargeString;
  CustomerName : LargeString;
  ContactCode : Integer;
  ManufacturerSerialNum : LargeString;
  InternalSerialNum : LargeString;
  ContractID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ContractEndDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ResolutionDate : DateTime;
  ResolutionTime : Time;
  Origin : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  ItemGroupCode : Integer;
  Status : Integer;
  Priority : Integer;
  CallType : Integer;
  ProblemType : Integer;
  AssigneeCode : Integer;
  Description : LargeString;
  TechnicianCode : Integer;
  Resolution : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  CreationTime : Time;
  Responder : Integer;
  UpdatedTime : Time;
  BelongsToAQueue : Integer;
  ResponseByTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ResponseByDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ResolutionOnDate : DateTime;
  ResponseOnTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ResponseOnDate : DateTime;
  ClosingTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AssignedDate : DateTime;
  Queue : LargeString;
  ResponseAssignee : Integer;
  EntitledforService : Integer;
  ResolutionOnTime : Time;
  AssignedTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  Series : Integer;
  DocNum : Integer;
  HandWritten : Integer;
  PeriodIndicator : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  StartTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDueDate : DateTime;
  EndTime : Time;
  Duration : Double;
  DurationType : Integer;
  Reminder : Integer;
  ReminderPeriod : Double;
  ReminderType : Integer;
  Location : Integer;
  AddressName : LargeString;
  AddressType : Integer;
  Street : LargeString;
  City : LargeString;
  Room : LargeString;
  State : LargeString;
  Country : LargeString;
  DisplayInCalendar : Integer;
  CustomerRefNo : LargeString;
  ProblemSubType : Integer;
  AttachmentEntry : Integer;
  ServiceBPType : Integer;
  BPContactPerson : LargeString;
  BPPhone1 : LargeString;
  BPPhone2 : LargeString;
  BPCellular : LargeString;
  BPFax : LargeString;
  BPeMail : LargeString;
  BPProjectCode : LargeString;
  BPTerritory : Integer;
  BPShipToCode : LargeString;
  BPShipToAddress : LargeString;
  BPBillToCode : LargeString;
  BPBillToAddress : LargeString;
  Telephone : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  SupplementaryCode : LargeString;
  ServiceCallActivities : many SAPB1.ServiceCallActivity;
  ServiceCallInventoryExpenses : many SAPB1.ServiceCallInventoryExpense;
  ServiceCallSolutions : many SAPB1.ServiceCallSolution;
  ServiceCallSchedulings : many SAPB1.ServiceCallScheduling;
  ServiceCallBPAddressComponents : many SAPB1.ServiceCallBPAddressComponent;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CustomerCode;
  @cds.ambiguous : 'missing on condition?'
  ServiceContract : Association to one SAPB1.ServiceContracts on ServiceContract.ContractID = ContractID;
  @cds.ambiguous : 'missing on condition?'
  ServiceCallOrigin : Association to one SAPB1.ServiceCallOrigins on ServiceCallOrigin.OriginID = Origin;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to one SAPB1.ItemGroups on ItemGroups.Number = ItemGroupCode;
  @cds.ambiguous : 'missing on condition?'
  ServiceCallStatus : Association to one SAPB1.ServiceCallStatus on ServiceCallStatus.StatusId = Status;
  @cds.ambiguous : 'missing on condition?'
  ServiceCallType : Association to one SAPB1.ServiceCallTypes on ServiceCallType.CallTypeID = CallType;
  @cds.ambiguous : 'missing on condition?'
  ServiceCallProblemType : Association to one SAPB1.ServiceCallProblemTypes on ServiceCallProblemType.ProblemTypeID = ProblemType;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = AssigneeCode;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = TechnicianCode;
  @cds.ambiguous : 'missing on condition?'
  Queue2 : Association to one SAPB1.Queue on Queue2.QueueID = Queue;
  @cds.ambiguous : 'missing on condition?'
  ActivityLocation : Association to one SAPB1.ActivityLocations on ActivityLocation.Code = Location;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  ServiceCallProblemSubType : Association to one SAPB1.ServiceCallProblemSubTypes on ServiceCallProblemSubType.ProblemSubTypeID = ProblemSubType;
} actions {
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.DefaultElementsforCR {
  key Code : Integer;
  Name : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCCST {
  key Code : LargeString;
  Name : LargeString;
  U_Export : LargeString;
  U_Import : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.WarehouseSublevelCodes {
  WarehouseSublevel : Integer;
  Code : LargeString;
  Description : LargeString;
  key AbsEntry : Integer;
  @cds.ambiguous : 'missing on condition?'
  BinLocationField : Association to one SAPB1.BinLocationFields on BinLocationField.AbsEntry = WarehouseSublevel;
};

@cds.persistence.skip : true
entity SAPB1.Industries {
  IndustryDescription : LargeString;
  IndustryName : LargeString;
  key IndustryCode : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagements : Association to many SAPB1.ProjectManagements {  };
};

@cds.persistence.skip : true
entity SAPB1.StockTransfers {
  key DocEntry : Integer;
  Series : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PriceList : Integer;
  SalesPersonCode : Integer;
  FromWarehouse : LargeString;
  ToWarehouse : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  DocNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  ContactPerson : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocObjectCode : LargeString;
  AuthorizationStatus : Integer;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  EDocExportFormat : Integer;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  AttachmentEntry : Integer;
  DocumentStatus : Integer;
  ShipToCode : LargeString;
  SAPPassport : LargeString;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  StockTransfer_ApprovalRequests : many SAPB1.StockTransfer_ApprovalRequest;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  StockTransferLines : many SAPB1.StockTransferLine;
  StockTransferTaxExtension : SAPB1.StockTransferTaxExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  PriceList2 : Association to one SAPB1.PriceLists on PriceList2.PriceListNo = PriceList;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  Warehouse : Association to one SAPB1.Warehouses on Warehouse.WarehouseCode = FromWarehouse;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PriceList;
} actions {
  action Cancel();
  action Close();
  action SaveDraftToDocument();
};

@cds.persistence.skip : true
entity SAPB1.InventoryTransferRequests {
  key DocEntry : Integer;
  Series : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PriceList : Integer;
  SalesPersonCode : Integer;
  FromWarehouse : LargeString;
  ToWarehouse : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  DocNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  ContactPerson : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocObjectCode : LargeString;
  AuthorizationStatus : Integer;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  EDocExportFormat : Integer;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  AttachmentEntry : Integer;
  DocumentStatus : Integer;
  ShipToCode : LargeString;
  SAPPassport : LargeString;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  StockTransfer_ApprovalRequests : many SAPB1.StockTransfer_ApprovalRequest;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  StockTransferLines : many SAPB1.StockTransferLine;
  StockTransferTaxExtension : SAPB1.StockTransferTaxExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  PriceList2 : Association to one SAPB1.PriceLists on PriceList2.PriceListNo = PriceList;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  Warehouse : Association to one SAPB1.Warehouses on Warehouse.WarehouseCode = FromWarehouse;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PriceList;
};

@cds.persistence.skip : true
entity SAPB1.StockTransferDrafts {
  key DocEntry : Integer;
  Series : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  PriceList : Integer;
  SalesPersonCode : Integer;
  FromWarehouse : LargeString;
  ToWarehouse : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  FinancialPeriod : Integer;
  TransNum : Integer;
  DocNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  ContactPerson : Integer;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  DocObjectCode : LargeString;
  AuthorizationStatus : Integer;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  AuthorizationCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDeliveryDate : DateTime;
  StartDeliveryTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDeliveryDate : DateTime;
  EndDeliveryTime : Time;
  VehiclePlate : LargeString;
  ATDocumentType : LargeString;
  EDocExportFormat : Integer;
  ElecCommStatus : Integer;
  ElecCommMessage : LargeString;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  AttachmentEntry : Integer;
  DocumentStatus : Integer;
  ShipToCode : LargeString;
  SAPPassport : LargeString;
  U_Fertigungszeit : Time;
  U_ILTIS_LIEFERZEIT : Time;
  U_COR_FormType : Integer;
  U_Belegok : LargeString;
  U_EST1 : Integer;
  U_EST2 : Integer;
  U_EST3 : Integer;
  U_ACT1 : Integer;
  U_ACT2 : Integer;
  U_ACT3 : Integer;
  U_EST4 : Integer;
  U_ACT4 : Integer;
  U_ACT5 : Integer;
  U_BS_INFOSERVICE : LargeString;
  U_AB_OK : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_COR_BW_ToDate : DateTime;
  U_Testbeleg : LargeString;
  U_ArtikelDetail : LargeString;
  U_Intern : LargeString;
  U_Kalkulation : LargeString;
  U_PROV_Best : LargeString;
  U_AV : LargeString;
  U_qm : LargeString;
  U_Test : Integer;
  U_Rahmenvertrag : Integer;
  U_FertStand : LargeString;
  U_Eingegangen : LargeString;
  StockTransfer_ApprovalRequests : many SAPB1.StockTransfer_ApprovalRequest;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  StockTransferLines : many SAPB1.StockTransferLine;
  StockTransferTaxExtension : SAPB1.StockTransferTaxExtension;
  DocumentReferences : many SAPB1.DocumentReference;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  PriceList2 : Association to one SAPB1.PriceLists on PriceList2.PriceListNo = PriceList;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesPersonCode;
  @cds.ambiguous : 'missing on condition?'
  Warehouse : Association to one SAPB1.Warehouses on Warehouse.WarehouseCode = FromWarehouse;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsType : Association to one SAPB1.PaymentTermsTypes on PaymentTermsType.GroupNumber = PriceList;
};

@cds.persistence.skip : true
entity SAPB1.BankStatements {
  key InternalNumber : Integer;
  BankAccountKey : Integer;
  StatementNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StatementDate : DateTime;
  Status : Integer;
  Imported : Integer;
  StartingBalanceF : Double;
  EndingBalanceF : Double;
  Currency : LargeString;
  StartingBalanceL : Double;
  EndingBalanceL : Double;
  BankStatementFileHash : LargeString;
  BankStatementGUID : LargeString;
  BankStatementRows : many SAPB1.BankStatementRow;
  @cds.ambiguous : 'missing on condition?'
  HouseBankAccount : Association to one SAPB1.HouseBankAccounts on HouseBankAccount.AbsoluteEntry = BankAccountKey;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
};

@cds.persistence.skip : true
entity SAPB1.PredefinedTexts {
  key Numerator : Integer;
  TextCode : LargeString;
  Text : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.TargetGroups {
  key TargetGroupCode : LargeString;
  TargetGroupName : LargeString;
  TargetGroupType : Integer;
  TargetGroupsDetails : many SAPB1.TargetGroupsDetail;
  @cds.ambiguous : 'missing on condition?'
  Campaigns : Association to many SAPB1.Campaigns {  };
};

@cds.persistence.skip : true
entity SAPB1.InventoryPostings {
  key DocumentEntry : Integer;
  DocumentNumber : Integer;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CountDate : DateTime;
  CountTime : Time;
  Remarks : LargeString;
  Reference2 : LargeString;
  BranchID : Integer;
  PriceSource : Integer;
  PriceList : Integer;
  JournalRemark : LargeString;
  DocObjectCodeEx : LargeString;
  FinancialPeriod : Integer;
  PeriodIndicator : LargeString;
  AttachmentEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  YearEndDate : DateTime;
  InventoryPostingLines : many SAPB1.InventoryPostingLine;
  InventoryPostingDocumentReferencesCollection : many SAPB1.InventoryPostingDocumentReferences;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BranchID;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
};

@cds.persistence.skip : true
entity SAPB1.DynamicSystemStrings {
  key FormID : LargeString;
  key ItemID : LargeString;
  key ColumnID : LargeString;
  ItemString : LargeString;
  IsBold : Integer;
  IsItalics : Integer;
};

@cds.persistence.skip : true
entity SAPB1.TransportationDocument {
  key TranspDocNumber : Integer;
  NextNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostDate : DateTime;
  ElDocGenType : Integer;
  ElDocExportFormat : Integer;
  TransportationNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpirationDate : DateTime;
  VehicleID : LargeString;
  TrailerID : LargeString;
  CarrierCode : LargeString;
  IssueGate : Integer;
  AttachmentEntry : Integer;
  Canceled : Integer;
  Weight : Double;
  WeightUnit : Integer;
  TransportedTotalLC : Double;
  WarehouseCode : LargeString;
  TransportationDocumentLineDataCollection : many SAPB1.TransportationDocumentLineData;
} actions {
  action CancelTransportationDocument();
};

@cds.persistence.skip : true
entity SAPB1.Campaigns {
  key CampaignNumber : Integer;
  CampaignName : LargeString;
  CampaignType : Integer;
  TargetGroup : LargeString;
  Owner : Integer;
  Status : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FinishDate : DateTime;
  Remarks : LargeString;
  GeneratedByWizard : Integer;
  AttachementsEntry : Integer;
  TargetGroupType : Integer;
  CampaignBusinessPartners : many SAPB1.CampaignBusinessPartner;
  CampaignItems : many SAPB1.CampaignItem;
  CampaignPartners : many SAPB1.CampaignPartner;
  @cds.ambiguous : 'missing on condition?'
  TargetGroup2 : Association to one SAPB1.TargetGroups on TargetGroup2.TargetGroupCode = TargetGroup;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = Owner;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachementsEntry;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
} actions {
  action Cancel();
};

@cds.persistence.skip : true
entity SAPB1.DistributionRules {
  key FactorCode : LargeString;
  FactorDescription : LargeString;
  TotalFactor : Double;
  Direct : LargeString;
  InWhichDimension : Integer;
  Active : Integer;
  IsFixedAmount : Integer;
  DistributionRuleLines : many SAPB1.DistributionRuleLine;
  @cds.ambiguous : 'missing on condition?'
  ProductTrees : Association to many SAPB1.ProductTrees {  };
  @cds.ambiguous : 'missing on condition?'
  Dimension : Association to one SAPB1.Dimensions on Dimension.DimensionCode = InWhichDimension;
  @cds.ambiguous : 'missing on condition?'
  AdditionalExpenses : Association to many SAPB1.AdditionalExpenses {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccounts : Association to many SAPB1.ChartOfAccounts {  };
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Deposits : Association to many SAPB1.Deposits {  };
  @cds.ambiguous : 'missing on condition?'
  BudgetScenarios : Association to many SAPB1.BudgetScenarios {  };
};

@cds.persistence.skip : true
entity SAPB1.CertificateSeries {
  key AbsEntry : Integer;
  Code : LargeString;
  Section : Integer;
  Location : Integer;
  DefaultSeries : Integer;
  SeriesLines : many SAPB1.SeriesLine;
  @cds.ambiguous : 'missing on condition?'
  Section2 : Association to one SAPB1.Sections on Section2.AbsEntry = Section;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = Location;
};

@cds.persistence.skip : true
entity SAPB1.States {
  key Code : LargeString;
  key Country : LargeString;
  Name : LargeString;
  GSTCode : LargeString;
  IsUnionTerritory : Integer;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
};

@cds.persistence.skip : true
entity SAPB1.BusinessPartnerGroups {
  key Code : Integer;
  Name : LargeString;
  Type : Integer;
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
};

@cds.persistence.skip : true
entity SAPB1.TaxInvoiceReport {
  NTSApproval : Integer;
  ETaxWebSite : Integer;
  ETaxNo : LargeString;
  NTSApprovalNo : LargeString;
  OriginalNTSApprovalNo : LargeString;
  Remarks : LargeString;
  key TaxInvoiceReportNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  BusinessPlace : Integer;
  BPCode : LargeString;
  BPName : LargeString;
  BaseAmount : Double;
  TaxAmount : Double;
  Canceled : LargeString;
  ReportType : Integer;
  TaxInvoiceReportLineCollection : many SAPB1.TaxInvoiceReportLine;
  @cds.ambiguous : 'missing on condition?'
  TaxWebSite : Association to one SAPB1.TaxWebSites on TaxWebSite.AbsEntry = ETaxWebSite;
} actions {
  action CancelTaxInvoiceReport();
};

@cds.persistence.skip : true
entity SAPB1.ProfitCenters {
  key CenterCode : LargeString;
  CenterName : LargeString;
  GroupCode : LargeString;
  InWhichDimension : Integer;
  CostCenterType : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveTo : DateTime;
  Active : Integer;
  CenterOwner : Integer;
  @cds.ambiguous : 'missing on condition?'
  Dimension : Association to one SAPB1.Dimensions on Dimension.DimensionCode = InWhichDimension;
  @cds.ambiguous : 'missing on condition?'
  CostCenterType2 : Association to one SAPB1.CostCenterTypes on CostCenterType2.CostCenterTypeCode = CostCenterType;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = CenterOwner;
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
};

@cds.persistence.skip : true
entity SAPB1.SalesOpportunitySourcesSetup {
  key SequenceNo : Integer;
  Description : LargeString;
  Sort : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
};

@cds.persistence.skip : true
entity SAPB1.BankPages {
  key AccountCode : LargeString;
  key Sequence : Integer;
  AccountName : LargeString;
  Reference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Memo : LargeString;
  DebitAmount : Double;
  CreditAmount : Double;
  BankMatch : Integer;
  DataSource : LargeString;
  UserSignature : Integer;
  ExternalCode : LargeString;
  CardCode : LargeString;
  CardName : LargeString;
  StatementNumber : Integer;
  InvoiceNumber : LargeString;
  PaymentCreated : Integer;
  VisualOrder : Integer;
  DocNumberType : Integer;
  PaymentReference : LargeString;
  InvoiceNumberEx : LargeString;
  BICSwiftCode : LargeString;
  U_BP_DocNr : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_BP_PDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_BP_TDate : DateTime;
  U_BP_CBala : Double;
  U_BP_NBala : Double;
  U_BP_GLacc : LargeString;
  U_BP_Statu : LargeString;
  U_BP_ExDoc : Integer;
  U_BP_PayDo : Integer;
  U_BP_VAT : LargeString;
  U_BP_VAT_A : Double;
  U_BP_PC : LargeString;
  U_BP_Prj : LargeString;
  U_BP_DMCM : LargeString;
  U_BP_FOut : Double;
  U_BP_FIn : Double;
  U_BP_FCurr : LargeString;
  U_BP_FRate : Double;
  U_BP_FVAT : Double;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = AccountCode;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCINC {
  key Code : LargeString;
  Name : LargeString;
  U_PrcStVal : Double;
};

@cds.persistence.skip : true
entity SAPB1.BPPriorities {
  key Priority : Integer;
  PriorityDescription : LargeString;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
};

@cds.persistence.skip : true
entity SAPB1.BatchNumberDetails {
  key DocEntry : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  Status : Integer;
  Batch : LargeString;
  BatchAttribute1 : LargeString;
  BatchAttribute2 : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AdmissionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufacturingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpirationDate : DateTime;
  Details : LargeString;
  SystemNumber : Integer;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
};

@cds.persistence.skip : true
entity SAPB1.U_CTO_TOA {
  key Code : LargeString;
  Name : LargeString;
  U_Mandt : LargeString;
  U_BusObj : LargeString;
  U_ObjKey : LargeString;
  U_DocNum : LargeString;
  U_DocuType : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CreaDate : DateTime;
  U_CreaUser : LargeString;
  U_DocId : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.MaterialRevaluation {
  DocNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Comments : LargeString;
  JournalMemo : LargeString;
  DocTime : Time;
  Series : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  key DocEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  TransNum : Integer;
  RevalType : LargeString;
  RevaluationIncomeAccount : LargeString;
  RevaluationExpenseAccount : LargeString;
  DataSource : LargeString;
  UserSignature : Integer;
  InflationRevaluation : Integer;
  CardCode : LargeString;
  CardName : LargeString;
  MaterialRevaluationLines : many SAPB1.MaterialRevaluationLine;
  MaterialRevaluationDocumentReferencesCollection : many SAPB1.MaterialRevaluationDocumentReferences;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransNum;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
} actions {
  action Cancel();
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.SalesOpportunityCompetitorsSetup {
  key SequenceNo : Integer;
  Name : LargeString;
  ThreatLevel : Integer;
  Details : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.TerminationReason {
  key ReasonID : Integer;
  Name : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
};

@cds.persistence.skip : true
entity SAPB1.BankChargesAllocationCodes {
  key Code : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  PaymentRunExport : Association to many SAPB1.PaymentRunExport {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
} actions {
  action SetDefaultBankChargesAllocationCode();
};

@cds.persistence.skip : true
entity SAPB1.ServiceGroups {
  key AbsEntry : Integer;
  ServiceGroupCode : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BCENOTE {
  key Code : LargeString;
  Name : LargeString;
  U_ID : Integer;
  U_String : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.Branches {
  key Code : Integer;
  Name : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  Users : Association to many SAPB1.Users {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BOODFS {
  key Code : LargeString;
  Name : LargeString;
  U_SendMSO : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.Departments {
  key Code : Integer;
  Name : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  Users : Association to many SAPB1.Users {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.EmployeeStatus {
  key StatusId : Integer;
  Name : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
};

@cds.persistence.skip : true
entity SAPB1.WebClientVariantGroups {
  key Guid : LargeString;
  UserId : Integer;
  ViewType : LargeString;
  ViewId : LargeString;
  ObjectName : LargeString;
  DefaultVariant : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.EmailGroups {
  key EmailGroupCode : LargeString;
  EmailGroupName : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.Users {
  key InternalKey : Integer;
  UserPassword : LargeString;
  UserCode : LargeString;
  UserName : LargeString;
  Superuser : Integer;
  eMail : LargeString;
  MobilePhoneNumber : LargeString;
  Defaults : LargeString;
  FaxNumber : LargeString;
  Branch : Integer;
  Department : Integer;
  LanguageCode : Integer;
  Locked : Integer;
  Group : Integer;
  MaxDiscountGeneral : Double;
  MaxDiscountSales : Double;
  MaxDiscountPurchase : Double;
  CashLimit : Integer;
  MaxCashAmtForIncmngPayts : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LastLogoutDate : DateTime;
  LastLoginTime : Time;
  LastLogoutTime : Time;
  LastPasswordChangeTime : Time;
  LastPasswordChangedBy : LargeString;
  UserPermission : many SAPB1.UserPermissionItem;
  UserActionRecord : many SAPB1.UserActionRecordItem;
  UserGroupByUser : many SAPB1.UserGroupByUserItem;
  UserBranchAssignment : many SAPB1.UserBranchAssignmentItem;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  LegalData : Association to many SAPB1.LegalData {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  PickLists : Association to many SAPB1.PickLists {  };
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethods : Association to many SAPB1.WizardPaymentMethods {  };
  @cds.ambiguous : 'missing on condition?'
  MaterialRevaluation : Association to many SAPB1.MaterialRevaluation {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceContracts : Association to many SAPB1.ServiceContracts {  };
  @cds.ambiguous : 'missing on condition?'
  KnowledgeBaseSolutions : Association to many SAPB1.KnowledgeBaseSolutions {  };
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  ApprovalRequests : Association to many SAPB1.ApprovalRequests {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  Queue : Association to many SAPB1.Queue {  };
  @cds.ambiguous : 'missing on condition?'
  Branch2 : Association to one SAPB1.Branches on Branch2.Code = Branch;
  @cds.ambiguous : 'missing on condition?'
  Department2 : Association to one SAPB1.Departments on Department2.Code = Department;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxAuthorities : Association to many SAPB1.SalesTaxAuthorities {  };
  @cds.ambiguous : 'missing on condition?'
  SalesTaxAuthoritiesTypes : Association to many SAPB1.SalesTaxAuthoritiesTypes {  };
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Cockpits : Association to many SAPB1.Cockpits {  };
  @cds.ambiguous : 'missing on condition?'
  UserPermissionTree : Association to many SAPB1.UserPermissionTree {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
  @cds.ambiguous : 'missing on condition?'
  SalesTaxCodes : Association to many SAPB1.SalesTaxCodes {  };
  @cds.ambiguous : 'missing on condition?'
  BankPages : Association to many SAPB1.BankPages {  };
  @cds.ambiguous : 'missing on condition?'
  FormPreferences : Association to many SAPB1.FormPreferences {  };
} actions {
  action Close();
  action RemoveUserAndLicense();
};

@cds.persistence.skip : true
entity SAPB1.FormPreferences {
  key User : Integer;
  key FormID : LargeString;
  key ItemNumber : LargeString;
  key Column : LargeString;
  Width : Integer;
  VisibleInForm : Integer;
  TabsLayout : Integer;
  EditableInForm : Integer;
  VisibleInExpanded : Integer;
  ExpandedIndex : Integer;
  EditableInExpanded : Integer;
  @cds.ambiguous : 'missing on condition?'
  User2 : Association to one SAPB1.Users on User2.InternalKey = User;
};

@cds.persistence.skip : true
entity SAPB1.ApprovalTemplates {
  key Code : Integer;
  Name : LargeString;
  Remarks : LargeString;
  UseTerms : Integer;
  IsActive : Integer;
  IsActiveWhenUpdatingDocuments : Integer;
  ApprovalTemplateUsers : many SAPB1.ApprovalTemplateUser;
  ApprovalTemplateStages : many SAPB1.ApprovalTemplateStage;
  ApprovalTemplateDocuments : many SAPB1.ApprovalTemplateDocument;
  ApprovalTemplateTerms : many SAPB1.ApprovalTemplateTerm;
  ApprovalTemplateQueries : many SAPB1.ApprovalTemplateQuery;
  @cds.ambiguous : 'missing on condition?'
  ApprovalRequests : Association to many SAPB1.ApprovalRequests {  };
};

@cds.persistence.skip : true
entity SAPB1.HouseBankAccounts {
  BankCode : LargeString;
  AccNo : LargeString;
  Branch : LargeString;
  NextCheckNo : Integer;
  GLAccount : LargeString;
  DSC1_STREET_ALIAS : LargeString;
  Block : LargeString;
  ZipCode : LargeString;
  City : LargeString;
  County : LargeString;
  Country : LargeString;
  State : LargeString;
  BISR : Integer;
  ControlKey : LargeString;
  UserNo1 : LargeString;
  UserNo2 : LargeString;
  UserNo3 : LargeString;
  UserNo4 : LargeString;
  IBAN : LargeString;
  DebtofDiscountedBillofExc : LargeString;
  ToleranceDays : Integer;
  MinAmountofBillofExchang : Double;
  MaxAmountofBillofExchan : Double;
  DiscountLimit : Double;
  DaysInAdvance : Integer;
  BankonCollection : LargeString;
  BankonDiscounted : LargeString;
  GLInterimAccount : LargeString;
  key AbsoluteEntry : Integer;
  BankKey : Integer;
  LockChecksPrinting : Integer;
  TemplateName : LargeString;
  MaximumLines : Integer;
  PrintOn : Integer;
  CustomerIdNumber : LargeString;
  ISRBillerID : LargeString;
  ISRType : Integer;
  AccountCheckDigit : LargeString;
  OurNumber : Integer;
  AgreementNumber : LargeString;
  AddressType : LargeString;
  StreetNo : LargeString;
  Building : LargeString;
  IncomingPaymentSeries : Integer;
  OutgoingPaymentSeries : Integer;
  JournalEntrySeries : Integer;
  ImportFileName : LargeString;
  AccountName : LargeString;
  BICSwiftCode : LargeString;
  FineAccount : LargeString;
  InterestAccount : LargeString;
  DiscountAccount : LargeString;
  ServiceFeeAccount : LargeString;
  IOFTaxAccount : LargeString;
  OtherExpensesAccount : LargeString;
  OtherIncomesAccount : LargeString;
  RetornoFileName : LargeString;
  BranchCheckDigit : LargeString;
  CollectionCode : LargeString;
  FileSeqNextNumber : Integer;
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethods : Association to many SAPB1.WizardPaymentMethods {  };
  @cds.ambiguous : 'missing on condition?'
  BankStatements : Association to many SAPB1.BankStatements {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = GLAccount;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  Bank : Association to one SAPB1.Banks on Bank.AbsoluteEntry = BankKey;
};

@cds.persistence.skip : true
entity SAPB1.Teams {
  key TeamID : Integer;
  TeamName : LargeString;
  Description : LargeString;
  TeamMembers : many SAPB1.TeamMember;
};

@cds.persistence.skip : true
entity SAPB1.BillOfExchangeTransactions {
  StatusFrom : Integer;
  StatusTo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransactionDate : DateTime;
  TransactionTime : Time;
  IsBoeReconciled : Integer;
  TransactionNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  key BOETransactionkey : Integer;
  BillOfExchangeTransactionLines : many SAPB1.BillOfExchangeTransactionLine;
  BillOfExchangeTransDeposits : many SAPB1.BillOfExchangeTransDeposit;
  BillOfExchangeTransBankPages : many SAPB1.BillOfExchangeTransBankPage;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransactionNumber;
};

@cds.persistence.skip : true
entity SAPB1.UserKeysMD {
  key TableName : LargeString;
  key KeyIndex : Integer;
  KeyName : LargeString;
  Unique : Integer;
  UserKeysMD_Elements : many SAPB1.UserKeysMD_Element;
};

@cds.persistence.skip : true
entity SAPB1.Cockpits {
  key AbsEntry : Integer;
  Code : Integer;
  Name : LargeString;
  Description : LargeString;
  UserSignature : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  Time : Time;
  Manufacturer : LargeString;
  Publisher : LargeString;
  CockpitType : Integer;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
};

@cds.persistence.skip : true
entity SAPB1.Countries {
  key Code : LargeString;
  Name : LargeString;
  CodeForReports : LargeString;
  AddressFormat : Integer;
  EU : Integer;
  NumberOfDigitsForTaxID : Integer;
  BankCodeDigits : Integer;
  BankBranchDigits : Integer;
  BankAccountDigits : Integer;
  BankControlKeyDigits : Integer;
  DomesticAccountValidation : Integer;
  IbanValidation : Integer;
  Blacklisted : Integer;
  UICCountryCode : LargeString;
  EAEU : Integer;
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  Warehouses : Association to many SAPB1.Warehouses {  };
  @cds.ambiguous : 'missing on condition?'
  ChecksforPayment : Association to many SAPB1.ChecksforPayment {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CustomerEquipmentCards : Association to many SAPB1.CustomerEquipmentCards {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Banks : Association to many SAPB1.Banks {  };
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocations : Association to many SAPB1.WarehouseLocations {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethods : Association to many SAPB1.WizardPaymentMethods {  };
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  States : Association to many SAPB1.States {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  HouseBankAccounts : Association to many SAPB1.HouseBankAccounts {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPlaces : Association to many SAPB1.BusinessPlaces {  };
  @cds.ambiguous : 'missing on condition?'
  CreditCards : Association to many SAPB1.CreditCards {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.KPIs {
  key KPICode : LargeString;
  KPIName : LargeString;
  KPIType : Integer;
  NumberOfColumns : Integer;
  KPI_ItemLines : many SAPB1.KPI_ItemLine;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_STRN1 {
  key Code : LargeString;
  Name : LargeString;
  U_TrnsID : LargeString;
  U_Lang : LargeString;
  U_Desc : LargeString;
  U_Country : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.InternalReconciliations {
  key ReconNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReconDate : DateTime;
  CardOrAccount : Integer;
  ReconType : Integer;
  Total : Double;
  CancelAbs : Integer;
  InternalReconciliationRows : many SAPB1.InternalReconciliationRow;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
} actions {
  action Cancel();
  action RequestApproveCancellation();
};

@cds.persistence.skip : true
entity SAPB1.SalesTaxCodes {
  ValidForAR : Integer;
  ValidForAP : Integer;
  UserSignature : Integer;
  Rate : Double;
  Name : LargeString;
  Freight : Integer;
  key Code : LargeString;
  IsItemLevel : Integer;
  Inactive : Integer;
  FADebit : Integer;
  SalesTaxCodes_Lines : many SAPB1.SalesTaxCodes_Line;
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  Warehouses : Association to many SAPB1.Warehouses {  };
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  ExpenseTypes : Association to many SAPB1.ExpenseTypes {  };
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
};

@cds.persistence.skip : true
entity SAPB1.CustomsDeclaration {
  key CCDNum : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  CustomsBroker : LargeString;
  DocNum : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  SupplyNum : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SupplyDate : DateTime;
  CustomsTerminal : LargeString;
  PaymentKey : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.QueryCategories {
  key Code : Integer;
  Name : LargeString;
  Permissions : LargeString;
  @cds.ambiguous : 'missing on condition?'
  UserQueries : Association to many SAPB1.UserQueries {  };
};

@cds.persistence.skip : true
entity SAPB1.Manufacturers {
  key Code : Integer;
  ManufacturerName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
};

@cds.persistence.skip : true
entity SAPB1.PaymentDrafts {
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  CashAccount : LargeString;
  DocCurrency : LargeString;
  CashSum : Double;
  CheckAccount : LargeString;
  TransferAccount : LargeString;
  TransferSum : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransferDate : DateTime;
  TransferReference : LargeString;
  LocalCurrency : Integer;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  CounterReference : LargeString;
  Remarks : LargeString;
  JournalRemarks : LargeString;
  SplitTransaction : Integer;
  ContactPersonCode : Integer;
  ApplyVAT : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  Series : Integer;
  BankCode : LargeString;
  BankAccount : LargeString;
  DiscountPercent : Double;
  ProjectCode : LargeString;
  CurrencyIsLocal : Integer;
  DeductionPercent : Double;
  DeductionSum : Double;
  CashSumFC : Double;
  CashSumSys : Double;
  BoeAccount : LargeString;
  BillOfExchangeAmount : Double;
  BillofExchangeStatus : Integer;
  BillOfExchangeAmountFC : Double;
  BillOfExchangeAmountSC : Double;
  BillOfExchangeAgent : LargeString;
  WTCode : LargeString;
  WTAmount : Double;
  WTAmountFC : Double;
  WTAmountSC : Double;
  WTAccount : LargeString;
  WTTaxableAmount : Double;
  Proforma : Integer;
  PayToBankCode : LargeString;
  PayToBankBranch : LargeString;
  PayToBankAccountNo : LargeString;
  PayToCode : LargeString;
  PayToBankCountry : LargeString;
  IsPayToBank : Integer;
  key DocEntry : Integer;
  PaymentPriority : Integer;
  TaxGroup : LargeString;
  BankChargeAmount : Double;
  BankChargeAmountInFC : Double;
  BankChargeAmountInSC : Double;
  UnderOverpaymentdifference : Double;
  UnderOverpaymentdiffSC : Double;
  WtBaseSum : Double;
  WtBaseSumFC : Double;
  WtBaseSumSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  TransactionCode : LargeString;
  PaymentType : Integer;
  TransferRealAmount : Double;
  DocObjectCode : Integer;
  DocTypte : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  LocationCode : Integer;
  Cancelled : Integer;
  ControlAccount : LargeString;
  UnderOverpaymentdiffFC : Double;
  AuthorizationStatus : Integer;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  BlanketAgreement : Integer;
  PaymentByWTCertif : Integer;
  Cig : Integer;
  Cup : Integer;
  AttachmentEntry : Integer;
  U_BP_DocNr : Integer;
  U_BP_Seque : Integer;
  U_BP_Confd : LargeString;
  U_unklar : LargeString;
  U_ts_form : Integer;
  PaymentChecks : many SAPB1.PaymentCheck;
  PaymentInvoices : many SAPB1.PaymentInvoice;
  PaymentCreditCards : many SAPB1.PaymentCreditCard;
  PaymentAccounts : many SAPB1.PaymentAccount;
  PaymentDocumentReferencesCollection : many SAPB1.PaymentDocumentReferences;
  BillOfExchange : SAPB1.BillOfExchange;
  WithholdingTaxCertificatesCollection : many SAPB1.WithholdingTaxCertificatesData;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  CashFlowAssignments : many SAPB1.CashFlowAssignment;
  Payments_ApprovalRequests : many SAPB1.Payments_ApprovalRequest;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = CashAccount;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = ProjectCode;
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCode : Association to one SAPB1.WithholdingTaxCodes on WithholdingTaxCode.WTCode = WTCode;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  VatGroup : Association to one SAPB1.VatGroups on VatGroup.Code = TaxGroup;
  @cds.ambiguous : 'missing on condition?'
  TransactionCode2 : Association to one SAPB1.TransactionCodes on TransactionCode2.Code = TransactionCode;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = LocationCode;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreement2 : Association to one SAPB1.BlanketAgreements on BlanketAgreement2.AgreementNo = BlanketAgreement;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
} actions {
  action Cancel();
  action RequestApproveCancellation();
  action SaveDraftToDocument();
  action CancelbyCurrentSystemDate();
  function GetApprovalTemplates() returns SAPB1.PaymentDrafts;
};

@cds.persistence.skip : true
entity SAPB1.IncomingPayments {
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  CashAccount : LargeString;
  DocCurrency : LargeString;
  CashSum : Double;
  CheckAccount : LargeString;
  TransferAccount : LargeString;
  TransferSum : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransferDate : DateTime;
  TransferReference : LargeString;
  LocalCurrency : Integer;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  CounterReference : LargeString;
  Remarks : LargeString;
  JournalRemarks : LargeString;
  SplitTransaction : Integer;
  ContactPersonCode : Integer;
  ApplyVAT : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  Series : Integer;
  BankCode : LargeString;
  BankAccount : LargeString;
  DiscountPercent : Double;
  ProjectCode : LargeString;
  CurrencyIsLocal : Integer;
  DeductionPercent : Double;
  DeductionSum : Double;
  CashSumFC : Double;
  CashSumSys : Double;
  BoeAccount : LargeString;
  BillOfExchangeAmount : Double;
  BillofExchangeStatus : Integer;
  BillOfExchangeAmountFC : Double;
  BillOfExchangeAmountSC : Double;
  BillOfExchangeAgent : LargeString;
  WTCode : LargeString;
  WTAmount : Double;
  WTAmountFC : Double;
  WTAmountSC : Double;
  WTAccount : LargeString;
  WTTaxableAmount : Double;
  Proforma : Integer;
  PayToBankCode : LargeString;
  PayToBankBranch : LargeString;
  PayToBankAccountNo : LargeString;
  PayToCode : LargeString;
  PayToBankCountry : LargeString;
  IsPayToBank : Integer;
  key DocEntry : Integer;
  PaymentPriority : Integer;
  TaxGroup : LargeString;
  BankChargeAmount : Double;
  BankChargeAmountInFC : Double;
  BankChargeAmountInSC : Double;
  UnderOverpaymentdifference : Double;
  UnderOverpaymentdiffSC : Double;
  WtBaseSum : Double;
  WtBaseSumFC : Double;
  WtBaseSumSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  TransactionCode : LargeString;
  PaymentType : Integer;
  TransferRealAmount : Double;
  DocObjectCode : Integer;
  DocTypte : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  LocationCode : Integer;
  Cancelled : Integer;
  ControlAccount : LargeString;
  UnderOverpaymentdiffFC : Double;
  AuthorizationStatus : Integer;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  BlanketAgreement : Integer;
  PaymentByWTCertif : Integer;
  Cig : Integer;
  Cup : Integer;
  AttachmentEntry : Integer;
  U_BP_DocNr : Integer;
  U_BP_Seque : Integer;
  U_BP_Confd : LargeString;
  U_unklar : LargeString;
  U_ts_form : Integer;
  PaymentChecks : many SAPB1.PaymentCheck;
  PaymentInvoices : many SAPB1.PaymentInvoice;
  PaymentCreditCards : many SAPB1.PaymentCreditCard;
  PaymentAccounts : many SAPB1.PaymentAccount;
  PaymentDocumentReferencesCollection : many SAPB1.PaymentDocumentReferences;
  BillOfExchange : SAPB1.BillOfExchange;
  WithholdingTaxCertificatesCollection : many SAPB1.WithholdingTaxCertificatesData;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  CashFlowAssignments : many SAPB1.CashFlowAssignment;
  Payments_ApprovalRequests : many SAPB1.Payments_ApprovalRequest;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = CashAccount;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = ProjectCode;
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCode : Association to one SAPB1.WithholdingTaxCodes on WithholdingTaxCode.WTCode = WTCode;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  VatGroup : Association to one SAPB1.VatGroups on VatGroup.Code = TaxGroup;
  @cds.ambiguous : 'missing on condition?'
  TransactionCode2 : Association to one SAPB1.TransactionCodes on TransactionCode2.Code = TransactionCode;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = LocationCode;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreement2 : Association to one SAPB1.BlanketAgreements on BlanketAgreement2.AgreementNo = BlanketAgreement;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
};

@cds.persistence.skip : true
entity SAPB1.VendorPayments {
  DocNum : Integer;
  DocType : Integer;
  HandWritten : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  CardCode : LargeString;
  CardName : LargeString;
  Address : LargeString;
  CashAccount : LargeString;
  DocCurrency : LargeString;
  CashSum : Double;
  CheckAccount : LargeString;
  TransferAccount : LargeString;
  TransferSum : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransferDate : DateTime;
  TransferReference : LargeString;
  LocalCurrency : Integer;
  DocRate : Double;
  Reference1 : LargeString;
  Reference2 : LargeString;
  CounterReference : LargeString;
  Remarks : LargeString;
  JournalRemarks : LargeString;
  SplitTransaction : Integer;
  ContactPersonCode : Integer;
  ApplyVAT : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  Series : Integer;
  BankCode : LargeString;
  BankAccount : LargeString;
  DiscountPercent : Double;
  ProjectCode : LargeString;
  CurrencyIsLocal : Integer;
  DeductionPercent : Double;
  DeductionSum : Double;
  CashSumFC : Double;
  CashSumSys : Double;
  BoeAccount : LargeString;
  BillOfExchangeAmount : Double;
  BillofExchangeStatus : Integer;
  BillOfExchangeAmountFC : Double;
  BillOfExchangeAmountSC : Double;
  BillOfExchangeAgent : LargeString;
  WTCode : LargeString;
  WTAmount : Double;
  WTAmountFC : Double;
  WTAmountSC : Double;
  WTAccount : LargeString;
  WTTaxableAmount : Double;
  Proforma : Integer;
  PayToBankCode : LargeString;
  PayToBankBranch : LargeString;
  PayToBankAccountNo : LargeString;
  PayToCode : LargeString;
  PayToBankCountry : LargeString;
  IsPayToBank : Integer;
  key DocEntry : Integer;
  PaymentPriority : Integer;
  TaxGroup : LargeString;
  BankChargeAmount : Double;
  BankChargeAmountInFC : Double;
  BankChargeAmountInSC : Double;
  UnderOverpaymentdifference : Double;
  UnderOverpaymentdiffSC : Double;
  WtBaseSum : Double;
  WtBaseSumFC : Double;
  WtBaseSumSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  TransactionCode : LargeString;
  PaymentType : Integer;
  TransferRealAmount : Double;
  DocObjectCode : Integer;
  DocTypte : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  LocationCode : Integer;
  Cancelled : Integer;
  ControlAccount : LargeString;
  UnderOverpaymentdiffFC : Double;
  AuthorizationStatus : Integer;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  BlanketAgreement : Integer;
  PaymentByWTCertif : Integer;
  Cig : Integer;
  Cup : Integer;
  AttachmentEntry : Integer;
  U_BP_DocNr : Integer;
  U_BP_Seque : Integer;
  U_BP_Confd : LargeString;
  U_unklar : LargeString;
  U_ts_form : Integer;
  PaymentChecks : many SAPB1.PaymentCheck;
  PaymentInvoices : many SAPB1.PaymentInvoice;
  PaymentCreditCards : many SAPB1.PaymentCreditCard;
  PaymentAccounts : many SAPB1.PaymentAccount;
  PaymentDocumentReferencesCollection : many SAPB1.PaymentDocumentReferences;
  BillOfExchange : SAPB1.BillOfExchange;
  WithholdingTaxCertificatesCollection : many SAPB1.WithholdingTaxCertificatesData;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
  CashFlowAssignments : many SAPB1.CashFlowAssignment;
  Payments_ApprovalRequests : many SAPB1.Payments_ApprovalRequest;
  WithholdingTaxDataWTXCollection : many SAPB1.WithholdingTaxDataWTX;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = CashAccount;
  @cds.ambiguous : 'missing on condition?'
  Currency : Association to one SAPB1.Currencies on Currency.Code = DocCurrency;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = ProjectCode;
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCode : Association to one SAPB1.WithholdingTaxCodes on WithholdingTaxCode.WTCode = WTCode;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = PayToBankCountry;
  @cds.ambiguous : 'missing on condition?'
  VatGroup : Association to one SAPB1.VatGroups on VatGroup.Code = TaxGroup;
  @cds.ambiguous : 'missing on condition?'
  TransactionCode2 : Association to one SAPB1.TransactionCodes on TransactionCode2.Code = TransactionCode;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = LocationCode;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreement2 : Association to one SAPB1.BlanketAgreements on BlanketAgreement2.AgreementNo = BlanketAgreement;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
};

@cds.persistence.skip : true
entity SAPB1.DepreciationAreas {
  key Code : LargeString;
  Description : LargeString;
  PostingOfDepreciation : Integer;
  RetirementMethod : Integer;
  AreaType : Integer;
  DerivedArea : LargeString;
  MainBookingArea : Integer;
  DirectRevenuePosting : Integer;
  TaxCreditControl : Integer;
  TaxType : Integer;
  BPForTaxCorrection : LargeString;
  ItemForTaxCorrection : LargeString;
  UsageForTaxCorrection : Integer;
  @cds.ambiguous : 'missing on condition?'
  AssetTransfer : Association to many SAPB1.AssetTransfer {  };
  @cds.ambiguous : 'missing on condition?'
  AssetRetirement : Association to many SAPB1.AssetRetirement {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalization : Association to many SAPB1.AssetCapitalization {  };
  @cds.ambiguous : 'missing on condition?'
  AssetManualDepreciation : Association to many SAPB1.AssetManualDepreciation {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalizationCreditMemo : Association to many SAPB1.AssetCapitalizationCreditMemo {  };
  @cds.ambiguous : 'missing on condition?'
  SalesTaxAuthoritiesType : Association to one SAPB1.SalesTaxAuthoritiesTypes on SalesTaxAuthoritiesType.Numerator = TaxType;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = BPForTaxCorrection;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemForTaxCorrection;
  @cds.ambiguous : 'missing on condition?'
  NotaFiscalUsage : Association to one SAPB1.NotaFiscalUsage on NotaFiscalUsage.ID = UsageForTaxCorrection;
};

@cds.persistence.skip : true
entity SAPB1.Sections {
  key AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
  ECode : LargeString;
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCodes : Association to many SAPB1.WithholdingTaxCodes {  };
  @cds.ambiguous : 'missing on condition?'
  CertificateSeries : Association to many SAPB1.CertificateSeries {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BLD_PDLN {
  key Code : LargeString;
  Name : LargeString;
  U_LineID : Integer;
  U_PrefID : Integer;
  U_DocType : Integer;
  U_LaytID : Integer;
  U_Copies : Integer;
};

@cds.persistence.skip : true
entity SAPB1.NotaFiscalUsage {
  key ID : Integer;
  Usage : LargeString;
  IncomingInStateCFOPCode : LargeString;
  IncomingOutStateCFOPCode : LargeString;
  IncomingImportCFOPCode : LargeString;
  OutgoingInStateCFOPCode : LargeString;
  OutgoingOutStateCFOPCode : LargeString;
  OutgoingExportCFOPCode : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  DepreciationAreas : Association to many SAPB1.DepreciationAreas {  };
  @cds.ambiguous : 'missing on condition?'
  NotaFiscalCFOP : Association to one SAPB1.NotaFiscalCFOP on NotaFiscalCFOP.ID = IncomingInStateCFOPCode;
};

@cds.persistence.skip : true
entity SAPB1.ExtendedTranslations {
  key DocEntry : Integer;
  Category : Integer;
  ID : LargeString;
  SecondaryID : LargeString;
  SourceLanguage : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  ExtendedTranslation_ItemLines : many SAPB1.ExtendedTranslation_ItemLine;
};

@cds.persistence.skip : true
entity SAPB1.AccountSegmentationCategories {
  key SegmentID : Integer;
  key Code : LargeString;
  Name : LargeString;
  ShortName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  AccountSegmentation : Association to one SAPB1.AccountSegmentations on AccountSegmentation.Numerator = SegmentID;
};

@cds.persistence.skip : true
entity SAPB1.OccurrenceCodes {
  key AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
  Note : LargeString;
  RequestedBoeStatus : Integer;
  IsMovement : Integer;
};

@cds.persistence.skip : true
entity SAPB1.BPVatExemptions {
  key AbsoluteEntry : Integer;
  BPCode : LargeString;
  Remarks : LargeString;
  BPVatExemptionsLines : many SAPB1.BPVatExemptionsLine;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = BPCode;
};

@cds.persistence.skip : true
entity SAPB1.BusinessPlaces {
  key BPLID : Integer;
  BPLName : LargeString;
  BPLNameForeign : LargeString;
  VATRegNum : LargeString;
  RepName : LargeString;
  Industry : LargeString;
  Business : LargeString;
  Address : LargeString;
  Addressforeign : LargeString;
  MainBPL : Integer;
  TaxOfficeNo : LargeString;
  Disabled : Integer;
  DefaultCustomerID : LargeString;
  DefaultVendorID : LargeString;
  DefaultWarehouseID : LargeString;
  DefaultTaxCode : LargeString;
  TaxOffice : LargeString;
  FederalTaxID : LargeString;
  FederalTaxID2 : LargeString;
  FederalTaxID3 : LargeString;
  AdditionalIdNumber : LargeString;
  NatureOfCompanyCode : Integer;
  EconomicActivityTypeCode : Integer;
  CreditContributionOriginCode : LargeString;
  IPIPeriodCode : LargeString;
  CooperativeAssociationTypeCode : Integer;
  ProfitTaxationCode : Integer;
  CompanyQualificationCode : Integer;
  DeclarerTypeCode : Integer;
  PreferredStateCode : LargeString;
  AddressType : LargeString;
  Street : LargeString;
  StreetNo : LargeString;
  Building : LargeString;
  ZipCode : LargeString;
  Block : LargeString;
  City : LargeString;
  State : LargeString;
  County : LargeString;
  Country : LargeString;
  AliasName : LargeString;
  CommercialRegister : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfIncorporation : DateTime;
  SPEDProfile : LargeString;
  EnvironmentType : Integer;
  Opting4ICMS : Integer;
  PaymentClearingAccount : LargeString;
  GlobalLocationNumber : LargeString;
  DefaultResourceWarehouseID : LargeString;
  BusinessPlaceIENumbers : many SAPB1.BusinessPlaceIENumber;
  BusinessPlaceTributaryInfos : many SAPB1.BusinessPlaceTributaryInfo;
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransfers : Association to many SAPB1.StockTransfers {  };
  @cds.ambiguous : 'missing on condition?'
  AssetTransfer : Association to many SAPB1.AssetTransfer {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  AssetRetirement : Association to many SAPB1.AssetRetirement {  };
  @cds.ambiguous : 'missing on condition?'
  AssetClasses : Association to many SAPB1.AssetClasses {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalization : Association to many SAPB1.AssetCapitalization {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryTransferRequests : Association to many SAPB1.InventoryTransferRequests {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryCountings : Association to many SAPB1.InventoryCountings {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryOpeningBalances : Association to many SAPB1.InventoryOpeningBalances {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  AssetManualDepreciation : Association to many SAPB1.AssetManualDepreciation {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryPostings : Association to many SAPB1.InventoryPostings {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransferDrafts : Association to many SAPB1.StockTransferDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalizationCreditMemo : Association to many SAPB1.AssetCapitalizationCreditMemo {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  Deposits : Association to many SAPB1.Deposits {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = DefaultCustomerID;
  @cds.ambiguous : 'missing on condition?'
  Warehouse : Association to one SAPB1.Warehouses on Warehouse.WarehouseCode = DefaultWarehouseID;
  @cds.ambiguous : 'missing on condition?'
  BPFiscalRegistryID : Association to one SAPB1.BPFiscalRegistryID on BPFiscalRegistryID.Numerator = DefaultTaxCode;
  @cds.ambiguous : 'missing on condition?'
  BrazilNumericIndexer : Association to one SAPB1.BrazilNumericIndexers on BrazilNumericIndexer.ID = NatureOfCompanyCode;
  @cds.ambiguous : 'missing on condition?'
  BrazilStringIndexer : Association to one SAPB1.BrazilStringIndexers on BrazilStringIndexer.ID = CreditContributionOriginCode;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = PaymentClearingAccount;
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.FormattedSearches {
  FormID : LargeString;
  ItemID : LargeString;
  ColumnID : LargeString;
  Action : Integer;
  QueryID : Integer;
  key Index : Integer;
  Refresh : Integer;
  FieldID : LargeString;
  ForceRefresh : Integer;
  ByField : Integer;
  ByFieldEx : Integer;
  UserValidValues : many SAPB1.UserValidValue;
  FieldIDs : many SAPB1.FieldID;
};

@cds.persistence.skip : true
entity SAPB1.U_CTO_TOB {
  key Code : LargeString;
  Name : LargeString;
  U_Barcode : LargeString;
  U_BusObj : LargeString;
  U_DocuType : LargeString;
  U_ObjKey : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_CreaDate : DateTime;
  U_CreaUser : LargeString;
  U_Persistent : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.Attachments2 {
  key AbsoluteEntry : Integer;
  Attachments2_Lines : many SAPB1.Attachments2_Line;
  @cds.ambiguous : 'missing on condition?'
  ChecksforPayment : Association to many SAPB1.ChecksforPayment {  };
  @cds.ambiguous : 'missing on condition?'
  CustomerEquipmentCards : Association to many SAPB1.CustomerEquipmentCards {  };
  @cds.ambiguous : 'missing on condition?'
  JournalEntries : Association to many SAPB1.JournalEntries {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceContracts : Association to many SAPB1.ServiceContracts {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryCountings : Association to many SAPB1.InventoryCountings {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryOpeningBalances : Association to many SAPB1.InventoryOpeningBalances {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryPostings : Association to many SAPB1.InventoryPostings {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Campaigns : Association to many SAPB1.Campaigns {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagementTimeSheet : Association to many SAPB1.ProjectManagementTimeSheet {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagements : Association to many SAPB1.ProjectManagements {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  Deposits : Association to many SAPB1.Deposits {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
};

@cds.persistence.skip : true
entity SAPB1.InventoryOpeningBalances {
  key DocumentEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  DocumentNumber : Integer;
  Series : Integer;
  Reference2 : LargeString;
  Remarks : LargeString;
  BranchID : Integer;
  PriceSource : Integer;
  PriceList : Integer;
  JournalRemark : LargeString;
  DocObjectCodeEx : LargeString;
  PeriodIndicator : LargeString;
  FinancialPeriod : Integer;
  AttachmentEntry : Integer;
  InventoryOpeningBalanceLines : many SAPB1.InventoryOpeningBalanceLine;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BranchID;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
};

@cds.persistence.skip : true
entity SAPB1.AttributeGroups {
  key Code : Integer;
  Name : LargeString;
  Locked : Integer;
  AttributeGroupCollection : many SAPB1.AttributeGroupLine;
  @cds.ambiguous : 'missing on condition?'
  AssetClasses : Association to many SAPB1.AssetClasses {  };
};

@cds.persistence.skip : true
entity SAPB1.MultiLanguageTranslations {
  key Numerator : Integer;
  TableName : LargeString;
  FieldAlias : LargeString;
  PrimaryKeyofobject : LargeString;
  TranslationsInUserLanguages : many SAPB1.TranslationsInUserLanguage;
};

@cds.persistence.skip : true
entity SAPB1.SQLViews {
  key Name : LargeString;
  DBType : LargeString;
  SchemaName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
} actions {
  action Expose();
  action Unexpose();
};

@cds.persistence.skip : true
entity SAPB1.ResourceProperties {
  key Code : Integer;
  Name : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.UserGroups {
  key UserGroupId : Integer;
  UserGroupName : LargeString;
  UserGroupDec : LargeString;
  TPLId : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  UserGroupType : Integer;
};

@cds.persistence.skip : true
entity SAPB1.ProjectManagements {
  key AbsEntry : Integer;
  Owner : Integer;
  ProjectName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  FinishedPercent : Double;
  DocNum : Integer;
  Series : Integer;
  ProjectType : Integer;
  BusinessPartner : LargeString;
  BusinessPartnerName : LargeString;
  ContactPerson : Integer;
  Territory : Integer;
  SalesEmployee : Integer;
  AllowSubprojects : Integer;
  ProjectStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  FinancialProject : LargeString;
  RiskLevel : Integer;
  Industry : Integer;
  Reason : LargeString;
  AttachmentEntry : Integer;
  PM_StagesCollection : many SAPB1.PM_StageData;
  PM_OpenIssuesCollection : many SAPB1.PM_OpenIssueData;
  PM_DocumentsCollection : many SAPB1.PM_DocumentData;
  PM_ActivitiesCollection : many SAPB1.PM_ActivityData;
  PM_WorkOrdersCollection : many SAPB1.PM_WorkOrderData;
  PM_SummaryData : SAPB1.PM_SummaryData;
  PM_DocAttachements : many SAPB1.PM_DocAttachement;
  PM_StageAttachements : many SAPB1.PM_StageAttachement;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = Owner;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner2 : Association to one SAPB1.BusinessPartners on BusinessPartner2.CardCode = BusinessPartner;
  @cds.ambiguous : 'missing on condition?'
  Territory2 : Association to one SAPB1.Territories on Territory2.TerritoryID = Territory;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesEmployee;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = FinancialProject;
  @cds.ambiguous : 'missing on condition?'
  Industry2 : Association to one SAPB1.Industries on Industry2.IndustryCode = Industry;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
} actions {
  action CancelProject();
};

@cds.persistence.skip : true
entity SAPB1.U_BA_OPRJ {
  key Code : LargeString;
  Name : LargeString;
  U_AsstNum : LargeString;
  U_PosNum : Integer;
  U_PrjCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_FrmDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_ToDate : DateTime;
};

@cds.persistence.skip : true
entity SAPB1.WebClientLaunchpads {
  key Guid : LargeString;
  UserId : Integer;
  ThemeId : LargeString;
  DisplayQuickView : Integer;
  NotificationShowDays : Integer;
  WebClientLaunchpadGroups : many SAPB1.WebClientLaunchpadGroup;
};

@cds.persistence.skip : true
entity SAPB1.WebClientBookmarkTiles {
  key Guid : LargeString;
  Title : LargeString;
  SubTitle : LargeString;
  Info : LargeString;
  BindType : LargeString;
  UrlTarget : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.U_BLD_LYTD {
  key Code : LargeString;
  Name : LargeString;
  U_ID : Integer;
  U_LName : LargeString;
  U_WProtct : LargeString;
  U_DocType : Integer;
  U_QryCat : Integer;
  U_QryID : Integer;
  U_IsDeflt : LargeString;
  U_Copies : Integer;
  U_UserId : Integer;
  U_LLVer : LargeString;
  U_Cntry : LargeString;
  U_IntVer : Integer;
  U_FormID : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.WebClientListviewFilters {
  key Guid : LargeString;
  UserId : Integer;
  TableName : LargeString;
  FilterName : LargeString;
  WebClientListviewFilterConditions : many SAPB1.WebClientListviewFilterCondition;
};

@cds.persistence.skip : true
entity SAPB1.BOEPortfolios {
  key PortfolioEntry : Integer;
  PortfolioID : LargeString;
  PortfolioCode : LargeString;
  PortfolioNum : LargeString;
  PortfolioDescription : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.WebClientFormSettings {
  key Guid : LargeString;
  FormId : LargeString;
  UserId : Integer;
  DocObjectCode : LargeString;
  WebClientFormSettingItems : many SAPB1.WebClientFormSettingItem;
};

@cds.persistence.skip : true
entity SAPB1.CashDiscounts {
  key Code : LargeString;
  Name : LargeString;
  ByDate : Integer;
  Freight : Integer;
  Tax : Integer;
  DiscountLines : many SAPB1.DiscountLine;
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsTypes : Association to many SAPB1.PaymentTermsTypes {  };
};

@cds.persistence.skip : true
entity SAPB1.LegalData {
  key DocEntry : Integer;
  SourceObjectType : Integer;
  SourceObjectEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfPrinting : DateTime;
  TimeOfPrinting : Time;
  PrinterBrand : LargeString;
  PrinterType : LargeString;
  PrinterModel : LargeString;
  PrinterFirmwareVersion : LargeString;
  PrinterDllVersion : LargeString;
  FiscalSeries : LargeString;
  FiscalNumber : LargeString;
  DocumentNumber : LargeString;
  FiscalUserID : Integer;
  LegalDataDetailCollection : many SAPB1.LegalDataDetail;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = FiscalUserID;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_OFPR {
  key Code : LargeString;
  Name : LargeString;
  U_FisYear : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_DateTo : DateTime;
  U_Open : LargeString;
  U_YearChng : LargeString;
  U_ChangeTo : LargeString;
  U_PostPrd : Integer;
};

@cds.persistence.skip : true
entity SAPB1.EmployeeRolesSetup {
  key TypeID : Integer;
  Name : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
};

@cds.persistence.skip : true
entity SAPB1.WebClientDashboards {
  key Guid : LargeString;
  UserId : Integer;
  Content : LargeString;
  Sys : Integer;
  WebClientDashboardCards : many SAPB1.WebClientDashboardCard;
};

@cds.persistence.skip : true
entity SAPB1.WebClientRecentActivities {
  key Guid : LargeString;
  AppId : LargeString;
  AppType : LargeString;
  Count : Integer;
  Timestamp : LargeString;
  Title : LargeString;
  Url : LargeString;
  UsageArray : LargeString;
  UserId : Integer;
  RecentDay : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.SalesTaxInvoices {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  CardCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  Series : Integer;
  Segment : Integer;
  ContactPersonCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  Comments : LargeString;
  ShipToCode : LargeString;
  Address : LargeString;
  Address2 : LargeString;
  CurrencySource : Integer;
  DocCurrency : LargeString;
  CustomerOrVendorRefNo : LargeString;
  CustomerOrVendorName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  DocumentTotal : Double;
  TaxTotal : Double;
  PaymentRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PaymentRefDate : DateTime;
  AlterationRevision : Integer;
  SalesTaxInvoiceLines : many SAPB1.SalesTaxInvoiceLine;
  SalesTaxInvoiceOperationCodes : many SAPB1.SalesTaxInvoiceOperationCode;
  SalesTaxInvoiceDocumentReferences : many SAPB1.SalesTaxInvoiceDocumentReference;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
};

@cds.persistence.skip : true
entity SAPB1.POSDailySummary {
  key AbsEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  EquipmentNo : LargeString;
  CounterPosition : Integer;
  ResetCounterPosition : Integer;
  OperationCounter : Integer;
  Total : Double;
  GrossSales : Double;
  PISTotal : Double;
  COFINSTotal : Double;
  POSTotalizerCollection : many SAPB1.POSTotalizer;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
  @cds.ambiguous : 'missing on condition?'
  FiscalPrinter : Association to one SAPB1.FiscalPrinter on FiscalPrinter.EquipmentNo = EquipmentNo;
};

@cds.persistence.skip : true
entity SAPB1.PaymentTermsTypes {
  key GroupNumber : Integer;
  PaymentTermsGroupName : LargeString;
  StartFrom : Integer;
  NumberOfAdditionalMonths : Integer;
  NumberOfAdditionalDays : Integer;
  CreditLimit : Double;
  GeneralDiscount : Double;
  InterestOnArrears : Double;
  PriceListNo : Integer;
  LoadLimit : Double;
  OpenReceipt : Integer;
  DiscountCode : LargeString;
  DunningCode : LargeString;
  BaselineDate : Integer;
  NumberOfInstallments : Integer;
  NumberOfToleranceDays : Integer;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  WizardPaymentMethods : Association to many SAPB1.WizardPaymentMethods {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryTransferRequests : Association to many SAPB1.InventoryTransferRequests {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransferDrafts : Association to many SAPB1.StockTransferDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  PriceList : Association to one SAPB1.PriceLists on PriceList.PriceListNo = PriceListNo;
  @cds.ambiguous : 'missing on condition?'
  CashDiscount : Association to one SAPB1.CashDiscounts on CashDiscount.Code = DiscountCode;
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
} actions {
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.AccountCategory {
  key CategoryCode : Integer;
  CategoryName : LargeString;
  CategorySource : Integer;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccounts : Association to many SAPB1.ChartOfAccounts {  };
};

@cds.persistence.skip : true
entity SAPB1.JournalEntries {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReferenceDate : DateTime;
  Memo : LargeString;
  Reference : LargeString;
  Reference2 : LargeString;
  TransactionCode : LargeString;
  ProjectCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  key JdtNum : Integer;
  Indicator : LargeString;
  UseAutoStorno : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StornoDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  Series : Integer;
  StampTax : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  AutoVAT : Integer;
  Number : Integer;
  FolioNumber : Integer;
  FolioPrefixString : LargeString;
  ReportEU : Integer;
  Report347 : Integer;
  Printed : Integer;
  LocationCode : Integer;
  OriginalJournal : Integer;
  Original : Integer;
  BaseReference : LargeString;
  BlockDunningLetter : Integer;
  AutomaticWT : Integer;
  WTSum : Double;
  WTSumSC : Double;
  WTSumFC : Double;
  SignatureInputMessage : LargeString;
  SignatureDigest : LargeString;
  CertificationNumber : LargeString;
  PrivateKeyVersion : Integer;
  Corisptivi : Integer;
  Reference3 : LargeString;
  DocumentType : LargeString;
  DeferredTax : Integer;
  BlanketAgreementNumber : Integer;
  OperationCode : Integer;
  ResidenceNumberType : Integer;
  ECDPostingType : Integer;
  ExposedTransNumber : Integer;
  PointOfIssueCode : LargeString;
  Letter : Integer;
  FolioNumberFrom : Integer;
  FolioNumberTo : Integer;
  IsCostCenterTransfer : Integer;
  ReportingSectionControlStatementVAT : LargeString;
  ExcludeFromTaxReportControlStatementVAT : Integer;
  SAPPassport : LargeString;
  Cig : Integer;
  Cup : Integer;
  AdjustTransaction : Integer;
  AttachmentEntry : Integer;
  U_BA_TCODE : LargeString;
  U_BA_REF : LargeString;
  JournalEntryLines : many SAPB1.JournalEntryLine;
  WithholdingTaxDataCollection : many SAPB1.WithholdingTaxData;
  @cds.ambiguous : 'missing on condition?'
  LandedCosts : Association to many SAPB1.LandedCosts {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransfers : Association to many SAPB1.StockTransfers {  };
  @cds.ambiguous : 'missing on condition?'
  ChecksforPayment : Association to many SAPB1.ChecksforPayment {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  TransactionCode2 : Association to one SAPB1.TransactionCodes on TransactionCode2.Code = TransactionCode;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = ProjectCode;
  @cds.ambiguous : 'missing on condition?'
  FactoringIndicator : Association to one SAPB1.FactoringIndicators on FactoringIndicator.IndicatorCode = Indicator;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = LocationCode;
  @cds.ambiguous : 'missing on condition?'
  JournalEntryDocumentType : Association to one SAPB1.JournalEntryDocumentTypes on JournalEntryDocumentType.JournalEntryType = DocumentType;
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreement : Association to one SAPB1.BlanketAgreements on BlanketAgreement.AgreementNo = BlanketAgreementNumber;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  MaterialRevaluation : Association to many SAPB1.MaterialRevaluation {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BillOfExchangeTransactions : Association to many SAPB1.BillOfExchangeTransactions {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransferDrafts : Association to many SAPB1.StockTransferDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
} actions {
  action Cancel();
};

@cds.persistence.skip : true
entity SAPB1.GovPayCodes {
  key AbsId : Integer;
  Code : LargeString;
  Descr : LargeString;
  StateTax : Integer;
  Prdcity : Integer;
  GovPayCodeAuthorities : many SAPB1.GovPayCodeAuthority;
  @cds.ambiguous : 'missing on condition?'
  NFTaxCategories : Association to many SAPB1.NFTaxCategories {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BA_ODOC2 {
  key Code : LargeString;
  Name : LargeString;
  U_DocNum : LargeString;
  U_PosNum : Integer;
  U_Canceled : LargeString;
  U_PosTyp : LargeString;
  U_Account : LargeString;
  U_FisYear : LargeString;
  U_PostPrd : Integer;
  U_TrnsID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_PostDate : DateTime;
  U_Price : Double;
  U_Currency : LargeString;
  U_TaxKey : LargeString;
  U_TaxAmt : Double;
  U_Remark : LargeString;
  U_Debit : Double;
  U_Credit : Double;
  U_CurrCode : LargeString;
  U_DebitLC : Double;
  U_CreditLC : Double;
  U_DebitSC : Double;
  U_CreditSC : Double;
  U_AcctRevn : LargeString;
  U_DprArID : Integer;
  U_Qty : Double;
};

@cds.persistence.skip : true
entity SAPB1.LocalEra {
  EraName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  key Code : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.Dimensions {
  key DimensionCode : Integer;
  DimensionName : LargeString;
  IsActive : Integer;
  DimensionDescription : LargeString;
  @cds.ambiguous : 'missing on condition?'
  DistributionRules : Association to many SAPB1.DistributionRules {  };
  @cds.ambiguous : 'missing on condition?'
  ProfitCenters : Association to many SAPB1.ProfitCenters {  };
};

@cds.persistence.skip : true
entity SAPB1.ValueMapping {
  key AbsEntry : Integer;
  ObjectId : Integer;
  ObjectAbsEntry : LargeString;
  VM_ThirdPartyValuesCollection : many SAPB1.VM_ThirdPartyValuesData;
};

@cds.persistence.skip : true
entity SAPB1.WitholdingTaxDefinition {
  key AbsEntry : Integer;
  WTaxCode : LargeString;
  WTaxName : LargeString;
  FormulaID : Integer;
  Inactive : Integer;
  OfficialCode : LargeString;
  Category : Integer;
  BaseType : Integer;
  Type : Integer;
  MinAmount : Double;
  BaseAmountPrct : Double;
  SlidingScaleProgressiveTax : Integer;
  WTDEffectiveDateCollection : many SAPB1.WTDEffectiveDate;
  WTDBPCollection : many SAPB1.WTDBP;
  WTDItemCollection : many SAPB1.WTDItem;
  WTDFreightCollection : many SAPB1.WTDFreight;
};

@cds.persistence.skip : true
entity SAPB1.IndiaSacCode {
  key AbsEntry : Integer;
  ServiceCode : LargeString;
  ServiceName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
};

@cds.persistence.skip : true
entity SAPB1.BudgetScenarios {
  Name : LargeString;
  InitialRatioPercentage : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartofFiscalYear : DateTime;
  BasicBudget : Integer;
  key Numerator : Integer;
  RoundingMethod : Integer;
  Project : LargeString;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  U_COR_OcrCode : LargeString;
  U_COR_PrjCode : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Budgets : Association to many SAPB1.Budgets {  };
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  DistributionRule6 : Association to one SAPB1.DistributionRules on DistributionRule6.FactorCode = DistributionRule;
};

@cds.persistence.skip : true
entity SAPB1.MaterialGroups {
  key AbsEntry : Integer;
  MaterialGroupCode : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
};

@cds.persistence.skip : true
entity SAPB1.CostElements {
  key Code : LargeString;
  Description : LargeString;
  IsActive : Integer;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccounts : Association to many SAPB1.ChartOfAccounts {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BA_STYP1 {
  key Code : LargeString;
  Name : LargeString;
  U_AsstTpID : Integer;
  U_Lang : LargeString;
  U_Desc : LargeString;
  U_Country : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.EWBTransporters {
  key AbsEntry : Integer;
  TransporterCode : LargeString;
  TransporterName : LargeString;
  TransporterID : LargeString;
  EWBTransporter_Lines : many SAPB1.EWBTransporter_Line;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BLD_PRND {
  key Code : LargeString;
  Name : LargeString;
  U_ID : Integer;
  U_ObjType : Integer;
  U_ObjID : LargeString;
  U_DocType : Integer;
  U_LaytID : Integer;
  U_Copies : Integer;
};

@cds.persistence.skip : true
entity SAPB1.WarehouseLocations {
  key Code : Integer;
  Name : LargeString;
  LSTVATNumber : LargeString;
  CSTNumber : LargeString;
  ExemptionNumber : LargeString;
  TANNumber : LargeString;
  ServiceTaxNumber : LargeString;
  AssesseeType : LargeString;
  CompanyType : LargeString;
  NatureOfBusiness : LargeString;
  TINNumber : LargeString;
  RegistrationType : LargeString;
  EccNumber : LargeString;
  CERange : LargeString;
  CEDivision : LargeString;
  CECommissionerate : LargeString;
  ManufacturerCode : LargeString;
  Jurisdiction : LargeString;
  Street : LargeString;
  Block : LargeString;
  ZipCode : LargeString;
  City : LargeString;
  County : LargeString;
  Country : LargeString;
  State : LargeString;
  PANNumber : LargeString;
  CERegisterNumber : LargeString;
  BuildingFloorRoom : LargeString;
  GSTIN : LargeString;
  GstType : Integer;
  GSTTDS : LargeString;
  GSTISD : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Warehouses : Association to many SAPB1.Warehouses {  };
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCodes : Association to many SAPB1.WithholdingTaxCodes {  };
  @cds.ambiguous : 'missing on condition?'
  JournalEntries : Association to many SAPB1.JournalEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  CertificateSeries : Association to many SAPB1.CertificateSeries {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
};

@cds.persistence.skip : true
entity SAPB1.BPFiscalRegistryID {
  key Numerator : Integer;
  CNAECode : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlaces : Association to many SAPB1.BusinessPlaces {  };
};

@cds.persistence.skip : true
entity SAPB1.NCMCodesSetup {
  key AbsEntry : Integer;
  NCMCode : LargeString;
  Description : LargeString;
  GroupCode : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  DNFCodeSetup : Association to many SAPB1.DNFCodeSetup {  };
};

@cds.persistence.skip : true
entity SAPB1.ValueMappingCommunication {
  key AbsEntry : Integer;
  ThirdPartySystemId : Integer;
  ObjectId : Integer;
  CommunicationType : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  StartTime : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  EndTime : Integer;
  Message : LargeString;
  Status : Integer;
};

@cds.persistence.skip : true
entity SAPB1.NotaFiscalCFOP {
  key ID : Integer;
  Description : LargeString;
  Code : LargeString;
  Application : LargeString;
  @cds.ambiguous : 'missing on condition?'
  NotaFiscalUsage : Association to many SAPB1.NotaFiscalUsage {  };
};

@cds.persistence.skip : true
entity SAPB1.TaxCodeDeterminationsTCD {
  key AbsId : Integer;
  TcdType : Integer;
  DftArCode : LargeString;
  DftApCode : LargeString;
  TaxCodeDeterminationTCDDefaultWTs : many SAPB1.TaxCodeDeterminationTCDDefaultWT;
  TaxCodeDeterminationTCDByUsages : many SAPB1.TaxCodeDeterminationTCDByUsage;
  TaxCodeDeterminationTCDKeyFields : many SAPB1.TaxCodeDeterminationTCDKeyField;
};

@cds.persistence.skip : true
entity SAPB1.ReportFilter {
  key Code : Integer;
  Name : LargeString;
  ReportLayout : Integer;
  FirstPrintedNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDate : DateTime;
  TaxDate : Integer;
  RoundAmount : Integer;
  DeclarationType : Integer;
  FilterType : Integer;
  ExcludeWT : Integer;
  IncludeCustomers : Integer;
  IncludeVendors : Integer;
  Period : Integer;
  Quarter : Integer;
  Year : Integer;
  DocumentType : Integer;
  FirstRegisterNumber : Integer;
  IncludeGLAccounts : Integer;
  AppendixOorPSelection : Integer;
  OpeningAndClosingBalance : Integer;
  FromSeries : Integer;
  ToSeries : Integer;
  Cancellation : Integer;
  HideTaxWithoutTransaction : Integer;
  IncludeSeriesFilter : Integer;
  IncludeDocumentType : Integer;
  DiplayCreditMemosInSeparateColumn : Integer;
  ShowPaymentsWithDeferredTax : Integer;
  QuarterOrDates : Integer;
  TaxReportGroups : many SAPB1.TaxReportGroup;
  TaxReportBusinessPartners : many SAPB1.TaxReportBusinessPartner;
  TaxReportDocuments : many SAPB1.TaxReportDocument;
  TaxReportSeriesCollection : many SAPB1.TaxReportSeries;
  TaxReportAccounts : many SAPB1.TaxReportAccount;
};

@cds.persistence.skip : true
entity SAPB1.IntrastatConfiguration {
  key AbsEntry : Integer;
  ConfType : Integer;
  Code : LargeString;
  Descr : LargeString;
  PrcstVal : Double;
  SuppUnit : Integer;
  Export : Integer;
  Import : Integer;
  StatCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateTo : DateTime;
  Country : LargeString;
  ConfID : LargeString;
  TriangDeal : Integer;
};

@cds.persistence.skip : true
entity SAPB1.BOEDocumentTypes {
  key DocEntry : Integer;
  DocType : LargeString;
  DocDescription : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.BOEInstructions {
  key InstructionEntry : Integer;
  InstructionCode : LargeString;
  InstructionDesc : LargeString;
  IsCancelInstruction : Integer;
};

@cds.persistence.skip : true
entity SAPB1.DepreciationTypePools {
  key Code : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  DepreciationTypes : Association to many SAPB1.DepreciationTypes {  };
};

@cds.persistence.skip : true
entity SAPB1.PurchaseTaxInvoices {
  key DocEntry : Integer;
  DocNum : Integer;
  DocType : Integer;
  Printed : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  CardCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDueDate : DateTime;
  Series : Integer;
  Segment : Integer;
  ContactPersonCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  Comments : LargeString;
  ShipToCode : LargeString;
  Address : LargeString;
  Address2 : LargeString;
  CurrencySource : Integer;
  DocCurrency : LargeString;
  CustomerOrVendorRefNo : LargeString;
  CustomerOrVendorName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancelDate : DateTime;
  DocumentTotal : Double;
  TaxTotal : Double;
  PaymentRefNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PaymentRefDate : DateTime;
  AlterationRevision : Integer;
  PurchaseTaxInvoiceLines : many SAPB1.PurchaseTaxInvoiceLine;
  PurchaseTaxInvoiceOperationCodes : many SAPB1.PurchaseTaxInvoiceOperationCode;
  PurchaseTaxInvoiceDocumentReferences : many SAPB1.PurchaseTaxInvoiceDocumentReference;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
};

@cds.persistence.skip : true
entity SAPB1.CashFlowLineItems {
  key LineItemID : Integer;
  LineItemName : LargeString;
  ActiveLineItem : Integer;
  ParentArticle : Integer;
  Level : Integer;
  Drawer : Integer;
};

@cds.persistence.skip : true
entity SAPB1.Resources {
  key Code : LargeString;
  VisCode : LargeString;
  Series : Integer;
  Number : Integer;
  CodeBar : LargeString;
  Name : LargeString;
  ForeignName : LargeString;
  Type : Integer;
  Group : Integer;
  UnitOfMeasure : LargeString;
  IssueMethod : Integer;
  Cost1 : Double;
  Cost2 : Double;
  Cost3 : Double;
  Cost4 : Double;
  Cost5 : Double;
  Cost6 : Double;
  Cost7 : Double;
  Cost8 : Double;
  Cost9 : Double;
  Cost10 : Double;
  Active : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActiveFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActiveTo : DateTime;
  Inactive : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  InactiveFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  InactiveTo : DateTime;
  DefaultWarehouse : LargeString;
  Picture : LargeString;
  Remarks : LargeString;
  Property1 : Integer;
  Property2 : Integer;
  Property3 : Integer;
  Property4 : Integer;
  Property5 : Integer;
  Property6 : Integer;
  Property7 : Integer;
  Property8 : Integer;
  Property9 : Integer;
  Property10 : Integer;
  Property11 : Integer;
  Property12 : Integer;
  Property13 : Integer;
  Property14 : Integer;
  Property15 : Integer;
  Property16 : Integer;
  Property17 : Integer;
  Property18 : Integer;
  Property19 : Integer;
  Property20 : Integer;
  Property21 : Integer;
  Property22 : Integer;
  Property23 : Integer;
  Property24 : Integer;
  Property25 : Integer;
  Property26 : Integer;
  Property27 : Integer;
  Property28 : Integer;
  Property29 : Integer;
  Property30 : Integer;
  Property31 : Integer;
  Property32 : Integer;
  Property33 : Integer;
  Property34 : Integer;
  Property35 : Integer;
  Property36 : Integer;
  Property37 : Integer;
  Property38 : Integer;
  Property39 : Integer;
  Property40 : Integer;
  Property41 : Integer;
  Property42 : Integer;
  Property43 : Integer;
  Property44 : Integer;
  Property45 : Integer;
  Property46 : Integer;
  Property47 : Integer;
  Property48 : Integer;
  Property49 : Integer;
  Property50 : Integer;
  Property51 : Integer;
  Property52 : Integer;
  Property53 : Integer;
  Property54 : Integer;
  Property55 : Integer;
  Property56 : Integer;
  Property57 : Integer;
  Property58 : Integer;
  Property59 : Integer;
  Property60 : Integer;
  Property61 : Integer;
  Property62 : Integer;
  Property63 : Integer;
  Property64 : Integer;
  ActiveRemarks : LargeString;
  InactiveRemarks : LargeString;
  AttachmentEntry : Integer;
  UnitsPerTime : Integer;
  TimePerUnits : Integer;
  Allocation : Integer;
  LinkedItem : LargeString;
  RelevantForSingleRun1 : Integer;
  RelevantForSingleRun2 : Integer;
  RelevantForSingleRun3 : Integer;
  RelevantForSingleRun4 : Integer;
  ResourceWarehouses : many SAPB1.ResourceWarehouse;
  ResourceFixedAssets : many SAPB1.ResourceFixedAsset;
  ResourceEmployees : many SAPB1.ResourceEmployee;
  ResourceDailyCapacities : many SAPB1.ResourceDailyCapacity;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  ResourceCapacities : Association to many SAPB1.ResourceCapacities {  };
  @cds.ambiguous : 'missing on condition?'
  ResourceGroup : Association to one SAPB1.ResourceGroups on ResourceGroup.Code = Group;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = LinkedItem;
} actions {
  action CreateLinkedItem();
};

@cds.persistence.skip : true
entity SAPB1.U_BA_CDPA {
  key Code : LargeString;
  Name : LargeString;
  U_DprArID : Integer;
  U_PostGL : LargeString;
  U_DirectDp : LargeString;
  U_RetMeth : Integer;
  U_PostMode : Integer;
  U_DefName : LargeString;
  U_AreaType : Integer;
  U_DrvdArea : Integer;
};

@cds.persistence.skip : true
entity SAPB1.UnitOfMeasurementGroups {
  key AbsEntry : Integer;
  Code : LargeString;
  Name : LargeString;
  BaseUoM : Integer;
  UoMGroupDefinitionCollection : many SAPB1.UoMGroupDefinition;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  BinLocations : Association to many SAPB1.BinLocations {  };
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurement : Association to one SAPB1.UnitOfMeasurements on UnitOfMeasurement.AbsEntry = BaseUoM;
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to many SAPB1.ItemGroups {  };
};

@cds.persistence.skip : true
entity SAPB1.StockTakings {
  key ItemCode : LargeString;
  key WarehouseCode : LargeString;
  Counted : Double;
  U_Zentrallager : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
  @cds.ambiguous : 'missing on condition?'
  Warehouse : Association to one SAPB1.Warehouses on Warehouse.WarehouseCode = WarehouseCode;
};

@cds.persistence.skip : true
entity SAPB1.ResourceGroups {
  key Code : Integer;
  Name : LargeString;
  Type : Integer;
  CostName1 : LargeString;
  Cost1 : Double;
  CostName2 : LargeString;
  Cost2 : Double;
  CostName3 : LargeString;
  Cost3 : Double;
  CostName4 : LargeString;
  Cost4 : Double;
  CostName5 : LargeString;
  Cost5 : Double;
  CostName6 : LargeString;
  Cost6 : Double;
  CostName7 : LargeString;
  Cost7 : Double;
  CostName8 : LargeString;
  Cost8 : Double;
  CostName9 : LargeString;
  Cost9 : Double;
  CostName10 : LargeString;
  Cost10 : Double;
  NumOfUnitsText : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Resources : Association to many SAPB1.Resources {  };
};

@cds.persistence.skip : true
entity SAPB1.ElectronicFileFormats {
  key FormatID : Integer;
  Name : LargeString;
  Description : LargeString;
  Version : LargeString;
  SchemaVersion : LargeString;
  OutputFilePath : LargeString;
  MenuName : LargeString;
  MenuPath : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.NatureOfAssessees {
  key AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
  AssesseeType : Integer;
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCodes : Association to many SAPB1.WithholdingTaxCodes {  };
};

@cds.persistence.skip : true
entity SAPB1.Messages {
  key Code : Integer;
  User : Integer;
  Priority : Integer;
  Subject : LargeString;
  Text : LargeString;
  Attachment : Integer;
  MessageDataColumns : many SAPB1.MessageDataColumn;
  RecipientCollection : many SAPB1.Recipient;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_STYP {
  key Code : LargeString;
  Name : LargeString;
  U_AsstTpID : Integer;
  U_AsstTpNm : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.UserLanguages {
  key Code : Integer;
  LanguageShortName : LargeString;
  LanguageFullName : LargeString;
  RelatedSystemLanguage : Integer;
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.RecurringPostings {
  key Code : LargeString;
  Description : LargeString;
  key Instance : Integer;
  Reference1 : LargeString;
  Reference2 : LargeString;
  Reference3 : LargeString;
  TransactionCode : LargeString;
  Remarks : LargeString;
  Frequency : Integer;
  SubFrequency : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  NextExecution : DateTime;
  StampTax : Integer;
  AutomaticVAT : Integer;
  ManageWTax : Integer;
  DeferredTax : Integer;
  ValidUntil : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidUntilDate : DateTime;
  RecurringPostingsLineCollection : many SAPB1.RecurringPostingsLine;
  RecurringPostingsDocumentReferenceCollection : many SAPB1.RecurringPostingsDocumentReference;
};

@cds.persistence.skip : true
entity SAPB1.LengthMeasures {
  key UnitCode : Integer;
  UnitDisplay : LargeString;
  UnitName : LargeString;
  UnitCodeforQuantityDisplay : LargeString;
  UnitLengthinmm : Double;
};

@cds.persistence.skip : true
entity SAPB1.CreditCards {
  key CreditCardCode : Integer;
  CreditCardName : LargeString;
  GLAccount : LargeString;
  Telephone : LargeString;
  CompanyID : LargeString;
  CountryCode : LargeString;
  @cds.ambiguous : 'missing on condition?'
  CreditPaymentMethods : Association to many SAPB1.CreditPaymentMethods {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = GLAccount;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = CountryCode;
};

@cds.persistence.skip : true
entity SAPB1.ExpenseTypes {
  key ExpenseType : LargeString;
  ExpenseName : LargeString;
  ExpenseAccount : LargeString;
  PaidByCompany : Integer;
  VatGroup : LargeString;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = ExpenseAccount;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxCode : Association to one SAPB1.SalesTaxCodes on SalesTaxCode.Code = VatGroup;
};

@cds.persistence.skip : true
entity SAPB1.Items {
  key ItemCode : LargeString;
  ItemName : LargeString;
  ForeignName : LargeString;
  ItemsGroupCode : Integer;
  CustomsGroupCode : Integer;
  SalesVATGroup : LargeString;
  BarCode : LargeString;
  VatLiable : Integer;
  PurchaseItem : Integer;
  SalesItem : Integer;
  InventoryItem : Integer;
  IncomeAccount : LargeString;
  ExemptIncomeAccount : LargeString;
  ExpanseAccount : LargeString;
  Mainsupplier : LargeString;
  SupplierCatalogNo : LargeString;
  DesiredInventory : Double;
  MinInventory : Double;
  Picture : LargeString;
  User_Text : LargeString;
  SerialNum : LargeString;
  CommissionPercent : Double;
  CommissionSum : Double;
  CommissionGroup : Integer;
  TreeType : Integer;
  AssetItem : Integer;
  DataExportCode : LargeString;
  Manufacturer : Integer;
  QuantityOnStock : Double;
  QuantityOrderedFromVendors : Double;
  QuantityOrderedByCustomers : Double;
  ManageSerialNumbers : Integer;
  ManageBatchNumbers : Integer;
  Valid : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  ValidRemarks : LargeString;
  Frozen : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FrozenFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FrozenTo : DateTime;
  FrozenRemarks : LargeString;
  SalesUnit : LargeString;
  SalesItemsPerUnit : Double;
  SalesPackagingUnit : LargeString;
  SalesQtyPerPackUnit : Double;
  SalesUnitLength : Double;
  SalesLengthUnit : Integer;
  SalesUnitWidth : Double;
  SalesWidthUnit : Integer;
  SalesUnitHeight : Double;
  SalesHeightUnit : Integer;
  SalesUnitVolume : Double;
  SalesVolumeUnit : Integer;
  SalesUnitWeight : Double;
  SalesWeightUnit : Integer;
  PurchaseUnit : LargeString;
  PurchaseItemsPerUnit : Double;
  PurchasePackagingUnit : LargeString;
  PurchaseQtyPerPackUnit : Double;
  PurchaseUnitLength : Double;
  PurchaseLengthUnit : Integer;
  PurchaseUnitWidth : Double;
  PurchaseWidthUnit : Integer;
  PurchaseUnitHeight : Double;
  PurchaseHeightUnit : Integer;
  PurchaseUnitVolume : Double;
  PurchaseVolumeUnit : Integer;
  PurchaseUnitWeight : Double;
  PurchaseWeightUnit : Integer;
  PurchaseVATGroup : LargeString;
  SalesFactor1 : Double;
  SalesFactor2 : Double;
  SalesFactor3 : Double;
  SalesFactor4 : Double;
  PurchaseFactor1 : Double;
  PurchaseFactor2 : Double;
  PurchaseFactor3 : Double;
  PurchaseFactor4 : Double;
  MovingAveragePrice : Double;
  ForeignRevenuesAccount : LargeString;
  ECRevenuesAccount : LargeString;
  ForeignExpensesAccount : LargeString;
  ECExpensesAccount : LargeString;
  AvgStdPrice : Double;
  DefaultWarehouse : LargeString;
  ShipType : Integer;
  GLMethod : Integer;
  TaxType : Integer;
  MaxInventory : Double;
  ManageStockByWarehouse : Integer;
  PurchaseHeightUnit1 : Integer;
  PurchaseUnitHeight1 : Double;
  PurchaseLengthUnit1 : Integer;
  PurchaseUnitLength1 : Double;
  PurchaseWeightUnit1 : Integer;
  PurchaseUnitWeight1 : Double;
  PurchaseWidthUnit1 : Integer;
  PurchaseUnitWidth1 : Double;
  SalesHeightUnit1 : Integer;
  SalesUnitHeight1 : Double;
  SalesLengthUnit1 : Integer;
  SalesUnitLength1 : Double;
  SalesWeightUnit1 : Integer;
  SalesUnitWeight1 : Double;
  SalesWidthUnit1 : Integer;
  SalesUnitWidth1 : Double;
  ForceSelectionOfSerialNumber : Integer;
  ManageSerialNumbersOnReleaseOnly : Integer;
  WTLiable : Integer;
  CostAccountingMethod : Integer;
  SWW : LargeString;
  WarrantyTemplate : LargeString;
  IndirectTax : Integer;
  ArTaxCode : LargeString;
  ApTaxCode : LargeString;
  BaseUnitName : LargeString;
  ItemCountryOrg : LargeString;
  IssueMethod : Integer;
  SRIAndBatchManageMethod : Integer;
  IsPhantom : Integer;
  InventoryUOM : LargeString;
  PlanningSystem : Integer;
  ProcurementMethod : Integer;
  ComponentWarehouse : Integer;
  OrderIntervals : Integer;
  OrderMultiple : Double;
  LeadTime : Integer;
  MinOrderQuantity : Double;
  ItemType : Integer;
  ItemClass : Integer;
  OutgoingServiceCode : Integer;
  IncomingServiceCode : Integer;
  ServiceGroup : Integer;
  NCMCode : Integer;
  MaterialType : Integer;
  MaterialGroup : Integer;
  ProductSource : LargeString;
  Properties1 : Integer;
  Properties2 : Integer;
  Properties3 : Integer;
  Properties4 : Integer;
  Properties5 : Integer;
  Properties6 : Integer;
  Properties7 : Integer;
  Properties8 : Integer;
  Properties9 : Integer;
  Properties10 : Integer;
  Properties11 : Integer;
  Properties12 : Integer;
  Properties13 : Integer;
  Properties14 : Integer;
  Properties15 : Integer;
  Properties16 : Integer;
  Properties17 : Integer;
  Properties18 : Integer;
  Properties19 : Integer;
  Properties20 : Integer;
  Properties21 : Integer;
  Properties22 : Integer;
  Properties23 : Integer;
  Properties24 : Integer;
  Properties25 : Integer;
  Properties26 : Integer;
  Properties27 : Integer;
  Properties28 : Integer;
  Properties29 : Integer;
  Properties30 : Integer;
  Properties31 : Integer;
  Properties32 : Integer;
  Properties33 : Integer;
  Properties34 : Integer;
  Properties35 : Integer;
  Properties36 : Integer;
  Properties37 : Integer;
  Properties38 : Integer;
  Properties39 : Integer;
  Properties40 : Integer;
  Properties41 : Integer;
  Properties42 : Integer;
  Properties43 : Integer;
  Properties44 : Integer;
  Properties45 : Integer;
  Properties46 : Integer;
  Properties47 : Integer;
  Properties48 : Integer;
  Properties49 : Integer;
  Properties50 : Integer;
  Properties51 : Integer;
  Properties52 : Integer;
  Properties53 : Integer;
  Properties54 : Integer;
  Properties55 : Integer;
  Properties56 : Integer;
  Properties57 : Integer;
  Properties58 : Integer;
  Properties59 : Integer;
  Properties60 : Integer;
  Properties61 : Integer;
  Properties62 : Integer;
  Properties63 : Integer;
  Properties64 : Integer;
  AutoCreateSerialNumbersOnRelease : Integer;
  DNFEntry : Integer;
  GTSItemSpec : LargeString;
  GTSItemTaxCategory : LargeString;
  FuelID : Integer;
  BeverageTableCode : LargeString;
  BeverageGroupCode : LargeString;
  BeverageCommercialBrandCode : Integer;
  Series : Integer;
  ToleranceDays : Integer;
  TypeOfAdvancedRules : Integer;
  IssuePrimarilyBy : Integer;
  NoDiscounts : Integer;
  AssetClass : LargeString;
  AssetGroup : LargeString;
  InventoryNumber : LargeString;
  Technician : Integer;
  Employee : Integer;
  Location : Integer;
  AssetStatus : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CapitalizationDate : DateTime;
  StatisticalAsset : Integer;
  Cession : Integer;
  DeactivateAfterUsefulLife : Integer;
  ManageByQuantity : Integer;
  UoMGroupEntry : Integer;
  InventoryUoMEntry : Integer;
  DefaultSalesUoMEntry : Integer;
  DefaultPurchasingUoMEntry : Integer;
  DepreciationGroup : LargeString;
  AssetSerialNumber : LargeString;
  InventoryWeight : Double;
  InventoryWeightUnit : Integer;
  InventoryWeight1 : Double;
  InventoryWeightUnit1 : Integer;
  DefaultCountingUnit : LargeString;
  CountingItemsPerUnit : Double;
  DefaultCountingUoMEntry : Integer;
  Excisable : Integer;
  ChapterID : Integer;
  ScsCode : LargeString;
  SpProdType : Integer;
  ProdStdCost : Double;
  InCostRollup : Integer;
  VirtualAssetItem : Integer;
  EnforceAssetSerialNumbers : Integer;
  AttachmentEntry : Integer;
  LinkedResource : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  GSTRelevnt : Integer;
  SACEntry : Integer;
  GSTTaxCategory : Integer;
  ServiceCategoryEntry : Integer;
  CapitalGoodsOnHoldPercent : Double;
  CapitalGoodsOnHoldLimit : Double;
  AssessableValue : Double;
  AssVal4WTR : Double;
  SOIExcisable : Integer;
  TNVED : LargeString;
  ImportedItem : Integer;
  PricingUnit : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  U_Mediando : Integer;
  U_BA_IsFA : LargeString;
  U_BA_TypID : Integer;
  U_BA_NumID : Integer;
  U_BA_LVAFrom : Double;
  U_BA_LVA : Double;
  U_LNUMMER : LargeString;
  U_LAVP : LargeString;
  U_Mediando_Master : LargeString;
  U_BS_HIN_LIEF : LargeString;
  U_BS_FERTIGUNG_ARTIKELINFO : LargeString;
  U_BS_FERTIGUNG_ARBEITSVORBEREITUNG : LargeString;
  U_BS_FERTIGUNG_FERTIGUNGSANGABEN : LargeString;
  U_BS_FERTIGUNG_QUALITAETSSICHERUNG : LargeString;
  U_BS_FERTIGUNG_SYNONYME : LargeString;
  U_BS_FERTIGUNG_MATCHCODE : LargeString;
  U_BS_FERTIGUNG_BILD1 : LargeString;
  U_BS_FERTIGUNG_BILD2 : LargeString;
  U_BS_FERTIGUNG_BILD3 : LargeString;
  U_BS_FERTIGUNG_ANLAGE1 : LargeString;
  U_BS_FERTIGUNG_ANLAGE2 : LargeString;
  U_BS_FERTIGUNG_ANLAGE3 : LargeString;
  U_tempx : LargeString;
  U_BS_BILD_OLD : LargeString;
  U_BS_DATENBLATT_BESCHREIBUNG : LargeString;
  U_BS_DATENBLATT_DATEN : LargeString;
  U_BS_DATENBLATT_PREIS : LargeString;
  U_BS_DATENBLATT_LIEFERANT : LargeString;
  U_BS_DATENBLATT_ZEICHNUNG : LargeString;
  ItemPrices : many SAPB1.ItemPrice;
  ItemWarehouseInfoCollection : many SAPB1.ItemWarehouseInfo;
  ItemPreferredVendors : many SAPB1.ItemPreferredVendor;
  ItemLocalizationInfos : many SAPB1.ItemLocalizationInfo;
  ItemProjects : many SAPB1.ItemProject;
  ItemDistributionRules : many SAPB1.ItemDistributionRule;
  ItemAttributeGroups : many SAPB1.ItemAttributeGroups;
  ItemDepreciationParameters : many SAPB1.ItemDepreciationParameter;
  ItemPeriodControls : many SAPB1.ItemPeriodControl;
  ItemUnitOfMeasurementCollection : many SAPB1.ItemUnitOfMeasurement;
  ItemBarCodeCollection : many SAPB1.ItemBarCode;
  ItemIntrastatExtension : SAPB1.ItemIntrastatExtension;
  @cds.ambiguous : 'missing on condition?'
  ProductTrees : Association to many SAPB1.ProductTrees {  };
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to one SAPB1.ItemGroups on ItemGroups.Number = ItemsGroupCode;
  @cds.ambiguous : 'missing on condition?'
  CustomsGroup : Association to one SAPB1.CustomsGroups on CustomsGroup.Code = CustomsGroupCode;
  @cds.ambiguous : 'missing on condition?'
  VatGroup : Association to one SAPB1.VatGroups on VatGroup.Code = SalesVATGroup;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = IncomeAccount;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = Mainsupplier;
  @cds.ambiguous : 'missing on condition?'
  CommissionGroup2 : Association to one SAPB1.CommissionGroups on CommissionGroup2.CommissionGroupCode = CommissionGroup;
  @cds.ambiguous : 'missing on condition?'
  Manufacturer2 : Association to one SAPB1.Manufacturers on Manufacturer2.Code = Manufacturer;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = ShipType;
  @cds.ambiguous : 'missing on condition?'
  ContractTemplate : Association to one SAPB1.ContractTemplates on ContractTemplate.TemplateName = WarrantyTemplate;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxCode : Association to one SAPB1.SalesTaxCodes on SalesTaxCode.Code = ArTaxCode;
  @cds.ambiguous : 'missing on condition?'
  InventoryCycles : Association to one SAPB1.InventoryCycles on InventoryCycles.CycleCode = OrderIntervals;
  @cds.ambiguous : 'missing on condition?'
  ServiceGroup2 : Association to one SAPB1.ServiceGroups on ServiceGroup2.AbsEntry = ServiceGroup;
  @cds.ambiguous : 'missing on condition?'
  NCMCodeSetup : Association to one SAPB1.NCMCodesSetup on NCMCodeSetup.AbsEntry = NCMCode;
  @cds.ambiguous : 'missing on condition?'
  MaterialGroup2 : Association to one SAPB1.MaterialGroups on MaterialGroup2.AbsEntry = MaterialGroup;
  @cds.ambiguous : 'missing on condition?'
  DNFCodeSetup : Association to one SAPB1.DNFCodeSetup on DNFCodeSetup.AbsEntry = DNFEntry;
  @cds.ambiguous : 'missing on condition?'
  BrazilFuelIndexer : Association to one SAPB1.BrazilFuelIndexers on BrazilFuelIndexer.FuelID = FuelID;
  @cds.ambiguous : 'missing on condition?'
  BrazilStringIndexer : Association to one SAPB1.BrazilStringIndexers on BrazilStringIndexer.ID = BeverageTableCode;
  @cds.ambiguous : 'missing on condition?'
  BrazilNumericIndexer : Association to one SAPB1.BrazilNumericIndexers on BrazilNumericIndexer.ID = BeverageCommercialBrandCode;
  @cds.ambiguous : 'missing on condition?'
  AssetClass2 : Association to one SAPB1.AssetClasses on AssetClass2.Code = AssetClass;
  @cds.ambiguous : 'missing on condition?'
  AssetGroup2 : Association to one SAPB1.AssetGroups on AssetGroup2.Code = AssetGroup;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = Technician;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = Location;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurementGroup : Association to one SAPB1.UnitOfMeasurementGroups on UnitOfMeasurementGroup.AbsEntry = UoMGroupEntry;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurement : Association to one SAPB1.UnitOfMeasurements on UnitOfMeasurement.AbsEntry = InventoryUoMEntry;
  @cds.ambiguous : 'missing on condition?'
  AssetDepreciationGroup : Association to one SAPB1.AssetDepreciationGroups on AssetDepreciationGroup.Code = DepreciationGroup;
  @cds.ambiguous : 'missing on condition?'
  Resource : Association to one SAPB1.Resources on Resource.Code = LinkedResource;
  @cds.ambiguous : 'missing on condition?'
  IndiaSacCode : Association to one SAPB1.IndiaSacCode on IndiaSacCode.AbsEntry = SACEntry;
  @cds.ambiguous : 'missing on condition?'
  CustomerEquipmentCards : Association to many SAPB1.CustomerEquipmentCards {  };
  @cds.ambiguous : 'missing on condition?'
  BinLocations : Association to many SAPB1.BinLocations {  };
  @cds.ambiguous : 'missing on condition?'
  AlternateCatNum : Association to many SAPB1.AlternateCatNum {  };
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  BarCodes : Association to many SAPB1.BarCodes {  };
  @cds.ambiguous : 'missing on condition?'
  KnowledgeBaseSolutions : Association to many SAPB1.KnowledgeBaseSolutions {  };
  @cds.ambiguous : 'missing on condition?'
  Resources : Association to many SAPB1.Resources {  };
  @cds.ambiguous : 'missing on condition?'
  DepreciationAreas : Association to many SAPB1.DepreciationAreas {  };
  @cds.ambiguous : 'missing on condition?'
  SpecialPrices : Association to many SAPB1.SpecialPrices {  };
  @cds.ambiguous : 'missing on condition?'
  SerialNumberDetails : Association to many SAPB1.SerialNumberDetails {  };
  @cds.ambiguous : 'missing on condition?'
  BatchNumberDetails : Association to many SAPB1.BatchNumberDetails {  };
  @cds.ambiguous : 'missing on condition?'
  StockTakings : Association to many SAPB1.StockTakings {  };
} actions {
  action Cancel();
};

@cds.persistence.skip : true
entity SAPB1.QueryAuthGroups {
  AuthGroupCode : LargeString;
  AuthGroupDes : LargeString;
  key AuthGroupId : Integer;
  CategoryGroupCollection : many SAPB1.CategoryGroup;
};

@cds.persistence.skip : true
entity SAPB1.U_BA_MDIM2 {
  key Code : LargeString;
  Name : LargeString;
  U_ImpID : Integer;
  U_AsstNum : LargeString;
  U_Desc : LargeString;
  U_InvNum : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.UnitOfMeasurements {
  key AbsEntry : Integer;
  Code : LargeString;
  Name : LargeString;
  Length1 : Double;
  Length1Unit : Integer;
  Length2 : Double;
  Length2Unit : Integer;
  Width1 : Double;
  Width1Unit : Integer;
  Width2 : Double;
  Width2Unit : Integer;
  Height1 : Double;
  Height1Unit : Integer;
  Height2 : Double;
  Height2Unit : Integer;
  Volume : Double;
  VolumeUnit : Integer;
  Weight1 : Double;
  Weight1Unit : Integer;
  Weight2 : Double;
  Weight2Unit : Integer;
  InternationalSymbol : LargeString;
  EWBUnitEntry : Integer;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  BinLocations : Association to many SAPB1.BinLocations {  };
  @cds.ambiguous : 'missing on condition?'
  BarCodes : Association to many SAPB1.BarCodes {  };
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurementGroups : Association to many SAPB1.UnitOfMeasurementGroups {  };
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  ItemGroups : Association to many SAPB1.ItemGroups {  };
};

@cds.persistence.skip : true
entity SAPB1.BusinessPartnerProperties {
  key PropertyCode : Integer;
  PropertyName : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.TransactionCodes {
  key Code : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  JournalEntries : Association to many SAPB1.JournalEntries {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccounts : Association to many SAPB1.ChartOfAccounts {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
};

@cds.persistence.skip : true
entity SAPB1.Budgets {
  FutureAnnualExpensesCreditSys : Double;
  FutureAnnualExpensesCreditLoc : Double;
  FutureAnnualExpensesDebitSys : Double;
  FutureAnnualExpensesDebitLoc : Double;
  FutureAnnualRevenuesCredit : Double;
  FutureAnnualRevenuesDebit : Double;
  FutureRevenuesDebitSys : Double;
  FutureRevenuesDebitLoc : Double;
  ParentAccPercent : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartofFiscalYear : DateTime;
  ParentAccountKey : LargeString;
  TotalAnnualBudgetDebitSys : Double;
  BudgetBalanceDebitSys : Double;
  BudgetBalanceDebitLoc : Double;
  TotalAnnualBudgetDebitLoc : Double;
  TotalAnnualBudgetCreditSys : Double;
  TotalAnnualBudgetCreditLoc : Double;
  BudgetBalanceCreditSys : Double;
  BudgetBalanceCreditLoc : Double;
  DivisionCode : Integer;
  AccountCode : LargeString;
  key Numerator : Integer;
  BudgetScenario : Integer;
  BudgetLines : many SAPB1.BudgetLine;
  BudgetCostAccountingLines : many SAPB1.BudgetCostAccountingLine;
  @cds.ambiguous : 'missing on condition?'
  BudgetDistribution : Association to one SAPB1.BudgetDistributions on BudgetDistribution.DivisionCode = DivisionCode;
  @cds.ambiguous : 'missing on condition?'
  BudgetScenario2 : Association to one SAPB1.BudgetScenarios on BudgetScenario2.Numerator = BudgetScenario;
};

@cds.persistence.skip : true
entity SAPB1.AccountSegmentations {
  key Numerator : Integer;
  Name : LargeString;
  Size : Integer;
  Type : Integer;
  AccountSegmentationsCategories : many SAPB1.AccountSegmentationsCategory;
  @cds.ambiguous : 'missing on condition?'
  AccountSegmentationCategories : Association to many SAPB1.AccountSegmentationCategories {  };
};

@cds.persistence.skip : true
entity SAPB1.EmployeeTransfers {
  key TransferID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransStartDate : DateTime;
  TransStartTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransEndDate : DateTime;
  TransEndTime : Time;
  Status : Integer;
  Comment : LargeString;
  EmployeeTransferDetails : many SAPB1.EmployeeTransferDetail;
};

@cds.persistence.skip : true
entity SAPB1.UserDefaultGroups {
  key Code : LargeString;
  Name : LargeString;
  Warehouse : LargeString;
  SalesEmployee : Integer;
  BPforInvoicePayment : LargeString;
  CashAccount : LargeString;
  CheckingAcct : LargeString;
  PrintReceipt : Integer;
  PrintInvoiceandPaymentinS : Integer;
  WindowsColor : Integer;
  Address : LargeString;
  Country : LargeString;
  PrintingHeader : LargeString;
  PhoneNumber1 : LargeString;
  PhoneNumber2 : LargeString;
  FaxNumber : LargeString;
  eMail : LargeString;
  AddressinForeignLanguage : LargeString;
  PrintingHeaderInForeignLangu : LargeString;
  PhoneNumber1ForeignLang : LargeString;
  PhoneNumber2ForeignLang : LargeString;
  FaxNumberForeignLang : LargeString;
  DefaultTaxCode : LargeString;
  AdditionalIdNumber : LargeString;
  UserSignature : Integer;
  UseTax : Integer;
  UseWarehouseAddressinAPD : Integer;
  BPLID : Integer;
  AssetInDoc : Integer;
  LanguageCode : Integer;
  DefaultDocuments : many SAPB1.DefaultDocument;
  DefaultCreditCards : many SAPB1.DefaultCreditCard;
  @cds.ambiguous : 'missing on condition?'
  Warehouse2 : Association to one SAPB1.Warehouses on Warehouse2.WarehouseCode = Warehouse;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson : Association to one SAPB1.SalesPersons on SalesPerson.SalesEmployeeCode = SalesEmployee;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = BPforInvoicePayment;
  @cds.ambiguous : 'missing on condition?'
  Country2 : Association to one SAPB1.Countries on Country2.Code = Country;
  @cds.ambiguous : 'missing on condition?'
  SalesTaxCode : Association to one SAPB1.SalesTaxCodes on SalesTaxCode.Code = DefaultTaxCode;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  BusinessPlace : Association to one SAPB1.BusinessPlaces on BusinessPlace.BPLID = BPLID;
  @cds.ambiguous : 'missing on condition?'
  UserLanguage : Association to one SAPB1.UserLanguages on UserLanguage.Code = LanguageCode;
};

@cds.persistence.skip : true
entity SAPB1.WebClientPreferences {
  key Guid : LargeString;
  UserId : Integer;
  TableName : LargeString;
  ColumnName : LargeString;
  DefaultValue : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.MobileAddOnSetting {
  key Code : LargeString;
  Description : LargeString;
  Url : LargeString;
  Type : Integer;
  Provider : LargeString;
  ViewStyle : Integer;
  LogonMethod : Integer;
  Enable : Integer;
  B1MobileApp : Integer;
  B1SalesApp : Integer;
  B1ServiceApp : Integer;
};

@cds.persistence.skip : true
entity SAPB1.ShippingTypes {
  key Code : Integer;
  Name : LargeString;
  Website : LargeString;
  @cds.ambiguous : 'missing on condition?'
  LandedCosts : Association to many SAPB1.LandedCosts {  };
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.VatGroups {
  key Code : LargeString;
  Name : LargeString;
  Category : Integer;
  TaxAccount : LargeString;
  EU : Integer;
  TriangularDeal : LargeString;
  AcquisitionReverse : Integer;
  NonDeduct : Double;
  AcquisitionTax : LargeString;
  GoodsShipment : LargeString;
  NonDeductAcc : LargeString;
  DeferredTaxAcc : LargeString;
  Correction : Integer;
  VatCorrection : LargeString;
  EqualizationTaxAccount : LargeString;
  ServiceSupply : LargeString;
  Inactive : Integer;
  TaxTypeBlackList : Integer;
  Report349Code : Integer;
  VATInRevenueAccount : LargeString;
  DownPaymentTaxOffsetAccount : LargeString;
  CashDiscountAccount : LargeString;
  VATDeductibleAccount : LargeString;
  TaxRegion : Integer;
  AcquisitionReverseCorrespondingTaxCode : LargeString;
  EBooksVatCategory : Integer;
  VatGroups_Lines : many SAPB1.VatGroups_Line;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = TaxAccount;
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  AdditionalExpenses : Association to many SAPB1.AdditionalExpenses {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  Deposits : Association to many SAPB1.Deposits {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
};

@cds.persistence.skip : true
entity SAPB1.WeightMeasures {
  key UnitCode : Integer;
  UnitDisplay : LargeString;
  UnitName : LargeString;
  UnitWeightinmg : Double;
  @cds.ambiguous : 'missing on condition?'
  BinLocations : Association to many SAPB1.BinLocations {  };
};

@cds.persistence.skip : true
entity SAPB1.ItemGroups {
  PriceDifferencesAccount : LargeString;
  StockInflationAdjustAccount : LargeString;
  MinimumOrderQuantity : Double;
  OrderInterval : Integer;
  ExchangeRateDifferencesAccount : LargeString;
  IncreasingAccount : LargeString;
  StockInflationOffsetAccount : LargeString;
  ProcurementMethod : Integer;
  ComponentWarehouse : Integer;
  PurchaseOffsetAccount : LargeString;
  InventorySystem : Integer;
  WIPMaterialVarianceAccount : LargeString;
  PlanningSystem : Integer;
  PurchaseAccount : LargeString;
  ReturningAccount : LargeString;
  CostInflationAccount : LargeString;
  ExpensesAccount : LargeString;
  RevenuesAccount : LargeString;
  TransfersAccount : LargeString;
  LeadTime : Integer;
  OrderMultiple : Double;
  CostInflationOffsetAccount : LargeString;
  InventoryAccount : LargeString;
  DecreaseGLAccount : LargeString;
  key Number : Integer;
  GoodsClearingAccount : LargeString;
  IncreaseGLAccount : LargeString;
  ForeignRevenuesAccount : LargeString;
  Alert : Integer;
  WIPMaterialAccount : LargeString;
  ShippedGoodsAccount : LargeString;
  ExemptRevenuesAccount : LargeString;
  DecreasingAccount : LargeString;
  VATInRevenueAccount : LargeString;
  VarianceAccount : LargeString;
  EUExpensesAccount : LargeString;
  ForeignExpensesAccount : LargeString;
  CycleCode : Integer;
  CostAccount : LargeString;
  EURevenuesAccount : LargeString;
  PAReturnAccount : LargeString;
  GroupName : LargeString;
  ExpenseClearingAct : LargeString;
  PurchaseCreditAcc : LargeString;
  EUPurchaseCreditAcc : LargeString;
  ForeignPurchaseCreditAcc : LargeString;
  SalesCreditAcc : LargeString;
  SalesCreditEUAcc : LargeString;
  ExemptedCredits : LargeString;
  SalesCreditForeignAcc : LargeString;
  ExpenseOffsetAccount : LargeString;
  NegativeInventoryAdjustmentAccount : LargeString;
  WHIncomingCenvatAccount : LargeString;
  WHOutgoingCenvatAccount : LargeString;
  StockInTransitAccount : LargeString;
  WipOffsetProfitAndLossAccount : LargeString;
  InventoryOffsetProfitAndLossAccount : LargeString;
  ToleranceDays : Integer;
  DefaultUoMGroup : Integer;
  DefaultInventoryUoM : Integer;
  PurchaseBalanceAccount : LargeString;
  ItemClass : Integer;
  RawMaterial : Integer;
  U_BS_Warengruppen : LargeString;
  U_BS_Beschreibung : LargeString;
  U_BS_Rabattgruppe_S : LargeString;
  U_BS_Lieferantennummer : LargeString;
  U_BS_Dummyartikel : LargeString;
  ItemGroupsWarehouseInfos : many SAPB1.ItemGroupsWarehouseInfo;
  @cds.ambiguous : 'missing on condition?'
  ServiceCalls : Association to many SAPB1.ServiceCalls {  };
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  BinLocations : Association to many SAPB1.BinLocations {  };
  @cds.ambiguous : 'missing on condition?'
  GLAccountAdvancedRules : Association to many SAPB1.GLAccountAdvancedRules {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = PriceDifferencesAccount;
  @cds.ambiguous : 'missing on condition?'
  InventoryCycles : Association to one SAPB1.InventoryCycles on InventoryCycles.CycleCode = OrderInterval;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurementGroup : Association to one SAPB1.UnitOfMeasurementGroups on UnitOfMeasurementGroup.AbsEntry = DefaultUoMGroup;
  @cds.ambiguous : 'missing on condition?'
  UnitOfMeasurement : Association to one SAPB1.UnitOfMeasurements on UnitOfMeasurement.AbsEntry = DefaultInventoryUoM;
};

@cds.persistence.skip : true
entity SAPB1.LandedCostsCodes {
  key Code : LargeString;
  Name : LargeString;
  AllocationBy : Integer;
  LandedCostsAllocationAccount : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.SalesPersons {
  key SalesEmployeeCode : Integer;
  SalesEmployeeName : LargeString;
  Remarks : LargeString;
  CommissionForSalesEmployee : Double;
  CommissionGroup : Integer;
  Locked : Integer;
  EmployeeID : Integer;
  Active : Integer;
  Telephone : LargeString;
  Mobile : LargeString;
  Fax : LargeString;
  Email : LargeString;
  U_AufteilungVK : LargeString;
  U_AufteilungEK : LargeString;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
  @cds.ambiguous : 'missing on condition?'
  UserDefaultGroups : Association to many SAPB1.UserDefaultGroups {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransfers : Association to many SAPB1.StockTransfers {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryTransferRequests : Association to many SAPB1.InventoryTransferRequests {  };
  @cds.ambiguous : 'missing on condition?'
  Contacts : Association to many SAPB1.Contacts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  EmployeesInfo : Association to many SAPB1.EmployeesInfo {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  StockTransferDrafts : Association to many SAPB1.StockTransferDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  Activities : Association to many SAPB1.Activities {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagements : Association to many SAPB1.ProjectManagements {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CommissionGroup2 : Association to one SAPB1.CommissionGroups on CommissionGroup2.CommissionGroupCode = CommissionGroup;
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.NFModels {
  key AbsEntry : LargeString;
  NFMName : LargeString;
  NFMDescription : LargeString;
  NFMCode : LargeString;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  FiscalPrinter : Association to many SAPB1.FiscalPrinter {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.DeductionTaxSubGroups {
  key GroupCode : LargeString;
  GroupName : LargeString;
  @cds.ambiguous : 'missing on condition?'
  DeductionTaxGroups : Association to many SAPB1.DeductionTaxGroups {  };
};

@cds.persistence.skip : true
entity SAPB1.TaxCodeDeterminations {
  key DocEntry : Integer;
  LineNumber : Integer;
  DocumentType : Integer;
  BusinessArea : Integer;
  Condition1 : Integer;
  UDFTable1 : LargeString;
  NumberValue1 : Integer;
  StringValue1 : LargeString;
  MoneyValue1 : Double;
  Condition2 : Integer;
  UDFTable2 : LargeString;
  NumberValue2 : Integer;
  StringValue2 : LargeString;
  MoneyValue2 : Double;
  Condition3 : Integer;
  UDFTable3 : LargeString;
  NumberValue3 : Integer;
  StringValue3 : LargeString;
  MoneyValue3 : Double;
  Condition4 : Integer;
  UDFTable4 : LargeString;
  NumberValue4 : Integer;
  StringValue4 : LargeString;
  MoneyValue4 : Double;
  Condition5 : Integer;
  UDFTable5 : LargeString;
  NumberValue5 : Integer;
  StringValue5 : LargeString;
  MoneyValue5 : Double;
  Description : LargeString;
  TaxCode : LargeString;
  FreightRowTax : LargeString;
  FreightHeaderTax : LargeString;
  UDFAlias1 : LargeString;
  UDFAlias2 : LargeString;
  UDFAlias3 : LargeString;
  UDFAlias4 : LargeString;
  UDFAlias5 : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.AccrualTypes {
  key Code : LargeString;
  Name : LargeString;
  PostingAccount : LargeString;
  CalculationAccount : LargeString;
  InterimAccount : LargeString;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = PostingAccount;
};

@cds.persistence.skip : true
entity SAPB1.BrazilNumericIndexers {
  IndexerType : Integer;
  Code : Integer;
  Description : LargeString;
  key ID : Integer;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPlaces : Association to many SAPB1.BusinessPlaces {  };
  @cds.ambiguous : 'missing on condition?'
  BrazilBeverageIndexers : Association to many SAPB1.BrazilBeverageIndexers {  };
} actions {
  action GetIndexerTypeList() returns many SAPB1.BrazilNumericIndexerParams;
};

@cds.persistence.skip : true
entity SAPB1.BrazilFuelIndexers {
  key FuelID : Integer;
  FuelGroupCode : Integer;
  FuelCode : LargeString;
  Description : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
};

@cds.persistence.skip : true
entity SAPB1.ItemProperties {
  key Number : Integer;
  PropertyName : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.ReportTypes {
  key TypeCode : LargeString;
  TypeName : LargeString;
  DefaultReportLayout : LargeString;
  AddonName : LargeString;
  AddonFormType : LargeString;
  MenuID : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.PostingTemplates {
  key Code : LargeString;
  Description : LargeString;
  StampTax : Integer;
  AutomaticVAT : Integer;
  ManageWTax : Integer;
  DeferredTax : Integer;
  PostingTemplatesLineCollection : many SAPB1.PostingTemplatesLine;
};

@cds.persistence.skip : true
entity SAPB1.Relationships {
  RelationshipDescription : LargeString;
  key RelationshipCode : Integer;
  @cds.ambiguous : 'missing on condition?'
  PartnersSetups : Association to many SAPB1.PartnersSetups {  };
};

@cds.persistence.skip : true
entity SAPB1.ChecksforPayment {
  key CheckKey : Integer;
  CheckNumber : Integer;
  BankCode : LargeString;
  Branch : LargeString;
  BankName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CheckDate : DateTime;
  AccountNumber : LargeString;
  Details : LargeString;
  JournalEntryReference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PaymentDate : DateTime;
  PaymentNo : Integer;
  CheckAmount : Double;
  Transferable : Integer;
  VendorCode : LargeString;
  CheckCurrency : LargeString;
  Canceled : Integer;
  CardOrAccount : Integer;
  Printed : Integer;
  VendorName : LargeString;
  Signature : LargeString;
  CustomerAccountCode : LargeString;
  TransactionNumber : Integer;
  Address : LargeString;
  CreateJournalEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  TaxTotal : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  DeductionRefundAmount : Double;
  PrintedBy : Integer;
  CountryCode : LargeString;
  TotalinWords : LargeString;
  AddressName : LargeString;
  ManualCheck : Integer;
  AttachmentEntry : Integer;
  ChecksforPaymentLines : many SAPB1.ChecksforPaymentLine;
  ChecksforPaymentDocumentReferences : many SAPB1.ChecksforPaymentDocumentReference;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransactionNumber;
  @cds.ambiguous : 'missing on condition?'
  Country : Association to one SAPB1.Countries on Country.Code = CountryCode;
  @cds.ambiguous : 'missing on condition?'
  Attachments2 : Association to one SAPB1.Attachments2 on Attachments2.AbsoluteEntry = AttachmentEntry;
};

@cds.persistence.skip : true
entity SAPB1.PriceLists {
  RoundingMethod : Integer;
  GroupNum : Integer;
  BasePriceList : Integer;
  Factor : Double;
  key PriceListNo : Integer;
  PriceListName : LargeString;
  IsGrossPrice : Integer;
  Active : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  DefaultPrimeCurrency : LargeString;
  DefaultAdditionalCurrency1 : LargeString;
  DefaultAdditionalCurrency2 : LargeString;
  RoundingRule : Integer;
  FixedAmount : Double;
  @cds.ambiguous : 'missing on condition?'
  StockTransfers : Association to many SAPB1.StockTransfers {  };
  @cds.ambiguous : 'missing on condition?'
  ProductTrees : Association to many SAPB1.ProductTrees {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  SpecialPrices : Association to many SAPB1.SpecialPrices {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentTermsTypes : Association to many SAPB1.PaymentTermsTypes {  };
};

@cds.persistence.skip : true
entity SAPB1.SerialNumberDetails {
  key DocEntry : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  MfrSerialNo : LargeString;
  SerialNumber : LargeString;
  LotNumber : LargeString;
  SystemNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AdmissionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufacturingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpirationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  MfrWarrantyStart : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  MFrWarrantyEnd : DateTime;
  Location : LargeString;
  Details : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
};

@cds.persistence.skip : true
entity SAPB1.Projects {
  key Code : LargeString;
  Name : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  Active : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
  @cds.ambiguous : 'missing on condition?'
  ProductTrees : Association to many SAPB1.ProductTrees {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  JournalEntries : Association to many SAPB1.JournalEntries {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  AdditionalExpenses : Association to many SAPB1.AdditionalExpenses {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccounts : Association to many SAPB1.ChartOfAccounts {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  ProjectManagements : Association to many SAPB1.ProjectManagements {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  Deposits : Association to many SAPB1.Deposits {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  BudgetScenarios : Association to many SAPB1.BudgetScenarios {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.Currencies {
  key Code : LargeString;
  Name : LargeString;
  DocumentsCode : LargeString;
  InternationalDescription : LargeString;
  HundredthName : LargeString;
  EnglishName : LargeString;
  EnglishHundredthName : LargeString;
  PluralInternationalDescription : LargeString;
  PluralHundredthName : LargeString;
  PluralEnglishName : LargeString;
  PluralEnglishHundredthName : LargeString;
  Decimals : Integer;
  Rounding : Integer;
  RoundingInPayment : Integer;
  MaxIncomingAmtDiff : Double;
  MaxOutgoingAmtDiff : Double;
  MaxIncomingAmtDiffPercent : Double;
  MaxOutgoingAmtDiffPercent : Double;
  @cds.ambiguous : 'missing on condition?'
  AssetTransfer : Association to many SAPB1.AssetTransfer {  };
  @cds.ambiguous : 'missing on condition?'
  WithholdingTaxCodes : Association to many SAPB1.WithholdingTaxCodes {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoice : Association to many SAPB1.CorrectionPurchaseInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoiceReversal : Association to many SAPB1.CorrectionInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionInvoice : Association to many SAPB1.CorrectionInvoice {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenEntries : Association to many SAPB1.InventoryGenEntries {  };
  @cds.ambiguous : 'missing on condition?'
  AssetRetirement : Association to many SAPB1.AssetRetirement {  };
  @cds.ambiguous : 'missing on condition?'
  Orders : Association to many SAPB1.Orders {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalization : Association to many SAPB1.AssetCapitalization {  };
  @cds.ambiguous : 'missing on condition?'
  InventoryGenExits : Association to many SAPB1.InventoryGenExits {  };
  @cds.ambiguous : 'missing on condition?'
  Drafts : Association to many SAPB1.Drafts {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseCreditNotes : Association to many SAPB1.PurchaseCreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccounts : Association to many SAPB1.ChartOfAccounts {  };
  @cds.ambiguous : 'missing on condition?'
  AssetManualDepreciation : Association to many SAPB1.AssetManualDepreciation {  };
  @cds.ambiguous : 'missing on condition?'
  ReturnRequest : Association to many SAPB1.ReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  DeliveryNotes : Association to many SAPB1.DeliveryNotes {  };
  @cds.ambiguous : 'missing on condition?'
  BankStatements : Association to many SAPB1.BankStatements {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseInvoices : Association to many SAPB1.PurchaseInvoices {  };
  @cds.ambiguous : 'missing on condition?'
  BlanketAgreements : Association to many SAPB1.BlanketAgreements {  };
  @cds.ambiguous : 'missing on condition?'
  Invoices : Association to many SAPB1.Invoices {  };
  @cds.ambiguous : 'missing on condition?'
  CreditNotes : Association to many SAPB1.CreditNotes {  };
  @cds.ambiguous : 'missing on condition?'
  AssetCapitalizationCreditMemo : Association to many SAPB1.AssetCapitalizationCreditMemo {  };
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  DownPayments : Association to many SAPB1.DownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseDownPayments : Association to many SAPB1.PurchaseDownPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseReturns : Association to many SAPB1.PurchaseReturns {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseOrders : Association to many SAPB1.PurchaseOrders {  };
  @cds.ambiguous : 'missing on condition?'
  Quotations : Association to many SAPB1.Quotations {  };
  @cds.ambiguous : 'missing on condition?'
  Returns : Association to many SAPB1.Returns {  };
  @cds.ambiguous : 'missing on condition?'
  GoodsReturnRequest : Association to many SAPB1.GoodsReturnRequest {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseRequests : Association to many SAPB1.PurchaseRequests {  };
  @cds.ambiguous : 'missing on condition?'
  CorrectionPurchaseInvoiceReversal : Association to many SAPB1.CorrectionPurchaseInvoiceReversal {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
  @cds.ambiguous : 'missing on condition?'
  PurchaseQuotations : Association to many SAPB1.PurchaseQuotations {  };
};

@cds.persistence.skip : true
entity SAPB1.CommissionGroups {
  key CommissionGroupCode : Integer;
  CommissionGroupName : LargeString;
  CommissionPercentage : Double;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  SalesPersons : Association to many SAPB1.SalesPersons {  };
};

@cds.persistence.skip : true
entity SAPB1.ProductTrees {
  key TreeCode : LargeString;
  TreeType : Integer;
  Quantity : Double;
  DistributionRule : LargeString;
  Project : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  PriceList : Integer;
  Warehouse : LargeString;
  PlanAvgProdSize : Double;
  HideBOMComponentsInPrintout : Integer;
  ProductDescription : LargeString;
  ProductTreeLines : many SAPB1.ProductTreeLine;
  ProductTreeStages : many SAPB1.ProductTreeStage;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = TreeCode;
  @cds.ambiguous : 'missing on condition?'
  DistributionRule6 : Association to one SAPB1.DistributionRules on DistributionRule6.FactorCode = DistributionRule;
  @cds.ambiguous : 'missing on condition?'
  Project2 : Association to one SAPB1.Projects on Project2.Code = Project;
  @cds.ambiguous : 'missing on condition?'
  PriceList2 : Association to one SAPB1.PriceLists on PriceList2.PriceListNo = PriceList;
  @cds.ambiguous : 'missing on condition?'
  ProductionOrders : Association to many SAPB1.ProductionOrders {  };
};

@cds.persistence.skip : true
entity SAPB1.U_BLD_GNRL {
  key Code : LargeString;
  Name : LargeString;
  U_UseLL : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.LandedCosts {
  key DocEntry : Integer;
  LandedCostNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  VendorCode : LargeString;
  VendorName : LargeString;
  Broker : LargeString;
  BrokerName : LargeString;
  ClosedDocument : Integer;
  FileNumber : LargeString;
  Remarks : LargeString;
  Reference : LargeString;
  DocumentCurrency : LargeString;
  DocumentRate : Double;
  ProjectedCustoms : Double;
  ActualCustoms : Double;
  ActualCustomsFC : Double;
  Tax1 : Double;
  Tax2 : Double;
  BeforeTax : Double;
  Total : Double;
  TotalFreightCharges : Double;
  ProjectedCustomsFC : Double;
  Tax1FC : Double;
  Tax2FC : Double;
  BeforeTaxFC : Double;
  TotalFC : Double;
  TotalFreightChargesFC : Double;
  Series : Integer;
  CustomsAffectsInventory : Integer;
  AmountToBalance : Double;
  AmountToBalanceFC : Double;
  BillofLadingNumber : LargeString;
  TransportType : Integer;
  TransactionNumber : Integer;
  JournalRemarks : LargeString;
  AttachmentEntry : Integer;
  LandedCost_ItemLines : many SAPB1.LandedCost_ItemLine;
  LandedCost_CostLines : many SAPB1.LandedCost_CostLine;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = VendorCode;
  @cds.ambiguous : 'missing on condition?'
  ShippingType : Association to one SAPB1.ShippingTypes on ShippingType.Code = TransportType;
  @cds.ambiguous : 'missing on condition?'
  JournalEntry : Association to one SAPB1.JournalEntries on JournalEntry.JdtNum = TransactionNumber;
  @cds.ambiguous : 'missing on condition?'
  PurchaseDeliveryNotes : Association to many SAPB1.PurchaseDeliveryNotes {  };
} actions {
  action CloseLandedCost();
  action CancelLandedCost();
};

@cds.persistence.skip : true
entity SAPB1.SpecialPrices {
  key ItemCode : LargeString;
  key CardCode : LargeString;
  Price : Double;
  Currency : LargeString;
  DiscountPercent : Double;
  PriceListNum : Integer;
  AutoUpdate : Integer;
  SourcePrice : Integer;
  Valid : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  SpecialPriceDataAreas : many SAPB1.SpecialPriceDataArea;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  PriceList : Association to one SAPB1.PriceLists on PriceList.PriceListNo = PriceListNum;
};

@cds.persistence.skip : true
entity SAPB1.U_BPCNTR {
  key Code : LargeString;
  Name : LargeString;
  U_BPCNTRY : LargeString;
  U_BPDATE : LargeString;
  U_BPCNTRG : LargeString;
  U_BPCNTRT : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.CreditPaymentMethods {
  key PaymentMethodCode : Integer;
  Name : LargeString;
  AssignedtoCreditCard : Integer;
  PaymentCode : LargeString;
  MinimumCreditAmount : Double;
  MinimumPaymentAmount : Double;
  MaxQtyWithoutApproval : Double;
  InstallmentPaymentsPossible : Integer;
  @cds.ambiguous : 'missing on condition?'
  CreditCard : Association to one SAPB1.CreditCards on CreditCard.CreditCardCode = AssignedtoCreditCard;
  @cds.ambiguous : 'missing on condition?'
  CreditCardPayment : Association to one SAPB1.CreditCardPayments on CreditCardPayment.DueDateCode = PaymentCode;
};

@cds.persistence.skip : true
entity SAPB1.U_BNCSTP {
  key Code : LargeString;
  Name : LargeString;
  U_Export : LargeString;
  U_Import : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.DNFCodeSetup {
  key AbsEntry : Integer;
  NCMCode : Integer;
  DNFCode : LargeString;
  UoM : LargeString;
  Factor : Double;
  @cds.ambiguous : 'missing on condition?'
  Items : Association to many SAPB1.Items {  };
  @cds.ambiguous : 'missing on condition?'
  NCMCodeSetup : Association to one SAPB1.NCMCodesSetup on NCMCodeSetup.AbsEntry = NCMCode;
};

@cds.persistence.skip : true
entity SAPB1.CreditCardPayments {
  key DueDateCode : LargeString;
  DueDateName : LargeString;
  DueDatesType : Integer;
  PaymentAfterDays : Integer;
  PaymentAfterMonths : Integer;
  FromDay1 : Integer;
  ToDay1 : Integer;
  PaymentDay1 : Integer;
  NoOfMonths1 : Integer;
  FromDay2 : Integer;
  ToDay2 : Integer;
  PaymentDay2 : Integer;
  NoOfMonths2 : Integer;
  FromDay3 : Integer;
  ToDay3 : Integer;
  PaymentDay3 : Integer;
  NoOfMonths3 : Integer;
  FromDay4 : Integer;
  ToDay4 : Integer;
  PaymentDay4 : Integer;
  NoOfMonths4 : Integer;
  @cds.ambiguous : 'missing on condition?'
  CreditPaymentMethods : Association to many SAPB1.CreditPaymentMethods {  };
};

@cds.persistence.skip : true
entity SAPB1.BudgetDistributions {
  September : Double;
  August : Double;
  July : Double;
  June : Double;
  May : Double;
  April : Double;
  March : Double;
  February : Double;
  December : Double;
  November : Double;
  October : Double;
  January : Double;
  BudgetAmount : Double;
  Description : LargeString;
  key DivisionCode : Integer;
  @cds.ambiguous : 'missing on condition?'
  Budgets : Association to many SAPB1.Budgets {  };
};

@cds.persistence.skip : true
entity SAPB1.AlternateCatNum {
  key ItemCode : LargeString;
  key CardCode : LargeString;
  key Substitute : LargeString;
  DisplayBPCatalogNumber : Integer;
  U_GPKatalogname : LargeString;
  @cds.ambiguous : 'missing on condition?'
  Item : Association to one SAPB1.Items on Item.ItemCode = ItemCode;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
};

@cds.persistence.skip : true
entity SAPB1.AlertManagements {
  key Code : Integer;
  Name : LargeString;
  Type : Integer;
  Priority : Integer;
  Active : Integer;
  Param : LargeString;
  QueryID : Integer;
  FrequencyType : Integer;
  DayOfExecution : Integer;
  ExecutionTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LastExecutionDate : DateTime;
  LastExecutionTime : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  NextExecutionDate : DateTime;
  NextExecutionTime : Time;
  SaveHistory : Integer;
  FrequencyInterval : Integer;
  AlertManagementRecipients : many SAPB1.AlertManagementRecipient;
  AlertManagementDocuments : many SAPB1.AlertManagementDocument;
} actions {
  action GetAlertManagementList() returns many SAPB1.AlertManagementParams;
};

@cds.persistence.skip : true
entity SAPB1.SalesOpportunities {
  key SequentialNo : Integer;
  CardCode : LargeString;
  SalesPerson : Integer;
  ContactPerson : Integer;
  Source : Integer;
  InterestField1 : Integer;
  InterestField2 : Integer;
  InterestField3 : Integer;
  InterestLevel : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PredictedClosingDate : DateTime;
  MaxLocalTotal : Double;
  MaxSystemTotal : Double;
  WeightedSumLC : Double;
  WeightedSumSC : Double;
  GrossProfit : Double;
  GrossProfitTotalLocal : Double;
  GrossProfitTotalSystem : Double;
  Remarks : LargeString;
  Status : Integer;
  ReasonForClosing : Integer;
  TotalAmountLocal : Double;
  TotalAmounSystem : Double;
  ClosingGrossProfitLocal : Double;
  ClosingGrossProfitSystem : Double;
  ClosingPercentage : Double;
  CurrentStageNo : Integer;
  CurrentStageNumber : Integer;
  OpportunityName : LargeString;
  Industry : Integer;
  LinkedDocumentType : LargeString;
  DataOwnershipfield : Integer;
  StatusRemarks : LargeString;
  ProjectCode : LargeString;
  BPChanelName : LargeString;
  UserSignature : Integer;
  CustomerName : LargeString;
  DocumentCheckbox : LargeString;
  LinkedDocumentNumber : Integer;
  Territory : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  BPChannelContact : Integer;
  BPChanelCode : LargeString;
  ClosingType : Integer;
  AttachmentEntry : Integer;
  OpportunityType : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  SalesOpportunitiesLines : many SAPB1.SalesOpportunitiesLine;
  SalesOpportunitiesCompetition : many SAPB1.SalesOpportunitiesCompetitionItem;
  SalesOpportunitiesPartners : many SAPB1.SalesOpportunitiesPartner;
  SalesOpportunitiesInterests : many SAPB1.SalesOpportunitiesInterest;
  SalesOpportunitiesReasons : many SAPB1.SalesOpportunitiesReason;
  @cds.ambiguous : 'missing on condition?'
  BusinessPartner : Association to one SAPB1.BusinessPartners on BusinessPartner.CardCode = CardCode;
  @cds.ambiguous : 'missing on condition?'
  SalesPerson2 : Association to one SAPB1.SalesPersons on SalesPerson2.SalesEmployeeCode = SalesPerson;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunitySourceSetup : Association to one SAPB1.SalesOpportunitySourcesSetup on SalesOpportunitySourceSetup.SequenceNo = Source;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunityInterestSetup : Association to one SAPB1.SalesOpportunityInterestsSetup on SalesOpportunityInterestSetup.SequenceNo = InterestField1;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunityReasonSetup : Association to one SAPB1.SalesOpportunityReasonsSetup on SalesOpportunityReasonSetup.SequenceNo = ReasonForClosing;
  @cds.ambiguous : 'missing on condition?'
  SalesStage : Association to one SAPB1.SalesStages on SalesStage.SequenceNo = CurrentStageNo;
  @cds.ambiguous : 'missing on condition?'
  Industry2 : Association to one SAPB1.Industries on Industry2.IndustryCode = Industry;
  @cds.ambiguous : 'missing on condition?'
  EmployeeInfo : Association to one SAPB1.EmployeesInfo on EmployeeInfo.EmployeeID = DataOwnershipfield;
  @cds.ambiguous : 'missing on condition?'
  Project : Association to one SAPB1.Projects on Project.Code = ProjectCode;
  @cds.ambiguous : 'missing on condition?'
  User : Association to one SAPB1.Users on User.InternalKey = UserSignature;
  @cds.ambiguous : 'missing on condition?'
  Territory2 : Association to one SAPB1.Territories on Territory2.TerritoryID = Territory;
} actions {
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.WithholdingTaxCodes {
  key WTCode : LargeString;
  WTName : LargeString;
  Category : Integer;
  BaseType : Integer;
  BaseAmount : Double;
  OfficialCode : LargeString;
  Account : LargeString;
  WithholdingType : Integer;
  RoundingType : Integer;
  Section : Integer;
  Threshold : Double;
  Surcharge : Double;
  Concessional : Integer;
  Assessee : Integer;
  APTDSAccount : LargeString;
  APSurchargeAccount : LargeString;
  APCessAccount : LargeString;
  APHSCAccount : LargeString;
  APIGSTAccount : LargeString;
  APCGSTAccount : LargeString;
  APSGSTAccount : LargeString;
  APUTGSTAccount : LargeString;
  APCessGSTAccount : LargeString;
  ARTDSAccount : LargeString;
  ARSurchargeAccount : LargeString;
  ARCessAccount : LargeString;
  ARHSCAccount : LargeString;
  ARIGSTAccount : LargeString;
  ARCGSTAccount : LargeString;
  ARSGSTAccount : LargeString;
  ARUTGSTAccount : LargeString;
  ARCessGSTAccount : LargeString;
  Location : Integer;
  ReturnType : Integer;
  Inactive : Integer;
  CSTCodeIncomingID : Integer;
  CSTCodeOutgoingID : Integer;
  NatureOfCalculationBaseCode : LargeString;
  TypeID : Integer;
  Rate : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveFrom : DateTime;
  MinimumTaxableAmount : Double;
  IsProgressiveTax : Integer;
  Currency : LargeString;
  TdsType : Integer;
  TransactonThreshold : Double;
  EBooksWTaxCategory : Integer;
  WithholdingTaxCodes_Lines : many SAPB1.WithholdingTaxCodes_Line;
  @cds.ambiguous : 'missing on condition?'
  ChartOfAccount : Association to one SAPB1.ChartOfAccounts on ChartOfAccount.Code = Account;
  @cds.ambiguous : 'missing on condition?'
  Section2 : Association to one SAPB1.Sections on Section2.AbsEntry = Section;
  @cds.ambiguous : 'missing on condition?'
  NatureOfAssessee : Association to one SAPB1.NatureOfAssessees on NatureOfAssessee.AbsEntry = Assessee;
  @cds.ambiguous : 'missing on condition?'
  WarehouseLocation : Association to one SAPB1.WarehouseLocations on WarehouseLocation.Code = Location;
  @cds.ambiguous : 'missing on condition?'
  NotaFiscalCST : Association to one SAPB1.NotaFiscalCST on NotaFiscalCST.ID = CSTCodeIncomingID;
  @cds.ambiguous : 'missing on condition?'
  BrazilStringIndexer : Association to one SAPB1.BrazilStringIndexers on BrazilStringIndexer.ID = NatureOfCalculationBaseCode;
  @cds.ambiguous : 'missing on condition?'
  Currency2 : Association to one SAPB1.Currencies on Currency2.Code = Currency;
  @cds.ambiguous : 'missing on condition?'
  PaymentDrafts : Association to many SAPB1.PaymentDrafts {  };
  @cds.ambiguous : 'missing on condition?'
  BusinessPartners : Association to many SAPB1.BusinessPartners {  };
  @cds.ambiguous : 'missing on condition?'
  IncomingPayments : Association to many SAPB1.IncomingPayments {  };
  @cds.ambiguous : 'missing on condition?'
  VendorPayments : Association to many SAPB1.VendorPayments {  };
};

@cds.persistence.skip : true
entity SAPB1.SalesOpportunityInterestsSetup {
  key SequenceNo : Integer;
  Description : LargeString;
  Sort : Integer;
  @cds.ambiguous : 'missing on condition?'
  SalesOpportunities : Association to many SAPB1.SalesOpportunities {  };
};

@cds.persistence.skip : true
entity SAPB1.ANGEBOTS_ANFRAGE {
  DocNum : Integer;
  Period : Integer;
  Instance : Integer;
  Series : Integer;
  Handwrtten : LargeString;
  Status : LargeString;
  RequestStatus : LargeString;
  Creator : LargeString;
  Remark : LargeString;
  key DocEntry : Integer;
  Canceled : LargeString;
  Object : LargeString;
  LogInst : Integer;
  UserSign : Integer;
  Transfered : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  DataSource : LargeString;
  U_CardCode : LargeString;
  ANGEBOTS_ANFRAGE_ZCollection : many SAPB1.ANGEBOTS_ANFRAGE_Z;
} actions {
  action Cancel();
  action Close();
};

@cds.persistence.skip : true
entity SAPB1.B1Sessions {
  Version : LargeString;
  SessionTimeout : Integer;
  key SessionId : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.ItemImages {
  key ItemCode : LargeString;
  Picture : LargeString;
};

@cds.persistence.skip : true
entity SAPB1.EmployeeImages {
  key EmployeeNo : Integer;
  Picture : Integer;
};

type SAPB1.CreditLineParams {
  AbsId : Integer;
};

type SAPB1.RclRecurringTransaction {
  TransactionID : Integer;
  TemplateID : Integer;
  Instance : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PlannedDate : DateTime;
  DocType : LargeString;
  DocEntry : Integer;
};

type SAPB1.RclRecurringTransactionParams {
  TransactionID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PlannedDate : DateTime;
};

type SAPB1.DefaultElectronicSeriesParams {
  Series : Integer;
  ElectronicSeries : Integer;
};

type SAPB1.ElectronicSeriesParams {
  ElectronicSeries : Integer;
};

type SAPB1.DocumentSeriesParams {
  Document : LargeString;
  DocumentSubType : LargeString;
  Series : Integer;
};

type SAPB1.SeriesParams {
  Series : Integer;
};

type SAPB1.ExternalReconciliationFilterParams {
  AccountCodeFrom : LargeString;
  AccountCodeTo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReconciliationDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReconciliationDateTo : DateTime;
  ReconciliationNoFrom : Integer;
  ReconciliationNoTo : Integer;
};

type SAPB1.ExternalReconciliationParams {
  AccountCode : LargeString;
  ReconciliationNo : Integer;
};

type SAPB1.ReconciliationBankStatementLine {
  BankStatementAccountCode : LargeString;
  Sequence : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  Ref1 : LargeString;
  Amount : Double;
  Details : LargeString;
};

type SAPB1.ReconciliationJournalEntryLine {
  TransactionNumber : Integer;
  LineNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Ref1 : LargeString;
  Ref2 : LargeString;
  Ref3 : LargeString;
  DebitAmount : Double;
  CreditAmount : Double;
  Details : LargeString;
};

type SAPB1.RoutingDateCalculationInput {
  ResourceCode : LargeString;
  WarehouseCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CalculateFromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CalculateUntilDate : DateTime;
  CapacitySum : Double;
  FirstDateProportion : Double;
  WORObjAbs : Integer;
  WORLine : Integer;
};

type SAPB1.DataSensitiveStatus {
};

type SAPB1.SensitiveDataAccess {
  Table : LargeString;
  Key1 : LargeString;
  Key2 : LargeString;
  Key3 : LargeString;
  Key4 : LargeString;
  PropertyName : LargeString;
  PropertyID : Integer;
  PropertyValue : LargeString;
};

type SAPB1.MobileServerDateTime {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  Time : Time;
};

type SAPB1.ServiceAppReport {
  Code : Integer;
  SystemReportName : LargeString;
  CustomizedReportName : LargeString;
};

type SAPB1.SalesAppSetting {
  Code : Integer;
  Name : LargeString;
  AdvancedDashBoard : Integer;
  CustomerAdvancedDashBoard : Integer;
};

type SAPB1.SalesAppSettingParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.TechnicianSettings {
  Technician : Integer;
  GroupCode : Integer;
};

type SAPB1.TechnicianSchedulings {
  ServiceCallID : Integer;
  SchedulingLineNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
};

type SAPB1.QRCodeData {
  ObjectType : Integer;
  ObjectAbsEntry : LargeString;
  FieldName : LargeString;
  QRCodeText : LargeString;
};

type SAPB1.PMC_AreaData {
  AreaID : Integer;
  AreaName : LargeString;
};

type SAPB1.PMC_SubprojectTypeData {
  SubprojectTypeID : Integer;
  SubprojectTypeName : LargeString;
};

type SAPB1.ReportLayout {
  Name : LargeString;
  Author : LargeString;
  Remarks : LargeString;
  Width : Integer;
  Height : Integer;
  LeftMargin : Integer;
  RightMargin : Integer;
  TopMargin : Integer;
  BottomMargin : Integer;
  PaperSize : LargeString;
  GridSize : Integer;
  Picture : LargeString;
  TypeCode : LargeString;
  LeaderReport : LargeString;
  FollowUpReport : LargeString;
  PreviewPrintingFont : LargeString;
  ChangeFontSizeInPreview : Integer;
  EMailFont : LargeString;
  ChangeFontSizeForEMail : Integer;
  Query : LargeString;
  language : Integer;
  ImpExpObjCode : Integer;
  ExtensionName : LargeString;
  RepetitiveAreasNumber : Integer;
  LayoutCode : LargeString;
  Printer : LargeString;
  PrinterFirstPage : LargeString;
  NumberOfCopies : Integer;
  Localization : LargeString;
  B1Version : LargeString;
  CRVersion : LargeString;
  TypeDetail : LargeString;
  ReportLayoutItems : many SAPB1.ReportLayoutItem;
  ReportLayout_TranslationLines : many SAPB1.ReportLayout_TranslationLine;
};

type SAPB1.ReportLayoutParams {
  LayoutCode : LargeString;
  LayoutName : LargeString;
};

type SAPB1.ReportInputParams {
  ReportLayoutMenuID : LargeString;
};

type SAPB1.UserMenuParams {
  UserID : Integer;
};

type SAPB1.BOELineParams {
  BOEKey : Integer;
};

type SAPB1.EcmActionLog {
  ActionID : Integer;
  LogID : Integer;
  Message : LargeString;
  Data : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LogDate : DateTime;
  LogTime : Integer;
  ExportFormat : Integer;
};

type SAPB1.EcmActionLogParams {
  ActionID : Integer;
  LogID : Integer;
};

type SAPB1.EcmAction {
  ActionID : Integer;
  Protocol : LargeString;
  Description : LargeString;
  Message : LargeString;
  Environment : Integer;
  BusinessPlace : Integer;
  Submits : Integer;
  ObjectID : LargeString;
  ReportID : LargeString;
  SourceType : LargeString;
  SourceObject : Integer;
  AssignedID : LargeString;
  DocumentBatch : LargeString;
  DocumentBatchLine : Integer;
  PeriodNumber : Integer;
  PeriodYear : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PeriodDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PeriodDateTo : DateTime;
  U_B1SYS_XMLAmount : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_B1SYS_SendDateINTM : DateTime;
};

type SAPB1.EcmActionDocParams {
  Protocol : LargeString;
  SourceType : LargeString;
  SourceObject : Integer;
};

type SAPB1.EcmActionParams {
  ActionID : Integer;
};

type SAPB1.WorkflowTaskNote {
  TaskID : Integer;
  LineId : Integer;
  Note : LargeString;
  Creator : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  NoteDate : DateTime;
};

type SAPB1.WorkflowTaskInputObject {
  TaskID : Integer;
  LineId : Integer;
  Type : LargeString;
  ![Key] : LargeString;
  SubType : LargeString;
  Detail : LargeString;
};

type SAPB1.WorkflowTaskCompleteParams {
  TaskID : Integer;
  Note : LargeString;
  TriggerParams : LargeString;
};

type SAPB1.ServiceTaxPostingParams {
  DocEntry : Integer;
};

type SAPB1.PaymentBPCode {
  BPCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
};

type SAPB1.FixedAssetEndBalance {
  HistoricalAPC : Double;
  AcquisitionCost : Double;
  NetBookValue : Double;
  HistoricalNBV : Double;
  OrdinaryDepreciationValue : Double;
  UnplanedDepreciationValue : Double;
  SpecialDepreciationValue : Double;
  WriteUp : Double;
  SalvageValue : Double;
  Quantity : Double;
};

type SAPB1.FixedAssetValuesParams {
  ItemCode : LargeString;
  FiscalYear : LargeString;
  DepreciationArea : LargeString;
};

type SAPB1.ECMActionStatusData {
  AbsEntry : Integer;
  ReportID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReceivDate : DateTime;
  ActMessage : LargeString;
};

type SAPB1.ECMCodeParams {
  AbsEntry : Integer;
};

type SAPB1.ChangeLogDifferenceParams {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  ChangedField : LargeString;
  OldValue : LargeString;
  NewValue : LargeString;
  UserName : LargeString;
  ArrayOffset : Integer;
  LineNumber : LargeString;
};

type SAPB1.MaterialRevaluationSNBParam {
  ItemCode : LargeString;
};

type SAPB1.DashboardPackageImportParams {
  PackageFilePath : LargeString;
};

type SAPB1.DashboardPackageParams {
  AbsEntry : Integer;
};

type SAPB1.OriginalItemParams {
  ItemCode : LargeString;
  ItemName : LargeString;
};

type SAPB1.AlternativeItem {
  AlternativeItemCode : LargeString;
  MatchFactor : Double;
  Remarks : LargeString;
};

type SAPB1.OriginalItem {
  ItemCode : LargeString;
  ItemName : LargeString;
  AlternativeItems : many SAPB1.AlternativeItem;
};

type SAPB1.RoundedData {
  Value : Double;
};

type SAPB1.DecimalData {
  Value : Double;
  Currency : LargeString;
};

type SAPB1.UpdateUserLicenseParams {
  UserName : LargeString;
};

type SAPB1.BlobTableKeySegment {
  Name : LargeString;
  Value : LargeString;
};

type SAPB1.FinancePeriod {
  AbsoluteEntry : Integer;
  PeriodCode : LargeString;
  PeriodName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDateTo : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValueDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValueDateTo : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDateTo : DateTime;
  PeriodIndicator : LargeString;
  SubNum : Integer;
};

type SAPB1.PathAdmin {
  WordTemplateFolderPath : LargeString;
  PicturesFolderPath : LargeString;
  AttachmentsFolderPath : LargeString;
  ExtensionsFolderPath : LargeString;
  PrintId : LargeString;
};

type SAPB1.AdminInfo {
  Code : Integer;
  CompanyName : LargeString;
  Address : LargeString;
  Country : LargeString;
  PrintingHeader : LargeString;
  PhoneNumber1 : LargeString;
  PhoneNumber2 : LargeString;
  FaxNumber : LargeString;
  eMail : LargeString;
  ManagingDirector : LargeString;
  ChartofAccountsTemplate : LargeString;
  LocalCurrency : LargeString;
  SystemCurrency : LargeString;
  StandardUnitofLength : Integer;
  WeightUnitDefault : Integer;
  MinimumAmountfor347Report : Double;
  BankCountry : LargeString;
  FederalTaxID : LargeString;
  TaxOffice : LargeString;
  DeductionFileNo : LargeString;
  TaxPercentage : Double;
  AdvancesonCorpIncomeTax : Double;
  WithTax : Double;
  WithholdingTaxTdctPercnt : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WithholdingTaxDdctExpired : DateTime;
  WithholdingTaxDdctOffice : LargeString;
  AltNameForApInvoice : LargeString;
  AltNameforCreditMemo : LargeString;
  AltNameForGoodsReceipt : LargeString;
  AltNameForGoodsReturn : LargeString;
  AltNameForPurchase : LargeString;
  DefaultCustomerPaymentTerms : Integer;
  DefaultVendorPaymentTerms : Integer;
  PriceListforCostPrice : Integer;
  CompanyColor : Integer;
  TotalsAccuracy : Integer;
  AccuracyofQuantities : Integer;
  PriceAccuracy : Integer;
  RateAccuracy : Integer;
  PercentageAccuracy : Integer;
  MeasuringAccuracy : Integer;
  QueryAccuracy : Integer;
  AddressinForeignLanguage : LargeString;
  DefaultTaxCode : LargeString;
  LetterHeaderinForeignLangu : LargeString;
  PhoneNumber1ForeignLang : LargeString;
  PhoneNumber2ForeignLang : LargeString;
  FaxNumberForeignLang : LargeString;
  ManagingDirectorForeignLan : LargeString;
  DateSeparator : LargeString;
  ISRType : Integer;
  ISRBillerID : LargeString;
  DefaultWarehouse : LargeString;
  TaxDefinitionforVatitem : LargeString;
  TaxDefinitionforVatservice : LargeString;
  TaxGroupforPurchaseItem : LargeString;
  TaxGroupforServicePurchase : LargeString;
  CustomerIdNumber : LargeString;
  DefaultBudgetCostAssessMt : Integer;
  FileNumberinIncomeTax : LargeString;
  DefaultBankNo : LargeString;
  DefaultBankAccount : LargeString;
  DefaultBranch : LargeString;
  ServiceCode : LargeString;
  ServicePassword : LargeString;
  ParamFolderPath : LargeString;
  ExcelFolderPath : LargeString;
  FederalTaxID2 : LargeString;
  FederalTaxID3 : LargeString;
  DecimalSeparator : LargeString;
  ThousandsSeparator : LargeString;
  MaxHistory : Integer;
  BPTypeCode : LargeString;
  PBSNumber : LargeString;
  PBSGroupNumber : LargeString;
  OrganizationNumber : LargeString;
  AccountSegmentsSeparator : LargeString;
  SDefaultWTCode : LargeString;
  WithholdingTaxPHandle : LargeString;
  PDefaultWTCode : LargeString;
  HolidaysName : LargeString;
  OrderBlock : LargeString;
  OrderingParty : LargeString;
  CertificateNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpirationDate : DateTime;
  NationalInsuranceNo : LargeString;
  SDfltITWT : LargeString;
  PDfltITWT : LargeString;
  DaysBackward : Integer;
  DaysForward : Integer;
  DefaultDunningTerm : LargeString;
  DefaultBankAccountKey : Integer;
  AdditionalIdNumber : LargeString;
  State : LargeString;
  UniqueTaxPayerReference : LargeString;
  EmployerReference : LargeString;
  PeriodStatusChangeDelay : Integer;
  GrossProfitPercentForServiceDocuments : Double;
  XMLFileFolderPath : LargeString;
  GeneralManager : LargeString;
  GeneralManagerForeignLanguage : LargeString;
  WTAccumAmountAP : Double;
  WTAccumAmountAR : Double;
  GTSOutboundFolder : LargeString;
  GTSInboundFolder : LargeString;
  GTSSeparateCode : LargeString;
  GTSDefaultChecker : Integer;
  GTSDefaultPayee : Integer;
  GTSMaxAmount : Double;
  StartingInFiscalYear : Integer;
  ReportAccordingTo : Integer;
  MaximumNumberOfDaysForDueDate : Integer;
  AliasName : LargeString;
  BoletoFolderPath : LargeString;
  MaxDaysForCancel : Integer;
  SirenNo : LargeString;
  InstitutionCode : LargeString;
  Series : Integer;
  Account : LargeString;
  EnableMultipleSchedulings : LargeString;
  InventoryPostingHighlightVariance : Double;
  InventoryCountingHighlightVariance : Double;
  InventoryCountingHighlightMaxVariance : Double;
  InventoryCountingHighlightCountersDifference : Double;
  SEPACreditorID : LargeString;
  NumberOfCharInMonth : Integer;
  ExtendedAdminInfo : SAPB1.ExtendedAdminInfo;
};

type SAPB1.AdvancedGLAccountParams {
  ItemCode : LargeString;
  Warehouse : LargeString;
  BPCode : LargeString;
  FederalTaxID : LargeString;
  ShipToCountry : LargeString;
  ShipToState : LargeString;
  VatGroup : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  Usage : Integer;
  UDF1 : LargeString;
  UDF2 : LargeString;
  UDF3 : LargeString;
  UDF4 : LargeString;
  UDF5 : LargeString;
};

type SAPB1.ItemPriceReturnParams {
  Price : Double;
  Currency : LargeString;
  Discount : Double;
};

type SAPB1.ItemPriceParams {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  UoMEntry : Integer;
  BlanketAgreementNumber : Integer;
  BlanketAgreementLine : Integer;
  UoMQuantity : Double;
  InventoryQuantity : Double;
  Currency : LargeString;
  ItemCode : LargeString;
  CardCode : LargeString;
  PriceList : Integer;
};

type SAPB1.GLAccount {
  Code : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Debit : Double;
  Credit : Double;
  SystemDebit : Double;
  SystemCredit : Double;
  ForeignDebit : Double;
  ForeignCredit : Double;
  ForeignCurrency : LargeString;
};

type SAPB1.ExternalCallParams {
  ID : Integer;
};

type SAPB1.PaymentAmountParams {
  DocEntry : Integer;
  InstallmentId : Integer;
  CashDiscountPercentage : Double;
  CashDiscountAmount : Double;
  CashDiscountAmountFC : Double;
  CashDiscountAmountSC : Double;
  TotalPaymentAmount : Double;
  TotalPaymentAmountFC : Double;
  TotalPaymentAmountSC : Double;
};

type SAPB1.CallMessageArgument {
  Name : LargeString;
  Value : LargeString;
};

type SAPB1.CallMessage {
  ID : Integer;
  ErrorCode : LargeString;
  MessageBody : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  CreationTime : Integer;
  CallMessageArguments : many SAPB1.CallMessageArgument;
};

type SAPB1.CallArgument {
  Name : LargeString;
  Value : LargeString;
};

type SAPB1.ExternalCall {
  ID : Integer;
  Category : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  CreationTime : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LastUpdateDate : DateTime;
  LastUpdateTime : Integer;
  LastUpdateUserCode : LargeString;
  CallArguments : many SAPB1.CallArgument;
  CallMessages : many SAPB1.CallMessage;
};

type SAPB1.U_SN_URLParams {
  Code : LargeString;
};

type SAPB1.U_CTO_TOAParams {
  Code : LargeString;
};

type SAPB1.U_CTO_CFGParams {
  Code : LargeString;
};

type SAPB1.U_BS_BESTELLMONITORParams {
  Code : LargeString;
};

type SAPB1.U_BS_AUFTRAGSMONITORParams {
  Code : LargeString;
};

type SAPB1.U_BPRSTRTParams {
  Code : LargeString;
};

type SAPB1.U_BOSYNCLOGParams {
  Code : LargeString;
};

type SAPB1.U_BOSETTINGSParams {
  Code : LargeString;
};

type SAPB1.U_BOOSTPParams {
  Code : LargeString;
};

type SAPB1.U_BOODFSParams {
  Code : LargeString;
};

type SAPB1.U_BOEXCELParams {
  Code : LargeString;
};

type SAPB1.U_BNOINT2Params {
  Code : LargeString;
};

type SAPB1.U_BOOADMParams {
  Code : LargeString;
};

type SAPB1.U_BNOINTParams {
  Code : LargeString;
};

type SAPB1.U_BNCSTPParams {
  Code : LargeString;
};

type SAPB1.U_BNCSTAParams {
  Code : LargeString;
};

type SAPB1.U_BNCPRTParams {
  Code : LargeString;
};

type SAPB1.U_BNCNTAParams {
  Code : LargeString;
};

type SAPB1.U_BNCCSTParams {
  Code : LargeString;
};

type SAPB1.U_BNCCOMParams {
  Code : LargeString;
};

type SAPB1.U_BLD_PRNDParams {
  Code : LargeString;
};

type SAPB1.U_BLD_LYTDParams {
  Code : LargeString;
};

type SAPB1.U_BLD_BLOBParams {
  Code : LargeString;
};

type SAPB1.U_BD_SREPParams {
  Code : LargeString;
};

type SAPB1.U_BD_SERRParams {
  Code : LargeString;
};

type SAPB1.U_BD_CSETParams {
  Code : LargeString;
};

type SAPB1.U_BCESETTParams {
  Code : LargeString;
};

type SAPB1.U_BCENOTEParams {
  Code : LargeString;
};

type SAPB1.U_BBVALSParams {
  Code : LargeString;
};

type SAPB1.U_BBTEXTParams {
  Code : LargeString;
};

type SAPB1.U_BBSBCSParams {
  Code : LargeString;
};

type SAPB1.U_BBOATVParams {
  Code : LargeString;
};

type SAPB1.U_BBLOGMParams {
  Code : LargeString;
};

type SAPB1.WorkflowTaskOutputObject {
  TaskID : Integer;
  LineId : LargeString;
  Type : LargeString;
  ![Key] : LargeString;
  SubType : LargeString;
};

type SAPB1.U_BBLOG1Params {
  Code : LargeString;
};

type SAPB1.ChangeLogParams {
  LogInstance : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdatedDate : DateTime;
  UserName : LargeString;
  ObjectCode : LargeString;
};

type SAPB1.U_BBHBCSParams {
  Code : LargeString;
};

type SAPB1.U_BBFLDSParams {
  Code : LargeString;
};

type SAPB1.U_BBATV1Params {
  Code : LargeString;
};

type SAPB1.ReportLayoutItem {
  FieldIdentifier : LargeString;
  ParentType : Integer;
  Left : Integer;
  Top : Integer;
  Width : Integer;
  Height : Integer;
  LeftMargin : Integer;
  RightMargin : Integer;
  TopMargin : Integer;
  BottomMargin : Integer;
  LeftBorderLineThickness : Integer;
  RightBorderLineThickness : Integer;
  TopBorderLineThickness : Integer;
  BottomBorderLineThickness : Integer;
  ShadowThickness : Integer;
  BackgroundRed : Integer;
  BackgroundGreen : Integer;
  BackgroundBlue : Integer;
  TextRed : Integer;
  TextGreen : Integer;
  TextBlue : Integer;
  HighlightRed : Integer;
  HighlightGreen : Integer;
  HighlightBlue : Integer;
  BorderRed : Integer;
  BorderGreen : Integer;
  BorderBlue : Integer;
  GroupNumber : Integer;
  FontName : LargeString;
  FontSize : Integer;
  TextStyle : Integer;
  String : LargeString;
  VariableNumber : Integer;
  TableName : LargeString;
  FieldName : LargeString;
  Editable : Integer;
  ItemNumber : Integer;
  SortLevel : Integer;
  LinkToField : LargeString;
  ParentIndex : Integer;
  ItemIndex : Integer;
  StringLength : Integer;
  StringFiller : LargeString;
  RelateToField : LargeString;
  NextSegmentItemNumber : LargeString;
  NumberOfLinesInRepetitiveArea : Integer;
  DistanceToRepetitiveDuplicate : Integer;
};

type SAPB1.U_BA_STYP1Params {
  Code : LargeString;
};

type SAPB1.U_BA_STYPParams {
  Code : LargeString;
};

type SAPB1.U_BA_STRN1Params {
  Code : LargeString;
};

type SAPB1.U_BA_STRNParams {
  Code : LargeString;
};

type SAPB1.U_BA_SSTA1Params {
  Code : LargeString;
};

type SAPB1.U_BA_SSTAParams {
  Code : LargeString;
};

type SAPB1.U_BA_SDPM1Params {
  Code : LargeString;
};

type SAPB1.CompanyInfo {
  Version : Integer;
  BISRBankActKey : Integer;
  BISRBankCountry : LargeString;
  BISRBankNo : LargeString;
  BISRBankAccount : LargeString;
  BISRBranch : LargeString;
  MaxRecordsInChooseFromList : Integer;
  DefaultDaysForOrdCanc : Integer;
  PercentOfTotalAcquisition : Double;
  MinimumBaseAmountPerDoc : Double;
  MinimumAmountForAppndixOP : Double;
  DefaultStampTax : LargeString;
  MinimumAmountForAnnualList : Double;
  MaxNumberOfDocumentsInPmt : Integer;
  CompanyName : LargeString;
  B1iTimeOut : Integer;
};

type SAPB1.U_BA_RPTDTParams {
  Code : LargeString;
};

type SAPB1.U_BA_OPRJParams {
  Code : LargeString;
};

type SAPB1.U_BA_OFPRParams {
  Code : LargeString;
};

type SAPB1.U_CTO_TOBParams {
  Code : LargeString;
};

type SAPB1.U_BA_ODRN2Params {
  Code : LargeString;
};

type SAPB1.U_BA_ODRNParams {
  Code : LargeString;
};

type SAPB1.U_BA_ODPVParams {
  Code : LargeString;
};

type SAPB1.TechnicianSettingsGroupParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.U_BA_ODOC2Params {
  Code : LargeString;
};

type SAPB1.U_BA_ODOCParams {
  Code : LargeString;
};

type SAPB1.U_BA_OAMD3Params {
  Code : LargeString;
};

type SAPB1.U_BA_CUDF1Params {
  Code : LargeString;
};

type SAPB1.U_BA_CPOL1Params {
  Code : LargeString;
};

type SAPB1.U_BA_CPOLParams {
  Code : LargeString;
};

type SAPB1.U_BA_CNUMParams {
  Code : LargeString;
};

type SAPB1.U_BA_CDPT1Params {
  Code : LargeString;
};

type SAPB1.AdvancedGLAccountReturnParams {
  AccountCode : LargeString;
};

type SAPB1.U_BA_CDPTParams {
  Code : LargeString;
};

type SAPB1.U_BA_CDPA1Params {
  Code : LargeString;
};

type SAPB1.U_BA_CDPAParams {
  Code : LargeString;
};

type SAPB1.KalkulationParams {
  Code : LargeString;
};

type SAPB1.TableInfo {
  Name : LargeString;
};

type SAPB1.InvokeParams {
  Value : LargeString;
};

type SAPB1.ANGEBOTS_ANFRAGEParams {
  DocEntry : Integer;
};

type SAPB1.ANGEBOTS_ANFRAGE_Z {
  DocEntry : Integer;
  LineId : Integer;
  VisOrder : Integer;
  Object : LargeString;
  LogInst : Integer;
  U_LVPOSTEXT : LargeString;
  U_ITEMCODE : LargeString;
};

type SAPB1.SalesOpportunityInterestSetupParams {
  SequenceNo : Integer;
  Description : LargeString;
};

type SAPB1.SalesOpportunitiesInterest {
  RowNo : Integer;
  SequenceNo : Integer;
  InterestId : Integer;
};

type SAPB1.SalesOpportunitiesPartner {
  RowNo : Integer;
  Partners : Integer;
  Details : LargeString;
  RelationshipCode : Integer;
  SequenceNo : Integer;
};

type SAPB1.SalesOpportunitiesCompetitionItem {
  RowNo : Integer;
  Competition : Integer;
  Details : LargeString;
  SequenceNo : Integer;
  WonOrLost : LargeString;
};

type SAPB1.RoutingDateCalculationOutput {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ResultDate : DateTime;
  Proportion : Double;
};

type SAPB1.SalesOpportunitiesParams {
  SequentialNo : Integer;
};

type SAPB1.SalesOpportunitiesLine {
  LineNum : Integer;
  SalesPerson : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ClosingDate : DateTime;
  StageKey : Integer;
  PercentageRate : Double;
  MaxLocalTotal : Double;
  MaxSystemTotal : Double;
  Remarks : LargeString;
  WeightedAmountLocal : Double;
  WeightedAmountSystem : Double;
  DocumentNumber : Integer;
  ContactPerson : Integer;
  BPChanelName : LargeString;
  BPChanelCode : LargeString;
  SequenceNo : Integer;
  DataOwnershipfield : Integer;
  BPChannelContact : Integer;
};

type SAPB1.DefaultCreditCard {
  Code : LargeString;
  CreditAccountCode : LargeString;
  CreditCardCode : Integer;
};

type SAPB1.ActivitySubjectParams {
  Code : Integer;
  Description : LargeString;
};

type SAPB1.MessageDataLine {
  Value : LargeString;
  Object : LargeString;
  ObjectKey : LargeString;
};

type SAPB1.Recipient {
  UserCode : LargeString;
  NameTo : LargeString;
  EmailAddress : LargeString;
  CellularNumber : LargeString;
  FaxNumber : LargeString;
};

type SAPB1.MessageDataColumn {
  ColumnName : LargeString;
  MessageDataLines : many SAPB1.MessageDataLine;
};

type SAPB1.U_VERTRIEB_PLANUNGParams {
  Code : LargeString;
};

type SAPB1.AlertManagementDocument {
};

type SAPB1.ItemPropertyParams {
  Number : Integer;
};

type SAPB1.BudgetDistributionParams {
  DivisionCode : Integer;
};

type SAPB1.BudgetCostAccountingLine {
  DistrRuleCode : LargeString;
  Dimension : Integer;
  DistrRuleDebitLC : Double;
  DistrRuleDebitSC : Double;
  DistrRuleCreditLC : Double;
  DistrRuleCreditSC : Double;
};

type SAPB1.BudgetLine {
  PrecentOfAnnualBudgetAmount : Double;
  RowDetails : LargeString;
  RowNumber : Integer;
  FutExpenSysDebit : Double;
  FutExpenDebit : Double;
  FutExpenSysCredit : Double;
  FutExpenCredit : Double;
  FutIncomesSysCredit : Double;
  FutIncomesSysDebit : Double;
  FutIncomesCredit : Double;
  BudgetSysTotDebit : Double;
  BalSysTotDebit : Double;
  BalTotDebit : Double;
  BudgetTotCredit : Double;
  BudgetSysTotCredit : Double;
  BudgetTotDebit : Double;
  BalSysTotCredit : Double;
  BalTotCredit : Double;
  BudgetKey : Integer;
  AccountCode : LargeString;
  FutureIncomeDeb : Double;
};

type SAPB1.CreditCardPaymentParams {
  DueDateCode : LargeString;
};

type SAPB1.BillOfExchangeTransactionLine {
  BillOfExchangeNo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  BillOfExchangeDueDate : DateTime;
};

type SAPB1.BillOfExchangeTransactionParams {
  BOETransactionkey : Integer;
};

type SAPB1.PM_SubprojectDocumentParams {
  AbsEntry : Integer;
};

type SAPB1.TaxReportAccount {
  Code : LargeString;
};

type SAPB1.WebClientDashboardParams {
  Guid : LargeString;
};

type SAPB1.Series {
  Document : LargeString;
  DocumentSubType : LargeString;
  InitialNumber : Integer;
  LastNumber : Integer;
  NextNumber : Integer;
  Prefix : LargeString;
  Suffix : LargeString;
  Remarks : LargeString;
  PeriodIndicator : LargeString;
  Name : LargeString;
  Series : Integer;
  DigitNumber : Integer;
  BPLID : Integer;
  ATDocumentType : LargeString;
};

type SAPB1.UserValidValue {
  FieldValue : LargeString;
};

type SAPB1.EWBTransporterParams {
  AbsEntry : Integer;
  TransporterCode : LargeString;
  TransporterName : LargeString;
  TransporterID : LargeString;
};

type SAPB1.ItemProject {
  LineNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  Project : LargeString;
};

type SAPB1.ProgressiveTax_Line {
  TaxRate : Double;
  MinAmount : Double;
  MaxAmount : Double;
};

type SAPB1.WithholdingTaxCodeParams {
  WTCode : LargeString;
};

type SAPB1.MaterialRevaluationFIFOParams {
  ItemCode : LargeString;
  LocationType : LargeString;
  LocationCode : LargeString;
};

type SAPB1.SingleUserConnectionParams {
  Code : Integer;
};

type SAPB1.CustomerEquipmentCardParams {
  EquipmentCardNum : Integer;
};

type SAPB1.EDFMappingInputParams {
  Hash : LargeString;
};

type SAPB1.EDFMapping {
  FormatID : Integer;
  Hash : LargeString;
  Name : LargeString;
  Mapping : LargeString;
};

type SAPB1.FactoringIndicatorParams {
  IndicatorCode : LargeString;
};

type SAPB1.EDFEntryLogInputParams {
  GUID : LargeString;
  FileName : LargeString;
};

type SAPB1.ShowDifferenceParams {
  PrimaryKey : LargeString;
  UDOObjectCode : LargeString;
  LogInstance2 : Integer;
  LogInstance : Integer;
};

type SAPB1.U_BA_OAMDParams {
  Code : LargeString;
};

type SAPB1.PurchaseTaxInvoiceParams {
  DocEntry : Integer;
};

type SAPB1.EDFProtocolInputParams {
};

type SAPB1.TaxCodeDeterminationParams {
  DocEntry : Integer;
};

type SAPB1.CertificateSeriesParams {
  AbsEntry : Integer;
  Code : LargeString;
  Section : Integer;
  Location : Integer;
};

type SAPB1.WebClientNotificationParams {
  Guid : LargeString;
};

type SAPB1.WTGroups {
  WTAbsEntry : Integer;
  Percent : Double;
  SumVATAmount : Double;
  SumDocTotal : Double;
  SumBaseAmount : Double;
  SumAccumAmount : Double;
  SumPerceptAmount : Double;
  DocsInWTGroupsCollection : many SAPB1.DocsInWTGroups;
};

type SAPB1.U_BA_CCLSDPAParams {
  Code : LargeString;
};

type SAPB1.BusinessPartnerGroupParams {
  Code : Integer;
};

type SAPB1.DocsInWTGroups {
  DocEntry : Integer;
  DocObjType : LargeString;
  VATAmount : Double;
  DocTotal : Double;
  BaseAmount : Double;
  AccumAmount : Double;
  PerceptAmount : Double;
  Percent : Double;
};

type SAPB1.EmployeeRolesInfo {
  EmployeeID : Integer;
  LineNum : Integer;
  RoleID : Integer;
};

type SAPB1.EmployeeEducationInfo {
  EmployeeNo : Integer;
  LineNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDate : DateTime;
  EducationType : Integer;
  Institute : LargeString;
  Major : LargeString;
  Diploma : LargeString;
};

type SAPB1.ServiceCallTypeParams {
  CallTypeID : Integer;
  Name : LargeString;
};

type SAPB1.FeatureStatus {
  FeatureID : LargeString;
};

type SAPB1.ServiceCallStatusParams {
  StatusId : Integer;
  Name : LargeString;
};

type SAPB1.ImportProcess {
  LineNumber : Integer;
  ImportationDocumentTypeCode : LargeString;
  ImportationDocumentNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfRegistry_DI_DSI_DA : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CustomsClearanceDate : DateTime;
  DrawbackRegimeConcessionAccountNumber : LargeString;
  AdditionalNumber : LargeString;
  AdditionalItemDiscountValue : Double;
};

type SAPB1.TransportationDocumentLineData {
  TranspDocNumber : Integer;
  LineID : Integer;
  DocNumber : Integer;
  DocLineNumber : Integer;
  ItemCode : LargeString;
  TransportedQuantity : Double;
  DocOrderNum : Integer;
};

type SAPB1.NFTaxCategoryParams {
  AbsId : Integer;
  Code : LargeString;
};

type SAPB1.MaterialRevaluationLine {
  LineNum : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  Quantity : Double;
  Price : Double;
  WarehouseCode : LargeString;
  ActualPrice : Double;
  OnHand : Double;
  DebitCredit : Double;
  DocEntry : Integer;
  RevaluationDecrementAccount : LargeString;
  RevaluationIncrementAccount : LargeString;
  RevalAmountToStock : Double;
  Project : LargeString;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  FIFOLayers : many SAPB1.FIFOLayer;
  SNBLinesCollection : many SAPB1.SNBLines;
};

type SAPB1.BusinessPlaceParams {
  BPLID : Integer;
};

type SAPB1.U_BOEMAILParams {
  Code : LargeString;
};

type SAPB1.PickListParams {
  Absoluteentry : Integer;
};

type SAPB1.ServiceContract_Line {
  LineNum : Integer;
  ManufacturerSerialNum : LargeString;
  InternalSerialNum : LargeString;
  ItemCode : LargeString;
  ItemName : LargeString;
  ItemGroup : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  ItemGroupName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TerminationDate : DateTime;
};

type SAPB1.CycleCountDeterminationSetup {
  WarehouseCode : LargeString;
  Entry : Integer;
  CycleCode : Integer;
  DestinationUser : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  NextCountingDate : DateTime;
  Time : Time;
};

type SAPB1.DiscountGroupLine {
  AbsEntry : Integer;
  ObjectCode : LargeString;
  Discount : Double;
  PaidQuantity : Double;
  FreeQuantity : Double;
  MaximumFreeQuantity : Double;
};

type SAPB1.U_BOSTP1Params {
  Code : LargeString;
};

type SAPB1.PredefinedTextParams {
  Numerator : Integer;
  TextCode : LargeString;
};

type SAPB1.InventoryCountingBatchNumber {
  BatchNumber : LargeString;
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufactureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AddmisionDate : DateTime;
  Location : LargeString;
  Notes : LargeString;
  Quantity : Double;
  BaseLineNumber : Integer;
  DocumentEntry : Integer;
  CounterID : Integer;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
  SystemSerialNumber : Integer;
};

type SAPB1.U_BOQUOTParams {
  Code : LargeString;
};

type SAPB1.AlertManagementParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.ActivityInstancesListParams {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  InstanceCount : Integer;
};

type SAPB1.IndividualCounter {
  DocumentEntry : Integer;
  CounterID : Integer;
  CounterName : LargeString;
  CounterNumber : Integer;
  CounterVisualOrder : Integer;
};

type SAPB1.WebClientDashboardCard {
  Guid : LargeString;
  UserId : Integer;
  Content : LargeString;
  Version : LargeString;
};

type SAPB1.AssetClassLine {
  Code : LargeString;
  LineNumber : Integer;
  DepreciationAreaID : LargeString;
  AccountDetermination : LargeString;
  DepreciationTypeID : LargeString;
  UseLife : Integer;
};

type SAPB1.VatGroupParams {
  Code : LargeString;
};

type SAPB1.DepreciationTypePoolParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.U_BNCADMParams {
  Code : LargeString;
};

type SAPB1.ServiceCallParams {
  ServiceCallID : Integer;
};

type SAPB1.DepreciationAreaParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.ReportParams {
  ReportCode : LargeString;
  UserID : Integer;
  CardCode : LargeString;
};

type SAPB1.PM_SubprojectDocumentData {
  AbsEntry : Integer;
  Owner : Integer;
  SubprojectName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  FinishedPercent : Double;
  ParentID : Integer;
  ProjectID : Integer;
  Order : Integer;
  SubprojectType : Integer;
  SubprojectContribution : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SubprojectEndDate : DateTime;
  ActualCost : Double;
  PlannedCost : Double;
  SubprojectDepth : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  PMS_StagesCollection : many SAPB1.PMS_StageData;
  PMS_OpenIssuesCollection : many SAPB1.PMS_OpenIssueData;
  PMS_DocumentsCollection : many SAPB1.PMS_DocumentData;
  PMS_ActivitiesCollection : many SAPB1.PMS_ActivityData;
  PMS_WorkOrdersCollection : many SAPB1.PMS_WorkOrderData;
  PMS_SummaryData : SAPB1.PMS_SummaryData;
  PMS_DocAttachements : many SAPB1.PMS_DocAttachement;
  PMS_StageAttachements : many SAPB1.PMS_StageAttachement;
};

type SAPB1.AlternateCatNumParams {
  ItemCode : LargeString;
  CardCode : LargeString;
  Substitute : LargeString;
};

type SAPB1.EmployeePreviousEmpoymentInfo {
  EmployeeNo : Integer;
  LineNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDtae : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDate : DateTime;
  Employer : LargeString;
  Position : LargeString;
  Remarks : LargeString;
};

type SAPB1.InventoryCountingSerialNumber {
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufactureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReceptionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyStart : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyEnd : DateTime;
  Location : LargeString;
  Notes : LargeString;
  BatchID : LargeString;
  SystemSerialNumber : Integer;
  BaseLineNumber : Integer;
  Quantity : Double;
  DocumentEntry : Integer;
  CounterID : Integer;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
};

type SAPB1.DefaultDocument {
  Code : LargeString;
  NoofCopies : Integer;
  NoofCopiesforManualDoc : Integer;
  ObjectType : LargeString;
  PermanentRemark : LargeString;
};

type SAPB1.DepreciationTypeParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.U_BD_SPATHParams {
  Code : LargeString;
};

type SAPB1.DeductionTaxSubGroupParams {
  GroupCode : LargeString;
  GroupName : LargeString;
};

type SAPB1.DepreciationLevel {
  Level : Integer;
  NumberOfYears : Integer;
  Percentage : Double;
  Amount : Double;
};

type SAPB1.SalesTaxInvoiceParams {
  DocEntry : Integer;
};

type SAPB1.EnhancedDiscountGroupParams {
  AbsEntry : Integer;
  ObjectCode : LargeString;
};

type SAPB1.ActivityRecipientListParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.AssetDocumentParams {
  Code : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CancellationDate : DateTime;
};

type SAPB1.Boxes1099Item {
  FormCode : Integer;
  Box1099 : LargeString;
  BoxDescription : LargeString;
  Minimum1099Amount : Double;
};

type SAPB1.CurrencyRestriction {
  PaymentMethodCode : LargeString;
  CurrencyCode : LargeString;
  CurrencyName : LargeString;
};

type SAPB1.ApprovalRequestParams {
  Code : Integer;
  Remarks : LargeString;
};

type SAPB1.EmployeeAbsenceInfo {
  EmployeeID : Integer;
  LineNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDate : DateTime;
  Reason : LargeString;
  ApprovedBy : LargeString;
  ConfirmerNumber : Integer;
};

type SAPB1.DNFCodeSetupParams {
  AbsEntry : Integer;
  NCMCode : Integer;
  DNFCode : LargeString;
};

type SAPB1.EmployeeReviewsInfo {
  EmployeeNo : Integer;
  LineNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  ReviewDescription : LargeString;
  Manager : Integer;
  Grade : LargeString;
  Remarks : LargeString;
};

type SAPB1.DepartmentParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.ContactEmployeeBlockSendingMarketingContent {
  ContactEmployeeAbsEntry : Integer;
  CommunicationMediaId : Integer;
  CardCode : LargeString;
  ContactPersonName : LargeString;
};

type SAPB1.WithholdingTaxCertificatesData {
  POICodeRef : LargeString;
  POICode : LargeString;
  Certificate : LargeString;
  WTaxType : LargeString;
  PeriodIndicator : LargeString;
  WhtAbsId : Integer;
  Series : Integer;
  Number : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  SumVATAmount : Double;
  SumDocTotal : Double;
  SumBaseAmount : Double;
  SumAccumAmount : Double;
  SumPercAmount : Double;
  WTGroupsCollection : many SAPB1.WTGroups;
};

type SAPB1.HouseBankAccountParams {
  AbsoluteEntry : Integer;
};

type SAPB1.ResourceFixedAsset {
  Code : LargeString;
  ItemCode : LargeString;
};

type SAPB1.InventoryCyclesParams {
  CycleCode : Integer;
};

type SAPB1.DunningTermParams {
  Code : LargeString;
  Name : LargeString;
};

type SAPB1.PaymentCreditCard {
  LineNum : Integer;
  CreditCard : Integer;
  CreditAcct : LargeString;
  CreditCardNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CardValidUntil : DateTime;
  VoucherNum : LargeString;
  OwnerIdNum : LargeString;
  OwnerPhone : LargeString;
  PaymentMethodCode : Integer;
  NumOfPayments : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FirstPaymentDue : DateTime;
  FirstPaymentSum : Double;
  AdditionalPaymentSum : Double;
  CreditSum : Double;
  CreditCur : LargeString;
  CreditRate : Double;
  ConfirmationNum : LargeString;
  NumOfCreditPayments : Integer;
};

type SAPB1.PaymentInvoice {
  LineNum : Integer;
  DocEntry : Integer;
  SumApplied : Double;
  AppliedFC : Double;
  AppliedSys : Double;
  DocRate : Double;
  DocLine : Integer;
  DiscountPercent : Double;
  PaidSum : Double;
  InstallmentId : Integer;
  WitholdingTaxApplied : Double;
  WitholdingTaxAppliedFC : Double;
  WitholdingTaxAppliedSC : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LinkDate : DateTime;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  TotalDiscount : Double;
  TotalDiscountFC : Double;
  TotalDiscountSC : Double;
};

type SAPB1.EDFProtocolWithParameters {
  Description : LargeString;
  EDFProtocolParametersCollection : many SAPB1.EDFProtocolParameter;
};

type SAPB1.ResourceCapacityParams {
  Id : Integer;
  Code : LargeString;
  Warehouse : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  Capacity : Double;
  SourceEntry : Integer;
  SourceLineNum : Integer;
  BaseEntry : Integer;
  BaseLineNum : Integer;
  OwningEntry : Integer;
  OwningLineNum : Integer;
  RevertedEntry : Integer;
  RevertedLineNum : Integer;
  Memo : LargeString;
  SingleRunCapacity : Double;
  SingleRunMemo : LargeString;
};

type SAPB1.ValueMappingParams {
  AbsEntry : Integer;
};

type SAPB1.WebClientVariantMChartSize {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.ElectronicFileFormatParams {
  FormatID : Integer;
  Name : LargeString;
};

type SAPB1.WorkflowTask {
  InstanceID : Integer;
  TaskID : Integer;
  TemplateID : LargeString;
  TemplateName : LargeString;
  Description : LargeString;
  Operation : LargeString;
  Type : LargeString;
  Owner : LargeString;
  Priority : Integer;
  Status : LargeString;
  Name : LargeString;
  WorkflowTaskInputObjectCollection : many SAPB1.WorkflowTaskInputObject;
  WorkflowTaskNoteCollection : many SAPB1.WorkflowTaskNote;
  WorkflowTaskOutputObjectCollection : many SAPB1.WorkflowTaskOutputObject;
};

type SAPB1.ActivityInstanceParams {
  ActivityCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  InstanceDate : DateTime;
};

type SAPB1.StateParams {
  Code : LargeString;
  Country : LargeString;
  Name : LargeString;
};

type SAPB1.DocumentSpecialLine {
  LineNum : Integer;
  AfterLineNumber : Integer;
  OrderNumber : Integer;
  Subtotal : Double;
  LineText : LargeString;
  SubtotalFC : Double;
  SubtotalSC : Double;
  TaxAmount : Double;
  TaxAmountFC : Double;
  TaxAmountSC : Double;
  Freight1 : Double;
  Freight1FC : Double;
  Freight1SC : Double;
  Freight2 : Double;
  Freight2FC : Double;
  Freight2SC : Double;
  Freight3 : Double;
  Freight3FC : Double;
  Freight3SC : Double;
  GrossTotal : Double;
  GrossTotalFC : Double;
  GrossTotalSC : Double;
};

type SAPB1.RetornoCodeParams {
  AbsEntry : Integer;
  OccurenceCode : Integer;
  MovementCode : Integer;
  Description : LargeString;
  Color : Integer;
  FileFormat : LargeString;
  BankCode : LargeString;
};

type SAPB1.DeductionTaxHierarchies_Line {
  RowNumber : Integer;
  DeductionPercent : Double;
  MaximumTotal : Double;
};

type SAPB1.DocumentAdditionalExpense {
  ExpenseCode : Integer;
  LineTotal : Double;
  LineTotalFC : Double;
  LineTotalSys : Double;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  Remarks : LargeString;
  VatGroup : LargeString;
  TaxPercent : Double;
  TaxSum : Double;
  TaxSumFC : Double;
  TaxSumSys : Double;
  DeductibleTaxSum : Double;
  DeductibleTaxSumFC : Double;
  DeductibleTaxSumSys : Double;
  TaxCode : LargeString;
  TaxPaid : Double;
  TaxPaidFC : Double;
  TaxPaidSys : Double;
  EqualizationTaxPercent : Double;
  EqualizationTaxSum : Double;
  EqualizationTaxFC : Double;
  EqualizationTaxSys : Double;
  TaxTotalSum : Double;
  TaxTotalSumFC : Double;
  TaxTotalSumSys : Double;
  BaseDocEntry : Integer;
  BaseDocLine : Integer;
  BaseDocType : Integer;
  BaseDocumentReference : Integer;
  LineNum : Integer;
  TargetAbsEntry : Integer;
  TargetType : Integer;
  DistributionRule : LargeString;
  Project : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  LineGross : Double;
  LineGrossSys : Double;
  LineGrossFC : Double;
  ExternalCalcTaxRate : Double;
  ExternalCalcTaxAmount : Double;
  ExternalCalcTaxAmountFC : Double;
  ExternalCalcTaxAmountSC : Double;
  DocExpenseTaxJurisdictions : many SAPB1.DocExpenseTaxJurisdiction;
  DocFreightEBooksDetails : many SAPB1.DocFreightEBooksDetail;
};

type SAPB1.ContractTemplateParams {
  TemplateName : LargeString;
};

type SAPB1.EWayBillDetails {
  DocEntry : Integer;
  SubType : Integer;
  DocumentType : LargeString;
  TransportationMode : Integer;
  Distance : Double;
  TransporterDocNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransporterDocDate : DateTime;
  VehicleType : LargeString;
  VehicleNo : LargeString;
  EWayBillNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EWayBillDate : DateTime;
  BillFromName : LargeString;
  BillFromGSTIN : LargeString;
  BillFromStateGSTCode : LargeString;
  DispatchFromAddress1 : LargeString;
  DispatchFromAddress2 : LargeString;
  DispatchFromZipCode : LargeString;
  DispatchFromStateGSTCode : LargeString;
  BillToName : LargeString;
  BillToGSTIN : LargeString;
  BillToStateGSTCode : LargeString;
  ShipToAddress1 : LargeString;
  ShipToAddress2 : LargeString;
  ShipToZipCode : LargeString;
  ShipToStateGSTCode : LargeString;
  MainHSNEntry : Integer;
  DispatchFromPlace : LargeString;
  ShipToPlace : LargeString;
  TransporterID : LargeString;
  TransporterName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EWayBillExpirationDate : DateTime;
  TransporterEntry : Integer;
  TransporterLineNumber : Integer;
};

type SAPB1.InternalReconciliationOpenTransRow {
  ShortName : LargeString;
  TransId : Integer;
  TransRowId : Integer;
  SrcObjTyp : LargeString;
  SrcObjAbs : Integer;
  ReconcileAmount : Double;
  CashDiscount : Double;
};

type SAPB1.TaxReportFilterParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.MaterialRevaluationDocumentReferences {
  DocEntry : Integer;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
};

type SAPB1.CheckLine {
  CheckKey : Integer;
  CheckNumber : Integer;
  Bank : LargeString;
  Branch : LargeString;
  CashCheck : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CheckDate : DateTime;
  Customer : LargeString;
  CheckAmount : Double;
  AccountNumber : LargeString;
  CheckCurrency : LargeString;
  FiscalID : LargeString;
  OriginallyIssuedBy : LargeString;
};

type SAPB1.ActivityLocationParams {
  Code : Integer;
};

type SAPB1.InventoryOpeningBalanceCCDNumber {
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  CCDNumber : LargeString;
  Quantity : Double;
  CountryOfOrigin : LargeString;
  SubLineNumber : Integer;
  DocumentEntry : Integer;
  BaseLineNumber : Integer;
  ChildNumber : Integer;
};

type SAPB1.TransactionCodeParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.BillOfExchangeTransDeposit {
  DepositNorm : LargeString;
  BankCountry : LargeString;
  BankAccount : LargeString;
  BankDepositAccount : LargeString;
  BankBranch : LargeString;
};

type SAPB1.BPBankAccount {
  LogInstance : Integer;
  UserNo4 : LargeString;
  BPCode : LargeString;
  County : LargeString;
  State : LargeString;
  UserNo2 : LargeString;
  IBAN : LargeString;
  ZipCode : LargeString;
  City : LargeString;
  Block : LargeString;
  Branch : LargeString;
  Country : LargeString;
  Street : LargeString;
  ControlKey : LargeString;
  UserNo3 : LargeString;
  BankCode : LargeString;
  AccountNo : LargeString;
  UserNo1 : LargeString;
  InternalKey : Integer;
  BuildingFloorRoom : LargeString;
  BIK : LargeString;
  AccountName : LargeString;
  CorrespondentAccount : LargeString;
  Phone : LargeString;
  Fax : LargeString;
  CustomerIdNumber : LargeString;
  ISRBillerID : LargeString;
  ISRType : Integer;
  BICSwiftCode : LargeString;
  ABARoutingNumber : LargeString;
  MandateID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SignatureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  MandateExpDate : DateTime;
};

type SAPB1.EmployeeRoleSetupParams {
  TypeID : Integer;
  Name : LargeString;
};

type SAPB1.BankStatementsFilter {
  Country : LargeString;
  Bank : LargeString;
  Account : LargeString;
};

type SAPB1.ActivityTypeParams {
  Code : Integer;
};

type SAPB1.CheckInParams {
  LineNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  Time : Time;
  Location : LargeString;
  Latitude : LargeString;
  Longitude : LargeString;
  HandledBy : Integer;
  HandledByEmployee : Integer;
};

type SAPB1.DocumentInstallment {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Percentage : Double;
  Total : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LastDunningDate : DateTime;
  DunningLevel : Integer;
  TotalFC : Double;
  InstallmentId : Integer;
};

type SAPB1.CustomerEquipmentCardBusinessPartner {
  BPCode : LargeString;
};

type SAPB1.DiscountGroup {
  ObjectEntry : LargeString;
  DiscountPercentage : Double;
  BPCode : LargeString;
};

type SAPB1.Layer {
  TransactionSequenceNum : Integer;
  LayerID : Integer;
  DocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EntryDate : DateTime;
  CurrentCost : Double;
  OpenQty : Double;
};

type SAPB1.TaxCodeDeterminationTCDKeyField {
  AbsId : Integer;
  Descr : LargeString;
  Priority : Integer;
  KeyFld_1 : Integer;
  UDFTable_1 : LargeString;
  UDFAlias_1 : LargeString;
  KeyFld_2 : Integer;
  UDFTable_2 : LargeString;
  UDFAlias_2 : LargeString;
  KeyFld_3 : Integer;
  UDFTable_3 : LargeString;
  UDFAlias_3 : LargeString;
  KeyFld_4 : Integer;
  UDFTable_4 : LargeString;
  UDFAlias_4 : LargeString;
  TaxCodeDeterminationTCDKeyFieldValues : many SAPB1.TaxCodeDeterminationTCDKeyFieldValue;
};

type SAPB1.UserTablesMDParams {
  TableName : LargeString;
};

type SAPB1.U_BA_ODPVNParams {
  Code : LargeString;
};

type SAPB1.U_BA_CDTNParams {
  Code : LargeString;
};

type SAPB1.ActivityParams {
  ActivityCode : Integer;
  CardCode : LargeString;
  Notes : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  DocType : LargeString;
  DocNum : LargeString;
  DocEntry : LargeString;
  Details : LargeString;
  StartTime : Time;
  EndTime : Time;
  HandledBy : Integer;
  City : LargeString;
  Street : LargeString;
  Room : LargeString;
  State : LargeString;
  Country : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDueDate : DateTime;
  SalesOpportunityId : Integer;
  SalesOpportunityLine : Integer;
};

type SAPB1.LineExpenseTaxJurisdiction {
  JurisdictionCode : LargeString;
  JurisdictionType : Integer;
  TaxAmount : Double;
  TaxAmountSC : Double;
  TaxAmountFC : Double;
  TaxRate : Double;
  DocEntry : Integer;
  LineNumber : Integer;
  RowSequence : Integer;
  ExternalCalcTaxRate : Double;
  ExternalCalcTaxAmount : Double;
  ExternalCalcTaxAmountFC : Double;
  ExternalCalcTaxAmountSC : Double;
};

type SAPB1.RelatedDocument {
  AbsEntry : Integer;
  UUID : LargeString;
};

type SAPB1.SalesOpportunityCompetitorSetupParams {
  SequenceNo : Integer;
  Name : LargeString;
};

type SAPB1.SalesOpportunitiesReason {
  RowNo : Integer;
  SequenceNo : Integer;
  Reason : Integer;
};

type SAPB1.ChecksforPaymentParams {
  CheckKey : Integer;
};

type SAPB1.LandedCost_CostLine {
  DocEntry : Integer;
  LandedCostCode : LargeString;
  Amount : Double;
  AmountFC : Double;
  Factor : Double;
  OpenAmount : Double;
  OpenAmountFC : Double;
  Broker : LargeString;
  BrokerName : LargeString;
};

type SAPB1.WithholdingTaxDataWTX {
  WTAmountSys : Double;
  WTAmountFC : Double;
  WTAmount : Double;
  WithholdingType : LargeString;
  TaxableAmountinSys : Double;
  TaxableAmountFC : Double;
  TaxableAmount : Double;
  Rate : Double;
  Category : LargeString;
  BaseType : LargeString;
  AppliedWTAmountSys : Double;
  AppliedWTAmountFC : Double;
  AppliedWTAmount : Double;
  GLAccount : LargeString;
  LineNum : Integer;
  BaseDocEntry : Integer;
  BaseDocLine : Integer;
  BaseDocType : LargeString;
  WTAbsId : LargeString;
  ExemptRate : Double;
  BaseNetAmountSys : Double;
  BaseNetAmountFC : Double;
  BaseNetAmount : Double;
  BaseVatmountSys : Double;
  BaseVatmountFC : Double;
  BaseVatmount : Double;
  AccumBaseAmountSys : Double;
  AccumBaseAmountFC : Double;
  AccumBaseAmount : Double;
  AccumWTaxAmountSys : Double;
  AccumWTaxAmountFC : Double;
  AccumWTaxAmount : Double;
};

type SAPB1.BlobParams {
  Table : LargeString;
  Field : LargeString;
  FileName : LargeString;
  BlobTableKeySegments : many SAPB1.BlobTableKeySegment;
};

type SAPB1.TeamCounter {
  DocumentEntry : Integer;
  CounterID : Integer;
  CounterName : LargeString;
  CounterNumber : Integer;
  CounterVisualOrder : Integer;
};

type SAPB1.InternalReconciliationRow {
  LineSeq : Integer;
  ShortName : LargeString;
  TransId : Integer;
  TransRowId : Integer;
  SrcObjTyp : LargeString;
  SrcObjAbs : Integer;
  ReconcileAmount : Double;
  CashDiscount : Double;
};

type SAPB1.BlanketAgreements_DetailsLine {
  AgreementNo : Integer;
  AgreementRowNumber : Integer;
  AgreementEffectiveRowNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ![From] : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  To : DateTime;
  ReleaseInformation : LargeString;
  Quantity : Double;
  Warehouse : LargeString;
  FreeText : LargeString;
  PlannedAmountLC : Double;
  PlannedAmountFC : Double;
};

type SAPB1.WebClientFormSettingParams {
  Guid : LargeString;
};

type SAPB1.DocumentSeriesUserParams {
  Document : LargeString;
  DocumentSubType : LargeString;
  Series : Integer;
  User : Integer;
};

type SAPB1.WarehouseSublevelCodeParams {
  AbsEntry : Integer;
  WarehouseSublevel : Integer;
  Code : LargeString;
};

type SAPB1.WithholdingTaxData {
  WTCode : LargeString;
  WTAmountSys : Double;
  WTAmountFC : Double;
  WTAmount : Double;
  WithholdingType : LargeString;
  TaxableAmountinSys : Double;
  TaxableAmountFC : Double;
  TaxableAmount : Double;
  RoundingType : LargeString;
  Rate : Double;
  Criteria : LargeString;
  Category : LargeString;
  BaseType : LargeString;
  AppliedWTAmountSys : Double;
  AppliedWTAmountFC : Double;
  AppliedWTAmount : Double;
  GLAccount : LargeString;
  LineNum : Integer;
  BaseDocEntry : Integer;
  BaseDocLine : Integer;
  BaseDocType : Integer;
  BaseDocumentReference : Integer;
  TargetAbsEntry : Integer;
  TargetDocumentType : Integer;
};

type SAPB1.PMC_ActivityData {
  ActivityID : Integer;
  ActivityType : LargeString;
  LaborItem : LargeString;
};

type SAPB1.DocumentLine {
  LineNum : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  Quantity : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ShipDate : DateTime;
  Price : Double;
  PriceAfterVAT : Double;
  Currency : LargeString;
  Rate : Double;
  DiscountPercent : Double;
  VendorNum : LargeString;
  SerialNum : LargeString;
  WarehouseCode : LargeString;
  SalesPersonCode : Integer;
  CommisionPercent : Double;
  AccountCode : LargeString;
  SupplierCatNum : LargeString;
  CostingCode : LargeString;
  ProjectCode : LargeString;
  BarCode : LargeString;
  VatGroup : LargeString;
  Height1 : Double;
  Hight1Unit : Integer;
  Height2 : Double;
  Height2Unit : Integer;
  Lengh1 : Double;
  Lengh1Unit : Integer;
  Lengh2 : Double;
  Lengh2Unit : Integer;
  Weight1 : Double;
  Weight1Unit : Integer;
  Weight2 : Double;
  Weight2Unit : Integer;
  Factor1 : Double;
  Factor2 : Double;
  Factor3 : Double;
  Factor4 : Double;
  BaseType : Integer;
  BaseEntry : Integer;
  BaseLine : Integer;
  Volume : Double;
  VolumeUnit : Integer;
  Width1 : Double;
  Width1Unit : Integer;
  Width2 : Double;
  Width2Unit : Integer;
  Address : LargeString;
  TaxCode : LargeString;
  PickQuantity : Double;
  PickListIdNumber : Integer;
  OriginalItem : LargeString;
  FreeText : LargeString;
  ShippingMethod : Integer;
  POTargetNum : Integer;
  POTargetEntry : LargeString;
  POTargetRowNum : Integer;
  CorrInvAmountToStock : Double;
  CorrInvAmountToDiffAcct : Double;
  AppliedTax : Double;
  AppliedTaxFC : Double;
  AppliedTaxSC : Double;
  EqualizationTaxPercent : Double;
  TotalEqualizationTax : Double;
  TotalEqualizationTaxFC : Double;
  TotalEqualizationTaxSC : Double;
  NetTaxAmount : Double;
  NetTaxAmountFC : Double;
  NetTaxAmountSC : Double;
  MeasureUnit : LargeString;
  UnitsOfMeasurment : Double;
  LineTotal : Double;
  TaxPercentagePerRow : Double;
  TaxTotal : Double;
  ExciseAmount : Double;
  TaxPerUnit : Double;
  TotalInclTax : Double;
  CountryOrg : LargeString;
  SWW : LargeString;
  RowTotalFC : Double;
  RowTotalSC : Double;
  LastBuyInmPrice : Double;
  LastBuyDistributeSumFc : Double;
  LastBuyDistributeSumSc : Double;
  LastBuyDistributeSum : Double;
  StockDistributesumForeign : Double;
  StockDistributesumSystem : Double;
  StockDistributesum : Double;
  StockInmPrice : Double;
  TaxBeforeDPM : Double;
  TaxBeforeDPMFC : Double;
  TaxBeforeDPMSC : Double;
  CFOPCode : LargeString;
  CSTCode : LargeString;
  Usage : Integer;
  VisualOrder : Integer;
  BaseOpenQuantity : Double;
  UnitPrice : Double;
  PackageQuantity : Double;
  Text : LargeString;
  COGSCostingCode : LargeString;
  COGSAccountCode : LargeString;
  ChangeAssemlyBoMWarehouse : LargeString;
  GrossBuyPrice : Double;
  GrossBase : Integer;
  GrossProfitTotalBasePrice : Double;
  CostingCode2 : LargeString;
  CostingCode3 : LargeString;
  CostingCode4 : LargeString;
  CostingCode5 : LargeString;
  ItemDetails : LargeString;
  LocationCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActualDeliveryDate : DateTime;
  RemainingOpenQuantity : Double;
  OpenAmount : Double;
  OpenAmountFC : Double;
  OpenAmountSC : Double;
  ExLineNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  RequiredDate : DateTime;
  RequiredQuantity : Double;
  COGSCostingCode2 : LargeString;
  COGSCostingCode3 : LargeString;
  COGSCostingCode4 : LargeString;
  COGSCostingCode5 : LargeString;
  CSTforIPI : LargeString;
  CSTforPIS : LargeString;
  CSTforCOFINS : LargeString;
  CreditOriginCode : LargeString;
  AgreementNo : Integer;
  AgreementRowNumber : Integer;
  ActualBaseEntry : Integer;
  ActualBaseLine : Integer;
  DocEntry : Integer;
  Surpluses : Double;
  DefectAndBreakup : Double;
  Shortages : Double;
  RetirementQuantity : Double;
  RetirementAPC : Double;
  ExpenseType : LargeString;
  ReceiptNumber : LargeString;
  FederalTaxID : LargeString;
  GrossProfit : Double;
  GrossProfitFC : Double;
  GrossProfitSC : Double;
  ReturnCost : Double;
  LineVendor : LargeString;
  StgSeqNum : Integer;
  StgEntry : Integer;
  StgDesc : LargeString;
  UoMEntry : Integer;
  UoMCode : LargeString;
  InventoryQuantity : Double;
  RemainingOpenInventoryQuantity : Double;
  ParentLineNum : Integer;
  Incoterms : Integer;
  TransportMode : Integer;
  NatureOfTransaction : Integer;
  DestinationCountryForImport : LargeString;
  DestinationRegionForImport : Integer;
  OriginCountryForExport : LargeString;
  OriginRegionForExport : Integer;
  SACEntry : Integer;
  HSNEntry : Integer;
  GrossPrice : Double;
  GrossTotal : Double;
  GrossTotalFC : Double;
  GrossTotalSC : Double;
  NCMCode : Integer;
  ShipToCode : LargeString;
  ShipToDescription : LargeString;
  ShipFromCode : LargeString;
  ShipFromDescription : LargeString;
  ExternalCalcTaxRate : Double;
  ExternalCalcTaxAmount : Double;
  ExternalCalcTaxAmountFC : Double;
  ExternalCalcTaxAmountSC : Double;
  StandardItemIdentification : Integer;
  CommodityClassification : Integer;
  U_BNBpCtry : LargeString;
  U_BNOriCtr : LargeString;
  U_BNOriSta : LargeString;
  U_BNDstSta : LargeString;
  U_BNIncTrm : LargeString;
  U_BNTAType : LargeString;
  U_BNTrnMod : LargeString;
  U_BNPort : LargeString;
  U_BNCstPrc : LargeString;
  U_BNTaxExt : LargeString;
  U_BNBrdVal : Double;
  U_BNComCod : LargeString;
  U_BNSupUnt : LargeString;
  U_BNSupMas : Double;
  U_BNRelDec : LargeString;
  U_BNDomFrg : LargeString;
  U_nettopr : Double;
  U_BLD_LyID : Integer;
  U_BLD_NCps : Integer;
  U_Penka_Montage : LargeString;
  U_Penka_Iltis_Status : LargeString;
  U_STL : LargeString;
  U_STL_PREIS : Double;
  U_Bezeichnung2 : LargeString;
  U_ProjektpreisPosition : LargeString;
  LineTaxJurisdictions : many SAPB1.LineTaxJurisdiction;
  GeneratedAssets : many SAPB1.GeneratedAsset;
  EBooksDetails : many SAPB1.EBooksDetail;
  DocumentLineAdditionalExpenses : many SAPB1.DocumentLineAdditionalExpense;
  WithholdingTaxLines : many SAPB1.WithholdingTaxLine;
  SerialNumbers : many SAPB1.SerialNumber;
  BatchNumbers : many SAPB1.BatchNumber;
  DocumentLinesBinAllocations : many SAPB1.DocumentLinesBinAllocation;
  ExportProcesses : many SAPB1.ExportProcess;
  CCDNumbers : many SAPB1.CCDNumber;
  ReturnAction : Integer;
  ReturnReason : Integer;
  OwnerCode : Integer;
  ImportProcesses : many SAPB1.ImportProcess;
};

type SAPB1.DocumentParams {
  DocEntry : Integer;
};

type SAPB1.MaterialRevaluationFIFO {
  Layers : many SAPB1.Layer;
};

type SAPB1.IntrastatConfigurationParams {
  AbsEntry : Integer;
  Code : LargeString;
  StatCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateTo : DateTime;
  Country : LargeString;
};

type SAPB1.EDFEntryLog {
  AbsEntry : Integer;
  LogNumber : Integer;
  LogMessage : LargeString;
  LogData : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LogOperationDate : DateTime;
  LogOperationTime : Integer;
  ExportFormat : Integer;
};

type SAPB1.AttributeGroupLine {
  Code : Integer;
  SortNumber : Integer;
  AttributeID : Integer;
  AttributeName : LargeString;
  DefaultValue : LargeString;
};

type SAPB1.LegalDataDetail {
  DocEntry : Integer;
  LineSequence : Integer;
  TaxCode : LargeString;
  TaxRate : Double;
  Amount : Double;
};

type SAPB1.InventoryPostingLineUoM {
  DocumentEntry : Integer;
  LineNumber : Integer;
  ChildNumber : Integer;
  UoMCountedQuantity : Double;
  ItemsPerUnit : Double;
  CountedQuantity : Double;
  UoMCode : LargeString;
  BarCode : LargeString;
};

type SAPB1.MasterartikelParams {
  Code : LargeString;
};

type SAPB1.WTDBP {
  BPKeyPart1 : LargeString;
  BPKeyPart2 : LargeString;
  WTaxCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveDateTo : DateTime;
  Rate : Double;
};

type SAPB1.BankChargesAllocationCodeParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.ServiceContractParams {
  ContractID : Integer;
};

type SAPB1.PeriodCategoryParams {
  AbsoluteEntry : Integer;
};

type SAPB1.ServiceCallBPAddressComponent {
  ShipToStreet : LargeString;
  ShipToStreetNo : LargeString;
  ShipToBlock : LargeString;
  ShipToBuilding : LargeString;
  ShipToCity : LargeString;
  ShipToZipCode : LargeString;
  ShipToState : LargeString;
  ShipToCounty : LargeString;
  ShipToCountry : LargeString;
  ShipToAddressType : LargeString;
  ShipToAddress2 : LargeString;
  ShipToAddress3 : LargeString;
  ShipToGlobalLocationNumber : LargeString;
  BillToStreet : LargeString;
  BillToStreetNo : LargeString;
  BillToBlock : LargeString;
  BillToBuilding : LargeString;
  BillToCity : LargeString;
  BillToZipCode : LargeString;
  BillToState : LargeString;
  BillToCounty : LargeString;
  BillToCountry : LargeString;
  BillToAddressType : LargeString;
  BillToAddress2 : LargeString;
  BillToAddress3 : LargeString;
  BillToGlobalLocationNumber : LargeString;
  U_LatS : Integer;
  U_LatB : Integer;
  U_LonS : Integer;
  U_LonB : Integer;
};

type SAPB1.RouteStageParams {
  InternalNumber : Integer;
  Code : LargeString;
  Description : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  GenerationTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfUpdate : DateTime;
};

type SAPB1.TaxWebSiteParams {
  AbsEntry : Integer;
  WebSiteName : LargeString;
};

type SAPB1.ChartOfAccountParams {
  Code : LargeString;
};

type SAPB1.InventoryCountingParams {
  DocumentEntry : Integer;
  DocumentNumber : Integer;
};

type SAPB1.DeductionTaxHierarchyParams {
  AbsEntry : Integer;
};

type SAPB1.StockTransferTaxExtension {
  FormNumber : LargeString;
  TransactionCategory : LargeString;
  U_LatS : Integer;
  U_LatB : Integer;
  U_LonS : Integer;
  U_LonB : Integer;
};

type SAPB1.CockpitParams {
  AbsEntry : Integer;
};

type SAPB1.U_BA_ODOC3Params {
  Code : LargeString;
};

type SAPB1.InventoryPostingDocumentReferences {
  DocEntry : Integer;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
};

type SAPB1.FAAccountDeterminationParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.InventoryCountingDocumentReferences {
  DocEntry : Integer;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
};

type SAPB1.StockTransferLine {
  LineNum : Integer;
  DocEntry : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  Quantity : Double;
  Price : Double;
  Currency : LargeString;
  Rate : Double;
  DiscountPercent : Double;
  VendorNum : LargeString;
  SerialNumber : LargeString;
  WarehouseCode : LargeString;
  FromWarehouseCode : LargeString;
  ProjectCode : LargeString;
  Factor : Double;
  Factor2 : Double;
  Factor3 : Double;
  Factor4 : Double;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  MeasureUnit : LargeString;
  UnitsOfMeasurment : Double;
  BaseLine : Integer;
  BaseEntry : Integer;
  UnitPrice : Double;
  UoMEntry : Integer;
  UoMCode : LargeString;
  InventoryQuantity : Double;
  RemainingOpenQuantity : Double;
  RemainingOpenInventoryQuantity : Double;
  U_BNBpCtry : LargeString;
  U_BNOriCtr : LargeString;
  U_BNOriSta : LargeString;
  U_BNDstSta : LargeString;
  U_BNIncTrm : LargeString;
  U_BNTAType : LargeString;
  U_BNTrnMod : LargeString;
  U_BNPort : LargeString;
  U_BNCstPrc : LargeString;
  U_BNTaxExt : LargeString;
  U_BNBrdVal : Double;
  U_BNComCod : LargeString;
  U_BNSupUnt : LargeString;
  U_BNSupMas : Double;
  U_BNRelDec : LargeString;
  U_BNDomFrg : LargeString;
  U_nettopr : Double;
  U_BLD_LyID : Integer;
  U_BLD_NCps : Integer;
  U_Penka_Montage : LargeString;
  U_Penka_Iltis_Status : LargeString;
  U_STL : LargeString;
  U_STL_PREIS : Double;
  U_Bezeichnung2 : LargeString;
  U_ProjektpreisPosition : LargeString;
  SerialNumbers : many SAPB1.SerialNumber;
  BatchNumbers : many SAPB1.BatchNumber;
  CCDNumbers : many SAPB1.CCDNumber;
  StockTransferLinesBinAllocations : many SAPB1.StockTransferLinesBinAllocation;
};

type SAPB1.WebClientBookmarkTileParams {
  Guid : LargeString;
};

type SAPB1.BinLocationFieldParams {
  AbsEntry : Integer;
};

type SAPB1.BatchNumberDetailParams {
  DocEntry : Integer;
};

type SAPB1.DownPaymentToDrawDetails {
  DocInternalID : Integer;
  RowNum : Integer;
  SeqNum : Integer;
  DocEntry : Integer;
  VatGroupCode : LargeString;
  VatPercent : Double;
  AmountToDraw : Double;
  AmountToDrawFC : Double;
  AmountToDrawSC : Double;
  Tax : Double;
  TaxFC : Double;
  TaxSC : Double;
  GrossAmountToDraw : Double;
  GrossAmountToDrawFC : Double;
  GrossAmountToDrawSC : Double;
};

type SAPB1.ServiceCallSolution {
  LineNum : Integer;
  SolutionID : Integer;
};

type SAPB1.KnowledgeBaseSolutionParams {
  SolutionCode : Integer;
};

type SAPB1.MessageHeader {
  Code : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReceivedDate : DateTime;
  ReceivedTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  SentDate : DateTime;
  SentTime : Time;
};

type SAPB1.BranchParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.ServiceGroupParams {
  AbsEntry : Integer;
  ServiceGroupCode : LargeString;
};

type SAPB1.DocumentPackage {
  Number : Integer;
  Type : LargeString;
  TotalWeight : Double;
  Units : Integer;
  DocumentPackageItems : many SAPB1.DocumentPackageItem;
};

type SAPB1.DeductionTaxGroupParams {
  GroupKey : Integer;
};

type SAPB1.DeterminationCriteriaParams {
  DmcId : Integer;
};

type SAPB1.InventoryPostingSerialNumber {
  DocumentEntry : Integer;
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufactureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReceptionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyStart : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyEnd : DateTime;
  Location : LargeString;
  Notes : LargeString;
  BatchID : LargeString;
  SystemSerialNumber : Integer;
  BaseLineNumber : Integer;
  Quantity : Double;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
};

type SAPB1.WeightMeasureParams {
  UnitCode : Integer;
};

type SAPB1.ReportLayout_TranslationLine {
  DocEntry : LargeString;
  LineNumber : Integer;
  DocName : LargeString;
  LanguageCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  CreateTime : Integer;
  UpdateTime : Integer;
};

type SAPB1.PostingTemplatesLine {
  TrtCode : LargeString;
  LineNumber : Integer;
  ControlAccount : LargeString;
  AccountCode : LargeString;
  AccountName : LargeString;
  Debit : Double;
  Credit : Double;
  TaxGroup : LargeString;
  TaxCode : LargeString;
  DistributionRule : LargeString;
  CostingCode1 : LargeString;
  CostingCode2 : LargeString;
  CostingCode3 : LargeString;
  CostingCode4 : LargeString;
  CostingCode5 : LargeString;
  ProjectCode : LargeString;
  CostElementCode : LargeString;
};

type SAPB1.DocFreightEBooksDetail {
  IncomeClassificationType : Integer;
  IncomeClassificationCategory : Integer;
  ExpensesClassificationType : Integer;
  ExpensesClassificationCategory : Integer;
  NetValueLC : Double;
  NetValueFC : Double;
  NetValueSC : Double;
  VatCategory : Integer;
  WithheldPercentCategory : Integer;
  WithheldAmountLC : Double;
  WithheldAmountFC : Double;
  WithheldAmountSC : Double;
  VatClassificationType : Integer;
  VatClassificationCategory : Integer;
  VATExemptionCause : Integer;
};

type SAPB1.WorkflowApprovalTaskListParams {
  Status : LargeString;
};

type SAPB1.EDFProtocolParameter {
  ParamName : LargeString;
  ParamValue : LargeString;
  ParameterID : Integer;
  BranchID : Integer;
  ParamParameters : LargeString;
};

type SAPB1.Payments_ApprovalRequest {
  ApprovalTemplatesID : Integer;
  Remarks : LargeString;
  ApprovalTemplatesName : LargeString;
};

type SAPB1.JournalEntryDocumentTypeParams {
  JournalEntryType : LargeString;
  DocTypeDescription : LargeString;
  ShortName : LargeString;
};

type SAPB1.BankStatementParams {
  InternalNumber : Integer;
  BankAccountKey : Integer;
  StatementNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StatementDate : DateTime;
  StartingBalanceF : Double;
  EndingBalanceF : Double;
  Currency : LargeString;
  StartingBalanceL : Double;
  EndingBalanceL : Double;
};

type SAPB1.UserPermissionItem {
  UserCode : Integer;
  PermissionID : LargeString;
};

type SAPB1.SalesOpportunitySourceSetupParams {
  SequenceNo : Integer;
  Description : LargeString;
};

type SAPB1.CycleCountDeterminationParams {
  WarehouseCode : LargeString;
  CycleBy : Integer;
};

type SAPB1.UserLanguageParams {
  Code : Integer;
};

type SAPB1.AccrualTypeParams {
  Code : LargeString;
};

type SAPB1.U_BA_MDIM2Params {
  Code : LargeString;
};

type SAPB1.DownPaymentToDraw {
  DocEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Name : LargeString;
  Details : LargeString;
  AmountToDraw : Double;
  AmountToDrawFC : Double;
  AmountToDrawSC : Double;
  DocInternalID : Integer;
  RowNum : Integer;
  DocNumber : Integer;
  Tax : Double;
  TaxFC : Double;
  TaxSC : Double;
  GrossAmountToDraw : Double;
  GrossAmountToDrawFC : Double;
  GrossAmountToDrawSC : Double;
  DownPaymentsToDrawDetails : many SAPB1.DownPaymentToDrawDetails;
};

type SAPB1.BOEPortfolioParams {
  PortfolioEntry : Integer;
  PortfolioID : LargeString;
  PortfolioCode : LargeString;
};

type SAPB1.ExtendedAdminInfo {
  AddressType : LargeString;
  StreetNo : LargeString;
  STDCode : Integer;
  STDCodeForeign : Integer;
  NatureOfCompanyCode : Integer;
  EconomicActivityTypeCode : Integer;
  CreditContributionOriginCode : LargeString;
  IPIPeriodCode : LargeString;
  CooperativeAssociationTypeCode : Integer;
  ProfitTaxationCode : Integer;
  CompanyQualificationCode : Integer;
  DeclarerTypeCode : Integer;
  CommercialRegister : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfIncorporation : DateTime;
  SPEDProfile : LargeString;
  EnvironmentType : Integer;
  OKDPNumber : LargeString;
  GlobalLocationNumber : LargeString;
  AuthorityUser : LargeString;
  AuthorityPassword : LargeString;
  URLforGoodsTransportService : LargeString;
  URLforInvoiceTypeService : LargeString;
};

type SAPB1.ItemAttributeGroups {
  Attribute1 : LargeString;
  Attribute2 : LargeString;
  Attribute3 : LargeString;
  Attribute4 : LargeString;
  Attribute5 : LargeString;
  Attribute6 : LargeString;
  Attribute7 : LargeString;
  Attribute8 : LargeString;
  Attribute9 : LargeString;
  Attribute10 : LargeString;
  Attribute11 : LargeString;
  Attribute12 : LargeString;
  Attribute13 : LargeString;
  Attribute14 : LargeString;
  Attribute15 : LargeString;
  Attribute16 : LargeString;
  Attribute17 : LargeString;
  Attribute18 : LargeString;
  Attribute19 : LargeString;
  Attribute20 : LargeString;
  Attribute21 : LargeString;
  Attribute22 : LargeString;
  Attribute23 : LargeString;
  Attribute24 : LargeString;
  Attribute25 : LargeString;
  Attribute26 : LargeString;
  Attribute27 : LargeString;
  Attribute28 : LargeString;
  Attribute29 : LargeString;
  Attribute30 : LargeString;
  Attribute31 : LargeString;
  Attribute32 : LargeString;
  Attribute33 : Integer;
  Attribute34 : Integer;
  Attribute35 : Integer;
  Attribute36 : Integer;
  Attribute37 : Integer;
  Attribute38 : Integer;
  Attribute39 : Integer;
  Attribute40 : Integer;
  Attribute41 : Integer;
  Attribute42 : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Attribute43 : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Attribute44 : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Attribute45 : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Attribute46 : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Attribute47 : DateTime;
  Attribute48 : Double;
  Attribute49 : Double;
  Attribute50 : Double;
  Attribute51 : Double;
  Attribute52 : Double;
  Attribute53 : Double;
  Attribute54 : Double;
  Attribute55 : Double;
  Attribute56 : Double;
  Attribute57 : Double;
  Attribute58 : Double;
  Attribute59 : Double;
  Attribute60 : Double;
  Attribute61 : Double;
  Attribute62 : Double;
  Attribute63 : Double;
  Attribute64 : Double;
};

type SAPB1.GLAccountAdvancedRuleParams {
  AbsoluteEntry : Integer;
  Period : LargeString;
  Code : LargeString;
  ItemCode : LargeString;
  ItemGroup : Integer;
  Warehouse : LargeString;
  BPGroup : Integer;
  FederalTaxID : LargeString;
  ShipToCountry : LargeString;
  ShipToState : LargeString;
};

type SAPB1.SectionParams {
  AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.PM_SubprojectParams {
  AbsEntry : Integer;
};

type SAPB1.EmailGroupParams {
  EmailGroupCode : LargeString;
  EmailGroupName : LargeString;
};

type SAPB1.GeneratedAsset {
  DocEntry : Integer;
  LineNumber : Integer;
  VisualOrder : Integer;
  AssetCode : LargeString;
  Remarks : LargeString;
  SerialNumber : LargeString;
  amount : Double;
  amountSC : Double;
};

type SAPB1.BinLocationParams {
  AbsEntry : Integer;
  BinCode : LargeString;
};

type SAPB1.CampaignParams {
  CampaignNumber : Integer;
  CampaignName : LargeString;
};

type SAPB1.ElectronicProtocol {
  MappingID : Integer;
  Confirmation : LargeString;
  EDocType : Integer;
  RelatedDocuments : many SAPB1.RelatedDocument;
};

type SAPB1.CashDiscountParams {
  Code : LargeString;
  Name : LargeString;
};

type SAPB1.AttributeGroupParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.BOELine {
  BOEKey : Integer;
  BOENumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Bank : LargeString;
  Branch : LargeString;
  AccountNumber : LargeString;
  Amount : Double;
};

type SAPB1.SalesStageParams {
  SequenceNo : Integer;
};

type SAPB1.PaymentAccount {
  LineNum : Integer;
  AccountCode : LargeString;
  SumPaid : Double;
  SumPaidFC : Double;
  Decription : LargeString;
  VatGroup : LargeString;
  AccountName : LargeString;
  GrossAmount : Double;
  ProfitCenter : LargeString;
  ProjectCode : LargeString;
  VatAmount : Double;
  ProfitCenter2 : LargeString;
  ProfitCenter3 : LargeString;
  ProfitCenter4 : LargeString;
  ProfitCenter5 : LargeString;
  LocationCode : Integer;
  EqualizationVatAmount : Double;
};

type SAPB1.UoMGroupDefinition {
  AlternateUoM : Integer;
  AlternateQuantity : Double;
  BaseQuantity : Double;
  WeightFactor : Integer;
  UdfFactor : Integer;
};

type SAPB1.PaymentCheck {
  LineNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  CheckNumber : Integer;
  BankCode : LargeString;
  Branch : LargeString;
  AccounttNum : LargeString;
  Details : LargeString;
  CheckSum : Double;
  Currency : LargeString;
  CountryCode : LargeString;
  CheckAbsEntry : Integer;
  CheckAccount : LargeString;
  FiscalID : LargeString;
  OriginallyIssuedBy : LargeString;
  EndorsableCheckNo : Integer;
};

type SAPB1.EBooksDetail {
  IncomeClassificationType : Integer;
  IncomeClassificationCategory : Integer;
  ExpensesClassificationType : Integer;
  ExpensesClassificationCategory : Integer;
  NetValueLC : Double;
  NetValueFC : Double;
  NetValueSC : Double;
  VatCategory : Integer;
  WithheldPercentCategory : Integer;
  WithheldAmountLC : Double;
  WithheldAmountFC : Double;
  WithheldAmountSC : Double;
  VatClassificationType : Integer;
  VatClassificationCategory : Integer;
  VATExemptionCause : Integer;
};

type SAPB1.AssetGroupParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.CampaignItem {
  CampaignNumber : Integer;
  CampaignLineNumber : Integer;
  ItemCode : LargeString;
  ItemName : LargeString;
  ItemGroup : LargeString;
};

type SAPB1.ApprovalTemplateTerm {
  Value : LargeString;
};

type SAPB1.TaxInvoiceReportLine {
  DocumentType : Integer;
  DocumentEntry : Integer;
  BaseAmount : Double;
  TaxAmount : Double;
  ItemQuantity : Double;
  ItemNo : LargeString;
  ItemDescription : LargeString;
  TaxCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  ItemPrice : Double;
  LineNumber : Integer;
  Currency : LargeString;
  BusinessPlace : Integer;
  TaxInvoiceReportNumber : LargeString;
  BPCode : LargeString;
  BPName : LargeString;
  Legacy : LargeString;
};

type SAPB1.SalesOpportunityReasonSetupParams {
  SequenceNo : Integer;
  Description : LargeString;
};

type SAPB1.POSTotalizer {
  LineNum : Integer;
  Code : LargeString;
  Number : Integer;
  Total : Double;
  Description : LargeString;
};

type SAPB1.ServiceAppReportParams {
  Code : Integer;
};

type SAPB1.BPPriorityParams {
  Priority : Integer;
};

type SAPB1.InventoryPostingLine {
  DocumentEntry : Integer;
  LineNumber : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  WarehouseCode : LargeString;
  BinEntry : Integer;
  InWarehouseQuantity : Double;
  BarCode : LargeString;
  Variance : Double;
  VariancePercentage : Double;
  CountedQuantity : Double;
  Price : Double;
  Currency : LargeString;
  Total : Double;
  VisualOrder : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CountDate : DateTime;
  CountTime : Time;
  BaseEntry : Integer;
  BaseLine : Integer;
  BaseType : Integer;
  BaseReference : LargeString;
  Remarks : LargeString;
  InventoryOffsetIncreaseAccount : LargeString;
  InventoryOffsetDecreaseAccount : LargeString;
  ProjectCode : LargeString;
  Manufacturer : Integer;
  SupplierCatalogNo : LargeString;
  PreferredVendor : LargeString;
  CostingCode : LargeString;
  CostingCode2 : LargeString;
  CostingCode3 : LargeString;
  CostingCode4 : LargeString;
  CostingCode5 : LargeString;
  UoMCode : LargeString;
  UoMCountedQuantity : Double;
  ItemsPerUnit : Double;
  ActualPrice : Double;
  PostedValueLC : Double;
  PostedValueSC : Double;
  InventoryPostingLineUoMs : many SAPB1.InventoryPostingLineUoM;
  InventoryPostingSerialNumbers : many SAPB1.InventoryPostingSerialNumber;
  InventoryPostingBatchNumbers : many SAPB1.InventoryPostingBatchNumber;
  InventoryPostingCCDNumbers : many SAPB1.InventoryPostingCCDNumber;
};

type SAPB1.U_BA_RPTSParams {
  Code : LargeString;
};

type SAPB1.EDFEntryListInputParams {
  StoreEntryTypeSet : LargeString;
  StoreEntryStatusSet : LargeString;
  MaxLines : Integer;
  BranchID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDate : DateTime;
  FromTime : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDate : DateTime;
  ToTime : Integer;
  FromEntryID : Integer;
  CancellationStatusSet : LargeString;
};

type SAPB1.BinLocationAttributeParams {
  AbsEntry : Integer;
  Attribute : Integer;
  Code : LargeString;
};

type SAPB1.WithholdingTaxCodes_Line {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Effectivefrom : DateTime;
  Rate : Double;
  TDSRate : Double;
  SurchargeRate : Double;
  CessRate : Double;
  HSCRate : Double;
  IGSTRate : Double;
  CGSTRate : Double;
  SGSTRate : Double;
  UTGSTRate : Double;
  CessGSTRate : Double;
  LineNum : Integer;
  ProgressiveTax_Lines : many SAPB1.ProgressiveTax_Line;
  WithholdingTaxCodes_ValueRange_Lines : many SAPB1.WithholdingTaxCodes_ValueRange_Line;
};

type SAPB1.PMS_StageData {
  LineID : Integer;
  StageID : Integer;
  StageType : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CloseDate : DateTime;
  Task : Integer;
  Description : LargeString;
  ExpectedCosts : Double;
  InvoicedAmountSales : Double;
  OpenAmountSales : Double;
  InvoicedAmountPurchase : Double;
  OpenAmountPurchase : Double;
  PercentualCompletness : Double;
  StageOwner : Integer;
  DependsOnStage1 : Integer;
  DependsOnStage2 : Integer;
  DependsOnStage3 : Integer;
  DependsOnStage4 : Integer;
  DependsOnStageID1 : Integer;
  DependsOnStageID2 : Integer;
  DependsOnStageID3 : Integer;
  DependsOnStageID4 : Integer;
  AttachmentEntry : Integer;
  UniqueID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FinishedDate : DateTime;
};

type SAPB1.GovPayCodeAuthority {
  AbsId : Integer;
  BPLId : Integer;
  State : LargeString;
  CardCode : LargeString;
};

type SAPB1.KPI_ItemLine {
  KPICode : LargeString;
  KPILineNumber : Integer;
  KPIName : LargeString;
  KPIValue1 : Double;
  KPIValue2 : Double;
  KPIValue3 : Double;
  KPIValue4 : Double;
  KPIValue5 : Double;
  KPIValue6 : Double;
  KPIValue7 : Double;
  KPIValue8 : Double;
  KPIValue9 : Double;
  KPIValue10 : Double;
  KPIValue11 : Double;
  KPIValue12 : Double;
  KPIValue13 : Double;
  KPIValue14 : Double;
  KPIValue15 : Double;
  KPIValue16 : Double;
  KPIValue17 : Double;
  KPIValue18 : Double;
  KPIValue19 : Double;
  KPIValue20 : Double;
  KPIValue21 : Double;
  KPIValue22 : Double;
  KPIValue23 : Double;
  KPIValue24 : Double;
  KPIValue25 : Double;
  KPIValue26 : Double;
  KPIValue27 : Double;
  KPIValue28 : Double;
  KPIValue29 : Double;
  KPIValue30 : Double;
};

type SAPB1.EmployeeIDTypeParams {
  IDType : LargeString;
};

type SAPB1.PaymentInvoiceEntry {
  DocEntry : Integer;
  InstallmentId : Integer;
};

type SAPB1.SerialNumberDetailParams {
  DocEntry : Integer;
};

type SAPB1.InventoryPostingBatchNumber {
  DocumentEntry : Integer;
  BatchNumber : LargeString;
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufactureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AddmisionDate : DateTime;
  Location : LargeString;
  Notes : LargeString;
  Quantity : Double;
  BaseLineNumber : Integer;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
  SystemSerialNumber : Integer;
};

type SAPB1.ServiceCallProblemTypeParams {
  ProblemTypeID : Integer;
  Name : LargeString;
};

type SAPB1.StockTransferLinesBinAllocation {
  BinAbsEntry : Integer;
  Quantity : Double;
  SerialAndBatchNumbersBaseLine : Integer;
  BaseLineNumber : Integer;
};

type SAPB1.EmployeeBranchAssignmentItem {
  EmployeeID : Integer;
  BPLID : Integer;
};

type SAPB1.SNBLines {
  SnbAbsEntry : Integer;
  NewCost : Double;
  DebitCredit : Double;
  SystemNumber : Integer;
  LotNumber : LargeString;
  ManufactureNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AdmissionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpirationDate : DateTime;
  BaseLine : Integer;
};

type SAPB1.FinancialYearParams {
  AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.BlanketAgreementsDocument {
  AgreementRowNumber : Integer;
  DocumentNo : Integer;
  DocumentRowNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentDate : DateTime;
  ItemNo : LargeString;
  ItemDescription : LargeString;
  UnitPrice : Double;
  Quantity : Double;
  Discount : Double;
  UoM : LargeString;
  UoMCode : LargeString;
  UnitsOfMeasurement : Double;
};

type SAPB1.EmployeeStatusParams {
  StatusId : Integer;
  Name : LargeString;
  Description : LargeString;
};

type SAPB1.LandedCostsCodeParams {
  Code : LargeString;
};

type SAPB1.ExtendedTranslation_ItemLine {
  DocEntry : Integer;
  LineNumber : Integer;
  ItemCode : LargeString;
  ItemType : LargeString;
  SlimType : LargeString;
  MaxLength : Integer;
  SourceText : LargeString;
  Memo : LargeString;
  ExtendedTranslation_ResultLines : many SAPB1.ExtendedTranslation_ResultLine;
};

type SAPB1.BillOfExchangeTransBankPage {
  AccountCode : LargeString;
  Sequence : Integer;
  U_BP_DocNr : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_BP_PDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_BP_TDate : DateTime;
  U_BP_CBala : Double;
  U_BP_NBala : Double;
  U_BP_GLacc : LargeString;
  U_BP_Statu : LargeString;
  U_BP_ExDoc : Integer;
  U_BP_PayDo : Integer;
  U_BP_VAT : LargeString;
  U_BP_VAT_A : Double;
  U_BP_PC : LargeString;
  U_BP_Prj : LargeString;
  U_BP_DMCM : LargeString;
  U_BP_FOut : Double;
  U_BP_FIn : Double;
  U_BP_FCurr : LargeString;
  U_BP_FRate : Double;
  U_BP_FVAT : Double;
};

type SAPB1.ResourceParams {
  Code : LargeString;
};

type SAPB1.SalesTaxCodeParams {
  Code : LargeString;
};

type SAPB1.ChecksforPaymentDocumentReference {
  DocEntry : Integer;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
};

type SAPB1.DocExpenseTaxJurisdiction {
  JurisdictionCode : LargeString;
  JurisdictionType : Integer;
  TaxAmount : Double;
  TaxAmountSC : Double;
  TaxAmountFC : Double;
  TaxRate : Double;
  DocEntry : Integer;
  LineNumber : Integer;
  RowSequence : Integer;
  ExternalCalcTaxRate : Double;
  ExternalCalcTaxAmount : Double;
  ExternalCalcTaxAmountFC : Double;
  ExternalCalcTaxAmountSC : Double;
};

type SAPB1.PMS_ActivityData {
  LineID : Integer;
  StageID : Integer;
  ActivityID : Integer;
};

type SAPB1.GetChangeLogParams {
  PrimaryKey : LargeString;
  UDOObjectCode : LargeString;
};

type SAPB1.UserFieldMDParams {
  TableName : LargeString;
  FieldID : Integer;
};

type SAPB1.ReportTypeParams {
  TypeCode : LargeString;
  TypeName : LargeString;
  AddonName : LargeString;
  AddonFormType : LargeString;
  MenuID : LargeString;
};

type SAPB1.UserDefaultGroupParams {
  Code : LargeString;
};

type SAPB1.InventoryPostingCCDNumber {
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  CCDNumber : LargeString;
  Quantity : Double;
  CountryOfOrigin : LargeString;
  SubLineNumber : Integer;
  DocumentEntry : Integer;
  BaseLineNumber : Integer;
  ChildNumber : Integer;
};

type SAPB1.ProductionOrdersStage {
  DocEntry : Integer;
  StageID : Integer;
  SequenceNumber : Integer;
  StageEntry : Integer;
  Name : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  RequiredDays : Double;
  WaitingDays : Double;
  CalculationProportion : Double;
};

type SAPB1.GTIParams {
  InboundFile : LargeString;
  AbsEntry : Integer;
};

type SAPB1.ItemCycleCount {
  CycleCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  NextCountingDate : DateTime;
  AlertTime : Time;
  DestinationUser : Integer;
  WarehouseCode : LargeString;
};

type SAPB1.BusinessPartnerPropertyParams {
  PropertyCode : Integer;
  PropertyName : LargeString;
};

type SAPB1.U_BA_SMODParams {
  Code : LargeString;
};

type SAPB1.EmployeeSavingsPaymentInfo {
  EmployeeID : Integer;
  LineNum : Integer;
  ContractName : LargeString;
  PaymentNotes : LargeString;
  AN : Double;
  ANcurrency : LargeString;
  AG : Double;
  AGcurrency : LargeString;
  BankName : LargeString;
  BankCode : LargeString;
  BankAccount : LargeString;
};

type SAPB1.WizardPaymentMethodParams {
  PaymentMethodCode : LargeString;
};

type SAPB1.UserObjectMD_ChildTable {
  SonNumber : Integer;
  TableName : LargeString;
  LogTableName : LargeString;
  Code : LargeString;
  ObjectName : LargeString;
};

type SAPB1.DocumentReference {
  DocEntry : Integer;
  LineNumber : Integer;
  RefDocEntr : Integer;
  RefDocNum : Integer;
  ExtDocNum : LargeString;
  AccessKey : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  IssuerCNPJ : LargeString;
  IssuerCode : LargeString;
  Model : LargeString;
  Series : LargeString;
  Number : Integer;
  RefAccKey : LargeString;
  RefAmount : Double;
  SubSeries : LargeString;
  Remark : LargeString;
};

type SAPB1.SalesTaxAuthorityParams {
  Code : LargeString;
  Type : Integer;
};

type SAPB1.WebClientLaunchpadParams {
  Guid : LargeString;
};

type SAPB1.NatureOfAssesseeParams {
  AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.UnitOfMeasurementGroupParams {
  AbsEntry : Integer;
  Code : LargeString;
};

type SAPB1.UnitOfMeasurementParams {
  AbsEntry : Integer;
  Code : LargeString;
};

type SAPB1.ApprovalStageApprover {
  UserID : Integer;
};

type SAPB1.CategoryGroup {
  AuthGroupId : Integer;
  CategoryId : Integer;
};

type SAPB1.TaxExtension {
  TaxId0 : LargeString;
  TaxId1 : LargeString;
  TaxId2 : LargeString;
  TaxId3 : LargeString;
  TaxId4 : LargeString;
  TaxId5 : LargeString;
  TaxId6 : LargeString;
  TaxId7 : LargeString;
  TaxId8 : LargeString;
  TaxId9 : LargeString;
  State : LargeString;
  County : LargeString;
  Incoterms : LargeString;
  Vehicle : LargeString;
  VehicleState : LargeString;
  NFRef : LargeString;
  Carrier : LargeString;
  PackQuantity : Integer;
  PackDescription : LargeString;
  Brand : LargeString;
  ShipUnitNo : Integer;
  NetWeight : Double;
  GrossWeight : Double;
  StreetS : LargeString;
  BlockS : LargeString;
  BuildingS : LargeString;
  CityS : LargeString;
  ZipCodeS : LargeString;
  CountyS : LargeString;
  StateS : LargeString;
  CountryS : LargeString;
  StreetB : LargeString;
  BlockB : LargeString;
  BuildingB : LargeString;
  CityB : LargeString;
  ZipCodeB : LargeString;
  CountyB : LargeString;
  StateB : LargeString;
  CountryB : LargeString;
  MainUsage : Integer;
  GlobalLocationNumberS : LargeString;
  GlobalLocationNumberB : LargeString;
  TaxId12 : LargeString;
  TaxId13 : LargeString;
  BillOfEntryNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  BillOfEntryDate : DateTime;
  OriginalBillOfEntryNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  OriginalBillOfEntryDate : DateTime;
  PortCode : LargeString;
  DocEntry : Integer;
  BoEValue : Double;
  DifferentialOfTaxRate : Integer;
};

type SAPB1.AddressExtension {
  ShipToStreet : LargeString;
  ShipToStreetNo : LargeString;
  ShipToBlock : LargeString;
  ShipToBuilding : LargeString;
  ShipToCity : LargeString;
  ShipToZipCode : LargeString;
  ShipToCounty : LargeString;
  ShipToState : LargeString;
  ShipToCountry : LargeString;
  ShipToAddressType : LargeString;
  BillToStreet : LargeString;
  BillToStreetNo : LargeString;
  BillToBlock : LargeString;
  BillToBuilding : LargeString;
  BillToCity : LargeString;
  BillToZipCode : LargeString;
  BillToCounty : LargeString;
  BillToState : LargeString;
  BillToCountry : LargeString;
  BillToAddressType : LargeString;
  ShipToGlobalLocationNumber : LargeString;
  BillToGlobalLocationNumber : LargeString;
  ShipToAddress2 : LargeString;
  ShipToAddress3 : LargeString;
  BillToAddress2 : LargeString;
  BillToAddress3 : LargeString;
  PlaceOfSupply : LargeString;
  PurchasePlaceOfSupply : LargeString;
  DocEntry : Integer;
  U_LatS : Integer;
  U_LatB : Integer;
  U_LonS : Integer;
  U_LonB : Integer;
};

type SAPB1.PaymentDocumentReferences {
  DocEntry : Integer;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
};

type SAPB1.ResourceCapacityWithFilterParams {
  Code : LargeString;
  Warehouse : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
};

type SAPB1.ApprovalTemplateUser {
  UserID : Integer;
};

type SAPB1.ServiceCallProblemSubTypeParams {
  ProblemSubTypeID : Integer;
  Name : LargeString;
};

type SAPB1.FixedAssetValues {
  AcquisitionCost : Double;
  Quantity : Double;
  DepreciationValue : Double;
  NetBookValue : Double;
  OrdinaryDepreciationValue : Double;
  UnplanedDepreciationValue : Double;
  SpecialDepreciationValue : Double;
  WriteUp : Double;
  Appreciation : Double;
};

type SAPB1.RecurringPostingsDocumentReference {
  RcrCode : LargeString;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
};

type SAPB1.DiscountLine {
  DiscountCode : LargeString;
  LineId : Integer;
  NumOfDays : Integer;
  Discount : Double;
  Day : Integer;
  Month : Integer;
};

type SAPB1.WithholdingTaxLine {
  WTCode : LargeString;
  WTAmountSys : Double;
  WTAmountFC : Double;
  WTAmount : Double;
  WithholdingType : LargeString;
  TaxableAmountinSys : Double;
  TaxableAmountFC : Double;
  TaxableAmount : Double;
  RoundingType : LargeString;
  Rate : Double;
  Criteria : LargeString;
  Category : LargeString;
  BaseType : LargeString;
  AppliedWTAmountSys : Double;
  AppliedWTAmountFC : Double;
  AppliedWTAmount : Double;
  GLAccount : LargeString;
  LineNum : Integer;
  BaseDocEntry : Integer;
  BaseDocLine : Integer;
  BaseDocType : Integer;
  BaseDocumentReference : Integer;
  TargetAbsEntry : Integer;
  TargetDocumentType : Integer;
  CSTCodeIncoming : LargeString;
  CSTCodeOutgoing : LargeString;
};

type SAPB1.SerialNumber {
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufactureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReceptionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyStart : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyEnd : DateTime;
  Location : LargeString;
  Notes : LargeString;
  BatchID : LargeString;
  SystemSerialNumber : Integer;
  BaseLineNumber : Integer;
  Quantity : Double;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
};

type SAPB1.TeamMember {
  TeamID : Integer;
  EmployeeID : Integer;
};

type SAPB1.BrazilMultiIndexerParams {
  ID : Integer;
};

type SAPB1.UserParams {
  InternalKey : Integer;
};

type SAPB1.WebClientVariantMChartValue2 {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.CountryParams {
  Code : LargeString;
  Name : LargeString;
};

type SAPB1.MultiplePayment {
  BankStatmentLineID : Integer;
  ListLineID : Integer;
  DocumentIdentifier : LargeString;
  AmountLC : Double;
  AmountFC : Double;
};

type SAPB1.U_BNCINCParams {
  Code : LargeString;
};

type SAPB1.ChooseFromList_Line {
  ObjectName : LargeString;
  FieldIndex : Integer;
  FieldNo : LargeString;
  DisplayedName : LargeString;
  VisualIndex : Integer;
};

type SAPB1.DimensionParams {
  DimensionCode : Integer;
  DimensionName : LargeString;
};

type SAPB1.WebClientVariantEmbeddedChartSize {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.BatchNumber {
  BatchNumber : LargeString;
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufacturingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AddmisionDate : DateTime;
  Location : LargeString;
  Notes : LargeString;
  Quantity : Double;
  BaseLineNumber : Integer;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
  SystemSerialNumber : Integer;
};

type SAPB1.WIPMapping {
  AbsoluteEntry : Integer;
  LineNumber : Integer;
  AccountFrom : LargeString;
  AccountTo : LargeString;
};

type SAPB1.InternalReconciliationOpenTransParams {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReconDate : DateTime;
  AccountNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDate : DateTime;
  InternalReconciliationBPs : many SAPB1.InternalReconciliationBP;
};

type SAPB1.LineFreightEBooksDetail {
  IncomeClassificationType : Integer;
  IncomeClassificationCategory : Integer;
  ExpensesClassificationType : Integer;
  ExpensesClassificationCategory : Integer;
  NetValueLC : Double;
  NetValueFC : Double;
  NetValueSC : Double;
  VatCategory : Integer;
  WithheldPercentCategory : Integer;
  WithheldAmountLC : Double;
  WithheldAmountFC : Double;
  WithheldAmountSC : Double;
  VatClassificationType : Integer;
  VatClassificationCategory : Integer;
  VATExemptionCause : Integer;
};

type SAPB1.SQLViewParams {
  Name : LargeString;
};

type SAPB1.InventoryPostingCopyOption {
  BaseEntry : Integer;
};

type SAPB1.StockTransferParams {
  DocEntry : Integer;
};

type SAPB1.ValidValueMD {
  Value : LargeString;
  Description : LargeString;
};

type SAPB1.ContactParams {
  ContactCode : Integer;
};

type SAPB1.WarehouseLocationParams {
  Code : Integer;
};

type SAPB1.PaymentTermsTypeParams {
  GroupNumber : Integer;
};

type SAPB1.StockTransfer_ApprovalRequest {
  ApprovalTemplatesID : Integer;
  Remarks : LargeString;
  ApprovalTemplatesName : LargeString;
};

type SAPB1.FIFOLayer {
  TransactionSequenceNum : Integer;
  LayerID : Integer;
  Quantity : Double;
  Price : Double;
  LineTotal : Double;
  BaseLine : Integer;
};

type SAPB1.WebClientVariantEmbeddedChartValue2 {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.RecordsetParams {
  Query : LargeString;
};

type SAPB1.NFModelParams {
  AbsEntry : LargeString;
  NFMName : LargeString;
  NFMDescription : LargeString;
  NFMCode : LargeString;
};

type SAPB1.SeriesLine {
  Series : Integer;
  Prefix : LargeString;
  FirstNum : Integer;
  NextNum : Integer;
  LastNum : Integer;
};

type SAPB1.GovPayCodeParams {
  AbsId : Integer;
  Code : LargeString;
};

type SAPB1.CCDNumber {
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  CCDNumber : LargeString;
  Quantity : Double;
  CountryOfOrigin : LargeString;
  SubLineNumber : Integer;
  DocumentEntry : Integer;
  BaseLineNumber : Integer;
  ChildNumber : Integer;
};

type SAPB1.LegalDataParams {
  DocEntry : Integer;
  SourceObjectType : LargeString;
  SourceObjectEntry : Integer;
};

type SAPB1.EDFEntryAddLogInputParams {
  GUID : LargeString;
  LogMessage : LargeString;
  LogData : LargeString;
  ExportFormat : Integer;
};

type SAPB1.ItemLocalizationInfo {
  ItemCode : LargeString;
  IncomeNature : LargeString;
};

type SAPB1.PaymentRunExport_Line {
  RowNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfPaymentRun : DateTime;
  PaymentWizardCode : Integer;
  VendorNumber : LargeString;
  CustomerNumber : LargeString;
  PaymentMeans : LargeString;
  PaymentDocNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FiscalYear : DateTime;
  VendorRefNum : LargeString;
  DocumentObjectType : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentPostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentTaxDate : DateTime;
  BPDebitPayableAccount : LargeString;
  DocumentCurrency : LargeString;
  DocumentRate : Double;
  DocumentTotal : Double;
  DocumentTotalFC : Double;
  DocumentTaxAmount : Double;
  DocumentTaxAmountFC : Double;
  DocumentRemarks : LargeString;
  DocumentPaymentTerms : Integer;
  PaymentDocReference : LargeString;
  DocumentLocalCurrency : LargeString;
  PaymentTermsPeriod : Integer;
  DocumentObjectTypeEx : LargeString;
  DocumentNumber : Integer;
  PaymentNumber : Integer;
  PaymentOrderNum : Integer;
  FreeText1 : LargeString;
  FreeText2 : LargeString;
  FreeText3 : LargeString;
};

type SAPB1.InternalReconciliationOpenTrans {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReconDate : DateTime;
  InternalReconciliationOpenTransRows : many SAPB1.InternalReconciliationOpenTransRow;
  ElectronicProtocols : many SAPB1.ElectronicProtocol;
};

type SAPB1.PM_TimeSheetLineData {
  LineID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  ActivityType : Integer;
  LaborItem : LargeString;
  StartTime : Time;
  EndTime : Time;
  Workorder : Integer;
  ServiceCall : Integer;
  CostCenter : LargeString;
  FinancialProject : LargeString;
  Location : Integer;
  GPSData : LargeString;
  Branch : Integer;
  Break : Time;
  NonBillableTime : Time;
  EffectiveTime : Time;
  BillableTime : Time;
  ProjectID : Integer;
  SubprojectID : Integer;
  StageID : Integer;
};

type SAPB1.ApprovalRequestDecision {
  ApproverUserName : LargeString;
  ApproverPassword : LargeString;
  Remarks : LargeString;
};

type SAPB1.PickListsLine {
  AbsoluteEntry : Integer;
  LineNumber : Integer;
  OrderEntry : Integer;
  OrderRowID : Integer;
  PickedQuantity : Double;
  ReleasedQuantity : Double;
  PreviouslyReleasedQuantity : Double;
  BaseObjectType : Integer;
  SerialNumbers : many SAPB1.SerialNumber;
  BatchNumbers : many SAPB1.BatchNumber;
  DocumentLinesBinAllocations : many SAPB1.DocumentLinesBinAllocation;
};

type SAPB1.PartnersSetupParams {
  PartnerID : Integer;
  Name : LargeString;
  DefaultRelationship : Integer;
  RelatedBP : LargeString;
  Details : LargeString;
};

type SAPB1.DocumentLinesBinAllocation {
  BinAbsEntry : Integer;
  Quantity : Double;
  SerialAndBatchNumbersBaseLine : Integer;
  BaseLineNumber : Integer;
};

type SAPB1.WithholdingTaxCodes_ValueRange_Line {
  ValueFrom : Double;
  WTaxToBeDeductible : Double;
  Rate : Double;
};

type SAPB1.WebClientFormSettingItem {
  Guid : LargeString;
  ItemId : LargeString;
  Order : Integer;
  Visible : LargeString;
  Editable : LargeString;
  VisibleInGrid : LargeString;
  EditableInGrid : LargeString;
};

type SAPB1.MultiLanguageTranslationParams {
  Numerator : Integer;
};

type SAPB1.EmployeeInfoParams {
  EmployeeID : Integer;
};

type SAPB1.BlanketAgreements_ItemsLine {
  AgreementNo : Integer;
  AgreementRowNumber : Integer;
  ItemNo : LargeString;
  ItemDescription : LargeString;
  ItemGroup : Integer;
  PlannedQuantity : Double;
  UnitPrice : Double;
  PriceCurrency : LargeString;
  CumulativeQuantity : Double;
  CumulativeAmountLC : Double;
  CumulativeAmountFC : Double;
  FreeText : LargeString;
  InventoryUoM : LargeString;
  PortionOfReturns : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndOfWarranty : DateTime;
  PlannedAmountLC : Double;
  PlannedAmountFC : Double;
  LineDiscount : Double;
  UoMEntry : Integer;
  UoMCode : LargeString;
  UnitsOfMeasurement : Double;
  UndeliveredCumulativeQuantity : Double;
  UndeliveredCumulativeAmountLC : Double;
  UndeliveredCumulativeAmountFC : Double;
  ShippingType : Integer;
  Project : LargeString;
  TaxCode : LargeString;
  TAXRate : Double;
  PlannedVATAmountLC : Double;
  PlannedVATAmountFC : Double;
  CumulativeVATAmountLC : Double;
  CumulativeVATAmountFC : Double;
  BlanketAgreements_DetailsLines : many SAPB1.BlanketAgreements_DetailsLine;
};

type SAPB1.UserActionRecordItem {
  UserCode : LargeString;
  ActionBy : LargeString;
  ClientIP : LargeString;
  ClientName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActionDate : DateTime;
  ActionTime : Time;
  WindowsSession : Integer;
  WindowsUser : LargeString;
  ProcessName : LargeString;
  ProcessID : Integer;
  AliveDuration : Integer;
};

type SAPB1.TargetGroupsDetail {
  TargetGroupCode : LargeString;
  BusinessPartnerCode : LargeString;
  BusinessPartnerName : LargeString;
  GroupCode : LargeString;
  Industry : LargeString;
  ContactPerson : LargeString;
  Title : LargeString;
  Position : LargeString;
  E_Mail : LargeString;
  Telephone : LargeString;
  MobilePhone : LargeString;
  Fax : LargeString;
  Address : LargeString;
  Street : LargeString;
  Block : LargeString;
  City : LargeString;
  ZipCode : LargeString;
  County : LargeString;
  State : LargeString;
  Country : LargeString;
  Building : LargeString;
};

type SAPB1.ResourceDailyCapacity {
  Code : LargeString;
  Factor1 : Double;
  Factor2 : Double;
  Factor3 : Double;
  Factor4 : Double;
  Total : Double;
  Remarks : LargeString;
  SingleRun : Double;
};

type SAPB1.UserGroupByUserItem {
  USERId : Integer;
  GroupId : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
};

type SAPB1.TaxReportGroup {
  Code : LargeString;
};

type SAPB1.DocumentLineAdditionalExpense {
  LineNumber : Integer;
  GroupCode : Integer;
  ExpenseCode : Integer;
  LineTotal : Double;
  LineTotalFC : Double;
  LineTotalSys : Double;
  PaidToDate : Double;
  PaidToDateFC : Double;
  PaidToDateSys : Double;
  VatGroup : LargeString;
  TaxPercent : Double;
  TaxSum : Double;
  TaxSumFC : Double;
  TaxSumSys : Double;
  DeductibleTaxSum : Double;
  DeductibleTaxSumFC : Double;
  DeductibleTaxSumSys : Double;
  TaxCode : LargeString;
  TaxPaid : Double;
  TaxPaidFC : Double;
  TaxPaidSys : Double;
  EqualizationTaxPercent : Double;
  EqualizationTaxSum : Double;
  EqualizationTaxFC : Double;
  EqualizationTaxSys : Double;
  TaxTotalSum : Double;
  TaxTotalSumFC : Double;
  TaxTotalSumSys : Double;
  BaseGroup : Integer;
  DistributionRule : LargeString;
  Project : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  ExternalCalcTaxRate : Double;
  ExternalCalcTaxAmount : Double;
  ExternalCalcTaxAmountFC : Double;
  ExternalCalcTaxAmountSC : Double;
  LineExpenseTaxJurisdictions : many SAPB1.LineExpenseTaxJurisdiction;
  LineFreightEBooksDetails : many SAPB1.LineFreightEBooksDetail;
};

type SAPB1.AccountSegmentationCategoryParams {
  SegmentID : Integer;
  Code : LargeString;
};

type SAPB1.TargetGroupParams {
  TargetGroupCode : LargeString;
  TargetGroupName : LargeString;
};

type SAPB1.PaymentBlockParams {
  AbsEntry : Integer;
  PaymentBlockCode : LargeString;
};

type SAPB1.UserKeysMDParams {
  TableName : LargeString;
  KeyIndex : Integer;
};

type SAPB1.OccurenceCodeParams {
  AbsEntry : Integer;
  Code : LargeString;
  Description : LargeString;
  Note : LargeString;
};

type SAPB1.AlertManagementRecipient {
  UserCode : Integer;
};

type SAPB1.ApprovalStageParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.EmployeePositionParams {
  PositionID : Integer;
  Name : LargeString;
  Description : LargeString;
};

type SAPB1.TaxReportSeries {
  SeriesCode : Integer;
};

type SAPB1.BPIntrastatExtension {
  CardCode : LargeString;
  TransportMode : Integer;
  Incoterms : Integer;
  NatureOfTransactions : Integer;
  StatisticalProcedure : Integer;
  CustomsProcedure : Integer;
  PortOfEntryOrExit : Integer;
  DomesticOrForeignID : LargeString;
};

type SAPB1.ApprovalTemplateQuery {
  QueryID : Integer;
};

type SAPB1.U_BFEXTDBVERSIONParams {
  Code : LargeString;
};

type SAPB1.QueryCategoryParams {
  Code : Integer;
};

type SAPB1.PMC_StageTypeData {
  StageID : Integer;
  StageName : LargeString;
  StageDescription : LargeString;
};

type SAPB1.BusinessPartnerParams {
  CardCode : LargeString;
};

type SAPB1.BrazilFuelIndexerParams {
  FuelID : Integer;
  FuelGroupCode : Integer;
  FuelCode : LargeString;
  Description : LargeString;
};

type SAPB1.U_BBLOGParams {
  Code : LargeString;
};

type SAPB1.ExtendedTranslationParams {
  DocEntry : Integer;
  ID : LargeString;
  SecondaryID : LargeString;
};

type SAPB1.ApprovalRequestLine {
  StageCode : Integer;
  UserID : Integer;
  Remarks : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  CreationTime : Time;
};

type SAPB1.ServiceCallSolutionStatusParams {
  StatusId : Integer;
  Name : LargeString;
};

type SAPB1.DocumentTypeParams {
  Document : LargeString;
  DocumentSubType : LargeString;
};

type SAPB1.TaxDefinition {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Effectivefrom : DateTime;
  Rate : Double;
};

type SAPB1.AccountSegmentationParams {
  Numerator : Integer;
};

type SAPB1.SalesTaxCodes_Line {
  STATaxOnTaxType : Integer;
  STATaxonTaxCode : LargeString;
  STCCode : LargeString;
  STAType : Integer;
  STACode : LargeString;
  RowNumber : Integer;
  EffectiveRate : Double;
};

type SAPB1.KPIParams {
  KPICode : LargeString;
  KPIName : LargeString;
};

type SAPB1.EDFEntry {
  AbsEntry : Integer;
  ParentAbsEntry : Integer;
  BranchID : Integer;
  Environment : Integer;
  Description : LargeString;
  Message : LargeString;
  Submits : Integer;
  ObjectID : LargeString;
  ReportID : LargeString;
  SrcObjType : LargeString;
  SrcAbsEntry : Integer;
  AssignedID : LargeString;
  DocBatchID : LargeString;
  DocBatchIndex : Integer;
  PeriodNumber : Integer;
  PeriodYear : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PeriodDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PeriodDateTo : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Integer;
  User : Integer;
  User2 : Integer;
  ScheduledJobID : Integer;
  GUID : LargeString;
  Authority : LargeString;
  ProcessingTarget : LargeString;
  EDocType : Integer;
  EDocNum : LargeString;
  U_B1SYS_XMLAmount : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_B1SYS_SendDateINTM : DateTime;
};

type SAPB1.ApprovalTemplateDocument {
};

type SAPB1.PurchaseTaxInvoiceOperationCode {
  OpCode : Integer;
};

type SAPB1.PeriodCategory {
  AbsoluteEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  BeginningofFinancialYear : DateTime;
  PeriodCategory : LargeString;
  NumberOfPeriods : Integer;
  PeriodName : LargeString;
  DebitorsFollowUpAccount : LargeString;
  AccountforOutgoingChecks : LargeString;
  AccountforCashReceipt : LargeString;
  CustomersDeductionatSource : LargeString;
  CommissionAccountDefault : LargeString;
  PurchaseTax : LargeString;
  ForeignAccountsReceivables : LargeString;
  CreditorsFollowUpAccount : LargeString;
  OutgoingChecksAccount : LargeString;
  OutgoingCashAccount : LargeString;
  AccountforCreditMemoPayme : LargeString;
  InputTaxAccount : LargeString;
  TaxDefinition : LargeString;
  WithholodingTax : LargeString;
  OpeningBalancesAccount : LargeString;
  DefaultSaleAccount : LargeString;
  TaxExemptRevenuesDefault : LargeString;
  ExpenseAccountDefault : LargeString;
  RevenuesAccountForeign : LargeString;
  SalesRevenueEU : LargeString;
  ExpensesAccountForeign : LargeString;
  RateDifferencesDefaultAcc : LargeString;
  DecreaseGLAcc : LargeString;
  ReconciliationDifference : LargeString;
  AcountforOpeningWHBalance : LargeString;
  APCashDiscountAccount : LargeString;
  APLossCashDiscountAccount : LargeString;
  APLossRealizedExchangeDif : LargeString;
  ARCashDiscountAccount : LargeString;
  ARLossRealizedExchangeDi : LargeString;
  RoundingAccount : LargeString;
  APGainRealizedExchngeDif : LargeString;
  ARGainRealizedExchngeDif : LargeString;
  IncreaseGLAccount : LargeString;
  SalesReturns : LargeString;
  CostOfGoodsSold : LargeString;
  AllocationAcc : LargeString;
  VarianceAcc : LargeString;
  PriceDifferenceAccount : LargeString;
  CustomerDownPaymentsAccount : LargeString;
  VendorDownPaymentsAccount : LargeString;
  BillofExchangeAccountsRece : LargeString;
  CustBillofExchangeonC : LargeString;
  CustomerBillofExchangePres : LargeString;
  CustomerBillofExchngeDisc : LargeString;
  CustomerUnpaidBoE : LargeString;
  BoEAccountsPayable : LargeString;
  BoEAccountsPayable2 : LargeString;
  CustomerDoubtfulDebtsAcct : LargeString;
  VendorDoubtfulDebtsAcct : LargeString;
  PurchaseAccount : LargeString;
  PurchaseReturnAccount : LargeString;
  PurchaseOffsetAccount : LargeString;
  EOYControlAccount : LargeString;
  ExchangeRateDifferencesAcct : LargeString;
  GoodsClearingAcc : LargeString;
  ExpenseClearingAccount : LargeString;
  ExpenseOffsetAccount : LargeString;
  CostofSaleRevaluationAcct : LargeString;
  RepomoAccount : LargeString;
  WIPMaterialVarianceAccount : LargeString;
  DownPaymentVATAcctSale : LargeString;
  DownPaymentVATAcctPurch : LargeString;
  DownPaymentSClearingAcct : LargeString;
  DownPaymentPClearingAcct : LargeString;
  ExpenseVarianceAccount : LargeString;
  CostofSaleRevOffsetAcct : LargeString;
  EUExpenseAccount : LargeString;
  StockAccount : LargeString;
  InventoryOffsetIncrease : LargeString;
  InventoryOffsetDecrease : LargeString;
  VendorAssetsAccount : LargeString;
  StockRevaluationAccount : LargeString;
  StockRevaluationOffsetAcct : LargeString;
  WIPMaterialAccount : LargeString;
  InvoicePaymentBP : LargeString;
  GLRevaluationOffsetAccount : LargeString;
  OverpaymentsAPAccount : LargeString;
  UnderpaymentsAPAccount : LargeString;
  OverpaymentsARAccount : LargeString;
  UnderpaymentsARAccount : LargeString;
  PurchaseCreditAcc : LargeString;
  EUPurchaseCreditAcc : LargeString;
  ForeignPurchaseCreditAcc : LargeString;
  SalesCreditAcc : LargeString;
  SalesCreditEUAcc : LargeString;
  ExemptedCredits : LargeString;
  SalesCreditForeignAcc : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromPostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToPostingDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDueDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDueDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDocumentDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ToDocumentDate : DateTime;
  OutgoingTaxAccount : LargeString;
  NegativeInventoryAdjustmentAccount : LargeString;
  FinancialYear : Integer;
  SelfInvoiceRevenueAccount : LargeString;
  SelfInvoiceExpenseAccount : LargeString;
  StockInTransitAccount : LargeString;
  SalesDownPaymentInterimAccount : LargeString;
  PurchaseDownPaymentInterimAccount : LargeString;
  EUAccountsReceivable : LargeString;
  EUAccountsPayable : LargeString;
  WipOffsetProfitAndLossAccount : LargeString;
  InventoryOffsetProfitAndLossAccount : LargeString;
  DunningInterestAccount : LargeString;
  DunningFeeAccount : LargeString;
  ARGainRealizedConversionDiff : LargeString;
  ARLossRealizedConversionDiff : LargeString;
  APGainRealizedConversionDiff : LargeString;
  APLossRealizedConversionDiff : LargeString;
  GLGainRealizedConversionDiff : LargeString;
  GLLossRealizedConversionDiff : LargeString;
  ARExRateInterim : LargeString;
  APExRateInterim : LargeString;
  ARCashDiscountInterim : LargeString;
  APCashDiscountInterim : LargeString;
  WIPMappingCollection : many SAPB1.WIPMapping;
};

type SAPB1.BarCodeParams {
  AbsEntry : Integer;
  ItemNo : LargeString;
  UoMEntry : Integer;
  Barcode : LargeString;
};

type SAPB1.ApprovalTemplateParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.PaymentRunExportParams {
  AbsoluteEntry : Integer;
};

type SAPB1.CampaignBusinessPartner {
  CampaignNumber : Integer;
  CampaignLineNumber : Integer;
  BPCode : LargeString;
  BPName : LargeString;
  BPGroupName : LargeString;
  BPIndustryName : LargeString;
  BPStatus : LargeString;
  ContactCode : LargeString;
  ContactTitle : LargeString;
  ContactPosition : LargeString;
  ContactEmail : LargeString;
  ContactTelephone : LargeString;
  ContactMobile : LargeString;
  ContactFax : LargeString;
  ContactAddress : LargeString;
  RelatedSalesOpportunity : Integer;
  Street : LargeString;
  Block : LargeString;
  City : LargeString;
  ZipCode : LargeString;
  County : LargeString;
  State : LargeString;
  Country : LargeString;
  Building : LargeString;
  DocNumber : Integer;
  DocEntry : Integer;
  FirstName : LargeString;
  MiddleName : LargeString;
  LastName : LargeString;
  AddressID : LargeString;
  AddressType : LargeString;
  AddressName2 : LargeString;
  AddressName3 : LargeString;
  FederalTaxID : LargeString;
  StreetNo : LargeString;
  AssignName : Integer;
  ResponseType : LargeString;
};

type SAPB1.ServiceCallActivity {
  LineNum : Integer;
  ActivityCode : Integer;
};

type SAPB1.InternalReconciliationParams {
  ReconNum : Integer;
};

type SAPB1.ServiceCallInventoryExpense {
  LineNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocumentPostingDate : DateTime;
  DocumentNumber : Integer;
  DocEntry : Integer;
};

type SAPB1.ServiceCallScheduling {
  LineNum : Integer;
  Technician : Integer;
  HandledBy : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  StartTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  EndTime : Time;
  Duration : Double;
  ActualDuration : Double;
  ReminderPeriod : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReminderDate : DateTime;
  ReminderTime : Time;
  Location : Integer;
  AddressName : LargeString;
  AddressText : LargeString;
  Street : LargeString;
  City : LargeString;
  Room : LargeString;
  State : LargeString;
  Country : LargeString;
  Address2 : LargeString;
  Address3 : LargeString;
  AddressType : LargeString;
  StreetNo : LargeString;
  ZipCode : LargeString;
  Block : LargeString;
  County : LargeString;
  TaxOffice : LargeString;
  GlobalLocNum : LargeString;
  Remark : LargeString;
  SignatureName : LargeString;
  SalesOrders : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CheckInDate : DateTime;
  CheckInTime : Time;
  CheckInLocation : LargeString;
  CheckInLatitude : LargeString;
  CheckInLongitude : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CheckOutDate : DateTime;
  CheckOutTime : Time;
};

type SAPB1.ServiceCallOriginParams {
  OriginID : Integer;
  Name : LargeString;
};

type SAPB1.ExportProcess {
  LineNumber : Integer;
  ExportationDocumentTypeCode : Integer;
  ExportationDeclarationNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExportationDeclarationDate : DateTime;
  ExportationNatureCode : Integer;
  ExportationRegistryNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExportationRegistryDate : DateTime;
  LadingBillNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  LadingBillDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  MerchandiseLeftCustomsDate : DateTime;
  LadingBillTypeCode : Integer;
};

type SAPB1.UserKeysMD_Element {
  SubKeyIndex : Integer;
  ColumnAlias : LargeString;
};

type SAPB1.RclRecurringExecutionParams {
};

type SAPB1.PurchaseTaxInvoiceLine {
  RefEntry1 : Integer;
  RefEntry2 : Integer;
};

type SAPB1.U_BA_OAMD2Params {
  Code : LargeString;
};

type SAPB1.QueueParams {
  QueueID : LargeString;
};

type SAPB1.ShippingTypeParams {
  Code : Integer;
};

type SAPB1.U_BD_CTAXParams {
  Code : LargeString;
};

type SAPB1.QueueMember {
  QueueID : LargeString;
  MemberUserID : Integer;
};

type SAPB1.TaxReportBusinessPartner {
  Code : LargeString;
};

type SAPB1.FieldID {
  FieldID : LargeString;
};

type SAPB1.U_BNCTRNParams {
  Code : LargeString;
};

type SAPB1.ResourceGroupParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.DunningTermLine {
  LevelNum : Integer;
  Effectiveafter : LargeString;
  LetterFee : Double;
  LetterFeeCurrency : LargeString;
  MininumBalance : Double;
  MininumBalanceCurrency : LargeString;
};

type SAPB1.SalesForecastParams {
  Numerator : Integer;
};

type SAPB1.DocumentPackageItem {
  PackageNumber : Integer;
  ItemCode : LargeString;
  Quantity : Double;
  UoMEntry : Integer;
  MeasureUnit : LargeString;
  UnitsOfMeasurement : Double;
};

type SAPB1.SalesForecastLine {
  Quantity : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ForecastedDay : DateTime;
  ItemNo : LargeString;
  Warehouse : LargeString;
};

type SAPB1.UserBranchAssignmentItem {
  UserCode : LargeString;
  BPLID : Integer;
};

type SAPB1.MobileAddOnSettingParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.InternalReconciliationBP {
  BPCode : LargeString;
};

type SAPB1.TrackingNoteBroker {
  TrackingNoteNumber : Integer;
  TrackingNoteLineNumber : Integer;
  BPCode : LargeString;
  AgreementNumber : Integer;
};

type SAPB1.AssetDocumentAreaJournal {
  DocEntry : Integer;
  LineNumber : Integer;
  DepreciationArea : LargeString;
  JournalRemarks : LargeString;
  TransactionNumber : Integer;
  CancellationJournalRemarks : LargeString;
  CancellationTransactionNumber : Integer;
};

type SAPB1.ProductionOrderParams {
  AbsoluteEntry : Integer;
};

type SAPB1.BPAddress {
  AddressName : LargeString;
  Street : LargeString;
  Block : LargeString;
  ZipCode : LargeString;
  City : LargeString;
  County : LargeString;
  Country : LargeString;
  State : LargeString;
  FederalTaxID : LargeString;
  TaxCode : LargeString;
  BuildingFloorRoom : LargeString;
  AddressName2 : LargeString;
  AddressName3 : LargeString;
  TypeOfAddress : LargeString;
  StreetNo : LargeString;
  BPCode : LargeString;
  RowNum : Integer;
  GlobalLocationNumber : LargeString;
  Nationality : LargeString;
  TaxOffice : LargeString;
  GSTIN : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  U_Lat : Integer;
  U_Lon : Integer;
};

type SAPB1.ContactEmployee {
  CardCode : LargeString;
  Name : LargeString;
  Position : LargeString;
  Address : LargeString;
  Phone1 : LargeString;
  Phone2 : LargeString;
  MobilePhone : LargeString;
  Fax : LargeString;
  E_Mail : LargeString;
  Pager : LargeString;
  Remarks1 : LargeString;
  Remarks2 : LargeString;
  Password : LargeString;
  InternalCode : Integer;
  PlaceOfBirth : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateOfBirth : DateTime;
  Profession : LargeString;
  Title : LargeString;
  CityOfBirth : LargeString;
  FirstName : LargeString;
  MiddleName : LargeString;
  LastName : LargeString;
  EmailGroupCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreateDate : DateTime;
  CreateTime : Time;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  UpdateDate : DateTime;
  UpdateTime : Time;
  U_BS_Online : LargeString;
  ContactEmployeeBlockSendingMarketingContents : many SAPB1.ContactEmployeeBlockSendingMarketingContent;
};

type SAPB1.U_BPCNTRParams {
  Code : LargeString;
};

type SAPB1.InventoryPostingParams {
  DocumentEntry : Integer;
  DocumentNumber : Integer;
};

type SAPB1.BPPaymentMethod {
  PaymentMethodCode : LargeString;
  RowNumber : Integer;
  BPCode : LargeString;
};

type SAPB1.BPWithholdingTax {
  WTCode : LargeString;
  BPCode : LargeString;
};

type SAPB1.BPPaymentDate {
  PaymentDate : LargeString;
  BPCode : LargeString;
};

type SAPB1.BPFiscalTaxID {
  Address : LargeString;
  CNAECode : Integer;
  TaxId0 : LargeString;
  TaxId1 : LargeString;
  TaxId2 : LargeString;
  TaxId3 : LargeString;
  TaxId4 : LargeString;
  TaxId5 : LargeString;
  TaxId6 : LargeString;
  TaxId7 : LargeString;
  TaxId8 : LargeString;
  TaxId9 : LargeString;
  TaxId10 : LargeString;
  TaxId11 : LargeString;
  BPCode : LargeString;
  TaxId12 : LargeString;
  TaxId13 : LargeString;
};

type SAPB1.ManufacturerParams {
  Code : Integer;
};

type SAPB1.BPBlockSendingMarketingContent {
  CardCode : LargeString;
  CommunicationMediaId : Integer;
};

type SAPB1.UserObjectMD_EnhancedFormColumn {
  Code : LargeString;
  ColumnNumber : Integer;
  ChildNumber : Integer;
  ColumnAlias : LargeString;
  ColumnDescription : LargeString;
};

type SAPB1.RecurringPostingsParams {
  Code : LargeString;
  Instance : Integer;
  Description : LargeString;
};

type SAPB1.BPCode {
  Code : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Debit : Double;
  Credit : Double;
  SystemDebit : Double;
  SystemCredit : Double;
  ForeignDebit : Double;
  ForeignCredit : Double;
  ForeignCurrency : LargeString;
  BpCtrlAcct : LargeString;
};

type SAPB1.U_BOWORDParams {
  Code : LargeString;
};

type SAPB1.AssetDocumentLine {
  DocEntry : Integer;
  LineNumber : Integer;
  AssetNumber : LargeString;
  GLAccount : LargeString;
  Quantity : Double;
  TotalLC : Double;
  TotalFC : Double;
  TotalSC : Double;
  DepreciationArea : LargeString;
  Remarks : LargeString;
  NewAssetNumber : LargeString;
  APC : Double;
  NewAssetClass : LargeString;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  Project : LargeString;
};

type SAPB1.IndustryParams {
  IndustryCode : Integer;
};

type SAPB1.ProductionOrderLine {
  DocumentAbsoluteEntry : Integer;
  LineNumber : Integer;
  ItemNo : LargeString;
  BaseQuantity : Double;
  PlannedQuantity : Double;
  IssuedQuantity : Double;
  Warehouse : LargeString;
  VisualOrder : Integer;
  DistributionRule : LargeString;
  LocationCode : Integer;
  Project : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  UoMEntry : Integer;
  UoMCode : Integer;
  WipAccount : LargeString;
  LineText : LargeString;
  AdditionalQuantity : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
  StageID : Integer;
  RequiredDays : Double;
  ItemName : LargeString;
  SerialNumbers : many SAPB1.SerialNumber;
  BatchNumbers : many SAPB1.BatchNumber;
};

type SAPB1.PMS_OpenIssueData {
  LineID : Integer;
  StageID : Integer;
  Area : Integer;
  Priority : Integer;
  Remarks : LargeString;
  SolutionID : Integer;
  Responsible : Integer;
  EnteredBy : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EnteredDate : DateTime;
  Effort : Double;
};

type SAPB1.ItemParams {
  ItemCode : LargeString;
};

type SAPB1.ProductionOrdersSalesOrderLine {
  DocEntry : Integer;
  BaseNumber : Integer;
  BaseAbsEntry : Integer;
  BaseLine : Integer;
};

type SAPB1.U_BA_SDPMParams {
  Code : LargeString;
};

type SAPB1.ProductionOrdersDocumentReference {
  DocEntry : Integer;
  LineNumber : Integer;
  RefDocEntr : Integer;
  RefDocNum : Integer;
  ExtDocNum : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
};

type SAPB1.EDFEntryInputParams {
  GUID : LargeString;
};

type SAPB1.InventoryOpeningBalanceParams {
  DocumentEntry : Integer;
  DocumentNumber : Integer;
};

type SAPB1.PackagesTypeParams {
  Code : Integer;
};

type SAPB1.ReportLayoutPrintParams {
  LayoutCode : LargeString;
  DocEntry : Integer;
};

type SAPB1.UserObjectsMDParams {
  Code : LargeString;
};

type SAPB1.BPBranchAssignmentItem {
  BPCode : LargeString;
  BPLID : Integer;
};

type SAPB1.ItemGroupParams {
  Number : Integer;
};

type SAPB1.UserObjectMD_FindColumn {
  ColumnNumber : Integer;
  ColumnAlias : LargeString;
  ColumnDescription : LargeString;
  Code : LargeString;
};

type SAPB1.UserObjectMD_FormColumn {
  FormColumnAlias : LargeString;
  FormColumnDescription : LargeString;
  FormColumnNumber : Integer;
  SonNumber : Integer;
  Code : LargeString;
};

type SAPB1.TaxReportDocument {
  FromNumber : Integer;
  ToNumber : Integer;
};

type SAPB1.ItemGroupsWarehouseInfo {
  ItmsGrpCod : Integer;
  WarehouseCode : LargeString;
  DefaultBin : Integer;
};

type SAPB1.TeamParams {
  TeamID : Integer;
};

type SAPB1.UserQueryParams {
  InternalKey : Integer;
  QueryCategory : Integer;
};

type SAPB1.RelationshipParams {
  RelationshipCode : Integer;
};

type SAPB1.UserPermissionTreeParams {
  PermissionID : LargeString;
};

type SAPB1.UserGroupParams {
  UserGroupId : Integer;
  UserGroupName : LargeString;
};

type SAPB1.ActivityStatusParams {
  StatusId : Integer;
};

type SAPB1.ItemPeriodControl {
  FiscalYear : LargeString;
  DepreciationArea : LargeString;
  SubPeriod : Integer;
  Factor : Double;
  ActualUnits : Integer;
};

type SAPB1.ChooseFromListParams {
  ObjectName : LargeString;
};

type SAPB1.BPAccountReceivablePayble {
  AccountCode : LargeString;
  BPCode : LargeString;
};

type SAPB1.ProductTreeStage {
  Father : LargeString;
  StageID : Integer;
  SequenceNumber : Integer;
  StageEntry : Integer;
  Name : LargeString;
  WaitingDays : Double;
};

type SAPB1.ServiceAppReportContent {
  ReportContent : LargeString;
};

type SAPB1.FormattedSearchParams {
  Index : Integer;
};

type SAPB1.U_BA_OOCRParams {
  Code : LargeString;
};

type SAPB1.TranslationsInUserLanguage {
  KeyFromHeaderTable : Integer;
  LanguageCodeOfUserLanguage : Integer;
  Translationscontent : LargeString;
};

type SAPB1.POSDailySummaryParams {
  AbsEntry : Integer;
};

type SAPB1.TechnicianSettingsParams {
  Technician : Integer;
};

type SAPB1.DynamicSystemStringParams {
  FormID : LargeString;
  ItemID : LargeString;
  ColumnID : LargeString;
};

type SAPB1.PMS_DocAttachement {
  AbsEntry : Integer;
  LineID : Integer;
  SourcePath : LargeString;
  FileName : LargeString;
  FileExtension : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AttachementDate : DateTime;
};

type SAPB1.WTDEffectiveDate {
  LineNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveFrom : DateTime;
  Rate : Double;
  WTDValueRangeCollection : many SAPB1.WTDValueRange;
};

type SAPB1.TerritoryParams {
  TerritoryID : Integer;
};

type SAPB1.AccountSegmentationsCategory {
  SegmentID : Integer;
  Code : LargeString;
  Name : LargeString;
  ShortName : LargeString;
};

type SAPB1.ExtendedTranslation_ResultLine {
  DocEntry : Integer;
  LineNumber : Integer;
  SubLineNumber : Integer;
  LanguageCode : Integer;
  TranslatedText : LargeString;
};

type SAPB1.WTDItem {
  ItemCode : LargeString;
  WTaxCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveDateTo : DateTime;
};

type SAPB1.ApprovalTemplateStage {
  SortID : Integer;
  ApprovalStageCode : Integer;
  Remarks : LargeString;
};

type SAPB1.CommissionGroupParams {
  CommissionGroupCode : Integer;
};

type SAPB1.InventoryCountingLineUoM {
  DocumentEntry : Integer;
  LineNumber : Integer;
  ChildNumber : Integer;
  UoMCountedQuantity : Double;
  ItemsPerUnit : Double;
  CountedQuantity : Double;
  UoMCode : LargeString;
  BarCode : LargeString;
  CounterID : Integer;
};

type SAPB1.WTDFreight {
  FreightCode : Integer;
  WTaxCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveDateFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveDateTo : DateTime;
};

type SAPB1.MaterialRevaluationSNBParams {
  SnbAbsEntry : Integer;
  NewCost : Double;
  DebitCredit : Double;
  SystemNumber : Integer;
  LotNumber : LargeString;
  ManufactureNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AdmissionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpirationDate : DateTime;
};

type SAPB1.LineTaxJurisdiction {
  JurisdictionCode : LargeString;
  JurisdictionType : Integer;
  TaxAmount : Double;
  TaxAmountSC : Double;
  TaxAmountFC : Double;
  TaxRate : Double;
  DocEntry : Integer;
  LineNumber : Integer;
  RowSequence : Integer;
  ExternalCalcTaxRate : Double;
  ExternalCalcTaxAmount : Double;
  ExternalCalcTaxAmountFC : Double;
  ExternalCalcTaxAmountSC : Double;
};

type SAPB1.WTDValueRange {
  LineNumber : Integer;
  SeqNum : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveFrom : DateTime;
  ValueFrom : Double;
  Rate : Double;
};

type SAPB1.CreditPaymentMethodParams {
  PaymentMethodCode : Integer;
};

type SAPB1.DunningLetterParams {
  RowNumber : Integer;
};

type SAPB1.UoMPrice {
  PriceList : Integer;
  UoMEntry : Integer;
  ReduceBy : Double;
  Price : Double;
  Currency : LargeString;
  AdditionalReduceBy1 : Double;
  AdditionalPrice1 : Double;
  AdditionalCurrency1 : LargeString;
  AdditionalReduceBy2 : Double;
  AdditionalPrice2 : Double;
  AdditionalCurrency2 : LargeString;
};

type SAPB1.CashFlowAssignment {
  CashFlowAssignmentsID : Integer;
  CashFlowLineItemID : Integer;
  Credit : Double;
  CheckNumber : LargeString;
  AmountLC : Double;
  AmountFC : Double;
  JDTLineId : Integer;
};

type SAPB1.BankStatementRow {
  ExternalBankStatementNo : Integer;
  AccountNumber : LargeString;
  SequenceNo : Integer;
  AccountName : LargeString;
  Reference : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  Details : LargeString;
  DebitAmountFC : Double;
  CreditAmountFC : Double;
  CreditCurrency : LargeString;
  Balance : Double;
  ReconciliationNo : Integer;
  ExternalCode : LargeString;
  BPCode : LargeString;
  BPName : LargeString;
  StatementNumber : Integer;
  RowStatus : LargeString;
  VisualOrder : Integer;
  Details2 : LargeString;
  PaymentReferenceNo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  BankStmtLineDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  BankStmtDueDate : DateTime;
  InternalBankOpCode : Integer;
  BPBankAccount : LargeString;
  DebitAmountLC : Double;
  CreditAmountLC : Double;
  ExchangeRate : Double;
  IBANofBPBankAccount : LargeString;
  FeeOnTheLine : Double;
  VATAmountLC : Double;
  VATAmountFC : Double;
  JournalEntryID : Integer;
  PaymentID : Integer;
  GLAccountforFee : LargeString;
  FeeProfitCenter : LargeString;
  FeeProject : LargeString;
  BPBankCode : LargeString;
  FeeDistributionRule : LargeString;
  FeeDistributionRule2 : LargeString;
  FeeDistributionRule3 : LargeString;
  FeeDistributionRule4 : LargeString;
  FeeDistributionRule5 : LargeString;
  BPBICSwiftCode : LargeString;
  FolioPrefixString : LargeString;
  FolioNumber : Integer;
  U_BP_DocNr : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_BP_PDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  U_BP_TDate : DateTime;
  U_BP_CBala : Double;
  U_BP_NBala : Double;
  U_BP_GLacc : LargeString;
  U_BP_Statu : LargeString;
  U_BP_ExDoc : Integer;
  U_BP_PayDo : Integer;
  U_BP_VAT : LargeString;
  U_BP_VAT_A : Double;
  U_BP_PC : LargeString;
  U_BP_Prj : LargeString;
  U_BP_DMCM : LargeString;
  U_BP_FOut : Double;
  U_BP_FIn : Double;
  U_BP_FCurr : LargeString;
  U_BP_FRate : Double;
  U_BP_FVAT : Double;
  MultiplePayments : many SAPB1.MultiplePayment;
};

type SAPB1.PM_StageData {
  LineID : Integer;
  StageID : Integer;
  StageType : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CloseDate : DateTime;
  Task : Integer;
  Description : LargeString;
  ExpectedCosts : Double;
  InvoicedAmountSales : Double;
  OpenAmountSales : Double;
  InvoicedAmountPurchase : Double;
  OpenAmountPurchase : Double;
  PercentualCompletness : Double;
  StageOwner : Integer;
  DependsOnStage1 : Integer;
  DependsOnStage2 : Integer;
  DependsOnStage3 : Integer;
  DependsOnStage4 : Integer;
  DependsOnStageID1 : Integer;
  DependsOnStageID2 : Integer;
  DependsOnStageID3 : Integer;
  DependsOnStageID4 : Integer;
  AttachmentEntry : Integer;
  UniqueID : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FinishedDate : DateTime;
};

type SAPB1.PM_OpenIssueData {
  LineID : Integer;
  StageID : Integer;
  Area : Integer;
  Priority : Integer;
  Remarks : LargeString;
  SolutionID : Integer;
  Responsible : Integer;
  EnteredBy : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EnteredDate : DateTime;
  Effort : Double;
};

type SAPB1.OpenningBalanceAccount {
  OpenBalanceAccount : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Date : DateTime;
  Ref1 : LargeString;
  Ref2 : LargeString;
  Details : LargeString;
  BPLID : Integer;
};

type SAPB1.WTDCodeParams {
  AbsEntry : Integer;
  WTaxCode : LargeString;
  WTaxName : LargeString;
};

type SAPB1.PM_DocumentData {
  LineID : Integer;
  StageID : Integer;
  DocEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  Total : Double;
  LineNumber : Integer;
};

type SAPB1.MaterialRevaluationParams {
  DocEntry : Integer;
};

type SAPB1.PM_ActivityData {
  LineID : Integer;
  StageID : Integer;
  ActivityID : Integer;
};

type SAPB1.PM_DocAttachement {
  AbsEntry : Integer;
  LineID : Integer;
  SourcePath : LargeString;
  FileName : LargeString;
  FileExtension : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AttachementDate : DateTime;
};

type SAPB1.PM_WorkOrderData {
  LineID : Integer;
  StageID : Integer;
  DocNumber : Integer;
  DocEntry : Integer;
};

type SAPB1.RecurringPostingsLine {
  RcrCode : LargeString;
  LineNumber : Integer;
  ControlAccount : LargeString;
  AccountCode : LargeString;
  AccountName : LargeString;
  Debit : Double;
  Credit : Double;
  Currency : LargeString;
  TaxGroup : LargeString;
  DistributionRule : LargeString;
  TaxCode : LargeString;
  CostingCode1 : LargeString;
  CostingCode2 : LargeString;
  CostingCode3 : LargeString;
  CostingCode4 : LargeString;
  CostingCode5 : LargeString;
  ProjectCode : LargeString;
  CostElementCode : LargeString;
};

type SAPB1.EmployeeTransferParams {
  TransferID : Integer;
};

type SAPB1.QueryAuthGroupParams {
  AuthGroupId : Integer;
  AuthGroupCode : LargeString;
};

type SAPB1.PM_StageAttachement {
  AbsEntry : Integer;
  LineID : Integer;
  SourcePath : LargeString;
  FileName : LargeString;
  FileExtension : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AttachementDate : DateTime;
};

type SAPB1.TaxCodeDeterminationTCDKeyFieldValue {
  AbsId : Integer;
  DispOrder : Integer;
  KeyFld_1_V : LargeString;
  KeyFld_2_V : LargeString;
  KeyFld_3_V : LargeString;
  KeyFld_4_V : LargeString;
  TaxCodeDeterminationTCDKeyFieldValuePeriods : many SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod;
  TaxCodeDeterminationTCDKeyFieldValueDefaultWTs : many SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT;
};

type SAPB1.PMS_DocumentData {
  LineID : Integer;
  StageID : Integer;
  DocEntry : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DocDate : DateTime;
  Total : Double;
  LineNumber : Integer;
};

type SAPB1.PMS_WorkOrderData {
  LineID : Integer;
  StageID : Integer;
  DocNumber : Integer;
  DocEntry : Integer;
};

type SAPB1.PMS_SummaryData {
  LineID : Integer;
  SubprojectBudget : Double;
  SumOpenAmountPurchase : Double;
  SumInvoicedAmountPurchase : Double;
  TotalAmountPurchase : Double;
  TotalVariancePurchase : Double;
  VariancePerceptionPurchase : Double;
  AccumSubprojectBudget : Double;
  AccumOpenAmountPurchase : Double;
  AccumInvoicedAmountPurchase : Double;
  AccumTotalPurchase : Double;
  AccumTotalVariancePurchase : Double;
  AccumVariancePerceptionPurchase : Double;
  PotentialSubprojectAmount : Double;
  SumOpenAmountSales : Double;
  SumInvoicedAmountSales : Double;
  TotalAmountSales : Double;
  TotalVarianceSales : Double;
  VariancePerceptionSales : Double;
  AccumPotentialSubprojectAmount : Double;
  AccumOpenAmountSales : Double;
  AccumInvoicedAmountSales : Double;
  AccumTotalSales : Double;
  AccumTotalVarianceSales : Double;
  AccumVariancePerceptionSales : Double;
  ActualItemComponentCost : Double;
  ActualResourceComponentCost : Double;
  ActualAdditionalCost : Double;
  ActualProductCost : Double;
  ActualByProductCost : Double;
  TotalVariance : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActualClosingDate : DateTime;
  Overdue : Integer;
};

type SAPB1.EmployeeFullNamesParams {
  EmployeeID : Integer;
  EmployeeFullName : LargeString;
};

type SAPB1.PMS_StageAttachement {
  AbsEntry : Integer;
  LineID : Integer;
  SourcePath : LargeString;
  FileName : LargeString;
  FileExtension : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AttachementDate : DateTime;
};

type SAPB1.PM_ProjectDocumentParams {
  AbsEntry : Integer;
};

type SAPB1.PM_TimeSheetParams {
  AbsEntry : Integer;
};

type SAPB1.ResourcePropertyParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.CheckLineParams {
  CheckKey : Integer;
};

type SAPB1.WebClientLaunchpadTile {
  Guid : LargeString;
  Order : Integer;
  TileId : LargeString;
};

type SAPB1.ActivityRecipient {
  LineNumber : Integer;
  RecipientCode : LargeString;
};

type SAPB1.WebClientLaunchpadGroup {
  Guid : LargeString;
  Order : Integer;
  GroupId : LargeString;
  GroupName : LargeString;
  WebClientLaunchpadTiles : many SAPB1.WebClientLaunchpadTile;
};

type SAPB1.BlanketAgreementParams {
  AgreementNo : Integer;
};

type SAPB1.WebClientListviewFilterCondition {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
  CompareExpression : LargeString;
  Value : LargeString;
};

type SAPB1.U_BNCCRYParams {
  Code : LargeString;
};

type SAPB1.WebClientListviewFilterParams {
  Guid : LargeString;
};

type SAPB1.IntegrationPackageParams {
  AbsEntry : Integer;
};

type SAPB1.WebClientRecentActivityParams {
  Guid : LargeString;
};

type SAPB1.Attachments2_Line {
  SourcePath : LargeString;
  FileName : LargeString;
  FileExtension : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AttachmentDate : DateTime;
  FreeText : LargeString;
};

type SAPB1.LocalEraParams {
  Code : LargeString;
};

type SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage {
  AbsId : Integer;
  UsageCode : Integer;
  TaxCode : LargeString;
  ExpTaxCode : LargeString;
  PurTaxCode : LargeString;
};

type SAPB1.WebClientVariantSelectedColumn {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.WebClientVariantMChart {
  Guid : LargeString;
  ChartType : LargeString;
  CategoryAxis1 : LargeString;
  CategoryAxis2 : LargeString;
  TimeAxis : LargeString;
  Color : LargeString;
  Shape : LargeString;
  BubbleWidth : LargeString;
  WebClientVariantMChartValue1Collection : many SAPB1.WebClientVariantMChartValue1;
  WebClientVariantMChartValue2Collection : many SAPB1.WebClientVariantMChartValue2;
  WebClientVariantMChartSizeCollection : many SAPB1.WebClientVariantMChartSize;
};

type SAPB1.SalesTaxInvoiceLine {
  RefEntry1 : Integer;
  RefEntry2 : Integer;
};

type SAPB1.AdditionalExpenseParams {
  ExpensCode : Integer;
};

type SAPB1.WebClientVariantGroupBy {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.AssetDepreciationGroupParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.WebClientVariantSortBy {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
  Direction : LargeString;
};

type SAPB1.DefaultReportParams {
  ReportCode : LargeString;
  LayoutCode : LargeString;
  UserID : Integer;
  CardCode : LargeString;
};

type SAPB1.WebClientVariantEmbeddedChart {
  Guid : LargeString;
  ChartType : LargeString;
  CategoryAxis1 : LargeString;
  CategoryAxis2 : LargeString;
  TimeAxis : LargeString;
  Color : LargeString;
  Shape : LargeString;
  BubbleWidth : LargeString;
  WebClientVariantEmbeddedChartValue1Collection : many SAPB1.WebClientVariantEmbeddedChartValue1;
  WebClientVariantEmbeddedChartValue2Collection : many SAPB1.WebClientVariantEmbeddedChartValue2;
  WebClientVariantEmbeddedChartSizeCollection : many SAPB1.WebClientVariantEmbeddedChartSize;
};

type SAPB1.UserPermissionForm {
  FormType : LargeString;
  DisplayOrder : Integer;
  PermissionID : LargeString;
};

type SAPB1.WebClientVariantEmbeddedChartValue1 {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.CustomsGroupParams {
  Code : Integer;
};

type SAPB1.TransportationDocumentParams {
  TranspDocNumber : Integer;
};

type SAPB1.U_BLD_GNRLParams {
  Code : LargeString;
};

type SAPB1.WebClientVariantParams {
  Guid : LargeString;
};

type SAPB1.CustomsDeclarationParams {
  CCDNum : LargeString;
};

type SAPB1.WebClientVariantGroupParams {
  Guid : LargeString;
};

type SAPB1.SpecialPriceParams {
  ItemCode : LargeString;
  CardCode : LargeString;
  PriceListNum : Integer;
};

type SAPB1.WebClientPreferenceParams {
  Guid : LargeString;
};

type SAPB1.BPVatExemptionsLine {
  AbsoluteEntry : Integer;
  LineNumber : Integer;
  ExemptionDocNum : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  IssueTime : Time;
  ExemptionType : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  VATRate : Double;
  TaxCode : LargeString;
  AuthoritiesName : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  VisualOrder : Integer;
};

type SAPB1.BPVatExemptionsParams {
  AbsoluteEntry : Integer;
  BPCode : LargeString;
};

type SAPB1.AccountCategoryParams {
  CategoryCode : Integer;
  CategoryName : LargeString;
};

type SAPB1.CashFlowLineItemParams {
  LineItemID : Integer;
  LineItemName : LargeString;
};

type SAPB1.ExpenseTypeParams {
  ExpenseType : LargeString;
};

type SAPB1.UserMenuItem {
  Name : LargeString;
  Position : Integer;
  LinkedObjType : LargeString;
  LinkedObjKey : LargeString;
  LinkedFormMenuID : Integer;
  LinkedFormNum : Integer;
  ReportPath : LargeString;
};

type SAPB1.TerminationReasonParams {
  ReasonID : Integer;
  Name : LargeString;
  Description : LargeString;
};

type SAPB1.ProfitCenterParams {
  CenterCode : LargeString;
  CenterName : LargeString;
};

type SAPB1.Document_ApprovalRequest {
  ApprovalTemplatesID : Integer;
  Remarks : LargeString;
  ApprovalTemplatesName : LargeString;
};

type SAPB1.BusinessPlaceIENumber {
  BPLID : Integer;
  State : LargeString;
  IENumber : LargeString;
};

type SAPB1.InventoryOpeningBalanceBatchNumber {
  DocumentEntry : Integer;
  BatchNumber : LargeString;
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufactureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  AddmisionDate : DateTime;
  Location : LargeString;
  Notes : LargeString;
  Quantity : Double;
  BaseLineNumber : Integer;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
  SystemSerialNumber : Integer;
};

type SAPB1.TechnicianSettingsGroup {
  Code : Integer;
  Name : LargeString;
  AdvancedDashBoard : Integer;
};

type SAPB1.CampaignPartner {
  CampaignNumber : Integer;
  CampaignLineNumber : Integer;
  PartnerID : Integer;
  RelationshipCode : Integer;
  RelatedBP : LargeString;
  Details : LargeString;
};

type SAPB1.DepositParams {
  DepositNumber : Integer;
  AbsEntry : Integer;
  Series : Integer;
};

type SAPB1.CreditLine {
  AbsId : Integer;
  CreditCard : Integer;
  VoucherNumber : LargeString;
  PaymentMethodCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  PayDate : DateTime;
  NumOfPayments : Integer;
  Customer : LargeString;
  Reference : LargeString;
  Total : Double;
  CreditCurrency : LargeString;
};

type SAPB1.CancelCheckRowParams {
  DepositID : Integer;
  CheckID : Integer;
};

type SAPB1.VM_ThirdPartyValuesData {
  AbsEntry : Integer;
  LineId : Integer;
  ThirdPartySystemId : Integer;
  ThirdPartyValue : LargeString;
};

type SAPB1.SalesTaxInvoiceOperationCode {
  OpCode : Integer;
};

type SAPB1.ResourceEmployee {
  Code : LargeString;
  Employee : LargeString;
};

type SAPB1.PM_SummaryData {
  LineID : Integer;
  SubprojectBudget : Double;
  SumOpenAmountPurchase : Double;
  SumInvoicedAmountPurchase : Double;
  TotalAmountPurchase : Double;
  TotalVariancePurchase : Double;
  VariancePerceptionPurchase : Double;
  AccumSubprojectBudget : Double;
  AccumOpenAmountPurchase : Double;
  AccumInvoicedAmountPurchase : Double;
  AccumTotalPurchase : Double;
  AccumTotalVariancePurchase : Double;
  AccumVariancePerceptionPurchase : Double;
  PotentialSubprojectAmount : Double;
  SumOpenAmountSales : Double;
  SumInvoicedAmountSales : Double;
  TotalAmountSales : Double;
  TotalVarianceSales : Double;
  VariancePerceptionSales : Double;
  AccumPotentialSubprojectAmount : Double;
  AccumOpenAmountSales : Double;
  AccumInvoicedAmountSales : Double;
  AccumTotalSales : Double;
  AccumTotalVarianceSales : Double;
  AccumVariancePerceptionSales : Double;
  ActualItemComponentCost : Double;
  ActualResourceComponentCost : Double;
  ActualAdditionalCost : Double;
  ActualProductCost : Double;
  ActualByProductCost : Double;
  TotalVariance : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ActualClosingDate : DateTime;
  Overdue : Integer;
};

type SAPB1.ValueMappingCommunicationParams {
  AbsEntry : Integer;
};

type SAPB1.U_BFUSERFORMSParams {
  Code : LargeString;
};

type SAPB1.CampaignResponseTypeParams {
  ResponseType : LargeString;
  ResponseTypeDescription : LargeString;
};

type SAPB1.DistributionRuleLine {
  CenterCode : LargeString;
  TotalInCenter : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EffectiveTo : DateTime;
};

type SAPB1.IndiaSacCodeParams {
  AbsEntry : Integer;
  ServiceCode : LargeString;
};

type SAPB1.U_BBATV2Params {
  Code : LargeString;
};

type SAPB1.CostElementParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.ItemIntrastatExtension {
  ItemCode : LargeString;
  CommodityCode : Integer;
  SupplementaryUnit : Integer;
  FactorOfSupplementaryUnit : Double;
  ImportRegionState : Integer;
  ExportRegionState : Integer;
  ImportNatureOfTransaction : Integer;
  ExportNatureOfTransaction : Integer;
  ImportStatisticalProcedure : Integer;
  ExportStatisticalProcedure : Integer;
  CountryOfOrigin : LargeString;
  ServiceCode : Integer;
  ImportRegionCountry : LargeString;
  ExportRegionCountry : LargeString;
  StatisticalCode : LargeString;
};

type SAPB1.ItemWarehouseInfo {
  MinimalStock : Double;
  MaximalStock : Double;
  MinimalOrder : Double;
  StandardAveragePrice : Double;
  InventoryAccount : LargeString;
  CostAccount : LargeString;
  TransferAccount : LargeString;
  RevenuesAccount : LargeString;
  VarienceAccount : LargeString;
  DecreasingAccount : LargeString;
  IncreasingAccount : LargeString;
  ReturningAccount : LargeString;
  ExpensesAccount : LargeString;
  EURevenuesAccount : LargeString;
  EUExpensesAccount : LargeString;
  ForeignRevenueAcc : LargeString;
  ForeignExpensAcc : LargeString;
  ExemptIncomeAcc : LargeString;
  PriceDifferenceAcc : LargeString;
  WarehouseCode : LargeString;
  InStock : Double;
  Committed : Double;
  Ordered : Double;
  CountedQuantity : Double;
  UserSignature : Integer;
  Counted : Double;
  ExpenseClearingAct : LargeString;
  PurchaseCreditAcc : LargeString;
  EUPurchaseCreditAcc : LargeString;
  ForeignPurchaseCreditAcc : LargeString;
  SalesCreditAcc : LargeString;
  SalesCreditEUAcc : LargeString;
  ExemptedCredits : LargeString;
  SalesCreditForeignAcc : LargeString;
  ExpenseOffsettingAccount : LargeString;
  WipAccount : LargeString;
  ExchangeRateDifferencesAcct : LargeString;
  GoodsClearingAcct : LargeString;
  NegativeInventoryAdjustmentAccount : LargeString;
  CostInflationOffsetAccount : LargeString;
  GLDecreaseAcct : LargeString;
  GLIncreaseAcct : LargeString;
  PAReturnAcct : LargeString;
  PurchaseAcct : LargeString;
  PurchaseOffsetAcct : LargeString;
  ShippedGoodsAccount : LargeString;
  StockInflationOffsetAccount : LargeString;
  StockInflationAdjustAccount : LargeString;
  VATInRevenueAccount : LargeString;
  WipVarianceAccount : LargeString;
  CostInflationAccount : LargeString;
  WHIncomingCenvatAccount : LargeString;
  WHOutgoingCenvatAccount : LargeString;
  StockInTransitAccount : LargeString;
  WipOffsetProfitAndLossAccount : LargeString;
  InventoryOffsetProfitAndLossAccount : LargeString;
  DefaultBin : Integer;
  PurchaseBalanceAccount : LargeString;
  ItemCode : LargeString;
  U_Zentrallager : LargeString;
  ItemCycleCounts : many SAPB1.ItemCycleCount;
};

type SAPB1.PriceListParams {
  PriceListNo : Integer;
};

type SAPB1.EWBTransporter_Line {
  AbsEntry : Integer;
  LineNumber : Integer;
  Mode : Integer;
  VehicleType : LargeString;
  VehicleNo : LargeString;
};

type SAPB1.PMC_PriorityData {
  PriorityID : Integer;
  PriorityName : LargeString;
};

type SAPB1.InventoryCountingLine {
  DocumentEntry : Integer;
  LineNumber : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  WarehouseCode : LargeString;
  BinEntry : Integer;
  InWarehouseQuantity : Double;
  UoMCode : LargeString;
  BarCode : LargeString;
  UoMCountedQuantity : Double;
  ItemsPerUnit : Double;
  CountedQuantity : Double;
  Variance : Double;
  VariancePercentage : Double;
  VisualOrder : Integer;
  TargetEntry : Integer;
  TargetLine : Integer;
  TargetType : Integer;
  TargetReference : LargeString;
  ProjectCode : LargeString;
  Manufacturer : Integer;
  SupplierCatalogNo : LargeString;
  PreferredVendor : LargeString;
  CostingCode : LargeString;
  CostingCode2 : LargeString;
  CostingCode3 : LargeString;
  CostingCode4 : LargeString;
  CostingCode5 : LargeString;
  Remarks : LargeString;
  CounterID : Integer;
  InventoryCountingLineUoMs : many SAPB1.InventoryCountingLineUoM;
  InventoryCountingSerialNumbers : many SAPB1.InventoryCountingSerialNumber;
  InventoryCountingBatchNumbers : many SAPB1.InventoryCountingBatchNumber;
};

type SAPB1.DefaultElementsforCRParams {
  Code : Integer;
  Name : LargeString;
};

type SAPB1.NCMCodeSetupParams {
  AbsEntry : Integer;
  NCMCode : LargeString;
  Description : LargeString;
};

type SAPB1.DocumentChangeMenuName {
  Document : LargeString;
  DocumentSubType : LargeString;
  ChangedMenuName : LargeString;
};

type SAPB1.IdentificationCodeParams {
  AbsEntry : Integer;
};

type SAPB1.NotaFiscalCFOPParams {
  ID : Integer;
};

type SAPB1.Attachments2Params {
  AbsoluteEntry : Integer;
};

type SAPB1.NotaFiscalCSTParams {
  ID : Integer;
};

type SAPB1.NotaFiscalUsageParams {
  ID : Integer;
};

type SAPB1.ClosingDateProcedureParams {
  ClosingDateNum : Integer;
};

type SAPB1.TaxCodeDeterminationTCDDefaultWT {
  AbsId : Integer;
  WTCode : LargeString;
};

type SAPB1.FiscalPrinterParams {
  EquipmentNo : LargeString;
};

type SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT {
  AbsId : Integer;
  WTCode : LargeString;
};

type SAPB1.WebClientVariantMChartValue1 {
  Guid : LargeString;
  Order : Integer;
  ColumnName : LargeString;
};

type SAPB1.TaxCodeDeterminationTCDParams {
  AbsId : Integer;
};

type SAPB1.BOEDocumentTypeParams {
  DocEntry : Integer;
  DocType : LargeString;
};

type SAPB1.BudgetScenarioParams {
  Numerator : Integer;
};

type SAPB1.AssetClassParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.BOEInstructionParams {
  InstructionEntry : Integer;
  InstructionCode : LargeString;
};

type SAPB1.SalesTaxInvoiceDocumentReference {
  DocEntry : Integer;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
  CardCode : LargeString;
};

type SAPB1.DppChangeParams {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FromDate : DateTime;
  FromTime : Time;
};

type SAPB1.U_BEOLICParams {
  Code : LargeString;
};

type SAPB1.PurchaseTaxInvoiceDocumentReference {
  DocEntry : Integer;
  LineNumber : Integer;
  ReferencedDocEntry : Integer;
  ReferencedDocNumber : Integer;
  ExternalReferencedDocNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  IssueDate : DateTime;
  Remark : LargeString;
  CardCode : LargeString;
};

type SAPB1.ResourceWarehouse {
  Code : LargeString;
  Warehouse : LargeString;
};

type SAPB1.BudgetParams {
  Numerator : Integer;
};

type SAPB1.Forms1099Params {
  FormCode : Integer;
};

type SAPB1.BankParams {
  AbsoluteEntry : Integer;
};

type SAPB1.JournalEntryParams {
  JdtNum : Integer;
};

type SAPB1.JournalEntryLine {
  Line_ID : Integer;
  AccountCode : LargeString;
  Debit : Double;
  Credit : Double;
  FCDebit : Double;
  FCCredit : Double;
  FCCurrency : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DueDate : DateTime;
  ShortName : LargeString;
  ContraAccount : LargeString;
  LineMemo : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReferenceDate1 : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReferenceDate2 : DateTime;
  Reference1 : LargeString;
  Reference2 : LargeString;
  ProjectCode : LargeString;
  CostingCode : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TaxDate : DateTime;
  BaseSum : Double;
  TaxGroup : LargeString;
  DebitSys : Double;
  CreditSys : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  VatDate : DateTime;
  SystemBaseAmount : Double;
  VatAmount : Double;
  SystemVatAmount : Double;
  GrossValue : Double;
  AdditionalReference : LargeString;
  CheckAbs : Integer;
  CostingCode2 : LargeString;
  CostingCode3 : LargeString;
  CostingCode4 : LargeString;
  TaxCode : LargeString;
  CostingCode5 : LargeString;
  LocationCode : Integer;
  ControlAccount : LargeString;
  EqualizationTaxAmount : Double;
  SystemEqualizationTaxAmount : Double;
  TotalTax : Double;
  SystemTotalTax : Double;
  BlockReason : Integer;
  FederalTaxID : LargeString;
  BPLID : Integer;
  BPLName : LargeString;
  VATRegNum : LargeString;
  ExposedTransNumber : Integer;
  DocumentArray : Integer;
  DocumentLine : Integer;
  CostElementCode : LargeString;
  Cig : Integer;
  Cup : Integer;
  U_BD_Exp : Integer;
  CashFlowAssignments : many SAPB1.CashFlowAssignment;
};

type SAPB1.FinancePeriodParams {
  AbsoluteEntry : Integer;
  PeriodIndicator : LargeString;
};

type SAPB1.StockTakingParams {
  ItemCode : LargeString;
  WarehouseCode : LargeString;
};

type SAPB1.InventoryOpeningBalanceLine {
  DocumentEntry : Integer;
  LineNumber : Integer;
  ItemCode : LargeString;
  ItemDescription : LargeString;
  WarehouseCode : LargeString;
  BinEntry : Integer;
  InWarehouseQuantity : Double;
  OpeningBalance : Double;
  Remarks : LargeString;
  BarCode : LargeString;
  VisualOrder : Integer;
  Price : Double;
  Total : Double;
  OpenInventoryAccount : LargeString;
  ProjectCode : LargeString;
  Manufacturer : Integer;
  SupplierCatalogNo : LargeString;
  CostingCode : LargeString;
  CostingCode2 : LargeString;
  CostingCode3 : LargeString;
  CostingCode4 : LargeString;
  CostingCode5 : LargeString;
  PreferredVendor : LargeString;
  Currency : LargeString;
  ActualPrice : Double;
  PostedValueLC : Double;
  PostedValueSC : Double;
  InventoryOpeningBalanceSerialNumbers : many SAPB1.InventoryOpeningBalanceSerialNumber;
  InventoryOpeningBalanceBatchNumbers : many SAPB1.InventoryOpeningBalanceBatchNumber;
  InventoryOpeningBalanceCCDNumbers : many SAPB1.InventoryOpeningBalanceCCDNumber;
};

type SAPB1.InventoryOpeningBalanceSerialNumber {
  DocumentEntry : Integer;
  ManufacturerSerialNumber : LargeString;
  InternalSerialNumber : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ExpiryDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ManufactureDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReceptionDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyStart : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  WarrantyEnd : DateTime;
  Location : LargeString;
  Notes : LargeString;
  BatchID : LargeString;
  SystemSerialNumber : Integer;
  BaseLineNumber : Integer;
  Quantity : Double;
  TrackingNote : Integer;
  TrackingNoteLine : Integer;
  ItemCode : LargeString;
};

type SAPB1.CreditCardParams {
  CreditCardCode : Integer;
};

type SAPB1.CurrencyParams {
  Code : LargeString;
};

type SAPB1.BPFiscalRegistryIDParams {
  Numerator : Integer;
};

type SAPB1.ItemPrice {
  PriceList : Integer;
  Price : Double;
  Currency : LargeString;
  AdditionalPrice1 : Double;
  AdditionalCurrency1 : LargeString;
  AdditionalPrice2 : Double;
  AdditionalCurrency2 : LargeString;
  BasePriceList : Integer;
  Factor : Double;
  UoMPrices : many SAPB1.UoMPrice;
};

type SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod {
  AbsId : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EfctFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EfctTo : DateTime;
  TaxCode : LargeString;
  TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages : many SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage;
};

type SAPB1.ItemPreferredVendor {
  BPCode : LargeString;
};

type SAPB1.ItemDistributionRule {
  LineNumber : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidFrom : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ValidTo : DateTime;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
};

type SAPB1.TechnicianSchedulingsParams {
  Technician : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  StartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  EndDate : DateTime;
};

type SAPB1.ItemDepreciationParameter {
  FiscalYear : LargeString;
  DepreciationArea : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DepreciationStartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DepreciationEndDate : DateTime;
  UsefulLife : Integer;
  RemainingLife : Double;
  DepreciationType : LargeString;
  TotalUnitsInUsefulLife : Integer;
  RemainingUnits : Integer;
  StandardUnits : Integer;
};

type SAPB1.ExternalReconciliation {
  AccountCode : LargeString;
  ReconciliationNo : Integer;
  Amount : Double;
  CurrencyType : LargeString;
  ReconciliationType : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  ReconciliationDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  CreationDate : DateTime;
  ReconciliationJournalEntryLines : many SAPB1.ReconciliationJournalEntryLine;
  ReconciliationBankStatementLines : many SAPB1.ReconciliationBankStatementLine;
};

type SAPB1.BillOfExchange {
  BillOfExchangeNo : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  BillOfExchangeDueDate : DateTime;
  Details : LargeString;
  ReferenceNo : LargeString;
  Remarks : LargeString;
  PaymentMethodCode : LargeString;
  BPBankCode : LargeString;
  BPBankAct : LargeString;
  BPBankCountry : LargeString;
  ControlKey : LargeString;
  PaymentEngineStatus1 : LargeString;
  PaymentEngineStatus2 : LargeString;
  PaymentEngineStatus3 : LargeString;
  StampTaxCode : LargeString;
  StampTaxAmount : Double;
  FolioNumber : Integer;
  FolioPrefixString : LargeString;
  InterestAmount : Double;
  DiscountAmount : Double;
  FineAmount : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  InterestDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DiscountDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  FineDate : DateTime;
  IOFAmount : Double;
  ServiceFeeAmount : Double;
  OtherExpensesAmount : Double;
  OtherIncomesAmount : Double;
};

type SAPB1.PaymentParams {
  DocEntry : Integer;
};

type SAPB1.ItemUnitOfMeasurement {
  UoMEntry : Integer;
  DefaultBarcode : Integer;
  DefaultPackage : Integer;
  Length1 : Double;
  Length1Unit : Integer;
  Length2 : Double;
  Length2Unit : Integer;
  Width1 : Double;
  Width1Unit : Integer;
  Width2 : Double;
  Width2Unit : Integer;
  Height1 : Double;
  Height1Unit : Integer;
  Height2 : Double;
  Height2Unit : Integer;
  Volume : Double;
  VolumeUnit : Integer;
  Weight1 : Double;
  Weight1Unit : Integer;
  Weight2 : Double;
  Weight2Unit : Integer;
  ItemUoMPackageCollection : many SAPB1.ItemUoMPackage;
};

type SAPB1.ItemBarCode {
  AbsEntry : Integer;
  UoMEntry : Integer;
  Barcode : LargeString;
  FreeText : LargeString;
};

type SAPB1.LandedCost_ItemLine {
  DocEntry : Integer;
  LineNumber : Integer;
  BaseEntry : Integer;
  Number : LargeString;
  ItemDescription : LargeString;
  Quantity : Double;
  BaseDocumentPrice : Double;
  Rate : Double;
  ProjectedCustoms : Double;
  ProjectedCustomsFC : Double;
  Expenditure : Double;
  ExpenditureFC : Double;
  WarehousePrice : Double;
  WarehousePriceFC : Double;
  LineTotal : Double;
  LineTotalFC : Double;
  Volume : Double;
  VolumeUoM : Integer;
  Weight1 : Double;
  Weight1UnitCode : Integer;
  Weight2 : Double;
  Weight2UnitCode : Integer;
  VendorCode : LargeString;
  Reference : LargeString;
  FactorWithoutCustoms : Double;
  FactorWithCustoms : Double;
  InventoryUoM : LargeString;
  BlockNumber : LargeString;
  ImportLog : LargeString;
  OriginalWarehouse : LargeString;
  Warehouse : LargeString;
  ReleaseNumber : Integer;
  VariantCosts : Double;
  FixCosts : Double;
  VariantCostsFC : Double;
  FixCostsFC : Double;
  Customs : Double;
  CustomsFC : Double;
  BaseDocumentValueLineTotal : Double;
  BaseDocumentValueLineTotalFC : Double;
  AllocatedUnitCostsLineTotal : Double;
  AllocatedUnitCostsLineTotalFC : Double;
  CustomsValue : Double;
  CustomsValueFC : Double;
  TotalCosts : Double;
  TotalCostsFC : Double;
  TotalVolume : Double;
  BaseLine : Integer;
  TotalLineProjectedCustoms : Double;
  AllocatedCostsLineTotal : Double;
  FOBandIncludedCosts : Double;
  FOBandIncludedCostsFC : Double;
  Project : LargeString;
  DistributionRule : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  PriceList : Integer;
  OriginLine : Integer;
  Currency : LargeString;
  CustomsGroupRate : Double;
  VatGroup : LargeString;
  VatPercent : Double;
  ExciseSum : Double;
  ExciseSumFC : Double;
  CustomsCost : Double;
  CustomsCostFC : Double;
  CustomsVat : Double;
  CustomsVatFC : Double;
  CCDNumber : LargeString;
  CorrectedBaseDocumentValue : Double;
  CorrectedBaseDocumentValueFC : Double;
};

type SAPB1.TrackingNoteItem {
  TrackingNoteNumber : Integer;
  TrackingNoteLineNumber : Integer;
  ItemCCDNumber : LargeString;
  ItemCode : LargeString;
  Quantity : Double;
  CountryOfOrigin : LargeString;
  CustomsGroupCode : Integer;
  AccumulatedAPQuantity : Double;
  AccumulatedARQuantity : Double;
  AccumulatedRelocatedQuantity : Double;
};

type SAPB1.BusinessPlaceTributaryInfo {
  BPLID : Integer;
  TributaryID : Integer;
  TributaryType : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TTStartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TTEndDate : DateTime;
  TributaryRegimeCode : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TRCStartDate : DateTime;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TRCEndDate : DateTime;
};

type SAPB1.ItemUoMPackage {
  UoMEntry : Integer;
  PackageTypeEntry : Integer;
  Length1 : Double;
  Length1Unit : Integer;
  Length2 : Double;
  Length2Unit : Integer;
  Width1 : Double;
  Width1Unit : Integer;
  Width2 : Double;
  Width2Unit : Integer;
  Height1 : Double;
  Height1Unit : Integer;
  Height2 : Double;
  Height2Unit : Integer;
  Volume : Double;
  VolumeUnit : Integer;
  Weight1 : Double;
  Weight1Unit : Integer;
  Weight2 : Double;
  Weight2Unit : Integer;
  QuantityPerPackage : Double;
};

type SAPB1.ColumnsPreferencesParams {
  User : Integer;
  FormID : LargeString;
};

type SAPB1.EmployeeTransferDetail {
  TransferID : Integer;
  EmployeeID : Integer;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  TransferedDate : DateTime;
  TransferedTime : Time;
  Comment : LargeString;
};

type SAPB1.VatGroups_Line {
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Effectivefrom : DateTime;
  Rate : Double;
  EqualizationTax : Double;
  DatevCode : Integer;
};

type SAPB1.MaterialGroupParams {
  AbsEntry : Integer;
  MaterialGroupCode : LargeString;
};

type SAPB1.BrazilNumericIndexerParams {
  ID : Integer;
};

type SAPB1.BankPageParams {
  AccountCode : LargeString;
  Sequence : Integer;
};

type SAPB1.LengthMeasureParams {
  UnitCode : Integer;
};

type SAPB1.SalesPersonParams {
  SalesEmployeeCode : Integer;
};

type SAPB1.ElectronicSeries {
  ElectronicSeries : Integer;
  Series : Integer;
  Name : LargeString;
  InitialNumber : LargeString;
  NextNumber : LargeString;
  LastNumber : LargeString;
  Prefix : LargeString;
  ApprovalYear : Integer;
  ApprovalNumber : Integer;
  Remarks : LargeString;
};

type SAPB1.PMC_TaskData {
  TaskID : Integer;
  TaskName : LargeString;
};

type SAPB1.CostCenterTypeParams {
  CostCenterTypeCode : LargeString;
};

type SAPB1.Blob {
  Content : LargeString;
};

type SAPB1.BrazilStringIndexerParams {
  ID : Integer;
};

type SAPB1.BrazilBeverageIndexerParams {
  BeverageID : Integer;
};

type SAPB1.ChecksforPaymentLine {
  RowNumber : Integer;
  RowDetails : LargeString;
  RowTotal : Double;
  RowCurrency : LargeString;
  TaxDefinition : LargeString;
  TaxPercent : Double;
  CreditedAccount : LargeString;
  LineTotal : Double;
};

type SAPB1.U_BLD_PDLNParams {
  Code : LargeString;
};

type SAPB1.TrackingNoteParams {
  TrackingNoteNumber : Integer;
  CCDNumber : LargeString;
};

type SAPB1.DistributionRuleParams {
  FactorCode : LargeString;
  FactorDescription : LargeString;
};

type SAPB1.TaxCodeDeterminationTCDByUsage {
  AbsId : Integer;
  UsageCode : Integer;
  TaxCode : LargeString;
  ExpTaxCode : LargeString;
  PurTaxCode : LargeString;
};

type SAPB1.ProjectParams {
  Code : LargeString;
  Name : LargeString;
};

type SAPB1.WarehouseParams {
  WarehouseCode : LargeString;
};

type SAPB1.ProductTreeParams {
  TreeCode : LargeString;
};

type SAPB1.U_BA_CMDIMParams {
  Code : LargeString;
};

type SAPB1.ProductTreeLine {
  ItemCode : LargeString;
  Quantity : Double;
  Warehouse : LargeString;
  Price : Double;
  Currency : LargeString;
  InventoryUOM : LargeString;
  Comment : LargeString;
  ParentItem : LargeString;
  PriceList : Integer;
  DistributionRule : LargeString;
  Project : LargeString;
  DistributionRule2 : LargeString;
  DistributionRule3 : LargeString;
  DistributionRule4 : LargeString;
  DistributionRule5 : LargeString;
  WipAccount : LargeString;
  LineText : LargeString;
  AdditionalQuantity : Double;
  StageID : Integer;
  ChildNum : Integer;
  VisualOrder : Integer;
  ItemName : LargeString;
};

type SAPB1.SalesTaxAuthoritiesTypeParams {
  Numerator : Integer;
};

type SAPB1.LandedCostParams {
  DocEntry : Integer;
};

type SAPB1.SpecialPriceDataArea {
  PriceCurrency : LargeString;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  Dateto : DateTime;
  Discount : Double;
  SpecialPrice : Double;
  @odata.Precision : 0
  @odata.Type : 'Edm.DateTimeOffset'
  DateFrom : DateTime;
  BPCode : LargeString;
  PriceListNo : Integer;
  ItemNo : LargeString;
  RowNumber : Integer;
  SpecialPriceQuantityAreas : many SAPB1.SpecialPriceQuantityArea;
};

type SAPB1.U_BA_ODRN3Params {
  Code : LargeString;
};

type SAPB1.PostingTemplatesParams {
  Code : LargeString;
  Description : LargeString;
};

type SAPB1.TaxInvoiceReportParams {
  TaxInvoiceReportNumber : LargeString;
};

type SAPB1.SpecialPriceQuantityArea {
  Quantity : Double;
  SPDARowNumber : Integer;
  SpecialPrice : Double;
  ItemNo : LargeString;
  BPCode : LargeString;
  RowNumber : Integer;
  PriceCurrency : LargeString;
  Discountin : Double;
  UoMEntry : Integer;
};

type SAPB1.CompanySummary {
  dbName : LargeString;
  cmpName : LargeString;
  versStr : LargeString;
  dbUser : LargeString;
  LOC : LargeString;
};

@cds.external : true
service SAPB1 {};

