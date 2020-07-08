/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ApprovalStageApprover
 */
export interface ApprovalStageApprover {
  /**
   * User Id.
   * @nullable
   */
  userId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalStageApprover.build]] instead.
 */
export function createApprovalStageApprover(json: any): ApprovalStageApprover {
  return ApprovalStageApprover.build(json);
}

/**
 * ApprovalStageApproverField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalStageApproverField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ApprovalStageApprover.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserID', this, 'Edm.Int32');
}

export namespace ApprovalStageApprover {
  export function build(json: { [keys: string]: FieldType }): ApprovalStageApprover {
    return createComplexType(json, {
      UserID: (userId: number) => ({ userId: edmToTs(userId, 'Edm.Int32') })
    });
  }
}
