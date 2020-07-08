/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DeterminationCriteriaParams
 */
export interface DeterminationCriteriaParams {
  /**
   * Dmc Id.
   * @nullable
   */
  dmcId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DeterminationCriteriaParams.build]] instead.
 */
export function createDeterminationCriteriaParams(json: any): DeterminationCriteriaParams {
  return DeterminationCriteriaParams.build(json);
}

/**
 * DeterminationCriteriaParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeterminationCriteriaParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DeterminationCriteriaParams.dmcId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dmcId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DmcId', this, 'Edm.Int32');
}

export namespace DeterminationCriteriaParams {
  export function build(json: { [keys: string]: FieldType }): DeterminationCriteriaParams {
    return createComplexType(json, {
      DmcId: (dmcId: number) => ({ dmcId: edmToTs(dmcId, 'Edm.Int32') })
    });
  }
}
