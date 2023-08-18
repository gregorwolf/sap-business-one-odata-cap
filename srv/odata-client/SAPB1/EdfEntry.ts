/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { ElectronicDocumentEntryTypeEnum } from './ElectronicDocumentEntryTypeEnum';
import { ElectronicDocumentEntryStatusEnum } from './ElectronicDocumentEntryStatusEnum';
import { ElectronicDocGenTypeEnum } from './ElectronicDocGenTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ElectronicDocumentEntryPeriodTypeEnum } from './ElectronicDocumentEntryPeriodTypeEnum';
import { ElectronicDocumentEntryCancellationStatusEnum } from './ElectronicDocumentEntryCancellationStatusEnum';
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
 * EdfEntry
 */
export interface EdfEntry<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Parent Abs Entry.
   * @nullable
   */
  parentAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Branch Id.
   * @nullable
   */
  branchId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Environment.
   * @nullable
   */
  environment?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message.
   * @nullable
   */
  message?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Src Obj Type.
   * @nullable
   */
  srcObjType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Src Abs Entry.
   * @nullable
   */
  srcAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Assigned Id.
   * @nullable
   */
  assignedId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Batch Id.
   * @nullable
   */
  docBatchId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Batch Index.
   * @nullable
   */
  docBatchIndex?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Generation Type.
   * @nullable
   */
  generationType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Test Mode.
   * @nullable
   */
  testMode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
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
   * Is Cancelation.
   * @nullable
   */
  isCancelation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User.
   * @nullable
   */
  user?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User 2.
   * @nullable
   */
  user2?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Scheduled Job Id.
   * @nullable
   */
  scheduledJobId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Authority.
   * @nullable
   */
  authority?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cancellation Status.
   * @nullable
   */
  cancellationStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Processing Target.
   * @nullable
   */
  processingTarget?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Doc Type.
   * @nullable
   */
  eDocType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * E Doc Num.
   * @nullable
   */
  eDocNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
 * EdfEntryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfEntryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfEntry,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfEntry.absEntry} property for query construction.
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
   * Representation of the {@link EdfEntry.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocProtocolCodeStrEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Code',
    ElectronicDocProtocolCodeStrEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntry.parentAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParentAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentEntryTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Type',
    ElectronicDocumentEntryTypeEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntry.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentEntryStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Status',
    ElectronicDocumentEntryStatusEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntry.branchId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branchId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BranchID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.environment} property for query construction.
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
   * Representation of the {@link EdfEntry.description} property for query construction.
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
   * Representation of the {@link EdfEntry.message} property for query construction.
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
   * Representation of the {@link EdfEntry.submits} property for query construction.
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
   * Representation of the {@link EdfEntry.objectId} property for query construction.
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
   * Representation of the {@link EdfEntry.reportId} property for query construction.
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
   * Representation of the {@link EdfEntry.srcObjType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcObjType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SrcObjType', 'Edm.String', true);
  /**
   * Representation of the {@link EdfEntry.srcAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SrcAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.assignedId} property for query construction.
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
   * Representation of the {@link EdfEntry.docBatchId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docBatchId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocBatchID', 'Edm.String', true);
  /**
   * Representation of the {@link EdfEntry.docBatchIndex} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docBatchIndex: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocBatchIndex', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.generationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generationType: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocGenTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'GenerationType',
    ElectronicDocGenTypeEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntry.testMode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  testMode: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TestMode', BoYesNoEnum, true);
  /**
   * Representation of the {@link EdfEntry.periodType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodType: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentEntryPeriodTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PeriodType',
    ElectronicDocumentEntryPeriodTypeEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntry.periodNumber} property for query construction.
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
   * Representation of the {@link EdfEntry.periodYear} property for query construction.
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
   * Representation of the {@link EdfEntry.periodDateFrom} property for query construction.
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
   * Representation of the {@link EdfEntry.periodDateTo} property for query construction.
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
   * Representation of the {@link EdfEntry.isRemoved} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isRemoved: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsRemoved', BoYesNoEnum, true);
  /**
   * Representation of the {@link EdfEntry.isCancelation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isCancelation: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsCancelation', BoYesNoEnum, true);
  /**
   * Representation of the {@link EdfEntry.createDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfEntry.createTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreateTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.updateDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UpdateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfEntry.updateTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UpdateTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.user} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('User', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.user2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('User2', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.scheduledJobId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  scheduledJobId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ScheduledJobID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.guid} property for query construction.
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
   * Representation of the {@link EdfEntry.authority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authority: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Authority', 'Edm.String', true);
  /**
   * Representation of the {@link EdfEntry.cancellationStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationStatus: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocumentEntryCancellationStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CancellationStatus',
    ElectronicDocumentEntryCancellationStatusEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntry.processingTarget} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processingTarget: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ProcessingTarget',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EdfEntry.eDocType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eDocType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EDocType', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntry.eDocNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eDocNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EDocNum', 'Edm.String', true);
  /**
   * Representation of the {@link EdfEntry.uB1SysXmlAmount} property for query construction.
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
   * Representation of the {@link EdfEntry.uB1SysSendDateIntm} property for query construction.
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
   * Creates an instance of EdfEntryField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EdfEntry, fieldOptions);
  }
}

export namespace EdfEntry {
  /**
   * Metadata information on all properties of the `EdfEntry` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfEntry>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ParentAbsEntry',
      name: 'parentAbsEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BranchID',
      name: 'branchId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Environment',
      name: 'environment',
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
      originalName: 'Message',
      name: 'message',
      type: 'Edm.String',
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
      originalName: 'SrcObjType',
      name: 'srcObjType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SrcAbsEntry',
      name: 'srcAbsEntry',
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
      originalName: 'DocBatchID',
      name: 'docBatchId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DocBatchIndex',
      name: 'docBatchIndex',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GenerationType',
      name: 'generationType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TestMode',
      name: 'testMode',
      type: 'Edm.Enum',
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
      originalName: 'IsCancelation',
      name: 'isCancelation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CreateDate',
      name: 'createDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CreateTime',
      name: 'createTime',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UpdateDate',
      name: 'updateDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'UpdateTime',
      name: 'updateTime',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'User',
      name: 'user',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'User2',
      name: 'user2',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ScheduledJobID',
      name: 'scheduledJobId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GUID',
      name: 'guid',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Authority',
      name: 'authority',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CancellationStatus',
      name: 'cancellationStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ProcessingTarget',
      name: 'processingTarget',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EDocType',
      name: 'eDocType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EDocNum',
      name: 'eDocNum',
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
