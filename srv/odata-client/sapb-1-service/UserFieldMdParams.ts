/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserFieldMdParams
 */
export interface UserFieldMdParams {
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Field Id.
   * @nullable
   */
  fieldId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserFieldMdParams.build]] instead.
 */
export function createUserFieldMdParams(json: any): UserFieldMdParams {
  return UserFieldMdParams.build(json);
}

/**
 * UserFieldMdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserFieldMdParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserFieldMdParams> {
  /**
   * Representation of the [[UserFieldMdParams.tableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableName', this, 'Edm.String');
  /**
   * Representation of the [[UserFieldMdParams.fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FieldID', this, 'Edm.Int32');

  /**
   * Creates an instance of UserFieldMdParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserFieldMdParams);
  }
}

export namespace UserFieldMdParams {
  /**
   * Metadata information on all properties of the `UserFieldMdParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserFieldMdParams>[] = [{
    originalName: 'TableName',
    name: 'tableName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FieldID',
    name: 'fieldId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserFieldMdParams {
    return deserializeComplexTypeV4(json, UserFieldMdParams);
  }
}
