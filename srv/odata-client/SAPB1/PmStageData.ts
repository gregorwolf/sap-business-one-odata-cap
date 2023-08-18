/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { StageDepTypeEnum } from './StageDepTypeEnum';
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
 * PmStageData
 */
export interface PmStageData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Type.
   * @nullable
   */
  stageType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Close Date.
   * @nullable
   */
  closeDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Task.
   * @nullable
   */
  task?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expected Costs.
   * @nullable
   */
  expectedCosts?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Invoiced Amount Sales.
   * @nullable
   */
  invoicedAmountSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Amount Sales.
   * @nullable
   */
  openAmountSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Invoiced Amount Purchase.
   * @nullable
   */
  invoicedAmountPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Amount Purchase.
   * @nullable
   */
  openAmountPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Percentual Completness.
   * @nullable
   */
  percentualCompletness?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Is Finished.
   * @nullable
   */
  isFinished?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Stage Owner.
   * @nullable
   */
  stageOwner?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depends On Stage 1.
   * @nullable
   */
  dependsOnStage1?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depends On Stage 2.
   * @nullable
   */
  dependsOnStage2?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depends On Stage 3.
   * @nullable
   */
  dependsOnStage3?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depends On Stage 4.
   * @nullable
   */
  dependsOnStage4?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Dependency 1 Type.
   * @nullable
   */
  stageDependency1Type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Stage Dependency 2 Type.
   * @nullable
   */
  stageDependency2Type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Stage Dependency 3 Type.
   * @nullable
   */
  stageDependency3Type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Stage Dependency 4 Type.
   * @nullable
   */
  stageDependency4Type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Depends On Stage Id 1.
   * @nullable
   */
  dependsOnStageId1?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depends On Stage Id 2.
   * @nullable
   */
  dependsOnStageId2?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depends On Stage Id 3.
   * @nullable
   */
  dependsOnStageId3?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depends On Stage Id 4.
   * @nullable
   */
  dependsOnStageId4?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Unique Id.
   * @nullable
   */
  uniqueId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Finished Date.
   * @nullable
   */
  finishedDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * PmStageDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmStageDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmStageData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmStageData.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmStageData.stageId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmStageData.stageType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageType', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmStageData.startDate} property for query construction.
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
   * Representation of the {@link PmStageData.closeDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closeDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CloseDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmStageData.task} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  task: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Task', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmStageData.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);
  /**
   * Representation of the {@link PmStageData.expectedCosts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expectedCosts: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExpectedCosts', 'Edm.Double', true);
  /**
   * Representation of the {@link PmStageData.invoicedAmountSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoicedAmountSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InvoicedAmountSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmStageData.openAmountSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OpenAmountSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmStageData.invoicedAmountPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoicedAmountPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InvoicedAmountPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmStageData.openAmountPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OpenAmountPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmStageData.percentualCompletness} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentualCompletness: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PercentualCompletness',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmStageData.isFinished} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isFinished: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsFinished', BoYesNoEnum, true);
  /**
   * Representation of the {@link PmStageData.stageOwner} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageOwner: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageOwner', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmStageData.dependsOnStage1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStage1',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.dependsOnStage2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStage2',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.dependsOnStage3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStage3',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.dependsOnStage4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStage4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStage4',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.stageDependency1Type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency1Type: EnumField<
    EntityT,
    DeSerializersT,
    StageDepTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'StageDependency1Type',
    StageDepTypeEnum,
    true
  );
  /**
   * Representation of the {@link PmStageData.stageDependency2Type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency2Type: EnumField<
    EntityT,
    DeSerializersT,
    StageDepTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'StageDependency2Type',
    StageDepTypeEnum,
    true
  );
  /**
   * Representation of the {@link PmStageData.stageDependency3Type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency3Type: EnumField<
    EntityT,
    DeSerializersT,
    StageDepTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'StageDependency3Type',
    StageDepTypeEnum,
    true
  );
  /**
   * Representation of the {@link PmStageData.stageDependency4Type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDependency4Type: EnumField<
    EntityT,
    DeSerializersT,
    StageDepTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'StageDependency4Type',
    StageDepTypeEnum,
    true
  );
  /**
   * Representation of the {@link PmStageData.dependsOnStageId1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStageID1',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.dependsOnStageId2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStageID2',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.dependsOnStageId3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStageID3',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.dependsOnStageId4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dependsOnStageId4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DependsOnStageID4',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.attachmentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachmentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AttachmentEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PmStageData.uniqueId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uniqueId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UniqueID', 'Edm.String', true);
  /**
   * Representation of the {@link PmStageData.finishedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  finishedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FinishedDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of PmStageDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmStageData, fieldOptions);
  }
}

export namespace PmStageData {
  /**
   * Metadata information on all properties of the `PmStageData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmStageData>[] = [
    {
      originalName: 'LineID',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageID',
      name: 'stageId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageType',
      name: 'stageType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StartDate',
      name: 'startDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CloseDate',
      name: 'closeDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Task',
      name: 'task',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpectedCosts',
      name: 'expectedCosts',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InvoicedAmountSales',
      name: 'invoicedAmountSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OpenAmountSales',
      name: 'openAmountSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'InvoicedAmountPurchase',
      name: 'invoicedAmountPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OpenAmountPurchase',
      name: 'openAmountPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PercentualCompletness',
      name: 'percentualCompletness',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'IsFinished',
      name: 'isFinished',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StageOwner',
      name: 'stageOwner',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DependsOnStage1',
      name: 'dependsOnStage1',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DependsOnStage2',
      name: 'dependsOnStage2',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DependsOnStage3',
      name: 'dependsOnStage3',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DependsOnStage4',
      name: 'dependsOnStage4',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageDependency1Type',
      name: 'stageDependency1Type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StageDependency2Type',
      name: 'stageDependency2Type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StageDependency3Type',
      name: 'stageDependency3Type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StageDependency4Type',
      name: 'stageDependency4Type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DependsOnStageID1',
      name: 'dependsOnStageId1',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DependsOnStageID2',
      name: 'dependsOnStageId2',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DependsOnStageID3',
      name: 'dependsOnStageId3',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DependsOnStageID4',
      name: 'dependsOnStageId4',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AttachmentEntry',
      name: 'attachmentEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UniqueID',
      name: 'uniqueId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FinishedDate',
      name: 'finishedDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
