/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InternalReconciliationBp
 */
export interface InternalReconciliationBp {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationBp.build]] instead.
 */
export function createInternalReconciliationBp(json: any): InternalReconciliationBp {
  return InternalReconciliationBp.build(json);
}

/**
 * InternalReconciliationBpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationBpField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InternalReconciliationBp.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
}

export namespace InternalReconciliationBp {
  export function build(json: { [keys: string]: FieldType }): InternalReconciliationBp {
    return createComplexType(json, {
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') })
    });
  }
}
