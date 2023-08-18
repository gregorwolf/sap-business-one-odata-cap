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
 * InvokeParams
 */
export interface InvokeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Value.
   * @nullable
   */
  value?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * InvokeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InvokeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InvokeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InvokeParams.value} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true);

  /**
   * Creates an instance of InvokeParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, InvokeParams, fieldOptions);
  }
}

export namespace InvokeParams {
  /**
   * Metadata information on all properties of the `InvokeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InvokeParams>[] = [
    {
      originalName: 'Value',
      name: 'value',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
