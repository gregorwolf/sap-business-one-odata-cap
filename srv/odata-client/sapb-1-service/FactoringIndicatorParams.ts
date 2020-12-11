/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FactoringIndicatorParams
 */
export interface FactoringIndicatorParams {
  /**
   * Indicator Code.
   * @nullable
   */
  indicatorCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FactoringIndicatorParams.build]] instead.
 */
export function createFactoringIndicatorParams(json: any): FactoringIndicatorParams {
  return FactoringIndicatorParams.build(json);
}

/**
 * FactoringIndicatorParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FactoringIndicatorParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FactoringIndicatorParams> {
  /**
   * Representation of the [[FactoringIndicatorParams.indicatorCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  indicatorCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IndicatorCode', this, 'Edm.String');

  /**
   * Creates an instance of FactoringIndicatorParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FactoringIndicatorParams);
  }
}

export namespace FactoringIndicatorParams {
  /**
   * Metadata information on all properties of the `FactoringIndicatorParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FactoringIndicatorParams>[] = [{
    originalName: 'IndicatorCode',
    name: 'indicatorCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FactoringIndicatorParams {
    return deserializeComplexTypeV4(json, FactoringIndicatorParams);
  }
}
