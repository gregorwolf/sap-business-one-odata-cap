/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserDefaultGroupParams
 */
export interface UserDefaultGroupParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserDefaultGroupParams.build]] instead.
 */
export function createUserDefaultGroupParams(json: any): UserDefaultGroupParams {
  return UserDefaultGroupParams.build(json);
}

/**
 * UserDefaultGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserDefaultGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserDefaultGroupParams> {
  /**
   * Representation of the [[UserDefaultGroupParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of UserDefaultGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserDefaultGroupParams);
  }
}

export namespace UserDefaultGroupParams {
  /**
   * Metadata information on all properties of the `UserDefaultGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserDefaultGroupParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserDefaultGroupParams {
    return deserializeComplexTypeV4(json, UserDefaultGroupParams);
  }
}
