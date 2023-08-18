/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoBoeStatus } from './BoBoeStatus';
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
 * BoeLine
 */
export interface BoeLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Boe Key.
   * @nullable
   */
  boeKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Boe Number.
   * @nullable
   */
  boeNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Bank.
   * @nullable
   */
  bank?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Amount.
   * @nullable
   */
  amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Boe Status.
   * @nullable
   */
  boeStatus?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Transferred.
   * @nullable
   */
  transferred?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * BoeLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BoeLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BoeLine.boeKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BOEKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link BoeLine.boeNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BOENumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link BoeLine.dueDate} property for query construction.
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
   * Representation of the {@link BoeLine.bank} property for query construction.
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
   * Representation of the {@link BoeLine.branch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Branch', 'Edm.String', true);
  /**
   * Representation of the {@link BoeLine.accountNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountNumber', 'Edm.String', true);
  /**
   * Representation of the {@link BoeLine.amount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Amount', 'Edm.Double', true);
  /**
   * Representation of the {@link BoeLine.boeStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeStatus: EnumField<EntityT, DeSerializersT, BoBoeStatus, true, false> =
    this._fieldBuilder.buildEnumField('BOEStatus', BoBoeStatus, true);
  /**
   * Representation of the {@link BoeLine.transferred} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferred: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Transferred', BoYesNoEnum, true);

  /**
   * Creates an instance of BoeLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BoeLine, fieldOptions);
  }
}

export namespace BoeLine {
  /**
   * Metadata information on all properties of the `BoeLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoeLine>[] = [
    {
      originalName: 'BOEKey',
      name: 'boeKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BOENumber',
      name: 'boeNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Bank',
      name: 'bank',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Branch',
      name: 'branch',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountNumber',
      name: 'accountNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Amount',
      name: 'amount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BOEStatus',
      name: 'boeStatus',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Transferred',
      name: 'transferred',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
