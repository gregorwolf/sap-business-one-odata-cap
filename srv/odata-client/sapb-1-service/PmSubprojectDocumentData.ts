/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { PmsStageData } from './PmsStageData';
import { PmsOpenIssueData } from './PmsOpenIssueData';
import { PmsDocumentData } from './PmsDocumentData';
import { PmsActivityData } from './PmsActivityData';
import { PmsWorkOrderData } from './PmsWorkOrderData';
import { PmsSummaryData, PmsSummaryDataField } from './PmsSummaryData';
import { PmsDocAttachement } from './PmsDocAttachement';
import { PmsStageAttachement } from './PmsStageAttachement';
import { SubprojectStatusTypeEnum } from './SubprojectStatusTypeEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Subproject Status.
   * @nullable
   */
  subprojectStatus?: SubprojectStatusTypeEnum;
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
  pmsStagesCollection?: PmsStageData[];
  /**
   * Pms Open Issues Collection.
   * @nullable
   */
  pmsOpenIssuesCollection?: PmsOpenIssueData[];
  /**
   * Pms Documents Collection.
   * @nullable
   */
  pmsDocumentsCollection?: PmsDocumentData[];
  /**
   * Pms Activities Collection.
   * @nullable
   */
  pmsActivitiesCollection?: PmsActivityData[];
  /**
   * Pms Work Orders Collection.
   * @nullable
   */
  pmsWorkOrdersCollection?: PmsWorkOrderData[];
  /**
   * Pms Summary Data.
   * @nullable
   */
  pmsSummaryData?: PmsSummaryData;
  /**
   * Pms Doc Attachements.
   * @nullable
   */
  pmsDocAttachements?: PmsDocAttachement[];
  /**
   * Pms Stage Attachements.
   * @nullable
   */
  pmsStageAttachements?: PmsStageAttachement[];
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
export class PmSubprojectDocumentDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmSubprojectDocumentData> {
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
   * Representation of the [[PmSubprojectDocumentData.subprojectStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SubprojectStatus', this);
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
  pmsStagesCollection: CollectionField<EntityT, PmsStageData> = new CollectionField('PMS_StagesCollection', this, PmsStageData);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsOpenIssuesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsOpenIssuesCollection: CollectionField<EntityT, PmsOpenIssueData> = new CollectionField('PMS_OpenIssuesCollection', this, PmsOpenIssueData);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsDocumentsCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsDocumentsCollection: CollectionField<EntityT, PmsDocumentData> = new CollectionField('PMS_DocumentsCollection', this, PmsDocumentData);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsActivitiesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsActivitiesCollection: CollectionField<EntityT, PmsActivityData> = new CollectionField('PMS_ActivitiesCollection', this, PmsActivityData);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsWorkOrdersCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsWorkOrdersCollection: CollectionField<EntityT, PmsWorkOrderData> = new CollectionField('PMS_WorkOrdersCollection', this, PmsWorkOrderData);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsSummaryData]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsSummaryData: PmsSummaryDataField<EntityT> = new PmsSummaryDataField('PMS_SummaryData', this);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsDocAttachements]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsDocAttachements: CollectionField<EntityT, PmsDocAttachement> = new CollectionField('PMS_DocAttachements', this, PmsDocAttachement);
  /**
   * Representation of the [[PmSubprojectDocumentData.pmsStageAttachements]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsStageAttachements: CollectionField<EntityT, PmsStageAttachement> = new CollectionField('PMS_StageAttachements', this, PmsStageAttachement);

  /**
   * Creates an instance of PmSubprojectDocumentDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmSubprojectDocumentData);
  }
}

export namespace PmSubprojectDocumentData {
  /**
   * Metadata information on all properties of the `PmSubprojectDocumentData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmSubprojectDocumentData>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Owner',
    name: 'owner',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SubprojectName',
    name: 'subprojectName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'FinishedPercent',
    name: 'finishedPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ParentID',
    name: 'parentId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ProjectID',
    name: 'projectId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Order',
    name: 'order',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SubprojectType',
    name: 'subprojectType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SubprojectContribution',
    name: 'subprojectContribution',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SubprojectStatus',
    name: 'subprojectStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SubprojectEndDate',
    name: 'subprojectEndDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ActualCost',
    name: 'actualCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PlannedCost',
    name: 'plannedCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SubprojectDepth',
    name: 'subprojectDepth',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'PMS_StagesCollection',
    name: 'pmsStagesCollection',
    type: PmsStageData,
    isCollection: true
  }, {
    originalName: 'PMS_OpenIssuesCollection',
    name: 'pmsOpenIssuesCollection',
    type: PmsOpenIssueData,
    isCollection: true
  }, {
    originalName: 'PMS_DocumentsCollection',
    name: 'pmsDocumentsCollection',
    type: PmsDocumentData,
    isCollection: true
  }, {
    originalName: 'PMS_ActivitiesCollection',
    name: 'pmsActivitiesCollection',
    type: PmsActivityData,
    isCollection: true
  }, {
    originalName: 'PMS_WorkOrdersCollection',
    name: 'pmsWorkOrdersCollection',
    type: PmsWorkOrderData,
    isCollection: true
  }, {
    originalName: 'PMS_SummaryData',
    name: 'pmsSummaryData',
    type: PmsSummaryData,
    isCollection: false
  }, {
    originalName: 'PMS_DocAttachements',
    name: 'pmsDocAttachements',
    type: PmsDocAttachement,
    isCollection: true
  }, {
    originalName: 'PMS_StageAttachements',
    name: 'pmsStageAttachements',
    type: PmsStageAttachement,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | PmsActivityData | PmsDocAttachement | PmsDocumentData | PmsOpenIssueData | PmsStageAttachement | PmsStageData | PmsSummaryData | PmsWorkOrderData }): PmSubprojectDocumentData {
    return deserializeComplexTypeV4(json, PmSubprojectDocumentData);
  }
}
