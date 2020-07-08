/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BpAccountReceivablePayble
 */
export interface BpAccountReceivablePayble {
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpAccountReceivablePayble.build]] instead.
 */
export function createBpAccountReceivablePayble(json: any): BpAccountReceivablePayble {
  return BpAccountReceivablePayble.build(json);
}

/**
 * BpAccountReceivablePaybleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpAccountReceivablePaybleField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BpAccountReceivablePayble.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[BpAccountReceivablePayble.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
}

export namespace BpAccountReceivablePayble {
  export function build(json: { [keys: string]: FieldType }): BpAccountReceivablePayble {
    return createComplexType(json, {
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') })
    });
  }
}
