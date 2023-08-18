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
 * OpenningBalanceAccount
 */
export interface OpenningBalanceAccount<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Open Balance Account.
   * @nullable
   */
  openBalanceAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Ref 1.
   * @nullable
   */
  ref1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ref 2.
   * @nullable
   */
  ref2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * OpenningBalanceAccountField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class OpenningBalanceAccountField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  OpenningBalanceAccount,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link OpenningBalanceAccount.openBalanceAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openBalanceAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OpenBalanceAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link OpenningBalanceAccount.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link OpenningBalanceAccount.ref1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Ref1', 'Edm.String', true);
  /**
   * Representation of the {@link OpenningBalanceAccount.ref2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Ref2', 'Edm.String', true);
  /**
   * Representation of the {@link OpenningBalanceAccount.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);
  /**
   * Representation of the {@link OpenningBalanceAccount.bplid} property for query construction.
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
   * Creates an instance of OpenningBalanceAccountField.
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
      OpenningBalanceAccount,
      fieldOptions
    );
  }
}

export namespace OpenningBalanceAccount {
  /**
   * Metadata information on all properties of the `OpenningBalanceAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<OpenningBalanceAccount>[] = [
    {
      originalName: 'OpenBalanceAccount',
      name: 'openBalanceAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Ref1',
      name: 'ref1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Ref2',
      name: 'ref2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPLID',
      name: 'bplid',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
