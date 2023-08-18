/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ResourceCapacitySourceTypeEnum } from './ResourceCapacitySourceTypeEnum';
import { ResourceCapacityBaseTypeEnum } from './ResourceCapacityBaseTypeEnum';
import { ResourceCapacityActionEnum } from './ResourceCapacityActionEnum';
import { ResourceCapacityOwningTypeEnum } from './ResourceCapacityOwningTypeEnum';
import { ResourceCapacityRevertedTypeEnum } from './ResourceCapacityRevertedTypeEnum';
import { ResourceCapacityMemoSourceEnum } from './ResourceCapacityMemoSourceEnum';
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
 * ResourceCapacityParams
 */
export interface ResourceCapacityParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Capacity.
   * @nullable
   */
  capacity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Source Type.
   * @nullable
   */
  sourceType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Source Entry.
   * @nullable
   */
  sourceEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Source Line Num.
   * @nullable
   */
  sourceLineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Line Num.
   * @nullable
   */
  baseLineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Action.
   * @nullable
   */
  action?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Owning Type.
   * @nullable
   */
  owningType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Owning Entry.
   * @nullable
   */
  owningEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Owning Line Num.
   * @nullable
   */
  owningLineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reverted Type.
   * @nullable
   */
  revertedType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Reverted Entry.
   * @nullable
   */
  revertedEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reverted Line Num.
   * @nullable
   */
  revertedLineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Memo Source.
   * @nullable
   */
  memoSource?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Memo.
   * @nullable
   */
  memo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Single Run Capacity.
   * @nullable
   */
  singleRunCapacity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Single Run Memo Source.
   * @nullable
   */
  singleRunMemoSource?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Single Run Memo.
   * @nullable
   */
  singleRunMemo?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ResourceCapacityParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceCapacityParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ResourceCapacityParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ResourceCapacityParams.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Int32', true, false> =
    this._fieldBuilder.buildEdmTypeField('Id', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link ResourceCapacityParams.warehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Warehouse', 'Edm.String', true);
  /**
   * Representation of the {@link ResourceCapacityParams.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link ResourceCapacityParams.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacityTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Type', ResourceCapacityTypeEnum, true);
  /**
   * Representation of the {@link ResourceCapacityParams.capacity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  capacity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Capacity', 'Edm.Double', true);
  /**
   * Representation of the {@link ResourceCapacityParams.sourceType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceType: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacitySourceTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SourceType',
    ResourceCapacitySourceTypeEnum,
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.sourceEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourceEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.sourceLineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceLineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourceLineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.baseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacityBaseTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BaseType',
    ResourceCapacityBaseTypeEnum,
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.baseEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.baseLineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.action} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  action: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacityActionEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Action',
    ResourceCapacityActionEnum,
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.owningType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningType: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacityOwningTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'OwningType',
    ResourceCapacityOwningTypeEnum,
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.owningEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OwningEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.owningLineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owningLineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OwningLineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.revertedType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedType: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacityRevertedTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'RevertedType',
    ResourceCapacityRevertedTypeEnum,
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.revertedEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RevertedEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ResourceCapacityParams.revertedLineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revertedLineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RevertedLineNum',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.memoSource} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memoSource: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacityMemoSourceEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'MemoSource',
    ResourceCapacityMemoSourceEnum,
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.memo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true);
  /**
   * Representation of the {@link ResourceCapacityParams.singleRunCapacity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunCapacity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SingleRunCapacity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.singleRunMemoSource} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunMemoSource: EnumField<
    EntityT,
    DeSerializersT,
    ResourceCapacityMemoSourceEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SingleRunMemoSource',
    ResourceCapacityMemoSourceEnum,
    true
  );
  /**
   * Representation of the {@link ResourceCapacityParams.singleRunMemo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRunMemo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SingleRunMemo', 'Edm.String', true);

  /**
   * Creates an instance of ResourceCapacityParamsField.
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
      ResourceCapacityParams,
      fieldOptions
    );
  }
}

export namespace ResourceCapacityParams {
  /**
   * Metadata information on all properties of the `ResourceCapacityParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ResourceCapacityParams>[] = [
    {
      originalName: 'Id',
      name: 'id',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Warehouse',
      name: 'warehouse',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Capacity',
      name: 'capacity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SourceType',
      name: 'sourceType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SourceEntry',
      name: 'sourceEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SourceLineNum',
      name: 'sourceLineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseType',
      name: 'baseType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BaseEntry',
      name: 'baseEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BaseLineNum',
      name: 'baseLineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Action',
      name: 'action',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'OwningType',
      name: 'owningType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'OwningEntry',
      name: 'owningEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'OwningLineNum',
      name: 'owningLineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RevertedType',
      name: 'revertedType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RevertedEntry',
      name: 'revertedEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RevertedLineNum',
      name: 'revertedLineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'MemoSource',
      name: 'memoSource',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Memo',
      name: 'memo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SingleRunCapacity',
      name: 'singleRunCapacity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SingleRunMemoSource',
      name: 'singleRunMemoSource',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SingleRunMemo',
      name: 'singleRunMemo',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
