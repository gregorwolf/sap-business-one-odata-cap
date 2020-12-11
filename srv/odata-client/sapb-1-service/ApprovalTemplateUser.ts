/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ApprovalTemplateUserField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateUser> {
  /**
   * Representation of the [[ApprovalTemplateUser.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserID', this, 'Edm.Int32');

  /**
   * Creates an instance of ApprovalTemplateUserField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ApprovalTemplateUser);
  }
}

export namespace ApprovalTemplateUser {
  /**
   * Metadata information on all properties of the `ApprovalTemplateUser` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ApprovalTemplateUser>[] = [{
    originalName: 'UserID',
    name: 'userId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ApprovalTemplateUser {
    return deserializeComplexTypeV4(json, ApprovalTemplateUser);
  }
}
