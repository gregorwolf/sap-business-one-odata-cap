/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserKeyParams
 */
export interface UserKeyParams {
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Key Index.
   * @nullable
   */
  keyIndex?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserKeyParams.build]] instead.
 */
export function createUserKeyParams(json: any): UserKeyParams {
  return UserKeyParams.build(json);
}

/**
 * UserKeyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserKeyParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserKeyParams> {
  /**
   * Representation of the [[UserKeyParams.tableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableName', this, 'Edm.String');
  /**
   * Representation of the [[UserKeyParams.keyIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyIndex', this, 'Edm.Int32');

  /**
   * Creates an instance of UserKeyParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserKeyParams);
  }
}

export namespace UserKeyParams {
  /**
   * Metadata information on all properties of the `UserKeyParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserKeyParams>[] = [{
    originalName: 'TableName',
    name: 'tableName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'KeyIndex',
    name: 'keyIndex',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserKeyParams {
    return deserializeComplexTypeV4(json, UserKeyParams);
  }
}
