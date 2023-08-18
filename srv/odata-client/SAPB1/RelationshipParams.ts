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
 * RelationshipParams
 */
export interface RelationshipParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * RelationshipParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RelationshipParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RelationshipParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RelationshipParams.relationshipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relationshipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RelationshipCode',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of RelationshipParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, RelationshipParams, fieldOptions);
  }
}

export namespace RelationshipParams {
  /**
   * Metadata information on all properties of the `RelationshipParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RelationshipParams>[] = [
    {
      originalName: 'RelationshipCode',
      name: 'relationshipCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
