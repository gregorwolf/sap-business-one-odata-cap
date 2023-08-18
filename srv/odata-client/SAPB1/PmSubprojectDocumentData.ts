/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PmsStageData } from './PmsStageData';
import { PmsOpenIssueData } from './PmsOpenIssueData';
import { PmsDocumentData } from './PmsDocumentData';
import { PmsActivityData } from './PmsActivityData';
import { PmsWorkOrderData } from './PmsWorkOrderData';
import { PmsSummaryData, PmsSummaryDataField } from './PmsSummaryData';
import { PmsDocAttachement } from './PmsDocAttachement';
import { PmsStageAttachement } from './PmsStageAttachement';
import { SubprojectStatusTypeEnum } from './SubprojectStatusTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * PmSubprojectDocumentData
 */
export interface PmSubprojectDocumentData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Owner.
   * @nullable
   */
  owner?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Subproject Name.
   * @nullable
   */
  subprojectName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Finished Percent.
   * @nullable
   */
  finishedPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Parent Id.
   * @nullable
   */
  parentId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Project Id.
   * @nullable
   */
  projectId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Order.
   * @nullable
   */
  order?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Subproject Type.
   * @nullable
   */
  subprojectType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Subproject Contribution.
   * @nullable
   */
  subprojectContribution?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Subproject Status.
   * @nullable
   */
  subprojectStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Subproject End Date.
   * @nullable
   */
  subprojectEndDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Actual Cost.
   * @nullable
   */
  actualCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Planned Cost.
   * @nullable
   */
  plannedCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Subproject Depth.
   * @nullable
   */
  subprojectDepth?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Pms Stages Collection.
   * @nullable
   */
  pmsStagesCollection?: DeserializedType<DeSerializersT, 'SAPB1.PMS_StageData'>;
  /**
   * Pms Open Issues Collection.
   * @nullable
   */
  pmsOpenIssuesCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.PMS_OpenIssueData'
  >;
  /**
   * Pms Documents Collection.
   * @nullable
   */
  pmsDocumentsCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.PMS_DocumentData'
  >;
  /**
   * Pms Activities Collection.
   * @nullable
   */
  pmsActivitiesCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.PMS_ActivityData'
  >;
  /**
   * Pms Work Orders Collection.
   * @nullable
   */
  pmsWorkOrdersCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.PMS_WorkOrderData'
  >;
  /**
   * Pms Summary Data.
   * @nullable
   */
  pmsSummaryData?: DeserializedType<DeSerializersT, 'SAPB1.PMS_SummaryData'>;
  /**
   * Pms Doc Attachements.
   * @nullable
   */
  pmsDocAttachements?: DeserializedType<
    DeSerializersT,
    'SAPB1.PMS_DocAttachement'
  >;
  /**
   * Pms Stage Attachements.
   * @nullable
   */
  pmsStageAttachements?: DeserializedType<
    DeSerializersT,
    'SAPB1.PMS_StageAttachement'
  >;
}

/**
 * PmSubprojectDocumentDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmSubprojectDocumentDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmSubprojectDocumentData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.owner} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owner: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Owner', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.subprojectName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SubprojectName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.startDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.finishedPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  finishedPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FinishedPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.parentId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParentID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.projectId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProjectID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.order} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  order: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Order', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.subprojectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubprojectType', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.subprojectContribution} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectContribution: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SubprojectContribution',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.subprojectStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectStatus: EnumField<
    EntityT,
    DeSerializersT,
    SubprojectStatusTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SubprojectStatus',
    SubprojectStatusTypeEnum,
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.subprojectEndDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectEndDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SubprojectEndDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.actualCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActualCost', 'Edm.Double', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.plannedCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PlannedCost', 'Edm.Double', true);
  /**
   * Representation of the {@link PmSubprojectDocumentData.subprojectDepth} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectDepth: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SubprojectDepth',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsStagesCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsStagesCollection: CollectionField<
    EntityT,
    DeSerializersT,
    PmsStageData,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'PMS_StagesCollection',
    PmsStageData,
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsOpenIssuesCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsOpenIssuesCollection: CollectionField<
    EntityT,
    DeSerializersT,
    PmsOpenIssueData,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'PMS_OpenIssuesCollection',
    PmsOpenIssueData,
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsDocumentsCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsDocumentsCollection: CollectionField<
    EntityT,
    DeSerializersT,
    PmsDocumentData,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'PMS_DocumentsCollection',
    PmsDocumentData,
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsActivitiesCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsActivitiesCollection: CollectionField<
    EntityT,
    DeSerializersT,
    PmsActivityData,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'PMS_ActivitiesCollection',
    PmsActivityData,
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsWorkOrdersCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsWorkOrdersCollection: CollectionField<
    EntityT,
    DeSerializersT,
    PmsWorkOrderData,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'PMS_WorkOrdersCollection',
    PmsWorkOrderData,
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsSummaryData} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsSummaryData: PmsSummaryDataField<EntityT, DeSerializersT, true, false> =
    this._fieldBuilder.buildComplexTypeField(
      'PMS_SummaryData',
      PmsSummaryDataField,
      true
    );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsDocAttachements} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsDocAttachements: CollectionField<
    EntityT,
    DeSerializersT,
    PmsDocAttachement,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'PMS_DocAttachements',
    PmsDocAttachement,
    true
  );
  /**
   * Representation of the {@link PmSubprojectDocumentData.pmsStageAttachements} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pmsStageAttachements: CollectionField<
    EntityT,
    DeSerializersT,
    PmsStageAttachement,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'PMS_StageAttachements',
    PmsStageAttachement,
    true
  );

  /**
   * Creates an instance of PmSubprojectDocumentDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      PmSubprojectDocumentData,
      fieldOptions
    );
  }
}

export namespace PmSubprojectDocumentData {
  /**
   * Metadata information on all properties of the `PmSubprojectDocumentData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmSubprojectDocumentData>[] =
    [
      {
        originalName: 'AbsEntry',
        name: 'absEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Owner',
        name: 'owner',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SubprojectName',
        name: 'subprojectName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'StartDate',
        name: 'startDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'FinishedPercent',
        name: 'finishedPercent',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ParentID',
        name: 'parentId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ProjectID',
        name: 'projectId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Order',
        name: 'order',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SubprojectType',
        name: 'subprojectType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SubprojectContribution',
        name: 'subprojectContribution',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SubprojectStatus',
        name: 'subprojectStatus',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'SubprojectEndDate',
        name: 'subprojectEndDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ActualCost',
        name: 'actualCost',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'PlannedCost',
        name: 'plannedCost',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SubprojectDepth',
        name: 'subprojectDepth',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DueDate',
        name: 'dueDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'PMS_StagesCollection',
        name: 'pmsStagesCollection',
        type: PmsStageData,
        isCollection: true
      },
      {
        originalName: 'PMS_OpenIssuesCollection',
        name: 'pmsOpenIssuesCollection',
        type: PmsOpenIssueData,
        isCollection: true
      },
      {
        originalName: 'PMS_DocumentsCollection',
        name: 'pmsDocumentsCollection',
        type: PmsDocumentData,
        isCollection: true
      },
      {
        originalName: 'PMS_ActivitiesCollection',
        name: 'pmsActivitiesCollection',
        type: PmsActivityData,
        isCollection: true
      },
      {
        originalName: 'PMS_WorkOrdersCollection',
        name: 'pmsWorkOrdersCollection',
        type: PmsWorkOrderData,
        isCollection: true
      },
      {
        originalName: 'PMS_SummaryData',
        name: 'pmsSummaryData',
        type: PmsSummaryData,
        isCollection: false
      },
      {
        originalName: 'PMS_DocAttachements',
        name: 'pmsDocAttachements',
        type: PmsDocAttachement,
        isCollection: true
      },
      {
        originalName: 'PMS_StageAttachements',
        name: 'pmsStageAttachements',
        type: PmsStageAttachement,
        isCollection: true
      }
    ];
}
