import { UsersRequestBuilder } from './UsersRequestBuilder';
import { Moment } from 'moment';
import { UserPermissionItem } from './UserPermissionItem';
import { UserActionRecordItem } from './UserActionRecordItem';
import { UserGroupByUserItem } from './UserGroupByUserItem';
import { UserBranchAssignmentItem } from './UserBranchAssignmentItem';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Users" of service "SAPB1".
 */
export declare class Users extends Entity implements UsersType {
    /**
     * Technical entity name for Users.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Users.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Internal Key.
     * @nullable
     */
    internalKey?: number;
    /**
     * User Password.
     * @nullable
     */
    userPassword?: string;
    /**
     * User Code.
     * @nullable
     */
    userCode?: string;
    /**
     * User Name.
     * @nullable
     */
    userName?: string;
    /**
     * E Mail.
     * @nullable
     */
    eMail?: string;
    /**
     * Mobile Phone Number.
     * @nullable
     */
    mobilePhoneNumber?: string;
    /**
     * Defaults.
     * @nullable
     */
    defaults?: string;
    /**
     * Fax Number.
     * @nullable
     */
    faxNumber?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: number;
    /**
     * Department.
     * @nullable
     */
    department?: number;
    /**
     * Max Discount General.
     * @nullable
     */
    maxDiscountGeneral?: number;
    /**
     * Max Discount Sales.
     * @nullable
     */
    maxDiscountSales?: number;
    /**
     * Max Discount Purchase.
     * @nullable
     */
    maxDiscountPurchase?: number;
    /**
     * Max Cash Amt For Incmng Payts.
     * @nullable
     */
    maxCashAmtForIncmngPayts?: number;
    /**
     * Last Logout Date.
     * @nullable
     */
    lastLogoutDate?: Moment;
    /**
     * Last Login Time.
     * @nullable
     */
    lastLoginTime?: Time;
    /**
     * Last Logout Time.
     * @nullable
     */
    lastLogoutTime?: Time;
    /**
     * Last Password Change Time.
     * @nullable
     */
    lastPasswordChangeTime?: Time;
    /**
     * Last Password Changed By.
     * @nullable
     */
    lastPasswordChangedBy?: string;
    /**
     * User Permission.
     * @nullable
     */
    userPermission?: UserPermissionItem[];
    /**
     * User Action Record.
     * @nullable
     */
    userActionRecord?: UserActionRecordItem[];
    /**
     * User Group By User.
     * @nullable
     */
    userGroupByUser?: UserGroupByUserItem[];
    /**
     * User Branch Assignment.
     * @nullable
     */
    userBranchAssignment?: UserBranchAssignmentItem[];
    /**
     * One-to-many navigation property to the [[SalesOpportunities]] entity.
     */
    salesOpportunities: SalesOpportunities[];
    /**
     * One-to-many navigation property to the [[UserDefaultGroups]] entity.
     */
    userDefaultGroups: UserDefaultGroups[];
    /**
     * One-to-many navigation property to the [[WorkOrders]] entity.
     */
    workOrders: WorkOrders[];
    /**
     * One-to-many navigation property to the [[LegalData]] entity.
     */
    legalData: LegalData[];
    /**
     * One-to-many navigation property to the [[BankPages]] entity.
     */
    bankPages: BankPages[];
    /**
     * One-to-many navigation property to the [[FormPreferences]] entity.
     */
    formPreferences: FormPreferences[];
    /**
     * One-to-many navigation property to the [[Contacts]] entity.
     */
    contacts: Contacts[];
    /**
     * One-to-many navigation property to the [[ProductionOrders]] entity.
     */
    productionOrders: ProductionOrders[];
    /**
     * One-to-many navigation property to the [[ServiceContracts]] entity.
     */
    serviceContracts: ServiceContracts[];
    /**
     * One-to-many navigation property to the [[Queue]] entity.
     */
    queue: Queue[];
    /**
     * One-to-one navigation property to the [[Branches]] entity.
     */
    branch2: Branches;
    /**
     * One-to-one navigation property to the [[Departments]] entity.
     */
    department2: Departments;
    /**
     * One-to-many navigation property to the [[Cockpits]] entity.
     */
    cockpits: Cockpits[];
    /**
     * One-to-many navigation property to the [[PickLists]] entity.
     */
    pickLists: PickLists[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * One-to-many navigation property to the [[ApprovalRequests]] entity.
     */
    approvalRequests: ApprovalRequests[];
    /**
     * One-to-many navigation property to the [[SalesTaxAuthorities]] entity.
     */
    salesTaxAuthorities: SalesTaxAuthorities[];
    /**
     * One-to-many navigation property to the [[WizardPaymentMethods]] entity.
     */
    wizardPaymentMethods: WizardPaymentMethods[];
    /**
     * One-to-many navigation property to the [[SalesTaxAuthoritiesTypes]] entity.
     */
    salesTaxAuthoritiesTypes: SalesTaxAuthoritiesTypes[];
    /**
     * One-to-many navigation property to the [[SalesTaxCodes]] entity.
     */
    salesTaxCodes: SalesTaxCodes[];
    /**
     * One-to-many navigation property to the [[MaterialRevaluation]] entity.
     */
    materialRevaluation: MaterialRevaluation[];
    /**
     * One-to-many navigation property to the [[KnowledgeBaseSolutions]] entity.
     */
    knowledgeBaseSolutions: KnowledgeBaseSolutions[];
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * One-to-many navigation property to the [[UserPermissionTree]] entity.
     */
    userPermissionTree: UserPermissionTree[];
    /**
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * Returns an entity builder to construct instances `Users`.
     * @returns A builder that constructs instances of entity type `Users`.
     */
    static builder(): EntityBuilderType<Users, UsersTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Users` entity type.
     * @returns A `Users` request builder.
     */
    static requestBuilder(): UsersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Users`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Users`.
     */
    static customField(fieldName: string): CustomField<Users>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SalesOpportunities, SalesOpportunitiesType } from './SalesOpportunities';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { WorkOrders, WorkOrdersType } from './WorkOrders';
import { LegalData, LegalDataType } from './LegalData';
import { BankPages, BankPagesType } from './BankPages';
import { FormPreferences, FormPreferencesType } from './FormPreferences';
import { Contacts, ContactsType } from './Contacts';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { ServiceContracts, ServiceContractsType } from './ServiceContracts';
import { Queue, QueueType } from './Queue';
import { Branches, BranchesType } from './Branches';
import { Departments, DepartmentsType } from './Departments';
import { Cockpits, CockpitsType } from './Cockpits';
import { PickLists, PickListsType } from './PickLists';
import { Activities, ActivitiesType } from './Activities';
import { ApprovalRequests, ApprovalRequestsType } from './ApprovalRequests';
import { SalesTaxAuthorities, SalesTaxAuthoritiesType } from './SalesTaxAuthorities';
import { WizardPaymentMethods, WizardPaymentMethodsType } from './WizardPaymentMethods';
import { SalesTaxAuthoritiesTypes, SalesTaxAuthoritiesTypesType } from './SalesTaxAuthoritiesTypes';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { MaterialRevaluation, MaterialRevaluationType } from './MaterialRevaluation';
import { KnowledgeBaseSolutions, KnowledgeBaseSolutionsType } from './KnowledgeBaseSolutions';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { UserPermissionTree, UserPermissionTreeType } from './UserPermissionTree';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
export interface UsersType {
    internalKey?: number;
    userPassword?: string;
    userCode?: string;
    userName?: string;
    eMail?: string;
    mobilePhoneNumber?: string;
    defaults?: string;
    faxNumber?: string;
    branch?: number;
    department?: number;
    maxDiscountGeneral?: number;
    maxDiscountSales?: number;
    maxDiscountPurchase?: number;
    maxCashAmtForIncmngPayts?: number;
    lastLogoutDate?: Moment;
    lastLoginTime?: Time;
    lastLogoutTime?: Time;
    lastPasswordChangeTime?: Time;
    lastPasswordChangedBy?: string;
    userPermission?: UserPermissionItem[];
    userActionRecord?: UserActionRecordItem[];
    userGroupByUser?: UserGroupByUserItem[];
    userBranchAssignment?: UserBranchAssignmentItem[];
    salesOpportunities: SalesOpportunitiesType[];
    userDefaultGroups: UserDefaultGroupsType[];
    workOrders: WorkOrdersType[];
    legalData: LegalDataType[];
    bankPages: BankPagesType[];
    formPreferences: FormPreferencesType[];
    contacts: ContactsType[];
    productionOrders: ProductionOrdersType[];
    serviceContracts: ServiceContractsType[];
    queue: QueueType[];
    branch2: BranchesType;
    department2: DepartmentsType;
    cockpits: CockpitsType[];
    pickLists: PickListsType[];
    activities: ActivitiesType[];
    approvalRequests: ApprovalRequestsType[];
    salesTaxAuthorities: SalesTaxAuthoritiesType[];
    wizardPaymentMethods: WizardPaymentMethodsType[];
    salesTaxAuthoritiesTypes: SalesTaxAuthoritiesTypesType[];
    salesTaxCodes: SalesTaxCodesType[];
    materialRevaluation: MaterialRevaluationType[];
    knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
    serviceCalls: ServiceCallsType[];
    userPermissionTree: UserPermissionTreeType[];
    employeesInfo: EmployeesInfoType[];
}
export interface UsersTypeForceMandatory {
    internalKey: number;
    userPassword: string;
    userCode: string;
    userName: string;
    eMail: string;
    mobilePhoneNumber: string;
    defaults: string;
    faxNumber: string;
    branch: number;
    department: number;
    maxDiscountGeneral: number;
    maxDiscountSales: number;
    maxDiscountPurchase: number;
    maxCashAmtForIncmngPayts: number;
    lastLogoutDate: Moment;
    lastLoginTime: Time;
    lastLogoutTime: Time;
    lastPasswordChangeTime: Time;
    lastPasswordChangedBy: string;
    userPermission: UserPermissionItem[];
    userActionRecord: UserActionRecordItem[];
    userGroupByUser: UserGroupByUserItem[];
    userBranchAssignment: UserBranchAssignmentItem[];
    salesOpportunities: SalesOpportunitiesType[];
    userDefaultGroups: UserDefaultGroupsType[];
    workOrders: WorkOrdersType[];
    legalData: LegalDataType[];
    bankPages: BankPagesType[];
    formPreferences: FormPreferencesType[];
    contacts: ContactsType[];
    productionOrders: ProductionOrdersType[];
    serviceContracts: ServiceContractsType[];
    queue: QueueType[];
    branch2: BranchesType;
    department2: DepartmentsType;
    cockpits: CockpitsType[];
    pickLists: PickListsType[];
    activities: ActivitiesType[];
    approvalRequests: ApprovalRequestsType[];
    salesTaxAuthorities: SalesTaxAuthoritiesType[];
    wizardPaymentMethods: WizardPaymentMethodsType[];
    salesTaxAuthoritiesTypes: SalesTaxAuthoritiesTypesType[];
    salesTaxCodes: SalesTaxCodesType[];
    materialRevaluation: MaterialRevaluationType[];
    knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
    serviceCalls: ServiceCallsType[];
    userPermissionTree: UserPermissionTreeType[];
    employeesInfo: EmployeesInfoType[];
}
export declare namespace Users {
    /**
     * Static representation of the [[internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_KEY: NumberField<Users>;
    /**
     * Static representation of the [[userPassword]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_PASSWORD: StringField<Users>;
    /**
     * Static representation of the [[userCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_CODE: StringField<Users>;
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAME: StringField<Users>;
    /**
     * Static representation of the [[eMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_MAIL: StringField<Users>;
    /**
     * Static representation of the [[mobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILE_PHONE_NUMBER: StringField<Users>;
    /**
     * Static representation of the [[defaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULTS: StringField<Users>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: StringField<Users>;
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH: NumberField<Users>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: NumberField<Users>;
    /**
     * Static representation of the [[maxDiscountGeneral]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_DISCOUNT_GENERAL: NumberField<Users>;
    /**
     * Static representation of the [[maxDiscountSales]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_DISCOUNT_SALES: NumberField<Users>;
    /**
     * Static representation of the [[maxDiscountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_DISCOUNT_PURCHASE: NumberField<Users>;
    /**
     * Static representation of the [[maxCashAmtForIncmngPayts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_CASH_AMT_FOR_INCMNG_PAYTS: NumberField<Users>;
    /**
     * Static representation of the [[lastLogoutDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_LOGOUT_DATE: DateField<Users>;
    /**
     * Static representation of the [[lastLoginTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_LOGIN_TIME: TimeField<Users>;
    /**
     * Static representation of the [[lastLogoutTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_LOGOUT_TIME: TimeField<Users>;
    /**
     * Static representation of the [[lastPasswordChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_PASSWORD_CHANGE_TIME: TimeField<Users>;
    /**
     * Static representation of the [[lastPasswordChangedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_PASSWORD_CHANGED_BY: StringField<Users>;
    /**
     * Static representation of the [[userPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_PERMISSION: CollectionField<Users>;
    /**
     * Static representation of the [[userActionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ACTION_RECORD: CollectionField<Users>;
    /**
     * Static representation of the [[userGroupByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_GROUP_BY_USER: CollectionField<Users>;
    /**
     * Static representation of the [[userBranchAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_BRANCH_ASSIGNMENT: CollectionField<Users>;
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITIES: OneToManyLink<Users, SalesOpportunities>;
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEFAULT_GROUPS: OneToManyLink<Users, UserDefaultGroups>;
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDERS: OneToManyLink<Users, WorkOrders>;
    /**
     * Static representation of the one-to-many navigation property [[legalData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_DATA: OneToManyLink<Users, LegalData>;
    /**
     * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_PAGES: OneToManyLink<Users, BankPages>;
    /**
     * Static representation of the one-to-many navigation property [[formPreferences]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_PREFERENCES: OneToManyLink<Users, FormPreferences>;
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACTS: OneToManyLink<Users, Contacts>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<Users, ProductionOrders>;
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CONTRACTS: OneToManyLink<Users, ServiceContracts>;
    /**
     * Static representation of the one-to-many navigation property [[queue]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUEUE: OneToManyLink<Users, Queue>;
    /**
     * Static representation of the one-to-one navigation property [[branch2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRANCH_2: OneToOneLink<Users, Branches>;
    /**
     * Static representation of the one-to-one navigation property [[department2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_2: OneToOneLink<Users, Departments>;
    /**
     * Static representation of the one-to-many navigation property [[cockpits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COCKPITS: OneToManyLink<Users, Cockpits>;
    /**
     * Static representation of the one-to-many navigation property [[pickLists]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICK_LISTS: OneToManyLink<Users, PickLists>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<Users, Activities>;
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_REQUESTS: OneToManyLink<Users, ApprovalRequests>;
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_AUTHORITIES: OneToManyLink<Users, SalesTaxAuthorities>;
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIZARD_PAYMENT_METHODS: OneToManyLink<Users, WizardPaymentMethods>;
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthoritiesTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_AUTHORITIES_TYPES: OneToManyLink<Users, SalesTaxAuthoritiesTypes>;
    /**
     * Static representation of the one-to-many navigation property [[salesTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODES: OneToManyLink<Users, SalesTaxCodes>;
    /**
     * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_REVALUATION: OneToManyLink<Users, MaterialRevaluation>;
    /**
     * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<Users, KnowledgeBaseSolutions>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<Users, ServiceCalls>;
    /**
     * Static representation of the one-to-many navigation property [[userPermissionTree]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_PERMISSION_TREE: OneToManyLink<Users, UserPermissionTree>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<Users, EmployeesInfo>;
    /**
     * All fields of the Users entity.
     */
    const _allFields: Array<NumberField<Users> | StringField<Users> | DateField<Users> | TimeField<Users> | CollectionField<Users> | OneToManyLink<Users, SalesOpportunities> | OneToManyLink<Users, UserDefaultGroups> | OneToManyLink<Users, WorkOrders> | OneToManyLink<Users, LegalData> | OneToManyLink<Users, BankPages> | OneToManyLink<Users, FormPreferences> | OneToManyLink<Users, Contacts> | OneToManyLink<Users, ProductionOrders> | OneToManyLink<Users, ServiceContracts> | OneToManyLink<Users, Queue> | OneToOneLink<Users, Branches> | OneToOneLink<Users, Departments> | OneToManyLink<Users, Cockpits> | OneToManyLink<Users, PickLists> | OneToManyLink<Users, Activities> | OneToManyLink<Users, ApprovalRequests> | OneToManyLink<Users, SalesTaxAuthorities> | OneToManyLink<Users, WizardPaymentMethods> | OneToManyLink<Users, SalesTaxAuthoritiesTypes> | OneToManyLink<Users, SalesTaxCodes> | OneToManyLink<Users, MaterialRevaluation> | OneToManyLink<Users, KnowledgeBaseSolutions> | OneToManyLink<Users, ServiceCalls> | OneToManyLink<Users, UserPermissionTree> | OneToManyLink<Users, EmployeesInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Users>;
    /**
     * All key fields of the Users entity.
     */
    const _keyFields: Array<Field<Users>>;
    /**
     * Mapping of all key field names to the respective static field property Users.
     */
    const _keys: {
        [keys: string]: Field<Users>;
    };
}
//# sourceMappingURL=Users.d.ts.map