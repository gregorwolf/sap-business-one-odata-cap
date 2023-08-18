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
import { PmStageData } from './PmStageData';
import { PmOpenIssueData } from './PmOpenIssueData';
import { PmDocumentData } from './PmDocumentData';
import { PmActivityData } from './PmActivityData';
import { PmWorkOrderData } from './PmWorkOrderData';
import { PmSummaryData, PmSummaryDataField } from './PmSummaryData';
import { PmDocAttachement } from './PmDocAttachement';
import { PmStageAttachement } from './PmStageAttachement';
import type { ProjectManagementsApi } from './ProjectManagementsApi';
import { ProjectTypeEnum } from './ProjectTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ProjectStatusTypeEnum } from './ProjectStatusTypeEnum';
import { RiskLevelTypeEnum } from './RiskLevelTypeEnum';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Territories, TerritoriesType } from './Territories';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Projects, ProjectsType } from './Projects';
import { Industries, IndustriesType } from './Industries';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "ProjectManagements" of service "SAPB1".
 */
export class ProjectManagements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectManagementsType<T>
{
  /**
   * Technical entity name for ProjectManagements.
   */
  static _entityName = 'ProjectManagements';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ProjectManagements entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Owner.
   * @nullable
   */
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Project Name.
   * @nullable
   */
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Finished Percent.
   * @nullable
   */
  finishedPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Project Type.
   * @nullable
   */
  projectType?: ProjectTypeEnum | null;
  /**
   * Business Partner.
   * @nullable
   */
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Name.
   * @nullable
   */
  businessPartnerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Territory.
   * @nullable
   */
  territory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Employee.
   * @nullable
   */
  salesEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Allow Subprojects.
   * @nullable
   */
  allowSubprojects?: BoYesNoEnum | null;
  /**
   * Project Status.
   * @nullable
   */
  projectStatus?: ProjectStatusTypeEnum | null;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Closing Date.
   * @nullable
   */
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Financial Project.
   * @nullable
   */
  financialProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Risk Level.
   * @nullable
   */
  riskLevel?: RiskLevelTypeEnum | null;
  /**
   * Industry.
   * @nullable
   */
  industry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Reason.
   * @nullable
   */
  reason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Pm Stages Collection.
   * @nullable
   */
  pmStagesCollection?: PmStageData<T>[] | null;
  /**
   * Pm Open Issues Collection.
   * @nullable
   */
  pmOpenIssuesCollection?: PmOpenIssueData<T>[] | null;
  /**
   * Pm Documents Collection.
   * @nullable
   */
  pmDocumentsCollection?: PmDocumentData<T>[] | null;
  /**
   * Pm Activities Collection.
   * @nullable
   */
  pmActivitiesCollection?: PmActivityData<T>[] | null;
  /**
   * Pm Work Orders Collection.
   * @nullable
   */
  pmWorkOrdersCollection?: PmWorkOrderData<T>[] | null;
  /**
   * Pm Summary Data.
   * @nullable
   */
  pmSummaryData?: PmSummaryData<T> | null;
  /**
   * Pm Doc Attachements.
   * @nullable
   */
  pmDocAttachements?: PmDocAttachement<T>[] | null;
  /**
   * Pm Stage Attachements.
   * @nullable
   */
  pmStageAttachements?: PmStageAttachement<T>[] | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner2?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Territories} entity.
   */
  territory2?: Territories<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link Industries} entity.
   */
  industry2?: Industries<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: ProjectManagementsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectManagementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  owner?: DeserializedType<T, 'Edm.Int32'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  finishedPercent?: DeserializedType<T, 'Edm.Double'> | null;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  projectType?: ProjectTypeEnum | null;
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerName?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  territory?: DeserializedType<T, 'Edm.Int32'> | null;
  salesEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  allowSubprojects?: BoYesNoEnum | null;
  projectStatus?: ProjectStatusTypeEnum | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  closingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  financialProject?: DeserializedType<T, 'Edm.String'> | null;
  riskLevel?: RiskLevelTypeEnum | null;
  industry?: DeserializedType<T, 'Edm.Int32'> | null;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  pmStagesCollection?: PmStageData<T>[] | null;
  pmOpenIssuesCollection?: PmOpenIssueData<T>[] | null;
  pmDocumentsCollection?: PmDocumentData<T>[] | null;
  pmActivitiesCollection?: PmActivityData<T>[] | null;
  pmWorkOrdersCollection?: PmWorkOrderData<T>[] | null;
  pmSummaryData?: PmSummaryData<T> | null;
  pmDocAttachements?: PmDocAttachement<T>[] | null;
  pmStageAttachements?: PmStageAttachement<T>[] | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  businessPartner2?: BusinessPartnersType<T> | null;
  territory2?: TerritoriesType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  project?: ProjectsType<T> | null;
  industry2?: IndustriesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
