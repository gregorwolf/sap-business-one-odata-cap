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
 * BankStatementsFilter
 */
export interface BankStatementsFilter<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank.
   * @nullable
   */
  bank?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account.
   * @nullable
   */
  account?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BankStatementsFilterField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementsFilterField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BankStatementsFilter,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BankStatementsFilter.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementsFilter.bank} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Bank', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementsFilter.account} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  account: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Account', 'Edm.String', true);

  /**
   * Creates an instance of BankStatementsFilterField.
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
      BankStatementsFilter,
      fieldOptions
    );
  }
}

export namespace BankStatementsFilter {
  /**
   * Metadata information on all properties of the `BankStatementsFilter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankStatementsFilter>[] = [
    {
      originalName: 'Country',
      name: 'country',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Bank',
      name: 'bank',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Account',
      name: 'account',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
