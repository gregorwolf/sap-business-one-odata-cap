/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesStageParams
 */
export interface SalesStageParams {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesStageParams.build]] instead.
 */
export function createSalesStageParams(json: any): SalesStageParams {
  return SalesStageParams.build(json);
}

/**
 * SalesStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesStageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesStageParams.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
}

export namespace SalesStageParams {
  export function build(json: { [keys: string]: FieldType }): SalesStageParams {
    return createComplexType(json, {
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') })
    });
  }
}
