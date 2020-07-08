/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DistributionRuleParams
 */
export interface DistributionRuleParams {
  /**
   * Factor Code.
   * @nullable
   */
  factorCode?: string;
  /**
   * Factor Description.
   * @nullable
   */
  factorDescription?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleParams.build]] instead.
 */
export function createDistributionRuleParams(json: any): DistributionRuleParams {
  return DistributionRuleParams.build(json);
}

/**
 * DistributionRuleParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DistributionRuleParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DistributionRuleParams.factorCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FactorCode', this, 'Edm.String');
  /**
   * Representation of the [[DistributionRuleParams.factorDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FactorDescription', this, 'Edm.String');
}

export namespace DistributionRuleParams {
  export function build(json: { [keys: string]: FieldType }): DistributionRuleParams {
    return createComplexType(json, {
      FactorCode: (factorCode: string) => ({ factorCode: edmToTs(factorCode, 'Edm.String') }),
      FactorDescription: (factorDescription: string) => ({ factorDescription: edmToTs(factorDescription, 'Edm.String') })
    });
  }
}
