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
 * Attachments2Params
 */
export interface Attachments2Params<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * Attachments2ParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class Attachments2ParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Attachments2Params,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Attachments2Params.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);

  /**
   * Creates an instance of Attachments2ParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Attachments2Params, fieldOptions);
  }
}

export namespace Attachments2Params {
  /**
   * Metadata information on all properties of the `Attachments2Params` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Attachments2Params>[] = [
    {
      originalName: 'AbsoluteEntry',
      name: 'absoluteEntry',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}