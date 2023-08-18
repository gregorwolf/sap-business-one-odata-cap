/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * BpCurrencies
 */
export interface BpCurrencies<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Currency Code.
   * @nullable
   */
  currencyCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Include.
   * @nullable
   */
  include?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * BpCurrenciesField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpCurrenciesField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpCurrencies,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpCurrencies.currencyCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CurrencyCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpCurrencies.include} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  include: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Include', BoYesNoEnum, true);

  /**
   * Creates an instance of BpCurrenciesField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BpCurrencies, fieldOptions);
  }
}

export namespace BpCurrencies {
  /**
   * Metadata information on all properties of the `BpCurrencies` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpCurrencies>[] = [
    {
      originalName: 'CurrencyCode',
      name: 'currencyCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Include',
      name: 'include',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
