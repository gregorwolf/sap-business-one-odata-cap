/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { EmployeeAbsenceInfo } from './EmployeeAbsenceInfo';
import { EmployeeEducationInfo } from './EmployeeEducationInfo';
import { EmployeeReviewsInfo } from './EmployeeReviewsInfo';
import { EmployeePreviousEmpoymentInfo } from './EmployeePreviousEmpoymentInfo';
import { EmployeeRolesInfo } from './EmployeeRolesInfo';
import { EmployeeSavingsPaymentInfo } from './EmployeeSavingsPaymentInfo';
import { EmployeeBranchAssignmentItem } from './EmployeeBranchAssignmentItem';
import type { EmployeesInfoApi } from './EmployeesInfoApi';
import { BoGenderTypes } from './BoGenderTypes';
import { BoSalaryCostUnits } from './BoSalaryCostUnits';
import { BoMeritalStatuses } from './BoMeritalStatuses';
import { EmployeeExemptionUnitEnum } from './EmployeeExemptionUnitEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { EmployeePaymentMethodEnum } from './EmployeePaymentMethodEnum';
import { SpedContabilQualificationCodeEnum } from './SpedContabilQualificationCodeEnum';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';
import { Warehouses, WarehousesType } from './Warehouses';
import { ProfitCenters, ProfitCentersType } from './ProfitCenters';
import {
  PurchaseQuotations,
  PurchaseQuotationsType
} from './PurchaseQuotations';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { Items, ItemsType } from './Items';
import {
  CorrectionInvoiceReversal,
  CorrectionInvoiceReversalType
} from './CorrectionInvoiceReversal';
import {
  CustomerEquipmentCards,
  CustomerEquipmentCardsType
} from './CustomerEquipmentCards';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import {
  PurchaseDeliveryNotes,
  PurchaseDeliveryNotesType
} from './PurchaseDeliveryNotes';
import {
  CorrectionPurchaseInvoice,
  CorrectionPurchaseInvoiceType
} from './CorrectionPurchaseInvoice';
import {
  InventoryGenEntries,
  InventoryGenEntriesType
} from './InventoryGenEntries';
import {
  EmployeeRolesSetup,
  EmployeeRolesSetupType
} from './EmployeeRolesSetup';
import { Departments, DepartmentsType } from './Departments';
import { Branches, BranchesType } from './Branches';
import { Countries, CountriesType } from './Countries';
import { Users, UsersType } from './Users';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { EmployeeStatus, EmployeeStatusType } from './EmployeeStatus';
import { TerminationReason, TerminationReasonType } from './TerminationReason';
import { Banks, BanksType } from './Banks';
import { EmployeePosition, EmployeePositionType } from './EmployeePosition';
import { EmployeeIdType, EmployeeIdTypeType } from './EmployeeIdType';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Orders, OrdersType } from './Orders';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { Drafts, DraftsType } from './Drafts';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { Invoices, InvoicesType } from './Invoices';
import { Campaigns, CampaignsType } from './Campaigns';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import {
  PurchaseCreditNotes,
  PurchaseCreditNotesType
} from './PurchaseCreditNotes';
import { DownPayments, DownPaymentsType } from './DownPayments';
import {
  PurchaseDownPayments,
  PurchaseDownPaymentsType
} from './PurchaseDownPayments';
import {
  ProjectManagementTimeSheet,
  ProjectManagementTimeSheetType
} from './ProjectManagementTimeSheet';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Activities, ActivitiesType } from './Activities';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { Quotations, QuotationsType } from './Quotations';
import { Returns, ReturnsType } from './Returns';
import {
  ProjectManagements,
  ProjectManagementsType
} from './ProjectManagements';
import {
  GoodsReturnRequest,
  GoodsReturnRequestType
} from './GoodsReturnRequest';
import {
  CorrectionPurchaseInvoiceReversal,
  CorrectionPurchaseInvoiceReversalType
} from './CorrectionPurchaseInvoiceReversal';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';

/**
 * This class represents the entity "EmployeesInfo" of service "SAPB1".
 */
export class EmployeesInfo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeesInfoType<T>
{
  /**
   * Technical entity name for EmployeesInfo.
   */
  static _entityName = 'EmployeesInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmployeesInfo entity
   */
  static _keys = ['EmployeeID'];
  /**
   * Employee Id.
   */
  employeeId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * @nullable
   */
  gender?: BoGenderTypes | null;
  /**
   * Job Title.
   * @nullable
   */
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Type.
   * @nullable
   */
  employeeType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Department.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Work Street.
   * @nullable
   */
  workStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Block.
   * @nullable
   */
  workBlock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Zip Code.
   * @nullable
   */
  workZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work City.
   * @nullable
   */
  workCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work County.
   * @nullable
   */
  workCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Country Code.
   * @nullable
   */
  workCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work State Code.
   * @nullable
   */
  workStateCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manager.
   * @nullable
   */
  manager?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Application User Id.
   * @nullable
   */
  applicationUserId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Office Phone.
   * @nullable
   */
  officePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Office Extension.
   * @nullable
   */
  officeExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pager.
   * @nullable
   */
  pager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Phone.
   * @nullable
   */
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Status Code.
   * @nullable
   */
  statusCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Salary.
   * @nullable
   */
  salary?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Salary Unit.
   * @nullable
   */
  salaryUnit?: BoSalaryCostUnits | null;
  /**
   * Employee Costs.
   * @nullable
   */
  employeeCosts?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Employee Cost Unit.
   * @nullable
   */
  employeeCostUnit?: BoSalaryCostUnits | null;
  /**
   * Termination Date.
   * @nullable
   */
  terminationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Tremination Reason.
   * @nullable
   */
  treminationReason?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Branch.
   * @nullable
   */
  bankBranch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Branch Num.
   * @nullable
   */
  bankBranchNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Street.
   * @nullable
   */
  homeStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Block.
   * @nullable
   */
  homeBlock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Zip Code.
   * @nullable
   */
  homeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home City.
   * @nullable
   */
  homeCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home County.
   * @nullable
   */
  homeCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Country.
   * @nullable
   */
  homeCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home State.
   * @nullable
   */
  homeState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Country Of Birth.
   * @nullable
   */
  countryOfBirth?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Martial Status.
   * @nullable
   */
  martialStatus?: BoMeritalStatuses | null;
  /**
   * Num Of Children.
   * @nullable
   */
  numOfChildren?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Id Number.
   * @nullable
   */
  idNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Citizenship Country Code.
   * @nullable
   */
  citizenshipCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Passport Number.
   * @nullable
   */
  passportNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Passport Expiration Date.
   * @nullable
   */
  passportExpirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Picture.
   * @nullable
   */
  picture?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Salary Currency.
   * @nullable
   */
  salaryCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Costs Currency.
   * @nullable
   */
  employeeCostsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Building Floor Room.
   * @nullable
   */
  workBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Building Floor Room.
   * @nullable
   */
  homeBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position.
   * @nullable
   */
  position?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cost Center Code.
   * @nullable
   */
  costCenterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Number.
   * @nullable
   */
  companyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vacation Previous Year.
   * @nullable
   */
  vacationPreviousYear?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Vacation Current Year.
   * @nullable
   */
  vacationCurrentYear?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Municipality Key.
   * @nullable
   */
  municipalityKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Class.
   * @nullable
   */
  taxClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Income Tax Liability.
   * @nullable
   */
  incomeTaxLiability?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Religion.
   * @nullable
   */
  religion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Religion.
   * @nullable
   */
  partnerReligion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption Amount.
   * @nullable
   */
  exemptionAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Exemption Unit.
   * @nullable
   */
  exemptionUnit?: EmployeeExemptionUnitEnum | null;
  /**
   * Exemption Currency.
   * @nullable
   */
  exemptionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Amount.
   * @nullable
   */
  additionalAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Additional Unit.
   * @nullable
   */
  additionalUnit?: EmployeeExemptionUnitEnum | null;
  /**
   * Additional Currency.
   * @nullable
   */
  additionalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Office Name.
   * @nullable
   */
  taxOfficeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Office Number.
   * @nullable
   */
  taxOfficeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Health Insurance Name.
   * @nullable
   */
  healthInsuranceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Health Insurance Code.
   * @nullable
   */
  healthInsuranceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Health Insurance Type.
   * @nullable
   */
  healthInsuranceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Social Insurance Number.
   * @nullable
   */
  socialInsuranceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profession Status.
   * @nullable
   */
  professionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Education Status.
   * @nullable
   */
  educationStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Group.
   * @nullable
   */
  personGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Title Code.
   * @nullable
   */
  jobTitleCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Code For Datev.
   * @nullable
   */
  bankCodeForDatev?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deviating Bank Account Owner.
   * @nullable
   */
  deviatingBankAccountOwner?: BoYesNoEnum | null;
  /**
   * Spouse First Name.
   * @nullable
   */
  spouseFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Spouse Surname.
   * @nullable
   */
  spouseSurname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Employee Number.
   * @nullable
   */
  externalEmployeeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Place.
   * @nullable
   */
  birthPlace?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Method.
   * @nullable
   */
  paymentMethod?: EmployeePaymentMethodEnum | null;
  /**
   * Std Code.
   * @nullable
   */
  stdCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cpf.
   * @nullable
   */
  cpf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crc Number.
   * @nullable
   */
  crcNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accountant Responsible.
   * @nullable
   */
  accountantResponsible?: BoYesNoEnum | null;
  /**
   * Legal Representative.
   * @nullable
   */
  legalRepresentative?: BoYesNoEnum | null;
  /**
   * Dirf Responsible.
   * @nullable
   */
  dirfResponsible?: BoYesNoEnum | null;
  /**
   * Crc State.
   * @nullable
   */
  crcState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum | null;
  /**
   * Id Type.
   * @nullable
   */
  idType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Passport Issue Date.
   * @nullable
   */
  passportIssueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Passport Issuer.
   * @nullable
   */
  passportIssuer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qualification Code.
   * @nullable
   */
  qualificationCode?: SpedContabilQualificationCodeEnum | null;
  /**
   * Pr Web Access.
   * @nullable
   */
  prWebAccess?: BoYesNoEnum | null;
  /**
   * Previous Pr Web Access.
   * @nullable
   */
  previousPrWebAccess?: BoYesNoEnum | null;
  /**
   * Work Street Number.
   * @nullable
   */
  workStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Street Number.
   * @nullable
   */
  homeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Vendor.
   * @nullable
   */
  linkedVendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Employee Code.
   * @nullable
   */
  employeeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * A Ret Sefaz.
   * @nullable
   */
  aRetSefaz?: BoYesNoEnum | null;
  /**
   * U Ziel Kb.
   * @nullable
   */
  uZielKb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Zielkon.
   * @nullable
   */
  uZielkon?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Employee Absence Info Lines.
   * @nullable
   */
  employeeAbsenceInfoLines?: EmployeeAbsenceInfo<T>[] | null;
  /**
   * Employee Education Info Lines.
   * @nullable
   */
  employeeEducationInfoLines?: EmployeeEducationInfo<T>[] | null;
  /**
   * Employee Reviews Info Lines.
   * @nullable
   */
  employeeReviewsInfoLines?: EmployeeReviewsInfo<T>[] | null;
  /**
   * Employee Previous Empoyment Info Lines.
   * @nullable
   */
  employeePreviousEmpoymentInfoLines?:
    | EmployeePreviousEmpoymentInfo<T>[]
    | null;
  /**
   * Employee Roles Info Lines.
   * @nullable
   */
  employeeRolesInfoLines?: EmployeeRolesInfo<T>[] | null;
  /**
   * Employee Savings Payment Info Lines.
   * @nullable
   */
  employeeSavingsPaymentInfoLines?: EmployeeSavingsPaymentInfo<T>[] | null;
  /**
   * Employee Branch Assignment.
   * @nullable
   */
  employeeBranchAssignment?: EmployeeBranchAssignmentItem<T>[] | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  warehouses!: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link ProfitCenters} entity.
   */
  profitCenters!: ProfitCenters<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseQuotations} entity.
   */
  purchaseQuotations!: PurchaseQuotations<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoiceReversal} entity.
   */
  correctionInvoiceReversal!: CorrectionInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerEquipmentCards} entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionInvoice} entity.
   */
  correctionInvoice!: CorrectionInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDeliveryNotes} entity.
   */
  purchaseDeliveryNotes!: PurchaseDeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoice} entity.
   */
  correctionPurchaseInvoice!: CorrectionPurchaseInvoice<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenEntries} entity.
   */
  inventoryGenEntries!: InventoryGenEntries<T>[];
  /**
   * One-to-one navigation property to the {@link EmployeeRolesSetup} entity.
   */
  employeeRoleSetup?: EmployeeRolesSetup<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  department2?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link Branches} entity.
   */
  branch2?: Branches<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeStatus} entity.
   */
  employeeStatus?: EmployeeStatus<T> | null;
  /**
   * One-to-one navigation property to the {@link TerminationReason} entity.
   */
  terminationReason?: TerminationReason<T> | null;
  /**
   * One-to-one navigation property to the {@link Banks} entity.
   */
  bank?: Banks<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeePosition} entity.
   */
  employeePosition?: EmployeePosition<T> | null;
  /**
   * One-to-one navigation property to the {@link ProfitCenters} entity.
   */
  profitCenter?: ProfitCenters<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeIdType} entity.
   */
  employeeIdType?: EmployeeIdType<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  orders!: Orders<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryGenExits} entity.
   */
  inventoryGenExits!: InventoryGenExits<T>[];
  /**
   * One-to-many navigation property to the {@link Drafts} entity.
   */
  drafts!: Drafts<T>[];
  /**
   * One-to-many navigation property to the {@link ReturnRequest} entity.
   */
  returnRequest!: ReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryNotes} entity.
   */
  deliveryNotes!: DeliveryNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseInvoices} entity.
   */
  purchaseInvoices!: PurchaseInvoices<T>[];
  /**
   * One-to-many navigation property to the {@link BlanketAgreements} entity.
   */
  blanketAgreements!: BlanketAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link Invoices} entity.
   */
  invoices!: Invoices<T>[];
  /**
   * One-to-many navigation property to the {@link Campaigns} entity.
   */
  campaigns!: Campaigns<T>[];
  /**
   * One-to-many navigation property to the {@link CreditNotes} entity.
   */
  creditNotes!: CreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseCreditNotes} entity.
   */
  purchaseCreditNotes!: PurchaseCreditNotes<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link DownPayments} entity.
   */
  downPayments!: DownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDownPayments} entity.
   */
  purchaseDownPayments!: PurchaseDownPayments<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectManagementTimeSheet} entity.
   */
  projectManagementTimeSheet!: ProjectManagementTimeSheet<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseReturns} entity.
   */
  purchaseReturns!: PurchaseReturns<T>[];
  /**
   * One-to-many navigation property to the {@link Activities} entity.
   */
  activities!: Activities<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseOrders} entity.
   */
  purchaseOrders!: PurchaseOrders<T>[];
  /**
   * One-to-many navigation property to the {@link Quotations} entity.
   */
  quotations!: Quotations<T>[];
  /**
   * One-to-many navigation property to the {@link Returns} entity.
   */
  returns!: Returns<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectManagements} entity.
   */
  projectManagements!: ProjectManagements<T>[];
  /**
   * One-to-many navigation property to the {@link GoodsReturnRequest} entity.
   */
  goodsReturnRequest!: GoodsReturnRequest<T>[];
  /**
   * One-to-many navigation property to the {@link CorrectionPurchaseInvoiceReversal} entity.
   */
  correctionPurchaseInvoiceReversal!: CorrectionPurchaseInvoiceReversal<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseRequests} entity.
   */
  purchaseRequests!: PurchaseRequests<T>[];

  constructor(readonly _entityApi: EmployeesInfoApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeesInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeId: DeserializedType<T, 'Edm.Int32'>;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  gender?: BoGenderTypes | null;
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  employeeType?: DeserializedType<T, 'Edm.Int32'> | null;
  department?: DeserializedType<T, 'Edm.Int32'> | null;
  branch?: DeserializedType<T, 'Edm.Int32'> | null;
  workStreet?: DeserializedType<T, 'Edm.String'> | null;
  workBlock?: DeserializedType<T, 'Edm.String'> | null;
  workZipCode?: DeserializedType<T, 'Edm.String'> | null;
  workCity?: DeserializedType<T, 'Edm.String'> | null;
  workCounty?: DeserializedType<T, 'Edm.String'> | null;
  workCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  workStateCode?: DeserializedType<T, 'Edm.String'> | null;
  manager?: DeserializedType<T, 'Edm.Int32'> | null;
  applicationUserId?: DeserializedType<T, 'Edm.Int32'> | null;
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  officePhone?: DeserializedType<T, 'Edm.String'> | null;
  officeExtension?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  pager?: DeserializedType<T, 'Edm.String'> | null;
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  eMail?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  statusCode?: DeserializedType<T, 'Edm.Int32'> | null;
  salary?: DeserializedType<T, 'Edm.Double'> | null;
  salaryUnit?: BoSalaryCostUnits | null;
  employeeCosts?: DeserializedType<T, 'Edm.Double'> | null;
  employeeCostUnit?: BoSalaryCostUnits | null;
  terminationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  treminationReason?: DeserializedType<T, 'Edm.Int32'> | null;
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  bankBranch?: DeserializedType<T, 'Edm.String'> | null;
  bankBranchNum?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  homeStreet?: DeserializedType<T, 'Edm.String'> | null;
  homeBlock?: DeserializedType<T, 'Edm.String'> | null;
  homeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  homeCity?: DeserializedType<T, 'Edm.String'> | null;
  homeCounty?: DeserializedType<T, 'Edm.String'> | null;
  homeCountry?: DeserializedType<T, 'Edm.String'> | null;
  homeState?: DeserializedType<T, 'Edm.String'> | null;
  dateOfBirth?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  countryOfBirth?: DeserializedType<T, 'Edm.String'> | null;
  martialStatus?: BoMeritalStatuses | null;
  numOfChildren?: DeserializedType<T, 'Edm.Int32'> | null;
  idNumber?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  passportNumber?: DeserializedType<T, 'Edm.String'> | null;
  passportExpirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  picture?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  salaryCurrency?: DeserializedType<T, 'Edm.String'> | null;
  employeeCostsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  workBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  homeBuildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  position?: DeserializedType<T, 'Edm.Int32'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  costCenterCode?: DeserializedType<T, 'Edm.String'> | null;
  companyNumber?: DeserializedType<T, 'Edm.String'> | null;
  vacationPreviousYear?: DeserializedType<T, 'Edm.Int32'> | null;
  vacationCurrentYear?: DeserializedType<T, 'Edm.Int32'> | null;
  municipalityKey?: DeserializedType<T, 'Edm.String'> | null;
  taxClass?: DeserializedType<T, 'Edm.String'> | null;
  incomeTaxLiability?: DeserializedType<T, 'Edm.String'> | null;
  religion?: DeserializedType<T, 'Edm.String'> | null;
  partnerReligion?: DeserializedType<T, 'Edm.String'> | null;
  exemptionAmount?: DeserializedType<T, 'Edm.Double'> | null;
  exemptionUnit?: EmployeeExemptionUnitEnum | null;
  exemptionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  additionalAmount?: DeserializedType<T, 'Edm.Double'> | null;
  additionalUnit?: EmployeeExemptionUnitEnum | null;
  additionalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  taxOfficeName?: DeserializedType<T, 'Edm.String'> | null;
  taxOfficeNumber?: DeserializedType<T, 'Edm.String'> | null;
  healthInsuranceName?: DeserializedType<T, 'Edm.String'> | null;
  healthInsuranceCode?: DeserializedType<T, 'Edm.String'> | null;
  healthInsuranceType?: DeserializedType<T, 'Edm.String'> | null;
  socialInsuranceNumber?: DeserializedType<T, 'Edm.String'> | null;
  professionStatus?: DeserializedType<T, 'Edm.String'> | null;
  educationStatus?: DeserializedType<T, 'Edm.String'> | null;
  personGroup?: DeserializedType<T, 'Edm.String'> | null;
  jobTitleCode?: DeserializedType<T, 'Edm.String'> | null;
  bankCodeForDatev?: DeserializedType<T, 'Edm.String'> | null;
  deviatingBankAccountOwner?: BoYesNoEnum | null;
  spouseFirstName?: DeserializedType<T, 'Edm.String'> | null;
  spouseSurname?: DeserializedType<T, 'Edm.String'> | null;
  externalEmployeeNumber?: DeserializedType<T, 'Edm.String'> | null;
  birthPlace?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethod?: EmployeePaymentMethodEnum | null;
  stdCode?: DeserializedType<T, 'Edm.Int32'> | null;
  cpf?: DeserializedType<T, 'Edm.String'> | null;
  crcNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountantResponsible?: BoYesNoEnum | null;
  legalRepresentative?: BoYesNoEnum | null;
  dirfResponsible?: BoYesNoEnum | null;
  crcState?: DeserializedType<T, 'Edm.String'> | null;
  active?: BoYesNoEnum | null;
  idType?: DeserializedType<T, 'Edm.String'> | null;
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  passportIssueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  passportIssuer?: DeserializedType<T, 'Edm.String'> | null;
  qualificationCode?: SpedContabilQualificationCodeEnum | null;
  prWebAccess?: BoYesNoEnum | null;
  previousPrWebAccess?: BoYesNoEnum | null;
  workStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  homeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  linkedVendor?: DeserializedType<T, 'Edm.String'> | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  employeeCode?: DeserializedType<T, 'Edm.String'> | null;
  aRetSefaz?: BoYesNoEnum | null;
  uZielKb?: DeserializedType<T, 'Edm.String'> | null;
  uZielkon?: DeserializedType<T, 'Edm.Int32'> | null;
  employeeAbsenceInfoLines?: EmployeeAbsenceInfo<T>[] | null;
  employeeEducationInfoLines?: EmployeeEducationInfo<T>[] | null;
  employeeReviewsInfoLines?: EmployeeReviewsInfo<T>[] | null;
  employeePreviousEmpoymentInfoLines?:
    | EmployeePreviousEmpoymentInfo<T>[]
    | null;
  employeeRolesInfoLines?: EmployeeRolesInfo<T>[] | null;
  employeeSavingsPaymentInfoLines?: EmployeeSavingsPaymentInfo<T>[] | null;
  employeeBranchAssignment?: EmployeeBranchAssignmentItem<T>[] | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
  warehouses: WarehousesType<T>[];
  profitCenters: ProfitCentersType<T>[];
  purchaseQuotations: PurchaseQuotationsType<T>[];
  serviceCalls: ServiceCallsType<T>[];
  items: ItemsType<T>[];
  correctionInvoiceReversal: CorrectionInvoiceReversalType<T>[];
  customerEquipmentCards: CustomerEquipmentCardsType<T>[];
  correctionInvoice: CorrectionInvoiceType<T>[];
  purchaseDeliveryNotes: PurchaseDeliveryNotesType<T>[];
  correctionPurchaseInvoice: CorrectionPurchaseInvoiceType<T>[];
  inventoryGenEntries: InventoryGenEntriesType<T>[];
  employeeRoleSetup?: EmployeeRolesSetupType<T> | null;
  department2?: DepartmentsType<T> | null;
  branch2?: BranchesType<T> | null;
  country?: CountriesType<T> | null;
  user?: UsersType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  employeeStatus?: EmployeeStatusType<T> | null;
  terminationReason?: TerminationReasonType<T> | null;
  bank?: BanksType<T> | null;
  employeePosition?: EmployeePositionType<T> | null;
  profitCenter?: ProfitCentersType<T> | null;
  employeeIdType?: EmployeeIdTypeType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  orders: OrdersType<T>[];
  inventoryGenExits: InventoryGenExitsType<T>[];
  drafts: DraftsType<T>[];
  returnRequest: ReturnRequestType<T>[];
  deliveryNotes: DeliveryNotesType<T>[];
  purchaseInvoices: PurchaseInvoicesType<T>[];
  blanketAgreements: BlanketAgreementsType<T>[];
  invoices: InvoicesType<T>[];
  campaigns: CampaignsType<T>[];
  creditNotes: CreditNotesType<T>[];
  purchaseCreditNotes: PurchaseCreditNotesType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  downPayments: DownPaymentsType<T>[];
  purchaseDownPayments: PurchaseDownPaymentsType<T>[];
  projectManagementTimeSheet: ProjectManagementTimeSheetType<T>[];
  purchaseReturns: PurchaseReturnsType<T>[];
  activities: ActivitiesType<T>[];
  purchaseOrders: PurchaseOrdersType<T>[];
  quotations: QuotationsType<T>[];
  returns: ReturnsType<T>[];
  projectManagements: ProjectManagementsType<T>[];
  goodsReturnRequest: GoodsReturnRequestType<T>[];
  correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType<T>[];
  purchaseRequests: PurchaseRequestsType<T>[];
}
