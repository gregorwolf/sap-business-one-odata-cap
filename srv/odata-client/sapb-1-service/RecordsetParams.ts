/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class RecordsetParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RecordsetParams.query]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  query: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Query', this, 'Edm.String');
}

export namespace RecordsetParams {
  export function build(json: { [keys: string]: FieldType }): RecordsetParams {
    return createComplexType(json, {
      Query: (query: string) => ({ query: edmToTs(query, 'Edm.String') })
    });
  }
}
