/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class DistributionRuleLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DistributionRuleLine> {
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

  /**
   * Creates an instance of DistributionRuleLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DistributionRuleLine);
  }
}

export namespace DistributionRuleLine {
  /**
   * Metadata information on all properties of the `DistributionRuleLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DistributionRuleLine>[] = [{
    originalName: 'CenterCode',
    name: 'centerCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TotalInCenter',
    name: 'totalInCenter',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'EffectiveFrom',
    name: 'effectiveFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'EffectiveTo',
    name: 'effectiveTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DistributionRuleLine {
    return deserializeComplexTypeV4(json, DistributionRuleLine);
  }
}
