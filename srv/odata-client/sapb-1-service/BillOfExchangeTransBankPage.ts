/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BillOfExchangeTransBankPage
 */
export interface BillOfExchangeTransBankPage {
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
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransBankPage.build]] instead.
 */
export function createBillOfExchangeTransBankPage(json: any): BillOfExchangeTransBankPage {
  return BillOfExchangeTransBankPage.build(json);
}

/**
 * BillOfExchangeTransBankPageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransBankPageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BillOfExchangeTransBankPage.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransBankPage.sequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Sequence', this, 'Edm.Int32');
}

export namespace BillOfExchangeTransBankPage {
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransBankPage {
    return createComplexType(json, {
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      Sequence: (sequence: number) => ({ sequence: edmToTs(sequence, 'Edm.Int32') })
    });
  }
}
