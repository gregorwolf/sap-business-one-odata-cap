/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserParams
 */
export interface UserParams {
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserParams.build]] instead.
 */
export function createUserParams(json: any): UserParams {
  return UserParams.build(json);
}

/**
 * UserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserParams> {
  /**
   * Representation of the [[UserParams.internalKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalKey', this, 'Edm.Int32');

  /**
   * Creates an instance of UserParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserParams);
  }
}

export namespace UserParams {
  /**
   * Metadata information on all properties of the `UserParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserParams>[] = [{
    originalName: 'InternalKey',
    name: 'internalKey',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserParams {
    return deserializeComplexTypeV4(json, UserParams);
  }
}
