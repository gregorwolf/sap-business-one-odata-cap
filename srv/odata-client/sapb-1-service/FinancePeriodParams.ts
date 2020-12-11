/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FinancePeriodParams
 */
export interface FinancePeriodParams {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FinancePeriodParams.build]] instead.
 */
export function createFinancePeriodParams(json: any): FinancePeriodParams {
  return FinancePeriodParams.build(json);
}

/**
 * FinancePeriodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FinancePeriodParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FinancePeriodParams> {
  /**
   * Representation of the [[FinancePeriodParams.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[FinancePeriodParams.periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodIndicator', this, 'Edm.String');

  /**
   * Creates an instance of FinancePeriodParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FinancePeriodParams);
  }
}

export namespace FinancePeriodParams {
  /**
   * Metadata information on all properties of the `FinancePeriodParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FinancePeriodParams>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PeriodIndicator',
    name: 'periodIndicator',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FinancePeriodParams {
    return deserializeComplexTypeV4(json, FinancePeriodParams);
  }
}
