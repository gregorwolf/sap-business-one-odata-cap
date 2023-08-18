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
 * ChooseFromListParams
 */
export interface ChooseFromListParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Object Name.
   * @nullable
   */
  objectName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ChooseFromListParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChooseFromListParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ChooseFromListParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ChooseFromListParams.objectName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectName', 'Edm.String', true);

  /**
   * Creates an instance of ChooseFromListParamsField.
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
      ChooseFromListParams,
      fieldOptions
    );
  }
}

export namespace ChooseFromListParams {
  /**
   * Metadata information on all properties of the `ChooseFromListParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChooseFromListParams>[] = [
    {
      originalName: 'ObjectName',
      name: 'objectName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
