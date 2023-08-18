/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * MobileServerDateTime
 */
export interface MobileServerDateTime<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Time.
   * @nullable
   */
  time?: DeserializedType<DeSerializersT, 'Edm.TimeOfDay'>;
}

/**
 * MobileServerDateTimeField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MobileServerDateTimeField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MobileServerDateTime,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MobileServerDateTime.date} property for query construction.
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
   * Representation of the {@link MobileServerDateTime.time} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  time: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.TimeOfDay',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Time', 'Edm.TimeOfDay', true);

  /**
   * Creates an instance of MobileServerDateTimeField.
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
      MobileServerDateTime,
      fieldOptions
    );
  }
}

export namespace MobileServerDateTime {
  /**
   * Metadata information on all properties of the `MobileServerDateTime` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MobileServerDateTime>[] = [
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Time',
      name: 'time',
      type: 'Edm.TimeOfDay',
      isCollection: false
    }
  ];
}
