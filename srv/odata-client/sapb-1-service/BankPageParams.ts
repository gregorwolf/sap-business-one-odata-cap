/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BankPageParams
 */
export interface BankPageParams {
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BankPageParams.build]] instead.
 */
export function createBankPageParams(json: any): BankPageParams {
  return BankPageParams.build(json);
}

/**
 * BankPageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankPageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BankPageParams.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[BankPageParams.sequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Sequence', this, 'Edm.Int32');
}

export namespace BankPageParams {
  export function build(json: { [keys: string]: FieldType }): BankPageParams {
    return createComplexType(json, {
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      Sequence: (sequence: number) => ({ sequence: edmToTs(sequence, 'Edm.Int32') })
    });
  }
}
