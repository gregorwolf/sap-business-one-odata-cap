/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BrazilNumericIndexerParams
 */
export interface BrazilNumericIndexerParams {
  /**
   * Id.
   * @nullable
   */
  id?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BrazilNumericIndexerParams.build]] instead.
 */
export function createBrazilNumericIndexerParams(json: any): BrazilNumericIndexerParams {
  return BrazilNumericIndexerParams.build(json);
}

/**
 * BrazilNumericIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BrazilNumericIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BrazilNumericIndexerParams.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');
}

export namespace BrazilNumericIndexerParams {
  export function build(json: { [keys: string]: FieldType }): BrazilNumericIndexerParams {
    return createComplexType(json, {
      ID: (id: number) => ({ id: edmToTs(id, 'Edm.Int32') })
    });
  }
}
