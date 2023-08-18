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
 * Forms1099Params
 */
export interface Forms1099Params<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Form Code.
   * @nullable
   */
  formCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * Forms1099ParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class Forms1099ParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Forms1099Params,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Forms1099Params.formCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FormCode', 'Edm.Int32', true);

  /**
   * Creates an instance of Forms1099ParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Forms1099Params, fieldOptions);
  }
}

export namespace Forms1099Params {
  /**
   * Metadata information on all properties of the `Forms1099Params` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Forms1099Params>[] = [
    {
      originalName: 'FormCode',
      name: 'formCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
