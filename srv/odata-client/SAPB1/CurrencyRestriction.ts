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
 * CurrencyRestriction
 */
export interface CurrencyRestriction<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Currency Code.
   * @nullable
   */
  currencyCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Currency Name.
   * @nullable
   */
  currencyName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Choose.
   * @nullable
   */
  choose?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * CurrencyRestrictionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CurrencyRestrictionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CurrencyRestriction,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CurrencyRestriction.paymentMethodCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentMethodCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CurrencyRestriction.currencyCode} property for query construction.
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
   * Representation of the {@link CurrencyRestriction.currencyName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CurrencyName', 'Edm.String', true);
  /**
   * Representation of the {@link CurrencyRestriction.choose} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  choose: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Choose', BoYesNoEnum, true);

  /**
   * Creates an instance of CurrencyRestrictionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CurrencyRestriction, fieldOptions);
  }
}

export namespace CurrencyRestriction {
  /**
   * Metadata information on all properties of the `CurrencyRestriction` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CurrencyRestriction>[] = [
    {
      originalName: 'PaymentMethodCode',
      name: 'paymentMethodCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CurrencyCode',
      name: 'currencyCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CurrencyName',
      name: 'currencyName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Choose',
      name: 'choose',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
