/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EcmActionTypeEnum } from './EcmActionTypeEnum';
import { EcmActionStatusEnum } from './EcmActionStatusEnum';
import { EcmActionPeriodTypeEnum } from './EcmActionPeriodTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { EcmActionGenerationTypeEnum } from './EcmActionGenerationTypeEnum';
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
 * EcmAction
 */
export interface EcmAction<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Action Id.
   * @nullable
   */
  actionId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Protocol.
   * @nullable
   */
  protocol?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Message.
   * @nullable
   */
  message?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Environment.
   * @nullable
   */
  environment?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Business Place.
   * @nullable
   */
  businessPlace?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Submits.
   * @nullable
   */
  submits?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Object Id.
   * @nullable
   */
  objectId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Report Id.
   * @nullable
   */
  reportId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Source Type.
   * @nullable
   */
  sourceType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Source Object.
   * @nullable
   */
  sourceObject?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Assigned Id.
   * @nullable
   */
  assignedId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Batch.
   * @nullable
   */
  documentBatch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Batch Line.
   * @nullable
   */
  documentBatchLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Period Type.
   * @nullable
   */
  periodType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Period Number.
   * @nullable
   */
  periodNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Period Year.
   * @nullable
   */
  periodYear?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Period Date From.
   * @nullable
   */
  periodDateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Period Date To.
   * @nullable
   */
  periodDateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Is Removed.
   * @nullable
   */
  isRemoved?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Is Canceled.
   * @nullable
   */
  isCanceled?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Generation Type.
   * @nullable
   */
  generationType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U B 1 Sys Xml Amount.
   * @nullable
   */
  uB1SysXmlAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U B 1 Sys Send Date Intm.
   * @nullable
   */
  uB1SysSendDateIntm?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * EcmActionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EcmAction,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EcmAction.actionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActionID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmAction.protocol} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  protocol: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Protocol', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<EntityT, DeSerializersT, EcmActionTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('Type', EcmActionTypeEnum, true);
  /**
   * Representation of the {@link EcmAction.description} property for query construction.
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
   * Representation of the {@link EcmAction.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<EntityT, DeSerializersT, EcmActionStatusEnum, true, false> =
    this._fieldBuilder.buildEnumField('Status', EcmActionStatusEnum, true);
  /**
   * Representation of the {@link EcmAction.message} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.environment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  environment: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Environment', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmAction.businessPlace} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPlace: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BusinessPlace', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmAction.submits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  submits: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Submits', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmAction.objectId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectID', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.reportId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReportID', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.sourceType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourceType', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.sourceObject} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObject: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourceObject', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmAction.assignedId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignedId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AssignedID', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.documentBatch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentBatch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentBatch', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.documentBatchLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentBatchLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DocumentBatchLine',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EcmAction.periodType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodType: EnumField<
    EntityT,
    DeSerializersT,
    EcmActionPeriodTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PeriodType',
    EcmActionPeriodTypeEnum,
    true
  );
  /**
   * Representation of the {@link EcmAction.periodNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PeriodNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmAction.periodYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PeriodYear', 'Edm.Int32', true);
  /**
   * Representation of the {@link EcmAction.periodDateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodDateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PeriodDateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EcmAction.periodDateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodDateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PeriodDateTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EcmAction.isRemoved} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isRemoved: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsRemoved', BoYesNoEnum, true);
  /**
   * Representation of the {@link EcmAction.isCanceled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isCanceled: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsCanceled', BoYesNoEnum, true);
  /**
   * Representation of the {@link EcmAction.generationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generationType: EnumField<
    EntityT,
    DeSerializersT,
    EcmActionGenerationTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'GenerationType',
    EcmActionGenerationTypeEnum,
    true
  );
  /**
   * Representation of the {@link EcmAction.guid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  guid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GUID', 'Edm.String', true);
  /**
   * Representation of the {@link EcmAction.uB1SysXmlAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uB1SysXmlAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_B1SYS_XMLAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link EcmAction.uB1SysSendDateIntm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uB1SysSendDateIntm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_B1SYS_SendDateINTM',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of EcmActionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EcmAction, fieldOptions);
  }
}

export namespace EcmAction {
  /**
   * Metadata information on all properties of the `EcmAction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmAction>[] = [
    {
      originalName: 'ActionID',
      name: 'actionId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Protocol',
      name: 'protocol',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Message',
      name: 'message',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Environment',
      name: 'environment',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BusinessPlace',
      name: 'businessPlace',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Submits',
      name: 'submits',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ObjectID',
      name: 'objectId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReportID',
      name: 'reportId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SourceType',
      name: 'sourceType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SourceObject',
      name: 'sourceObject',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AssignedID',
      name: 'assignedId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentBatch',
      name: 'documentBatch',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocumentBatchLine',
      name: 'documentBatchLine',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PeriodType',
      name: 'periodType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PeriodNumber',
      name: 'periodNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PeriodYear',
      name: 'periodYear',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PeriodDateFrom',
      name: 'periodDateFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'PeriodDateTo',
      name: 'periodDateTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'IsRemoved',
      name: 'isRemoved',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IsCanceled',
      name: 'isCanceled',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GenerationType',
      name: 'generationType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GUID',
      name: 'guid',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_B1SYS_XMLAmount',
      name: 'uB1SysXmlAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_B1SYS_SendDateINTM',
      name: 'uB1SysSendDateIntm',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
