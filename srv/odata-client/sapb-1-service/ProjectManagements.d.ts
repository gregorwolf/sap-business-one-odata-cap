import { ProjectManagementsRequestBuilder } from './ProjectManagementsRequestBuilder';
import { Moment } from 'moment';
import { PmStageData } from './PmStageData';
import { PmOpenIssueData } from './PmOpenIssueData';
import { PmDocumentData } from './PmDocumentData';
import { PmActivityData } from './PmActivityData';
import { PmWorkOrderData } from './PmWorkOrderData';
import { PmSummaryData, PmSummaryDataField } from './PmSummaryData';
import { PmDocAttachement } from './PmDocAttachement';
import { PmStageAttachement } from './PmStageAttachement';
import { ProjectTypeEnum } from './ProjectTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ProjectStatusTypeEnum } from './ProjectStatusTypeEnum';
import { RiskLevelTypeEnum } from './RiskLevelTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ProjectManagements" of service "SAPB1".
 */
export declare class ProjectManagements extends EntityV4 implements ProjectManagementsType {
    /**
     * Technical entity name for ProjectManagements.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Owner.
     * @nullable
     */
    owner?: number;
    /**
     * Project Name.
     * @nullable
     */
    projectName?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Finished Percent.
     * @nullable
     */
    finishedPercent?: number;
    /**
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Project Type.
     * @nullable
     */
    projectType?: ProjectTypeEnum;
    /**
     * Business Partner.
     * @nullable
     */
    businessPartner?: string;
    /**
     * Business Partner Name.
     * @nullable
     */
    businessPartnerName?: string;
    /**
     * Contact Person.
     * @nullable
     */
    contactPerson?: number;
    /**
     * Territory.
     * @nullable
     */
    territory?: number;
    /**
     * Sales Employee.
     * @nullable
     */
    salesEmployee?: number;
    /**
     * Allow Subprojects.
     * @nullable
     */
    allowSubprojects?: BoYesNoEnum;
    /**
     * Project Status.
     * @nullable
     */
    projectStatus?: ProjectStatusTypeEnum;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Closing Date.
     * @nullable
     */
    closingDate?: Moment;
    /**
     * Financial Project.
     * @nullable
     */
    financialProject?: string;
    /**
     * Risk Level.
     * @nullable
     */
    riskLevel?: RiskLevelTypeEnum;
    /**
     * Industry.
     * @nullable
     */
    industry?: number;
    /**
     * Reason.
     * @nullable
     */
    reason?: string;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Pm Stages Collection.
     * @nullable
     */
    pmStagesCollection?: PmStageData[];
    /**
     * Pm Open Issues Collection.
     * @nullable
     */
    pmOpenIssuesCollection?: PmOpenIssueData[];
    /**
     * Pm Documents Collection.
     * @nullable
     */
    pmDocumentsCollection?: PmDocumentData[];
    /**
     * Pm Activities Collection.
     * @nullable
     */
    pmActivitiesCollection?: PmActivityData[];
    /**
     * Pm Work Orders Collection.
     * @nullable
     */
    pmWorkOrdersCollection?: PmWorkOrderData[];
    /**
     * Pm Summary Data.
     * @nullable
     */
    pmSummaryData?: PmSummaryData;
    /**
     * Pm Doc Attachements.
     * @nullable
     */
    pmDocAttachements?: PmDocAttachement[];
    /**
     * Pm Stage Attachements.
     * @nullable
     */
    pmStageAttachements?: PmStageAttachement[];
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner2: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Territories]] entity.
     */
    territory2: Territories;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson: SalesPersons;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project: Projects;
    /**
     * One-to-one navigation property to the [[Industries]] entity.
     */
    industry2: Industries;
    /**
     * One-to-one navigation property to the [[Attachments2]] entity.
     */
    attachments2: Attachments2;
    /**
     * Returns an entity builder to construct instances of `ProjectManagements`.
     * @returns A builder that constructs instances of entity type `ProjectManagements`.
     */
    static builder(): EntityBuilderType<ProjectManagements, ProjectManagementsType>;
    /**
     * Returns a request builder to construct requests for operations on the `ProjectManagements` entity type.
     * @returns A `ProjectManagements` request builder.
     */
    static requestBuilder(): ProjectManagementsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProjectManagements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProjectManagements`.
     */
    static customField(fieldName: string): CustomFieldV4<ProjectManagements>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Territories, TerritoriesType } from './Territories';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Projects, ProjectsType } from './Projects';
import { Industries, IndustriesType } from './Industries';
import { Attachments2, Attachments2Type } from './Attachments2';
export interface ProjectManagementsType {
    absEntry?: number | null;
    owner?: number | null;
    projectName?: string | null;
    startDate?: Moment | null;
    finishedPercent?: number | null;
    docNum?: number | null;
    series?: number | null;
    projectType?: ProjectTypeEnum | null;
    businessPartner?: string | null;
    businessPartnerName?: string | null;
    contactPerson?: number | null;
    territory?: number | null;
    salesEmployee?: number | null;
    allowSubprojects?: BoYesNoEnum | null;
    projectStatus?: ProjectStatusTypeEnum | null;
    dueDate?: Moment | null;
    closingDate?: Moment | null;
    financialProject?: string | null;
    riskLevel?: RiskLevelTypeEnum | null;
    industry?: number | null;
    reason?: string | null;
    attachmentEntry?: number | null;
    pmStagesCollection?: PmStageData[] | null;
    pmOpenIssuesCollection?: PmOpenIssueData[] | null;
    pmDocumentsCollection?: PmDocumentData[] | null;
    pmActivitiesCollection?: PmActivityData[] | null;
    pmWorkOrdersCollection?: PmWorkOrderData[] | null;
    pmSummaryData?: PmSummaryData | null;
    pmDocAttachements?: PmDocAttachement[] | null;
    pmStageAttachements?: PmStageAttachement[] | null;
    employeeInfo: EmployeesInfoType;
    businessPartner2: BusinessPartnersType;
    territory2: TerritoriesType;
    salesPerson: SalesPersonsType;
    project: ProjectsType;
    industry2: IndustriesType;
    attachments2: Attachments2Type;
}
export declare namespace ProjectManagements {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[projectName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_NAME: StringField<ProjectManagements>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<ProjectManagements>;
    /**
     * Static representation of the [[finishedPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINISHED_PERCENT: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[projectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_TYPE: EnumField<ProjectManagements>;
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: StringField<ProjectManagements>;
    /**
     * Static representation of the [[businessPartnerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_NAME: StringField<ProjectManagements>;
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[territory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_EMPLOYEE: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[allowSubprojects]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_SUBPROJECTS: EnumField<ProjectManagements>;
    /**
     * Static representation of the [[projectStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_STATUS: EnumField<ProjectManagements>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<ProjectManagements>;
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_DATE: DateField<ProjectManagements>;
    /**
     * Static representation of the [[financialProject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PROJECT: StringField<ProjectManagements>;
    /**
     * Static representation of the [[riskLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RISK_LEVEL: EnumField<ProjectManagements>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[reason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON: StringField<ProjectManagements>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<ProjectManagements>;
    /**
     * Static representation of the [[pmStagesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_STAGES_COLLECTION: CollectionField<ProjectManagements, PmStageData>;
    /**
     * Static representation of the [[pmOpenIssuesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_OPEN_ISSUES_COLLECTION: CollectionField<ProjectManagements, PmOpenIssueData>;
    /**
     * Static representation of the [[pmDocumentsCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_DOCUMENTS_COLLECTION: CollectionField<ProjectManagements, PmDocumentData>;
    /**
     * Static representation of the [[pmActivitiesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_ACTIVITIES_COLLECTION: CollectionField<ProjectManagements, PmActivityData>;
    /**
     * Static representation of the [[pmWorkOrdersCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_WORK_ORDERS_COLLECTION: CollectionField<ProjectManagements, PmWorkOrderData>;
    /**
     * Static representation of the [[pmSummaryData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_SUMMARY_DATA: PmSummaryDataField<ProjectManagements>;
    /**
     * Static representation of the [[pmDocAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_DOC_ATTACHEMENTS: CollectionField<ProjectManagements, PmDocAttachement>;
    /**
     * Static representation of the [[pmStageAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_STAGE_ATTACHEMENTS: CollectionField<ProjectManagements, PmStageAttachement>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<ProjectManagements, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_2: OneToOneLink<ProjectManagements, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[territory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY_2: OneToOneLink<ProjectManagements, Territories>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<ProjectManagements, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: OneToOneLink<ProjectManagements, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[industry2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_2: OneToOneLink<ProjectManagements, Industries>;
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENTS_2: OneToOneLink<ProjectManagements, Attachments2>;
    /**
     * All fields of the ProjectManagements entity.
     */
    const _allFields: Array<NumberField<ProjectManagements> | StringField<ProjectManagements> | DateField<ProjectManagements> | EnumField<ProjectManagements> | CollectionField<ProjectManagements, PmStageData> | CollectionField<ProjectManagements, PmOpenIssueData> | CollectionField<ProjectManagements, PmDocumentData> | CollectionField<ProjectManagements, PmActivityData> | CollectionField<ProjectManagements, PmWorkOrderData> | PmSummaryDataField<ProjectManagements> | CollectionField<ProjectManagements, PmDocAttachement> | CollectionField<ProjectManagements, PmStageAttachement> | OneToOneLink<ProjectManagements, EmployeesInfo> | OneToOneLink<ProjectManagements, BusinessPartners> | OneToOneLink<ProjectManagements, Territories> | OneToOneLink<ProjectManagements, SalesPersons> | OneToOneLink<ProjectManagements, Projects> | OneToOneLink<ProjectManagements, Industries> | OneToOneLink<ProjectManagements, Attachments2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ProjectManagements>;
    /**
     * All key fields of the ProjectManagements entity.
     */
    const _keyFields: Array<Field<ProjectManagements>>;
    /**
     * Mapping of all key field names to the respective static field property ProjectManagements.
     */
    const _keys: {
        [keys: string]: Field<ProjectManagements>;
    };
}
//# sourceMappingURL=ProjectManagements.d.ts.map