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
 * CreditCardParams
 */
export interface CreditCardParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Credit Card Code.
   * @nullable
   */
  creditCardCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CreditCardParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditCardParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CreditCardParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CreditCardParams.creditCardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditCardCode', 'Edm.Int32', true);

  /**
   * Creates an instance of CreditCardParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CreditCardParams, fieldOptions);
  }
}

export namespace CreditCardParams {
  /**
   * Metadata information on all properties of the `CreditCardParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CreditCardParams>[] = [
    {
      originalName: 'CreditCardCode',
      name: 'creditCardCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
