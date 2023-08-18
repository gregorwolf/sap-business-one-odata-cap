/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDepositPostingTypes } from './BoDepositPostingTypes';
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
 * BillOfExchangeTransDeposit
 */
export interface BillOfExchangeTransDeposit<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Deposit Norm.
   * @nullable
   */
  depositNorm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Posting Type.
   * @nullable
   */
  postingType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Deposit Account.
   * @nullable
   */
  bankDepositAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Branch.
   * @nullable
   */
  bankBranch?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BillOfExchangeTransDepositField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransDepositField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BillOfExchangeTransDeposit,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BillOfExchangeTransDeposit.depositNorm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depositNorm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DepositNorm', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransDeposit.postingType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingType: EnumField<
    EntityT,
    DeSerializersT,
    BoDepositPostingTypes,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PostingType',
    BoDepositPostingTypes,
    true
  );
  /**
   * Representation of the {@link BillOfExchangeTransDeposit.bankCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankCountry', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransDeposit.bankAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransDeposit.bankDepositAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankDepositAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BankDepositAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BillOfExchangeTransDeposit.bankBranch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankBranch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankBranch', 'Edm.String', true);

  /**
   * Creates an instance of BillOfExchangeTransDepositField.
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
      BillOfExchangeTransDeposit,
      fieldOptions
    );
  }
}

export namespace BillOfExchangeTransDeposit {
  /**
   * Metadata information on all properties of the `BillOfExchangeTransDeposit` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchangeTransDeposit>[] =
    [
      {
        originalName: 'DepositNorm',
        name: 'depositNorm',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'PostingType',
        name: 'postingType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'BankCountry',
        name: 'bankCountry',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BankAccount',
        name: 'bankAccount',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BankDepositAccount',
        name: 'bankDepositAccount',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BankBranch',
        name: 'bankBranch',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
