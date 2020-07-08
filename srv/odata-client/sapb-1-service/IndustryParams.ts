/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * IndustryParams
 */
export interface IndustryParams {
  /**
   * Industry Code.
   * @nullable
   */
  industryCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[IndustryParams.build]] instead.
 */
export function createIndustryParams(json: any): IndustryParams {
  return IndustryParams.build(json);
}

/**
 * IndustryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class IndustryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[IndustryParams.industryCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  industryCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('IndustryCode', this, 'Edm.Int32');
}

export namespace IndustryParams {
  export function build(json: { [keys: string]: FieldType }): IndustryParams {
    return createComplexType(json, {
      IndustryCode: (industryCode: number) => ({ industryCode: edmToTs(industryCode, 'Edm.Int32') })
    });
  }
}
