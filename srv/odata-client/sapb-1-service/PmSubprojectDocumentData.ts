/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { PmsStageData, PmsStageDataField } from './PmsStageData';
import { PmsOpenIssueData, PmsOpenIssueDataField } from './PmsOpenIssueData';
import { PmsDocumentData, PmsDocumentDataField } from './PmsDocumentData';
import { PmsActivityData, PmsActivityDataField } from './PmsActivityData';
import { PmsWorkOrderData, PmsWorkOrderDataField } from './PmsWorkOrderData';
import { PmsSummaryData, PmsSummaryDataField } from './PmsSummaryData';
import { PmsDocAttachement, PmsDocAttachementField } from './PmsDocAttachement';
import { PmsStageAttachement, PmsStageAttachementField } from './PmsStageAttachement';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmSubprojectDocumentData
 */
export interface PmSubprojectDocumentData {
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
   * Subproject Name.
   * @nullable
   */
  subprojectName?: string;
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
   * Parent Id.
   * @nullable
   */
  parentId?: number;
  /**
   * Project Id.
   * @nullable
   */
  projectId?: number;
  /**
   * Order.
   * @nullable
   */
  order?: number;
  /**
   * Subproject Type.
   * @nullable
   */
  subprojectType?: number;
  /**
   * Subproject Contribution.
   * @nullable
   */
  subprojectContribution?: number;
  /**
   * Subproject End Date.
   * @nullable
   */
  subprojectEndDate?: Moment;
  /**
   * Actual Cost.
   * @nullable
   */
  actualCost?: number;
  /**
   * Planned Cost.
   * @nullable
   */
  plannedCost?: number;
  /**
   * Subproject Depth.
   * @nullable
   */
  subprojectDepth?: number;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Pms Stages Collection.
   * @nullable
   */
  pmsStagesCollection?: PmsStageData;
  /**
   * Pms Open Issues Collection.
   * @nullable
   */
  pmsOpenIssuesCollection?: PmsOpenIssueData;
  /**
   * Pms Documents Collection.
   * @nullable
   */
  pmsDocumentsCollection?: PmsDocumentData;
  /**
   * Pms Activities Collection.
   * @nullable
   */
  pmsActivitiesCollection?: PmsActivityData;
  /**
   * Pms Work Orders Collection.
   * @nullable
   */
  pmsWorkOrdersCollection?: PmsWorkOrderData;
  /**
   * Pms Summary Data.
   * @nullable
   */
  pmsSummaryData?: PmsSummaryData;
  /**
   * Pms Doc Attachements.
   * @nullable
   */
  pmsDocAttachements?: PmsDocAttachement;
  /**
   * Pms Stage Attachements.
   * @nullable
   */
  pmsStageAttachements?: PmsStageAttachement;
}

/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectDocumentData.build]] instead.
 */
export function createPmSubprojectDocumentData(json: any): PmSubprojectDocumentData {
  return PmSubprojectDocumentData.build(json);
}

/**
 * PmSubprojectDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmSubprojectDocumentDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmSubprojectDocumentData.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectDocumentData.owner]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owner: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Owner', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectDocumentData.subprojectName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SubprojectName', this, 'Edm.String');
  /**
   * Representation of the [[PmSubprojectDocumentData.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmSubprojectDocumentData.finishedPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  finishedPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FinishedPercent', this, 'Edm.Double');
  /**
   * Representation of the [[PmSubprojectDocumentData.parentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ParentID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectDocumentData.projectId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ProjectID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectDocumentData.order]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  order: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Order', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectDocumentData.subprojectType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubprojectType', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectDocumentData.subprojectContribution]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectContribution: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubprojectContribution', this, 'Edm.Double');
  /**
   * Representation of the [[PmSubprojectDocumentData.subprojectEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectEndDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('SubprojectEndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmSubprojectDocumentData.actualCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualCost', this, 'Edm.Double');
  /**
   * Representation of the [[PmSubprojectDocumentData.plannedCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PlannedCost', this, 'Edm.Double');
  /**
   * Representation of the [[PmSubprojectDocumentData.subprojectDepth]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectDepth: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubprojectDepth', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSubprojectDocumentData.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsStagesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsStagesCollection: PmsStageDataField<EntityT> = new PmsStageDataField('PMS_StagesCollection', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsOpenIssuesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsOpenIssuesCollection: PmsOpenIssueDataField<EntityT> = new PmsOpenIssueDataField('PMS_OpenIssuesCollection', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsDocumentsCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsDocumentsCollection: PmsDocumentDataField<EntityT> = new PmsDocumentDataField('PMS_DocumentsCollection', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsActivitiesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsActivitiesCollection: PmsActivityDataField<EntityT> = new PmsActivityDataField('PMS_ActivitiesCollection', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsWorkOrdersCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsWorkOrdersCollection: PmsWorkOrderDataField<EntityT> = new PmsWorkOrderDataField('PMS_WorkOrdersCollection', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsSummaryData]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsSummaryData: PmsSummaryDataField<EntityT> = new PmsSummaryDataField('PMS_SummaryData', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsDocAttachements]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsDocAttachements: PmsDocAttachementField<EntityT> = new PmsDocAttachementField('PMS_DocAttachements', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsStageAttachements]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsStageAttachements: PmsStageAttachementField<EntityT> = new PmsStageAttachementField('PMS_StageAttachements', this);
}

export namespace PmSubprojectDocumentData {
  export function build(json: { [keys: string]: FieldType | PmsActivityData | PmsDocAttachement | PmsDocumentData | PmsOpenIssueData | PmsStageAttachement | PmsStageData | PmsSummaryData | PmsWorkOrderData }): PmSubprojectDocumentData {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      Owner: (owner: number) => ({ owner: edmToTs(owner, 'Edm.Int32') }),
      SubprojectName: (subprojectName: string) => ({ subprojectName: edmToTs(subprojectName, 'Edm.String') }),
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      FinishedPercent: (finishedPercent: number) => ({ finishedPercent: edmToTs(finishedPercent, 'Edm.Double') }),
      ParentID: (parentId: number) => ({ parentId: edmToTs(parentId, 'Edm.Int32') }),
      ProjectID: (projectId: number) => ({ projectId: edmToTs(projectId, 'Edm.Int32') }),
      Order: (order: number) => ({ order: edmToTs(order, 'Edm.Int32') }),
      SubprojectType: (subprojectType: number) => ({ subprojectType: edmToTs(subprojectType, 'Edm.Int32') }),
      SubprojectContribution: (subprojectContribution: number) => ({ subprojectContribution: edmToTs(subprojectContribution, 'Edm.Double') }),
      SubprojectEndDate: (subprojectEndDate: Moment) => ({ subprojectEndDate: edmToTs(subprojectEndDate, 'Edm.DateTimeOffset') }),
      ActualCost: (actualCost: number) => ({ actualCost: edmToTs(actualCost, 'Edm.Double') }),
      PlannedCost: (plannedCost: number) => ({ plannedCost: edmToTs(plannedCost, 'Edm.Double') }),
      SubprojectDepth: (subprojectDepth: number) => ({ subprojectDepth: edmToTs(subprojectDepth, 'Edm.Int32') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      PMS_StagesCollection: (pmsStagesCollection: PmsStageData) => ({ pmsStagesCollection: PmsStageData.build(pmsStagesCollection) }),
      PMS_OpenIssuesCollection: (pmsOpenIssuesCollection: PmsOpenIssueData) => ({ pmsOpenIssuesCollection: PmsOpenIssueData.build(pmsOpenIssuesCollection) }),
      PMS_DocumentsCollection: (pmsDocumentsCollection: PmsDocumentData) => ({ pmsDocumentsCollection: PmsDocumentData.build(pmsDocumentsCollection) }),
      PMS_ActivitiesCollection: (pmsActivitiesCollection: PmsActivityData) => ({ pmsActivitiesCollection: PmsActivityData.build(pmsActivitiesCollection) }),
      PMS_WorkOrdersCollection: (pmsWorkOrdersCollection: PmsWorkOrderData) => ({ pmsWorkOrdersCollection: PmsWorkOrderData.build(pmsWorkOrdersCollection) }),
      PMS_SummaryData: (pmsSummaryData: PmsSummaryData) => ({ pmsSummaryData: PmsSummaryData.build(pmsSummaryData) }),
      PMS_DocAttachements: (pmsDocAttachements: PmsDocAttachement) => ({ pmsDocAttachements: PmsDocAttachement.build(pmsDocAttachements) }),
      PMS_StageAttachements: (pmsStageAttachements: PmsStageAttachement) => ({ pmsStageAttachements: PmsStageAttachement.build(pmsStageAttachements) })
    });
  }
}
