/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class DistributionRuleParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DistributionRuleParams> {
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

  /**
   * Creates an instance of DistributionRuleParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DistributionRuleParams);
  }
}

export namespace DistributionRuleParams {
  /**
   * Metadata information on all properties of the `DistributionRuleParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DistributionRuleParams>[] = [{
    originalName: 'FactorCode',
    name: 'factorCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FactorDescription',
    name: 'factorDescription',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DistributionRuleParams {
    return deserializeComplexTypeV4(json, DistributionRuleParams);
  }
}
