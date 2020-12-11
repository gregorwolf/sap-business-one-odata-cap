import { EmployeesInfoRequestBuilder } from './EmployeesInfoRequestBuilder';
import { Moment } from 'moment';
import { EmployeeAbsenceInfo } from './EmployeeAbsenceInfo';
import { EmployeeEducationInfo } from './EmployeeEducationInfo';
import { EmployeeReviewsInfo } from './EmployeeReviewsInfo';
import { EmployeePreviousEmpoymentInfo } from './EmployeePreviousEmpoymentInfo';
import { EmployeeRolesInfo } from './EmployeeRolesInfo';
import { EmployeeSavingsPaymentInfo } from './EmployeeSavingsPaymentInfo';
import { EmployeeBranchAssignmentItem } from './EmployeeBranchAssignmentItem';
import { BoGenderTypes } from './BoGenderTypes';
import { BoSalaryCostUnits } from './BoSalaryCostUnits';
import { BoMeritalStatuses } from './BoMeritalStatuses';
import { EmployeeExemptionUnitEnum } from './EmployeeExemptionUnitEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { EmployeePaymentMethodEnum } from './EmployeePaymentMethodEnum';
import { SpedContabilQualificationCodeEnum } from './SpedContabilQualificationCodeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeesInfo" of service "SAPB1".
 */
export declare class EmployeesInfo extends EntityV4 implements EmployeesInfoType {
    /**
     * Technical entity name for EmployeesInfo.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Last Name.
     * @nullable
     */
    lastName?: string;
    /**
     * First Name.
     * @nullable
     */
    firstName?: string;
    /**
     * Middle Name.
     * @nullable
     */
    middleName?: string;
    /**
     * Gender.
     * @nullable
     */
    gender?: BoGenderTypes;
    /**
     * Job Title.
     * @nullable
     */
    jobTitle?: string;
    /**
     * Employee Type.
     * @nullable
     */
    employeeType?: number;
    /**
     * Department.
     * @nullable
     */
    department?: number;
    /**
     * Branch.
     * @nullable
     */
    branch?: number;
    /**
     * Work Street.
     * @nullable
     */
    workStreet?: string;
    /**
     * Work Block.
     * @nullable
     */
    workBlock?: string;
    /**
     * Work Zip Code.
     * @nullable
     */
    workZipCode?: string;
    /**
     * Work City.
     * @nullable
     */
    workCity?: string;
    /**
     * Work County.
     * @nullable
     */
    workCounty?: string;
    /**
     * Work Country Code.
     * @nullable
     */
    workCountryCode?: string;
    /**
     * Work State Code.
     * @nullable
     */
    workStateCode?: string;
    /**
     * Manager.
     * @nullable
     */
    manager?: number;
    /**
     * Application User Id.
     * @nullable
     */
    applicationUserId?: number;
    /**
     * Sales Person Code.
     * @nullable
     */
    salesPersonCode?: number;
    /**
     * Office Phone.
     * @nullable
     */
    officePhone?: string;
    /**
     * Office Extension.
     * @nullable
     */
    officeExtension?: string;
    /**
     * Mobile Phone.
     * @nullable
     */
    mobilePhone?: string;
    /**
     * Pager.
     * @nullable
     */
    pager?: string;
    /**
     * Home Phone.
     * @nullable
     */
    homePhone?: string;
    /**
     * Fax.
     * @nullable
     */
    fax?: string;
    /**
     * E Mail.
     * @nullable
     */
    eMail?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Status Code.
     * @nullable
     */
    statusCode?: number;
    /**
     * Salary.
     * @nullable
     */
    salary?: number;
    /**
     * Salary Unit.
     * @nullable
     */
    salaryUnit?: BoSalaryCostUnits;
    /**
     * Employee Costs.
     * @nullable
     */
    employeeCosts?: number;
    /**
     * Employee Cost Unit.
     * @nullable
     */
    employeeCostUnit?: BoSalaryCostUnits;
    /**
     * Termination Date.
     * @nullable
     */
    terminationDate?: Moment;
    /**
     * Tremination Reason.
     * @nullable
     */
    treminationReason?: number;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Bank Branch.
     * @nullable
     */
    bankBranch?: string;
    /**
     * Bank Branch Num.
     * @nullable
     */
    bankBranchNum?: string;
    /**
     * Bank Account.
     * @nullable
     */
    bankAccount?: string;
    /**
     * Home Street.
     * @nullable
     */
    homeStreet?: string;
    /**
     * Home Block.
     * @nullable
     */
    homeBlock?: string;
    /**
     * Home Zip Code.
     * @nullable
     */
    homeZipCode?: string;
    /**
     * Home City.
     * @nullable
     */
    homeCity?: string;
    /**
     * Home County.
     * @nullable
     */
    homeCounty?: string;
    /**
     * Home Country.
     * @nullable
     */
    homeCountry?: string;
    /**
     * Home State.
     * @nullable
     */
    homeState?: string;
    /**
     * Date Of Birth.
     * @nullable
     */
    dateOfBirth?: Moment;
    /**
     * Country Of Birth.
     * @nullable
     */
    countryOfBirth?: string;
    /**
     * Martial Status.
     * @nullable
     */
    martialStatus?: BoMeritalStatuses;
    /**
     * Num Of Children.
     * @nullable
     */
    numOfChildren?: number;
    /**
     * Id Number.
     * @nullable
     */
    idNumber?: string;
    /**
     * Citizenship Country Code.
     * @nullable
     */
    citizenshipCountryCode?: string;
    /**
     * Passport Number.
     * @nullable
     */
    passportNumber?: string;
    /**
     * Passport Expiration Date.
     * @nullable
     */
    passportExpirationDate?: Moment;
    /**
     * Picture.
     * @nullable
     */
    picture?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Salary Currency.
     * @nullable
     */
    salaryCurrency?: string;
    /**
     * Employee Costs Currency.
     * @nullable
     */
    employeeCostsCurrency?: string;
    /**
     * Work Building Floor Room.
     * @nullable
     */
    workBuildingFloorRoom?: string;
    /**
     * Home Building Floor Room.
     * @nullable
     */
    homeBuildingFloorRoom?: string;
    /**
     * Position.
     * @nullable
     */
    position?: number;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Cost Center Code.
     * @nullable
     */
    costCenterCode?: string;
    /**
     * Company Number.
     * @nullable
     */
    companyNumber?: string;
    /**
     * Vacation Previous Year.
     * @nullable
     */
    vacationPreviousYear?: number;
    /**
     * Vacation Current Year.
     * @nullable
     */
    vacationCurrentYear?: number;
    /**
     * Municipality Key.
     * @nullable
     */
    municipalityKey?: string;
    /**
     * Tax Class.
     * @nullable
     */
    taxClass?: string;
    /**
     * Income Tax Liability.
     * @nullable
     */
    incomeTaxLiability?: string;
    /**
     * Religion.
     * @nullable
     */
    religion?: string;
    /**
     * Partner Religion.
     * @nullable
     */
    partnerReligion?: string;
    /**
     * Exemption Amount.
     * @nullable
     */
    exemptionAmount?: number;
    /**
     * Exemption Unit.
     * @nullable
     */
    exemptionUnit?: EmployeeExemptionUnitEnum;
    /**
     * Exemption Currency.
     * @nullable
     */
    exemptionCurrency?: string;
    /**
     * Additional Amount.
     * @nullable
     */
    additionalAmount?: number;
    /**
     * Additional Unit.
     * @nullable
     */
    additionalUnit?: EmployeeExemptionUnitEnum;
    /**
     * Additional Currency.
     * @nullable
     */
    additionalCurrency?: string;
    /**
     * Tax Office Name.
     * @nullable
     */
    taxOfficeName?: string;
    /**
     * Tax Office Number.
     * @nullable
     */
    taxOfficeNumber?: string;
    /**
     * Health Insurance Name.
     * @nullable
     */
    healthInsuranceName?: string;
    /**
     * Health Insurance Code.
     * @nullable
     */
    healthInsuranceCode?: string;
    /**
     * Health Insurance Type.
     * @nullable
     */
    healthInsuranceType?: string;
    /**
     * Social Insurance Number.
     * @nullable
     */
    socialInsuranceNumber?: string;
    /**
     * Profession Status.
     * @nullable
     */
    professionStatus?: string;
    /**
     * Education Status.
     * @nullable
     */
    educationStatus?: string;
    /**
     * Person Group.
     * @nullable
     */
    personGroup?: string;
    /**
     * Job Title Code.
     * @nullable
     */
    jobTitleCode?: string;
    /**
     * Bank Code For Datev.
     * @nullable
     */
    bankCodeForDatev?: string;
    /**
     * Deviating Bank Account Owner.
     * @nullable
     */
    deviatingBankAccountOwner?: BoYesNoEnum;
    /**
     * Spouse First Name.
     * @nullable
     */
    spouseFirstName?: string;
    /**
     * Spouse Surname.
     * @nullable
     */
    spouseSurname?: string;
    /**
     * External Employee Number.
     * @nullable
     */
    externalEmployeeNumber?: string;
    /**
     * Birth Place.
     * @nullable
     */
    birthPlace?: string;
    /**
     * Payment Method.
     * @nullable
     */
    paymentMethod?: EmployeePaymentMethodEnum;
    /**
     * Std Code.
     * @nullable
     */
    stdCode?: number;
    /**
     * Cpf.
     * @nullable
     */
    cpf?: string;
    /**
     * Crc Number.
     * @nullable
     */
    crcNumber?: string;
    /**
     * Accountant Responsible.
     * @nullable
     */
    accountantResponsible?: BoYesNoEnum;
    /**
     * Legal Representative.
     * @nullable
     */
    legalRepresentative?: BoYesNoEnum;
    /**
     * Dirf Responsible.
     * @nullable
     */
    dirfResponsible?: BoYesNoEnum;
    /**
     * Crc State.
     * @nullable
     */
    crcState?: string;
    /**
     * Active.
     * @nullable
     */
    active?: BoYesNoEnum;
    /**
     * Id Type.
     * @nullable
     */
    idType?: string;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * Passport Issue Date.
     * @nullable
     */
    passportIssueDate?: Moment;
    /**
     * Passport Issuer.
     * @nullable
     */
    passportIssuer?: string;
    /**
     * Qualification Code.
     * @nullable
     */
    qualificationCode?: SpedContabilQualificationCodeEnum;
    /**
     * Pr Web Access.
     * @nullable
     */
    prWebAccess?: BoYesNoEnum;
    /**
     * Previous Pr Web Access.
     * @nullable
     */
    previousPrWebAccess?: BoYesNoEnum;
    /**
     * Work Street Number.
     * @nullable
     */
    workStreetNumber?: string;
    /**
     * Home Street Number.
     * @nullable
     */
    homeStreetNumber?: string;
    /**
     * Linked Vendor.
     * @nullable
     */
    linkedVendor?: string;
    /**
     * Employee Absence Info Lines.
     * @nullable
     */
    employeeAbsenceInfoLines?: EmployeeAbsenceInfo[];
    /**
     * Employee Education Info Lines.
     * @nullable
     */
    employeeEducationInfoLines?: EmployeeEducationInfo[];
    /**
     * Employee Reviews Info Lines.
     * @nullable
     */
    employeeReviewsInfoLines?: EmployeeReviewsInfo[];
    /**
     * Employee Previous Empoyment Info Lines.
     * @nullable
     */
    employeePreviousEmpoymentInfoLines?: EmployeePreviousEmpoymentInfo[];
    /**
     * Employee Roles Info Lines.
     * @nullable
     */
    employeeRolesInfoLines?: EmployeeRolesInfo[];
    /**
     * Employee Savings Payment Info Lines.
     * @nullable
     */
    employeeSavingsPaymentInfoLines?: EmployeeSavingsPaymentInfo[];
    /**
     * Employee Branch Assignment.
     * @nullable
     */
    employeeBranchAssignment?: EmployeeBranchAssignmentItem[];
    /**
     * One-to-many navigation property to the [[SalesOpportunities]] entity.
     */
    salesOpportunities: SalesOpportunities[];
    /**
     * One-to-many navigation property to the [[Warehouses]] entity.
     */
    warehouses: Warehouses[];
    /**
     * One-to-many navigation property to the [[ProfitCenters]] entity.
     */
    profitCenters: ProfitCenters[];
    /**
     * One-to-many navigation property to the [[InventoryGenEntries]] entity.
     */
    inventoryGenEntries: InventoryGenEntries[];
    /**
     * One-to-many navigation property to the [[PurchaseQuotations]] entity.
     */
    purchaseQuotations: PurchaseQuotations[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[DeliveryNotes]] entity.
     */
    deliveryNotes: DeliveryNotes[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-many navigation property to the [[Quotations]] entity.
     */
    quotations: Quotations[];
    /**
     * One-to-many navigation property to the [[Campaigns]] entity.
     */
    campaigns: Campaigns[];
    /**
     * One-to-many navigation property to the [[InventoryGenExits]] entity.
     */
    inventoryGenExits: InventoryGenExits[];
    /**
     * One-to-many navigation property to the [[PurchaseRequests]] entity.
     */
    purchaseRequests: PurchaseRequests[];
    /**
     * One-to-many navigation property to the [[ReturnRequest]] entity.
     */
    returnRequest: ReturnRequest[];
    /**
     * One-to-many navigation property to the [[BlanketAgreements]] entity.
     */
    blanketAgreements: BlanketAgreements[];
    /**
     * One-to-many navigation property to the [[PurchaseReturns]] entity.
     */
    purchaseReturns: PurchaseReturns[];
    /**
     * One-to-many navigation property to the [[Invoices]] entity.
     */
    invoices: Invoices[];
    /**
     * One-to-many navigation property to the [[CreditNotes]] entity.
     */
    creditNotes: CreditNotes[];
    /**
     * One-to-many navigation property to the [[Orders]] entity.
     */
    orders: Orders[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * One-to-many navigation property to the [[DownPayments]] entity.
     */
    downPayments: DownPayments[];
    /**
     * One-to-many navigation property to the [[Drafts]] entity.
     */
    drafts: Drafts[];
    /**
     * One-to-many navigation property to the [[Returns]] entity.
     */
    returns: Returns[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoiceReversal]] entity.
     */
    correctionInvoiceReversal: CorrectionInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoice]] entity.
     */
    correctionPurchaseInvoice: CorrectionPurchaseInvoice[];
    /**
     * One-to-many navigation property to the [[CorrectionPurchaseInvoiceReversal]] entity.
     */
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversal[];
    /**
     * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
     */
    customerEquipmentCards: CustomerEquipmentCards[];
    /**
     * One-to-many navigation property to the [[PurchaseInvoices]] entity.
     */
    purchaseInvoices: PurchaseInvoices[];
    /**
     * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
     */
    purchaseDeliveryNotes: PurchaseDeliveryNotes[];
    /**
     * One-to-many navigation property to the [[CorrectionInvoice]] entity.
     */
    correctionInvoice: CorrectionInvoice[];
    /**
     * One-to-many navigation property to the [[PurchaseCreditNotes]] entity.
     */
    purchaseCreditNotes: PurchaseCreditNotes[];
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * One-to-many navigation property to the [[PurchaseDownPayments]] entity.
     */
    purchaseDownPayments: PurchaseDownPayments[];
    /**
     * One-to-one navigation property to the [[EmployeeRolesSetup]] entity.
     */
    employeeRoleSetup: EmployeeRolesSetup;
    /**
     * One-to-one navigation property to the [[Departments]] entity.
     */
    department2: Departments;
    /**
     * One-to-one navigation property to the [[Branches]] entity.
     */
    branch2: Branches;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson: SalesPersons;
    /**
     * One-to-one navigation property to the [[EmployeeStatus]] entity.
     */
    employeeStatus: EmployeeStatus;
    /**
     * One-to-one navigation property to the [[TerminationReason]] entity.
     */
    terminationReason: TerminationReason;
    /**
     * One-to-one navigation property to the [[Banks]] entity.
     */
    bank: Banks;
    /**
     * One-to-one navigation property to the [[EmployeePosition]] entity.
     */
    employeePosition: EmployeePosition;
    /**
     * One-to-one navigation property to the [[ProfitCenters]] entity.
     */
    profitCenter: ProfitCenters;
    /**
     * One-to-one navigation property to the [[EmployeeIdType]] entity.
     */
    employeeIdType: EmployeeIdType;
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-many navigation property to the [[ProjectManagementTimeSheet]] entity.
     */
    projectManagementTimeSheet: ProjectManagementTimeSheet[];
    /**
     * One-to-many navigation property to the [[PurchaseOrders]] entity.
     */
    purchaseOrders: PurchaseOrders[];
    /**
     * One-to-many navigation property to the [[ProjectManagements]] entity.
     */
    projectManagements: ProjectManagements[];
    /**
     * One-to-many navigation property to the [[GoodsReturnRequest]] entity.
     */
    goodsReturnRequest: GoodsReturnRequest[];
    /**
     * Returns an entity builder to construct instances of `EmployeesInfo`.
     * @returns A builder that constructs instances of entity type `EmployeesInfo`.
     */
    static builder(): EntityBuilderType<EmployeesInfo, EmployeesInfoType>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeesInfo` entity type.
     * @returns A `EmployeesInfo` request builder.
     */
    static requestBuilder(): EmployeesInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeesInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeesInfo`.
     */
    static customField(fieldName: string): CustomFieldV4<EmployeesInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
import { Warehouses, WarehousesType } from './Warehouses';
import { ProfitCenters, ProfitCentersType } from './ProfitCenters';
import { InventoryGenEntries, InventoryGenEntriesType } from './InventoryGenEntries';
import { PurchaseQuotations, PurchaseQuotationsType } from './PurchaseQuotations';
import { Items, ItemsType } from './Items';
import { DeliveryNotes, DeliveryNotesType } from './DeliveryNotes';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Quotations, QuotationsType } from './Quotations';
import { Campaigns, CampaignsType } from './Campaigns';
import { InventoryGenExits, InventoryGenExitsType } from './InventoryGenExits';
import { PurchaseRequests, PurchaseRequestsType } from './PurchaseRequests';
import { ReturnRequest, ReturnRequestType } from './ReturnRequest';
import { BlanketAgreements, BlanketAgreementsType } from './BlanketAgreements';
import { PurchaseReturns, PurchaseReturnsType } from './PurchaseReturns';
import { Invoices, InvoicesType } from './Invoices';
import { CreditNotes, CreditNotesType } from './CreditNotes';
import { Orders, OrdersType } from './Orders';
import { Activities, ActivitiesType } from './Activities';
import { DownPayments, DownPaymentsType } from './DownPayments';
import { Drafts, DraftsType } from './Drafts';
import { Returns, ReturnsType } from './Returns';
import { CorrectionInvoiceReversal, CorrectionInvoiceReversalType } from './CorrectionInvoiceReversal';
import { CorrectionPurchaseInvoice, CorrectionPurchaseInvoiceType } from './CorrectionPurchaseInvoice';
import { CorrectionPurchaseInvoiceReversal, CorrectionPurchaseInvoiceReversalType } from './CorrectionPurchaseInvoiceReversal';
import { CustomerEquipmentCards, CustomerEquipmentCardsType } from './CustomerEquipmentCards';
import { PurchaseInvoices, PurchaseInvoicesType } from './PurchaseInvoices';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
import { CorrectionInvoice, CorrectionInvoiceType } from './CorrectionInvoice';
import { PurchaseCreditNotes, PurchaseCreditNotesType } from './PurchaseCreditNotes';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { PurchaseDownPayments, PurchaseDownPaymentsType } from './PurchaseDownPayments';
import { EmployeeRolesSetup, EmployeeRolesSetupType } from './EmployeeRolesSetup';
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
import { ProjectManagementTimeSheet, ProjectManagementTimeSheetType } from './ProjectManagementTimeSheet';
import { PurchaseOrders, PurchaseOrdersType } from './PurchaseOrders';
import { ProjectManagements, ProjectManagementsType } from './ProjectManagements';
import { GoodsReturnRequest, GoodsReturnRequestType } from './GoodsReturnRequest';
export interface EmployeesInfoType {
    employeeId?: number | null;
    lastName?: string | null;
    firstName?: string | null;
    middleName?: string | null;
    gender?: BoGenderTypes | null;
    jobTitle?: string | null;
    employeeType?: number | null;
    department?: number | null;
    branch?: number | null;
    workStreet?: string | null;
    workBlock?: string | null;
    workZipCode?: string | null;
    workCity?: string | null;
    workCounty?: string | null;
    workCountryCode?: string | null;
    workStateCode?: string | null;
    manager?: number | null;
    applicationUserId?: number | null;
    salesPersonCode?: number | null;
    officePhone?: string | null;
    officeExtension?: string | null;
    mobilePhone?: string | null;
    pager?: string | null;
    homePhone?: string | null;
    fax?: string | null;
    eMail?: string | null;
    startDate?: Moment | null;
    statusCode?: number | null;
    salary?: number | null;
    salaryUnit?: BoSalaryCostUnits | null;
    employeeCosts?: number | null;
    employeeCostUnit?: BoSalaryCostUnits | null;
    terminationDate?: Moment | null;
    treminationReason?: number | null;
    bankCode?: string | null;
    bankBranch?: string | null;
    bankBranchNum?: string | null;
    bankAccount?: string | null;
    homeStreet?: string | null;
    homeBlock?: string | null;
    homeZipCode?: string | null;
    homeCity?: string | null;
    homeCounty?: string | null;
    homeCountry?: string | null;
    homeState?: string | null;
    dateOfBirth?: Moment | null;
    countryOfBirth?: string | null;
    martialStatus?: BoMeritalStatuses | null;
    numOfChildren?: number | null;
    idNumber?: string | null;
    citizenshipCountryCode?: string | null;
    passportNumber?: string | null;
    passportExpirationDate?: Moment | null;
    picture?: string | null;
    remarks?: string | null;
    salaryCurrency?: string | null;
    employeeCostsCurrency?: string | null;
    workBuildingFloorRoom?: string | null;
    homeBuildingFloorRoom?: string | null;
    position?: number | null;
    attachmentEntry?: number | null;
    costCenterCode?: string | null;
    companyNumber?: string | null;
    vacationPreviousYear?: number | null;
    vacationCurrentYear?: number | null;
    municipalityKey?: string | null;
    taxClass?: string | null;
    incomeTaxLiability?: string | null;
    religion?: string | null;
    partnerReligion?: string | null;
    exemptionAmount?: number | null;
    exemptionUnit?: EmployeeExemptionUnitEnum | null;
    exemptionCurrency?: string | null;
    additionalAmount?: number | null;
    additionalUnit?: EmployeeExemptionUnitEnum | null;
    additionalCurrency?: string | null;
    taxOfficeName?: string | null;
    taxOfficeNumber?: string | null;
    healthInsuranceName?: string | null;
    healthInsuranceCode?: string | null;
    healthInsuranceType?: string | null;
    socialInsuranceNumber?: string | null;
    professionStatus?: string | null;
    educationStatus?: string | null;
    personGroup?: string | null;
    jobTitleCode?: string | null;
    bankCodeForDatev?: string | null;
    deviatingBankAccountOwner?: BoYesNoEnum | null;
    spouseFirstName?: string | null;
    spouseSurname?: string | null;
    externalEmployeeNumber?: string | null;
    birthPlace?: string | null;
    paymentMethod?: EmployeePaymentMethodEnum | null;
    stdCode?: number | null;
    cpf?: string | null;
    crcNumber?: string | null;
    accountantResponsible?: BoYesNoEnum | null;
    legalRepresentative?: BoYesNoEnum | null;
    dirfResponsible?: BoYesNoEnum | null;
    crcState?: string | null;
    active?: BoYesNoEnum | null;
    idType?: string | null;
    bplid?: number | null;
    passportIssueDate?: Moment | null;
    passportIssuer?: string | null;
    qualificationCode?: SpedContabilQualificationCodeEnum | null;
    prWebAccess?: BoYesNoEnum | null;
    previousPrWebAccess?: BoYesNoEnum | null;
    workStreetNumber?: string | null;
    homeStreetNumber?: string | null;
    linkedVendor?: string | null;
    employeeAbsenceInfoLines?: EmployeeAbsenceInfo[] | null;
    employeeEducationInfoLines?: EmployeeEducationInfo[] | null;
    employeeReviewsInfoLines?: EmployeeReviewsInfo[] | null;
    employeePreviousEmpoymentInfoLines?: EmployeePreviousEmpoymentInfo[] | null;
    employeeRolesInfoLines?: EmployeeRolesInfo[] | null;
    employeeSavingsPaymentInfoLines?: EmployeeSavingsPaymentInfo[] | null;
    employeeBranchAssignment?: EmployeeBranchAssignmentItem[] | null;
    salesOpportunities: SalesOpportunitiesType[];
    warehouses: WarehousesType[];
    profitCenters: ProfitCentersType[];
    inventoryGenEntries: InventoryGenEntriesType[];
    purchaseQuotations: PurchaseQuotationsType[];
    items: ItemsType[];
    deliveryNotes: DeliveryNotesType[];
    businessPartners: BusinessPartnersType[];
    quotations: QuotationsType[];
    campaigns: CampaignsType[];
    inventoryGenExits: InventoryGenExitsType[];
    purchaseRequests: PurchaseRequestsType[];
    returnRequest: ReturnRequestType[];
    blanketAgreements: BlanketAgreementsType[];
    purchaseReturns: PurchaseReturnsType[];
    invoices: InvoicesType[];
    creditNotes: CreditNotesType[];
    orders: OrdersType[];
    activities: ActivitiesType[];
    downPayments: DownPaymentsType[];
    drafts: DraftsType[];
    returns: ReturnsType[];
    correctionInvoiceReversal: CorrectionInvoiceReversalType[];
    correctionPurchaseInvoice: CorrectionPurchaseInvoiceType[];
    correctionPurchaseInvoiceReversal: CorrectionPurchaseInvoiceReversalType[];
    customerEquipmentCards: CustomerEquipmentCardsType[];
    purchaseInvoices: PurchaseInvoicesType[];
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
    correctionInvoice: CorrectionInvoiceType[];
    purchaseCreditNotes: PurchaseCreditNotesType[];
    serviceCalls: ServiceCallsType[];
    purchaseDownPayments: PurchaseDownPaymentsType[];
    employeeRoleSetup: EmployeeRolesSetupType;
    department2: DepartmentsType;
    branch2: BranchesType;
    country: CountriesType;
    user: UsersType;
    salesPerson: SalesPersonsType;
    employeeStatus: EmployeeStatusType;
    terminationReason: TerminationReasonType;
    bank: BanksType;
    employeePosition: EmployeePositionType;
    profitCenter: ProfitCentersType;
    employeeIdType: EmployeeIdTypeType;
    businessPlace: BusinessPlacesType;
    businessPartner: BusinessPartnersType;
    projectManagementTimeSheet: ProjectManagementTimeSheetType[];
    purchaseOrders: PurchaseOrdersType[];
    projectManagements: ProjectManagementsType[];
    goodsReturnRequest: GoodsReturnRequestType[];
}
export declare namespace EmployeesInfo {
    /**
     * Static representation of the [[employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_ID: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[employeeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TYPE: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[workStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_STREET: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[workBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_BLOCK: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[workZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ZIP_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[workCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_CITY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[workCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_COUNTY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[workCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_COUNTRY_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[workStateCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_STATE_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[manager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[applicationUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_USER_ID: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON_CODE: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[officePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICE_PHONE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[officeExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICE_EXTENSION: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[mobilePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILE_PHONE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[pager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAGER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_PHONE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[eMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_MAIL: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmployeesInfo>;
    /**
     * Static representation of the [[statusCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_CODE: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[salary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[salaryUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_UNIT: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[employeeCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_COSTS: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[employeeCostUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_COST_UNIT: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[terminationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERMINATION_DATE: DateField<EmployeesInfo>;
    /**
     * Static representation of the [[treminationReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TREMINATION_REASON: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[bankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_BRANCH: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[bankBranchNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_BRANCH_NUM: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_STREET: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_BLOCK: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_ZIP_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_CITY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_COUNTY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_COUNTRY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_STATE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_BIRTH: DateField<EmployeesInfo>;
    /**
     * Static representation of the [[countryOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_OF_BIRTH: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[martialStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MARTIAL_STATUS: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[numOfChildren]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUM_OF_CHILDREN: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[idNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[citizenshipCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITIZENSHIP_COUNTRY_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[passportNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSPORT_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[passportExpirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSPORT_EXPIRATION_DATE: DateField<EmployeesInfo>;
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICTURE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[salaryCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_CURRENCY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[employeeCostsCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_COSTS_CURRENCY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[workBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_BUILDING_FLOOR_ROOM: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_BUILDING_FLOOR_ROOM: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[costCenterCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[companyNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[vacationPreviousYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VACATION_PREVIOUS_YEAR: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[vacationCurrentYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VACATION_CURRENT_YEAR: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[municipalityKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MUNICIPALITY_KEY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[taxClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_CLASS: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[incomeTaxLiability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOME_TAX_LIABILITY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[religion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELIGION: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[partnerReligion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER_RELIGION: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[exemptionAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_AMOUNT: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[exemptionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_UNIT: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[exemptionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_CURRENCY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[additionalAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_AMOUNT: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[additionalUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_UNIT: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[additionalCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_CURRENCY: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[taxOfficeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_OFFICE_NAME: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[taxOfficeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_OFFICE_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[healthInsuranceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEALTH_INSURANCE_NAME: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[healthInsuranceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEALTH_INSURANCE_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[healthInsuranceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEALTH_INSURANCE_TYPE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[socialInsuranceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_INSURANCE_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[professionStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFESSION_STATUS: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[educationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDUCATION_STATUS: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[personGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_GROUP: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[jobTitleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE_CODE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[bankCodeForDatev]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CODE_FOR_DATEV: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[deviatingBankAccountOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEVIATING_BANK_ACCOUNT_OWNER: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[spouseFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOUSE_FIRST_NAME: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[spouseSurname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOUSE_SURNAME: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[externalEmployeeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_EMPLOYEE_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[birthPlace]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTH_PLACE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHOD: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[stdCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STD_CODE: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[cpf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CPF: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[crcNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CRC_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[accountantResponsible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTANT_RESPONSIBLE: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[legalRepresentative]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_REPRESENTATIVE: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[dirfResponsible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIRF_RESPONSIBLE: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[crcState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CRC_STATE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[idType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID_TYPE: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPLID: NumberField<EmployeesInfo>;
    /**
     * Static representation of the [[passportIssueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSPORT_ISSUE_DATE: DateField<EmployeesInfo>;
    /**
     * Static representation of the [[passportIssuer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSPORT_ISSUER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[qualificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUALIFICATION_CODE: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[prWebAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PR_WEB_ACCESS: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[previousPrWebAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREVIOUS_PR_WEB_ACCESS: EnumField<EmployeesInfo>;
    /**
     * Static representation of the [[workStreetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_STREET_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[homeStreetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_STREET_NUMBER: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[linkedVendor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_VENDOR: StringField<EmployeesInfo>;
    /**
     * Static representation of the [[employeeAbsenceInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_ABSENCE_INFO_LINES: CollectionField<EmployeesInfo, EmployeeAbsenceInfo>;
    /**
     * Static representation of the [[employeeEducationInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_EDUCATION_INFO_LINES: CollectionField<EmployeesInfo, EmployeeEducationInfo>;
    /**
     * Static representation of the [[employeeReviewsInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_REVIEWS_INFO_LINES: CollectionField<EmployeesInfo, EmployeeReviewsInfo>;
    /**
     * Static representation of the [[employeePreviousEmpoymentInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PREVIOUS_EMPOYMENT_INFO_LINES: CollectionField<EmployeesInfo, EmployeePreviousEmpoymentInfo>;
    /**
     * Static representation of the [[employeeRolesInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_ROLES_INFO_LINES: CollectionField<EmployeesInfo, EmployeeRolesInfo>;
    /**
     * Static representation of the [[employeeSavingsPaymentInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_SAVINGS_PAYMENT_INFO_LINES: CollectionField<EmployeesInfo, EmployeeSavingsPaymentInfo>;
    /**
     * Static representation of the [[employeeBranchAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_BRANCH_ASSIGNMENT: CollectionField<EmployeesInfo, EmployeeBranchAssignmentItem>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<EmployeesInfo, SalesOpportunities>;
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSES: OneToManyLink<EmployeesInfo, Warehouses>;
    /**
     * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFIT_CENTERS: OneToManyLink<EmployeesInfo, ProfitCenters>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_ENTRIES: OneToManyLink<EmployeesInfo, InventoryGenEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QUOTATIONS: OneToManyLink<EmployeesInfo, PurchaseQuotations>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<EmployeesInfo, Items>;
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NOTES: OneToManyLink<EmployeesInfo, DeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<EmployeesInfo, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTATIONS: OneToManyLink<EmployeesInfo, Quotations>;
    /**
     * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAMPAIGNS: OneToManyLink<EmployeesInfo, Campaigns>;
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_GEN_EXITS: OneToManyLink<EmployeesInfo, InventoryGenExits>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_REQUESTS: OneToManyLink<EmployeesInfo, PurchaseRequests>;
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURN_REQUEST: OneToManyLink<EmployeesInfo, ReturnRequest>;
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLANKET_AGREEMENTS: OneToManyLink<EmployeesInfo, BlanketAgreements>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_RETURNS: OneToManyLink<EmployeesInfo, PurchaseReturns>;
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICES: OneToManyLink<EmployeesInfo, Invoices>;
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_NOTES: OneToManyLink<EmployeesInfo, CreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDERS: OneToManyLink<EmployeesInfo, Orders>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<EmployeesInfo, Activities>;
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOWN_PAYMENTS: OneToManyLink<EmployeesInfo, DownPayments>;
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFTS: OneToManyLink<EmployeesInfo, Drafts>;
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RETURNS: OneToManyLink<EmployeesInfo, Returns>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE_REVERSAL: OneToManyLink<EmployeesInfo, CorrectionInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE: OneToManyLink<EmployeesInfo, CorrectionPurchaseInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_PURCHASE_INVOICE_REVERSAL: OneToManyLink<EmployeesInfo, CorrectionPurchaseInvoiceReversal>;
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<EmployeesInfo, CustomerEquipmentCards>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_INVOICES: OneToManyLink<EmployeesInfo, PurchaseInvoices>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<EmployeesInfo, PurchaseDeliveryNotes>;
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRECTION_INVOICE: OneToManyLink<EmployeesInfo, CorrectionInvoice>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_CREDIT_NOTES: OneToManyLink<EmployeesInfo, PurchaseCreditNotes>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<EmployeesInfo, ServiceCalls>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DOWN_PAYMENTS: OneToManyLink<EmployeesInfo, PurchaseDownPayments>;
    /**
     * Static representation of the one-to-one navigation property [[employeeRoleSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_ROLE_SETUP: OneToOneLink<EmployeesInfo, EmployeeRolesSetup>;
    /**
     * Static representation of the one-to-one navigation property [[department2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_2: OneToOneLink<EmployeesInfo, Departments>;
    /**
     * Static representation of the one-to-one navigation property [[branch2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH_2: OneToOneLink<EmployeesInfo, Branches>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<EmployeesInfo, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<EmployeesInfo, Users>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<EmployeesInfo, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[employeeStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_STATUS: OneToOneLink<EmployeesInfo, EmployeeStatus>;
    /**
     * Static representation of the one-to-one navigation property [[terminationReason]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERMINATION_REASON: OneToOneLink<EmployeesInfo, TerminationReason>;
    /**
     * Static representation of the one-to-one navigation property [[bank]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK: OneToOneLink<EmployeesInfo, Banks>;
    /**
     * Static representation of the one-to-one navigation property [[employeePosition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_POSITION: OneToOneLink<EmployeesInfo, EmployeePosition>;
    /**
     * Static representation of the one-to-one navigation property [[profitCenter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFIT_CENTER: OneToOneLink<EmployeesInfo, ProfitCenters>;
    /**
     * Static representation of the one-to-one navigation property [[employeeIdType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_ID_TYPE: OneToOneLink<EmployeesInfo, EmployeeIdType>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<EmployeesInfo, BusinessPlaces>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<EmployeesInfo, BusinessPartners>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagementTimeSheet]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENT_TIME_SHEET: OneToManyLink<EmployeesInfo, ProjectManagementTimeSheet>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDERS: OneToManyLink<EmployeesInfo, PurchaseOrders>;
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_MANAGEMENTS: OneToManyLink<EmployeesInfo, ProjectManagements>;
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RETURN_REQUEST: OneToManyLink<EmployeesInfo, GoodsReturnRequest>;
    /**
     * All fields of the EmployeesInfo entity.
     */
    const _allFields: Array<NumberField<EmployeesInfo> | StringField<EmployeesInfo> | EnumField<EmployeesInfo> | DateField<EmployeesInfo> | CollectionField<EmployeesInfo, EmployeeAbsenceInfo> | CollectionField<EmployeesInfo, EmployeeEducationInfo> | CollectionField<EmployeesInfo, EmployeeReviewsInfo> | CollectionField<EmployeesInfo, EmployeePreviousEmpoymentInfo> | CollectionField<EmployeesInfo, EmployeeRolesInfo> | CollectionField<EmployeesInfo, EmployeeSavingsPaymentInfo> | CollectionField<EmployeesInfo, EmployeeBranchAssignmentItem> | OneToManyLink<EmployeesInfo, SalesOpportunities> | OneToManyLink<EmployeesInfo, Warehouses> | OneToManyLink<EmployeesInfo, ProfitCenters> | OneToManyLink<EmployeesInfo, InventoryGenEntries> | OneToManyLink<EmployeesInfo, PurchaseQuotations> | OneToManyLink<EmployeesInfo, Items> | OneToManyLink<EmployeesInfo, DeliveryNotes> | OneToManyLink<EmployeesInfo, BusinessPartners> | OneToManyLink<EmployeesInfo, Quotations> | OneToManyLink<EmployeesInfo, Campaigns> | OneToManyLink<EmployeesInfo, InventoryGenExits> | OneToManyLink<EmployeesInfo, PurchaseRequests> | OneToManyLink<EmployeesInfo, ReturnRequest> | OneToManyLink<EmployeesInfo, BlanketAgreements> | OneToManyLink<EmployeesInfo, PurchaseReturns> | OneToManyLink<EmployeesInfo, Invoices> | OneToManyLink<EmployeesInfo, CreditNotes> | OneToManyLink<EmployeesInfo, Orders> | OneToManyLink<EmployeesInfo, Activities> | OneToManyLink<EmployeesInfo, DownPayments> | OneToManyLink<EmployeesInfo, Drafts> | OneToManyLink<EmployeesInfo, Returns> | OneToManyLink<EmployeesInfo, CorrectionInvoiceReversal> | OneToManyLink<EmployeesInfo, CorrectionPurchaseInvoice> | OneToManyLink<EmployeesInfo, CorrectionPurchaseInvoiceReversal> | OneToManyLink<EmployeesInfo, CustomerEquipmentCards> | OneToManyLink<EmployeesInfo, PurchaseInvoices> | OneToManyLink<EmployeesInfo, PurchaseDeliveryNotes> | OneToManyLink<EmployeesInfo, CorrectionInvoice> | OneToManyLink<EmployeesInfo, PurchaseCreditNotes> | OneToManyLink<EmployeesInfo, ServiceCalls> | OneToManyLink<EmployeesInfo, PurchaseDownPayments> | OneToOneLink<EmployeesInfo, EmployeeRolesSetup> | OneToOneLink<EmployeesInfo, Departments> | OneToOneLink<EmployeesInfo, Branches> | OneToOneLink<EmployeesInfo, Countries> | OneToOneLink<EmployeesInfo, Users> | OneToOneLink<EmployeesInfo, SalesPersons> | OneToOneLink<EmployeesInfo, EmployeeStatus> | OneToOneLink<EmployeesInfo, TerminationReason> | OneToOneLink<EmployeesInfo, Banks> | OneToOneLink<EmployeesInfo, EmployeePosition> | OneToOneLink<EmployeesInfo, ProfitCenters> | OneToOneLink<EmployeesInfo, EmployeeIdType> | OneToOneLink<EmployeesInfo, BusinessPlaces> | OneToOneLink<EmployeesInfo, BusinessPartners> | OneToManyLink<EmployeesInfo, ProjectManagementTimeSheet> | OneToManyLink<EmployeesInfo, PurchaseOrders> | OneToManyLink<EmployeesInfo, ProjectManagements> | OneToManyLink<EmployeesInfo, GoodsReturnRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeesInfo>;
    /**
     * All key fields of the EmployeesInfo entity.
     */
    const _keyFields: Array<Field<EmployeesInfo>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeesInfo.
     */
    const _keys: {
        [keys: string]: Field<EmployeesInfo>;
    };
}
//# sourceMappingURL=EmployeesInfo.d.ts.map