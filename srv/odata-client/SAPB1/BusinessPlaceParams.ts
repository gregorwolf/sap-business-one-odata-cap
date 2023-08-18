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
 * BusinessPlaceParams
 */
export interface BusinessPlaceParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * BusinessPlaceParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPlaceParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BusinessPlaceParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BusinessPlaceParams.bplid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true);

  /**
   * Creates an instance of BusinessPlaceParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BusinessPlaceParams, fieldOptions);
  }
}

export namespace BusinessPlaceParams {
  /**
   * Metadata information on all properties of the `BusinessPlaceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPlaceParams>[] = [
    {
      originalName: 'BPLID',
      name: 'bplid',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
