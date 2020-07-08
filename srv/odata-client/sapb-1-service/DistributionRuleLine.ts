/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DistributionRuleLine
 */
export interface DistributionRuleLine {
  /**
   * Center Code.
   * @nullable
   */
  centerCode?: string;
  /**
   * Total In Center.
   * @nullable
   */
  totalInCenter?: number;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: Moment;
  /**
   * Effective To.
   * @nullable
   */
  effectiveTo?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleLine.build]] instead.
 */
export function createDistributionRuleLine(json: any): DistributionRuleLine {
  return DistributionRuleLine.build(json);
}

/**
 * DistributionRuleLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DistributionRuleLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DistributionRuleLine.centerCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CenterCode', this, 'Edm.String');
  /**
   * Representation of the [[DistributionRuleLine.totalInCenter]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalInCenter: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalInCenter', this, 'Edm.Double');
  /**
   * Representation of the [[DistributionRuleLine.effectiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DistributionRuleLine.effectiveTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveTo', this, 'Edm.DateTimeOffset');
}

export namespace DistributionRuleLine {
  export function build(json: { [keys: string]: FieldType }): DistributionRuleLine {
    return createComplexType(json, {
      CenterCode: (centerCode: string) => ({ centerCode: edmToTs(centerCode, 'Edm.String') }),
      TotalInCenter: (totalInCenter: number) => ({ totalInCenter: edmToTs(totalInCenter, 'Edm.Double') }),
      EffectiveFrom: (effectiveFrom: Moment) => ({ effectiveFrom: edmToTs(effectiveFrom, 'Edm.DateTimeOffset') }),
      EffectiveTo: (effectiveTo: Moment) => ({ effectiveTo: edmToTs(effectiveTo, 'Edm.DateTimeOffset') })
    });
  }
}
