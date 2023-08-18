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
 * RoundedData
 */
export interface RoundedData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Value.
   * @nullable
   */
  value?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * RoundedDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoundedDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RoundedData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RoundedData.value} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Value', 'Edm.Double', true);

  /**
   * Creates an instance of RoundedDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, RoundedData, fieldOptions);
  }
}

export namespace RoundedData {
  /**
   * Metadata information on all properties of the `RoundedData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RoundedData>[] = [
    {
      originalName: 'Value',
      name: 'value',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
