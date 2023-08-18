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
 * PredefinedTextParams
 */
export interface PredefinedTextParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Text Code.
   * @nullable
   */
  textCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PredefinedTextParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PredefinedTextParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PredefinedTextParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PredefinedTextParams.numerator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Numerator', 'Edm.Int32', true);
  /**
   * Representation of the {@link PredefinedTextParams.textCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TextCode', 'Edm.String', true);

  /**
   * Creates an instance of PredefinedTextParamsField.
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
      PredefinedTextParams,
      fieldOptions
    );
  }
}

export namespace PredefinedTextParams {
  /**
   * Metadata information on all properties of the `PredefinedTextParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PredefinedTextParams>[] = [
    {
      originalName: 'Numerator',
      name: 'numerator',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TextCode',
      name: 'textCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
