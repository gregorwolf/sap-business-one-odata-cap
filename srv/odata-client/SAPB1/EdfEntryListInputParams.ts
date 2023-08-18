/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicDocProtocolCodeStrEnum } from './ElectronicDocProtocolCodeStrEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ElectronicDocProcessingTargetEnum } from './ElectronicDocProcessingTargetEnum';
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
 * EdfEntryListInputParams
 */
export interface EdfEntryListInputParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Store Entry Type Set.
   * @nullable
   */
  storeEntryTypeSet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Store Entry Status Set.
   * @nullable
   */
  storeEntryStatusSet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Max Lines.
   * @nullable
   */
  maxLines?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Branch Id.
   * @nullable
   */
  branchId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * From Date.
   * @nullable
   */
  fromDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * From Time.
   * @nullable
   */
  fromTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * To Date.
   * @nullable
   */
  toDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Time.
   * @nullable
   */
  toTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * From Entry Id.
   * @nullable
   */
  fromEntryId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ascending.
   * @nullable
   */
  ascending?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Cancellation Status Set.
   * @nullable
   */
  cancellationStatusSet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Processing Target.
   * @nullable
   */
  processingTarget?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Processing Target Str.
   * @nullable
   */
  processingTargetStr?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EdfEntryListInputParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfEntryListInputParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfEntryListInputParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfEntryListInputParams.code} property for query construction.
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
   * Representation of the {@link EdfEntryListInputParams.storeEntryTypeSet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  storeEntryTypeSet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StoreEntryTypeSet',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EdfEntryListInputParams.storeEntryStatusSet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  storeEntryStatusSet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StoreEntryStatusSet',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EdfEntryListInputParams.maxLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxLines: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MaxLines', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntryListInputParams.branchId} property for query construction.
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
   * Representation of the {@link EdfEntryListInputParams.fromDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfEntryListInputParams.fromTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FromTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntryListInputParams.toDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ToDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EdfEntryListInputParams.toTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ToTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntryListInputParams.fromEntryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromEntryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FromEntryID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfEntryListInputParams.ascending} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ascending: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Ascending', BoYesNoEnum, true);
  /**
   * Representation of the {@link EdfEntryListInputParams.cancellationStatusSet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationStatusSet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CancellationStatusSet',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EdfEntryListInputParams.processingTarget} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processingTarget: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocProcessingTargetEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ProcessingTarget',
    ElectronicDocProcessingTargetEnum,
    true
  );
  /**
   * Representation of the {@link EdfEntryListInputParams.processingTargetStr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processingTargetStr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ProcessingTargetStr',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of EdfEntryListInputParamsField.
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
      EdfEntryListInputParams,
      fieldOptions
    );
  }
}

export namespace EdfEntryListInputParams {
  /**
   * Metadata information on all properties of the `EdfEntryListInputParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfEntryListInputParams>[] =
    [
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'StoreEntryTypeSet',
        name: 'storeEntryTypeSet',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'StoreEntryStatusSet',
        name: 'storeEntryStatusSet',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'MaxLines',
        name: 'maxLines',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BranchID',
        name: 'branchId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'FromDate',
        name: 'fromDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'FromTime',
        name: 'fromTime',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ToDate',
        name: 'toDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ToTime',
        name: 'toTime',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'FromEntryID',
        name: 'fromEntryId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Ascending',
        name: 'ascending',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'CancellationStatusSet',
        name: 'cancellationStatusSet',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ProcessingTarget',
        name: 'processingTarget',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'ProcessingTargetStr',
        name: 'processingTargetStr',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
