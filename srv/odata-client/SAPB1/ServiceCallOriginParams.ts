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
 * ServiceCallOriginParams
 */
export interface ServiceCallOriginParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Origin Id.
   * @nullable
   */
  originId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ServiceCallOriginParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallOriginParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ServiceCallOriginParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ServiceCallOriginParams.originId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OriginID', 'Edm.Int32', true);
  /**
   * Representation of the {@link ServiceCallOriginParams.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);

  /**
   * Creates an instance of ServiceCallOriginParamsField.
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
      ServiceCallOriginParams,
      fieldOptions
    );
  }
}

export namespace ServiceCallOriginParams {
  /**
   * Metadata information on all properties of the `ServiceCallOriginParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallOriginParams>[] =
    [
      {
        originalName: 'OriginID',
        name: 'originId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Name',
        name: 'name',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
