/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CounterTypeEnum } from './CounterTypeEnum';
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
 * TeamCounter
 */
export interface TeamCounter<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Counter Name.
   * @nullable
   */
  counterName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Counter Number.
   * @nullable
   */
  counterNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Counter Visual Order.
   * @nullable
   */
  counterVisualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * TeamCounterField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TeamCounterField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TeamCounter,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TeamCounter.documentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link TeamCounter.counterId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CounterID', 'Edm.Int32', true);
  /**
   * Representation of the {@link TeamCounter.counterType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: EnumField<
    EntityT,
    DeSerializersT,
    CounterTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CounterType', CounterTypeEnum, true);
  /**
   * Representation of the {@link TeamCounter.counterName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CounterName', 'Edm.String', true);
  /**
   * Representation of the {@link TeamCounter.counterNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CounterNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link TeamCounter.counterVisualOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterVisualOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CounterVisualOrder',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of TeamCounterField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TeamCounter, fieldOptions);
  }
}

export namespace TeamCounter {
  /**
   * Metadata information on all properties of the `TeamCounter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TeamCounter>[] = [
    {
      originalName: 'DocumentEntry',
      name: 'documentEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CounterID',
      name: 'counterId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CounterType',
      name: 'counterType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CounterName',
      name: 'counterName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CounterNumber',
      name: 'counterNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CounterVisualOrder',
      name: 'counterVisualOrder',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
