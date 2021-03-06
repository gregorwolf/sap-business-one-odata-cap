/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class UserBranchAssignmentItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserBranchAssignmentItem> {
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

  /**
   * Creates an instance of UserBranchAssignmentItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserBranchAssignmentItem);
  }
}

export namespace UserBranchAssignmentItem {
  /**
   * Metadata information on all properties of the `UserBranchAssignmentItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserBranchAssignmentItem>[] = [{
    originalName: 'UserCode',
    name: 'userCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPLID',
    name: 'bplid',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserBranchAssignmentItem {
    return deserializeComplexTypeV4(json, UserBranchAssignmentItem);
  }
}
