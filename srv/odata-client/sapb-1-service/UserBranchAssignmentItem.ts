/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserBranchAssignmentItem
 */
export interface UserBranchAssignmentItem {
  /**
   * User Code.
   * @nullable
   */
  userCode?: string;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserBranchAssignmentItem.build]] instead.
 */
export function createUserBranchAssignmentItem(json: any): UserBranchAssignmentItem {
  return UserBranchAssignmentItem.build(json);
}

/**
 * UserBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserBranchAssignmentItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserBranchAssignmentItem.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserCode', this, 'Edm.String');
  /**
   * Representation of the [[UserBranchAssignmentItem.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
}

export namespace UserBranchAssignmentItem {
  export function build(json: { [keys: string]: FieldType }): UserBranchAssignmentItem {
    return createComplexType(json, {
      UserCode: (userCode: string) => ({ userCode: edmToTs(userCode, 'Edm.String') }),
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') })
    });
  }
}
