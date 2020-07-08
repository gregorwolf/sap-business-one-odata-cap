/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectManagementsRequestBuilder } from './ProjectManagementsRequestBuilder';
import { Moment } from 'moment';
import { PmStageData, PmStageDataField } from './PmStageData';
import { PmOpenIssueData, PmOpenIssueDataField } from './PmOpenIssueData';
import { PmDocumentData, PmDocumentDataField } from './PmDocumentData';
import { PmActivityData, PmActivityDataField } from './PmActivityData';
import { PmWorkOrderData, PmWorkOrderDataField } from './PmWorkOrderData';
import { PmSummaryData, PmSummaryDataField } from './PmSummaryData';
import { PmDocAttachement, PmDocAttachementField } from './PmDocAttachement';
import { PmStageAttachement, PmStageAttachementField } from './PmStageAttachement';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ProjectManagements" of service "SAPB1".
 */
export class ProjectManagements extends Entity implements ProjectManagementsType {
  /**
   * Technical entity name for ProjectManagements.
   */
  static _entityName = 'ProjectManagements';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ProjectManagements.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner2!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[Territories]] entity.
   */
  territory2!: Territories;
  /**
   * One-to-one navigation property to the [[SalesPersons]] entity.
   */
  salesPerson!: SalesPersons;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project!: Projects;
  /**
   * One-to-one navigation property to the [[Industries]] entity.
   */
  industry2!: Industries;
  /**
   * One-to-one navigation property to the [[Attachments2]] entity.
   */
  attachments2!: Attachments2;

  /**
   * Returns an entity builder to construct instances `ProjectManagements`.
   * @returns A builder that constructs instances of entity type `ProjectManagements`.
   */
  static builder(): EntityBuilderType<ProjectManagements, ProjectManagementsTypeForceMandatory> {
    return Entity.entityBuilder(ProjectManagements);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ProjectManagements` entity type.
   * @returns A `ProjectManagements` request builder.
   */
  static requestBuilder(): ProjectManagementsRequestBuilder {
    return new ProjectManagementsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProjectManagements`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ProjectManagements`.
   */
  static customField(fieldName: string): CustomField<ProjectManagements> {
    return Entity.customFieldSelector(fieldName, ProjectManagements);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Territories, TerritoriesType } from './Territories';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Projects, ProjectsType } from './Projects';
import { Industries, IndustriesType } from './Industries';
import { Attachments2, Attachments2Type } from './Attachments2';

export interface ProjectManagementsType {
  absEntry?: number;
  owner?: number;
  projectName?: string;
  startDate?: Moment;
  finishedPercent?: number;
  docNum?: number;
  series?: number;
  businessPartner?: string;
  businessPartnerName?: string;
  contactPerson?: number;
  territory?: number;
  salesEmployee?: number;
  dueDate?: Moment;
  closingDate?: Moment;
  financialProject?: string;
  industry?: number;
  reason?: string;
  attachmentEntry?: number;
  pmStagesCollection?: PmStageData[];
  pmOpenIssuesCollection?: PmOpenIssueData[];
  pmDocumentsCollection?: PmDocumentData[];
  pmActivitiesCollection?: PmActivityData[];
  pmWorkOrdersCollection?: PmWorkOrderData[];
  pmSummaryData?: PmSummaryData;
  pmDocAttachements?: PmDocAttachement[];
  pmStageAttachements?: PmStageAttachement[];
  employeeInfo: EmployeesInfoType;
  businessPartner2: BusinessPartnersType;
  territory2: TerritoriesType;
  salesPerson: SalesPersonsType;
  project: ProjectsType;
  industry2: IndustriesType;
  attachments2: Attachments2Type;
}

export interface ProjectManagementsTypeForceMandatory {
  absEntry: number;
  owner: number;
  projectName: string;
  startDate: Moment;
  finishedPercent: number;
  docNum: number;
  series: number;
  businessPartner: string;
  businessPartnerName: string;
  contactPerson: number;
  territory: number;
  salesEmployee: number;
  dueDate: Moment;
  closingDate: Moment;
  financialProject: string;
  industry: number;
  reason: string;
  attachmentEntry: number;
  pmStagesCollection: PmStageData[];
  pmOpenIssuesCollection: PmOpenIssueData[];
  pmDocumentsCollection: PmDocumentData[];
  pmActivitiesCollection: PmActivityData[];
  pmWorkOrdersCollection: PmWorkOrderData[];
  pmSummaryData: PmSummaryData;
  pmDocAttachements: PmDocAttachement[];
  pmStageAttachements: PmStageAttachement[];
  employeeInfo: EmployeesInfoType;
  businessPartner2: BusinessPartnersType;
  territory2: TerritoriesType;
  salesPerson: SalesPersonsType;
  project: ProjectsType;
  industry2: IndustriesType;
  attachments2: Attachments2Type;
}

export namespace ProjectManagements {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<ProjectManagements> = new NumberField('AbsEntry', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[owner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER: NumberField<ProjectManagements> = new NumberField('Owner', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[projectName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_NAME: StringField<ProjectManagements> = new StringField('ProjectName', ProjectManagements, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<ProjectManagements> = new DateField('StartDate', ProjectManagements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[finishedPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINISHED_PERCENT: NumberField<ProjectManagements> = new NumberField('FinishedPercent', ProjectManagements, 'Edm.Double');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: NumberField<ProjectManagements> = new NumberField('DocNum', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<ProjectManagements> = new NumberField('Series', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: StringField<ProjectManagements> = new StringField('BusinessPartner', ProjectManagements, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_NAME: StringField<ProjectManagements> = new StringField('BusinessPartnerName', ProjectManagements, 'Edm.String');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: NumberField<ProjectManagements> = new NumberField('ContactPerson', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[territory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY: NumberField<ProjectManagements> = new NumberField('Territory', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[salesEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_EMPLOYEE: NumberField<ProjectManagements> = new NumberField('SalesEmployee', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE_DATE: DateField<ProjectManagements> = new DateField('DueDate', ProjectManagements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[closingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSING_DATE: DateField<ProjectManagements> = new DateField('ClosingDate', ProjectManagements, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[financialProject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PROJECT: StringField<ProjectManagements> = new StringField('FinancialProject', ProjectManagements, 'Edm.String');
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY: NumberField<ProjectManagements> = new NumberField('Industry', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[reason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON: StringField<ProjectManagements> = new StringField('Reason', ProjectManagements, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<ProjectManagements> = new NumberField('AttachmentEntry', ProjectManagements, 'Edm.Int32');
  /**
   * Static representation of the [[pmStagesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_STAGES_COLLECTION: CollectionField<ProjectManagements> = new CollectionField('PM_StagesCollection', ProjectManagements, new PmStageDataField('', ProjectManagements));
  /**
   * Static representation of the [[pmOpenIssuesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_OPEN_ISSUES_COLLECTION: CollectionField<ProjectManagements> = new CollectionField('PM_OpenIssuesCollection', ProjectManagements, new PmOpenIssueDataField('', ProjectManagements));
  /**
   * Static representation of the [[pmDocumentsCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_DOCUMENTS_COLLECTION: CollectionField<ProjectManagements> = new CollectionField('PM_DocumentsCollection', ProjectManagements, new PmDocumentDataField('', ProjectManagements));
  /**
   * Static representation of the [[pmActivitiesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_ACTIVITIES_COLLECTION: CollectionField<ProjectManagements> = new CollectionField('PM_ActivitiesCollection', ProjectManagements, new PmActivityDataField('', ProjectManagements));
  /**
   * Static representation of the [[pmWorkOrdersCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_WORK_ORDERS_COLLECTION: CollectionField<ProjectManagements> = new CollectionField('PM_WorkOrdersCollection', ProjectManagements, new PmWorkOrderDataField('', ProjectManagements));
  /**
   * Static representation of the [[pmSummaryData]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_SUMMARY_DATA: PmSummaryDataField<ProjectManagements> = new PmSummaryDataField('PM_SummaryData', ProjectManagements);
  /**
   * Static representation of the [[pmDocAttachements]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_DOC_ATTACHEMENTS: CollectionField<ProjectManagements> = new CollectionField('PM_DocAttachements', ProjectManagements, new PmDocAttachementField('', ProjectManagements));
  /**
   * Static representation of the [[pmStageAttachements]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_STAGE_ATTACHEMENTS: CollectionField<ProjectManagements> = new CollectionField('PM_StageAttachements', ProjectManagements, new PmStageAttachementField('', ProjectManagements));
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<ProjectManagements, EmployeesInfo> = new OneToOneLink('EmployeeInfo', ProjectManagements, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_2: OneToOneLink<ProjectManagements, BusinessPartners> = new OneToOneLink('BusinessPartner2', ProjectManagements, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[territory2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY_2: OneToOneLink<ProjectManagements, Territories> = new OneToOneLink('Territory2', ProjectManagements, Territories);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<ProjectManagements, SalesPersons> = new OneToOneLink('SalesPerson', ProjectManagements, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[project]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: OneToOneLink<ProjectManagements, Projects> = new OneToOneLink('Project', ProjectManagements, Projects);
  /**
   * Static representation of the one-to-one navigation property [[industry2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_2: OneToOneLink<ProjectManagements, Industries> = new OneToOneLink('Industry2', ProjectManagements, Industries);
  /**
   * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENTS_2: OneToOneLink<ProjectManagements, Attachments2> = new OneToOneLink('Attachments2', ProjectManagements, Attachments2);
  /**
   * All fields of the ProjectManagements entity.
   */
  export const _allFields: Array<NumberField<ProjectManagements> | StringField<ProjectManagements> | DateField<ProjectManagements> | CollectionField<ProjectManagements> | PmSummaryDataField<ProjectManagements> | OneToOneLink<ProjectManagements, EmployeesInfo> | OneToOneLink<ProjectManagements, BusinessPartners> | OneToOneLink<ProjectManagements, Territories> | OneToOneLink<ProjectManagements, SalesPersons> | OneToOneLink<ProjectManagements, Projects> | OneToOneLink<ProjectManagements, Industries> | OneToOneLink<ProjectManagements, Attachments2>> = [
    ProjectManagements.ABS_ENTRY,
    ProjectManagements.OWNER,
    ProjectManagements.PROJECT_NAME,
    ProjectManagements.START_DATE,
    ProjectManagements.FINISHED_PERCENT,
    ProjectManagements.DOC_NUM,
    ProjectManagements.SERIES,
    ProjectManagements.BUSINESS_PARTNER,
    ProjectManagements.BUSINESS_PARTNER_NAME,
    ProjectManagements.CONTACT_PERSON,
    ProjectManagements.TERRITORY,
    ProjectManagements.SALES_EMPLOYEE,
    ProjectManagements.DUE_DATE,
    ProjectManagements.CLOSING_DATE,
    ProjectManagements.FINANCIAL_PROJECT,
    ProjectManagements.INDUSTRY,
    ProjectManagements.REASON,
    ProjectManagements.ATTACHMENT_ENTRY,
    ProjectManagements.PM_STAGES_COLLECTION,
    ProjectManagements.PM_OPEN_ISSUES_COLLECTION,
    ProjectManagements.PM_DOCUMENTS_COLLECTION,
    ProjectManagements.PM_ACTIVITIES_COLLECTION,
    ProjectManagements.PM_WORK_ORDERS_COLLECTION,
    ProjectManagements.PM_SUMMARY_DATA,
    ProjectManagements.PM_DOC_ATTACHEMENTS,
    ProjectManagements.PM_STAGE_ATTACHEMENTS,
    ProjectManagements.EMPLOYEE_INFO,
    ProjectManagements.BUSINESS_PARTNER_2,
    ProjectManagements.TERRITORY_2,
    ProjectManagements.SALES_PERSON,
    ProjectManagements.PROJECT,
    ProjectManagements.INDUSTRY_2,
    ProjectManagements.ATTACHMENTS_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ProjectManagements> = new AllFields('*', ProjectManagements);
  /**
   * All key fields of the ProjectManagements entity.
   */
  export const _keyFields: Array<Field<ProjectManagements>> = [ProjectManagements.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property ProjectManagements.
   */
  export const _keys: { [keys: string]: Field<ProjectManagements> } = ProjectManagements._keyFields.reduce((acc: { [keys: string]: Field<ProjectManagements> }, field: Field<ProjectManagements>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
