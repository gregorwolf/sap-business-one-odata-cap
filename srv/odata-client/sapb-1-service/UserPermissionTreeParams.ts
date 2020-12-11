/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserPermissionTreeParams
 */
export interface UserPermissionTreeParams {
  /**
   * Permission Id.
   * @nullable
   */
  permissionId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserPermissionTreeParams.build]] instead.
 */
export function createUserPermissionTreeParams(json: any): UserPermissionTreeParams {
  return UserPermissionTreeParams.build(json);
}

/**
 * UserPermissionTreeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserPermissionTreeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserPermissionTreeParams> {
  /**
   * Representation of the [[UserPermissionTreeParams.permissionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permissionId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PermissionID', this, 'Edm.String');

  /**
   * Creates an instance of UserPermissionTreeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserPermissionTreeParams);
  }
}

export namespace UserPermissionTreeParams {
  /**
   * Metadata information on all properties of the `UserPermissionTreeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserPermissionTreeParams>[] = [{
    originalName: 'PermissionID',
    name: 'permissionId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserPermissionTreeParams {
    return deserializeComplexTypeV4(json, UserPermissionTreeParams);
  }
}
