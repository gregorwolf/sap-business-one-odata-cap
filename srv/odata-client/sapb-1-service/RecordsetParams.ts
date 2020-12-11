/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * RecordsetParams
 */
export interface RecordsetParams {
  /**
   * Query.
   * @nullable
   */
  query?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[RecordsetParams.build]] instead.
 */
export function createRecordsetParams(json: any): RecordsetParams {
  return RecordsetParams.build(json);
}

/**
 * RecordsetParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RecordsetParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RecordsetParams> {
  /**
   * Representation of the [[RecordsetParams.query]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  query: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Query', this, 'Edm.String');

  /**
   * Creates an instance of RecordsetParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RecordsetParams);
  }
}

export namespace RecordsetParams {
  /**
   * Metadata information on all properties of the `RecordsetParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RecordsetParams>[] = [{
    originalName: 'Query',
    name: 'query',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RecordsetParams {
    return deserializeComplexTypeV4(json, RecordsetParams);
  }
}
