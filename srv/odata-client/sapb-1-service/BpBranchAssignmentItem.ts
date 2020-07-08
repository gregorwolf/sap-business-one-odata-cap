/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BpBranchAssignmentItem
 */
export interface BpBranchAssignmentItem {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BpBranchAssignmentItem.build]] instead.
 */
export function createBpBranchAssignmentItem(json: any): BpBranchAssignmentItem {
  return BpBranchAssignmentItem.build(json);
}

/**
 * BpBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBranchAssignmentItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BpBranchAssignmentItem.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBranchAssignmentItem.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
}

export namespace BpBranchAssignmentItem {
  export function build(json: { [keys: string]: FieldType }): BpBranchAssignmentItem {
    return createComplexType(json, {
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') })
    });
  }
}
