/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDepositPostingTypes } from './BoDepositPostingTypes';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BillOfExchangeTransDeposit
 */
export interface BillOfExchangeTransDeposit {
  /**
   * Deposit Norm.
   * @nullable
   */
  depositNorm?: string;
  /**
   * Posting Type.
   * @nullable
   */
  postingType?: BoDepositPostingTypes;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: string;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: string;
  /**
   * Bank Deposit Account.
   * @nullable
   */
  bankDepositAccount?: string;
  /**
   * Bank Branch.
   * @nullable
   */
  bankBranch?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransDeposit.build]] instead.
 */
export function createBillOfExchangeTransDeposit(json: any): BillOfExchangeTransDeposit {
  return BillOfExchangeTransDeposit.build(json);
}

/**
 * BillOfExchangeTransDepositField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransDepositField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchangeTransDeposit> {
  /**
   * Representation of the [[BillOfExchangeTransDeposit.depositNorm]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depositNorm: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepositNorm', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.postingType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PostingType', this);
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCountry', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankAccount', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankDepositAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankDepositAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankDepositAccount', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankBranch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankBranch', this, 'Edm.String');

  /**
   * Creates an instance of BillOfExchangeTransDepositField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BillOfExchangeTransDeposit);
  }
}

export namespace BillOfExchangeTransDeposit {
  /**
   * Metadata information on all properties of the `BillOfExchangeTransDeposit` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchangeTransDeposit>[] = [{
    originalName: 'DepositNorm',
    name: 'depositNorm',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PostingType',
    name: 'postingType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BankCountry',
    name: 'bankCountry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankAccount',
    name: 'bankAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankDepositAccount',
    name: 'bankDepositAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankBranch',
    name: 'bankBranch',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransDeposit {
    return deserializeComplexTypeV4(json, BillOfExchangeTransDeposit);
  }
}
