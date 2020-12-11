/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BankStatementsFilter
 */
export interface BankStatementsFilter {
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Bank.
   * @nullable
   */
  bank?: string;
  /**
   * Account.
   * @nullable
   */
  account?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BankStatementsFilter.build]] instead.
 */
export function createBankStatementsFilter(json: any): BankStatementsFilter {
  return BankStatementsFilter.build(json);
}

/**
 * BankStatementsFilterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementsFilterField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankStatementsFilter> {
  /**
   * Representation of the [[BankStatementsFilter.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementsFilter.bank]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Bank', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementsFilter.account]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  account: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Account', this, 'Edm.String');

  /**
   * Creates an instance of BankStatementsFilterField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BankStatementsFilter);
  }
}

export namespace BankStatementsFilter {
  /**
   * Metadata information on all properties of the `BankStatementsFilter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankStatementsFilter>[] = [{
    originalName: 'Country',
    name: 'country',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Bank',
    name: 'bank',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Account',
    name: 'account',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BankStatementsFilter {
    return deserializeComplexTypeV4(json, BankStatementsFilter);
  }
}
