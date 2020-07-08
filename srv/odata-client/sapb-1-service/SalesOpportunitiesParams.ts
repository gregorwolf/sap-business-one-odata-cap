/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesOpportunitiesParams
 */
export interface SalesOpportunitiesParams {
  /**
   * Sequential No.
   * @nullable
   */
  sequentialNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesParams.build]] instead.
 */
export function createSalesOpportunitiesParams(json: any): SalesOpportunitiesParams {
  return SalesOpportunitiesParams.build(json);
}

/**
 * SalesOpportunitiesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesOpportunitiesParams.sequentialNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequentialNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequentialNo', this, 'Edm.Int32');
}

export namespace SalesOpportunitiesParams {
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesParams {
    return createComplexType(json, {
      SequentialNo: (sequentialNo: number) => ({ sequentialNo: edmToTs(sequentialNo, 'Edm.Int32') })
    });
  }
}
