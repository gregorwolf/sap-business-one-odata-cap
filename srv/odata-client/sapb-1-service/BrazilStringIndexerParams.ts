/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BrazilStringIndexerParams
 */
export interface BrazilStringIndexerParams {
  /**
   * Id.
   * @nullable
   */
  id?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BrazilStringIndexerParams.build]] instead.
 */
export function createBrazilStringIndexerParams(json: any): BrazilStringIndexerParams {
  return BrazilStringIndexerParams.build(json);
}

/**
 * BrazilStringIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilStringIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BrazilStringIndexerParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');
}

export namespace BrazilStringIndexerParams {
  export function build(json: { [keys: string]: FieldType }): BrazilStringIndexerParams {
    return createComplexType(json, {
      ID: (id: number) => ({ id: edmToTs(id, 'Edm.Int32') })
    });
  }
}
