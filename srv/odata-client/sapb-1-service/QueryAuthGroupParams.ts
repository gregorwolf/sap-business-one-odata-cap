/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * QueryAuthGroupParams
 */
export interface QueryAuthGroupParams {
  /**
   * Auth Group Id.
   * @nullable
   */
  authGroupId?: number;
  /**
   * Auth Group Code.
   * @nullable
   */
  authGroupCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[QueryAuthGroupParams.build]] instead.
 */
export function createQueryAuthGroupParams(json: any): QueryAuthGroupParams {
  return QueryAuthGroupParams.build(json);
}

/**
 * QueryAuthGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class QueryAuthGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, QueryAuthGroupParams> {
  /**
   * Representation of the [[QueryAuthGroupParams.authGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authGroupId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AuthGroupId', this, 'Edm.Int32');
  /**
   * Representation of the [[QueryAuthGroupParams.authGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AuthGroupCode', this, 'Edm.String');

  /**
   * Creates an instance of QueryAuthGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, QueryAuthGroupParams);
  }
}

export namespace QueryAuthGroupParams {
  /**
   * Metadata information on all properties of the `QueryAuthGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<QueryAuthGroupParams>[] = [{
    originalName: 'AuthGroupId',
    name: 'authGroupId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AuthGroupCode',
    name: 'authGroupCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): QueryAuthGroupParams {
    return deserializeComplexTypeV4(json, QueryAuthGroupParams);
  }
}
