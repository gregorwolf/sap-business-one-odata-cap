/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UserPermissionTreeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserPermissionTreeParams.permissionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permissionId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PermissionID', this, 'Edm.String');
}

export namespace UserPermissionTreeParams {
  export function build(json: { [keys: string]: FieldType }): UserPermissionTreeParams {
    return createComplexType(json, {
      PermissionID: (permissionId: string) => ({ permissionId: edmToTs(permissionId, 'Edm.String') })
    });
  }
}
