/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExternalCallParams
 */
export interface ExternalCallParams {
  /**
   * Id.
   * @nullable
   */
  id?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ExternalCallParams.build]] instead.
 */
export function createExternalCallParams(json: any): ExternalCallParams {
  return ExternalCallParams.build(json);
}

/**
 * ExternalCallParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalCallParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExternalCallParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');
}

export namespace ExternalCallParams {
  export function build(json: { [keys: string]: FieldType }): ExternalCallParams {
    return createComplexType(json, {
      ID: (id: number) => ({ id: edmToTs(id, 'Edm.Int32') })
    });
  }
}
