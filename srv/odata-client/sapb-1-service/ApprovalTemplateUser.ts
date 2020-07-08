/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ApprovalTemplateUser
 */
export interface ApprovalTemplateUser {
  /**
   * User Id.
   * @nullable
   */
  userId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateUser.build]] instead.
 */
export function createApprovalTemplateUser(json: any): ApprovalTemplateUser {
  return ApprovalTemplateUser.build(json);
}

/**
 * ApprovalTemplateUserField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ApprovalTemplateUserField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ApprovalTemplateUser.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserID', this, 'Edm.Int32');
}

export namespace ApprovalTemplateUser {
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateUser {
    return createComplexType(json, {
      UserID: (userId: number) => ({ userId: edmToTs(userId, 'Edm.Int32') })
    });
  }
}
