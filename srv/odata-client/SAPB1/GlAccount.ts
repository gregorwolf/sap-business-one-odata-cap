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
 * GlAccount
 */
export interface GlAccount<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Debit.
   * @nullable
   */
  debit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit.
   * @nullable
   */
  credit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * System Debit.
   * @nullable
   */
  systemDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * System Credit.
   * @nullable
   */
  systemCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Foreign Debit.
   * @nullable
   */
  foreignDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Foreign Credit.
   * @nullable
   */
  foreignCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Foreign Currency.
   * @nullable
   */
  foreignCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * GlAccountField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class GlAccountField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  GlAccount,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link GlAccount.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link GlAccount.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link GlAccount.debit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Debit', 'Edm.Double', true);
  /**
   * Representation of the {@link GlAccount.credit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Credit', 'Edm.Double', true);
  /**
   * Representation of the {@link GlAccount.systemDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SystemDebit', 'Edm.Double', true);
  /**
   * Representation of the {@link GlAccount.systemCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SystemCredit', 'Edm.Double', true);
  /**
   * Representation of the {@link GlAccount.foreignDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ForeignDebit', 'Edm.Double', true);
  /**
   * Representation of the {@link GlAccount.foreignCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ForeignCredit', 'Edm.Double', true);
  /**
   * Representation of the {@link GlAccount.foreignCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForeignCurrency',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of GlAccountField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, GlAccount, fieldOptions);
  }
}

export namespace GlAccount {
  /**
   * Metadata information on all properties of the `GlAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GlAccount>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Debit',
      name: 'debit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Credit',
      name: 'credit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SystemDebit',
      name: 'systemDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SystemCredit',
      name: 'systemCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ForeignDebit',
      name: 'foreignDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ForeignCredit',
      name: 'foreignCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ForeignCurrency',
      name: 'foreignCurrency',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
