/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * KpiParams
 */
export interface KpiParams {
  /**
   * Kpi Code.
   * @nullable
   */
  kpiCode?: string;
  /**
   * Kpi Name.
   * @nullable
   */
  kpiName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[KpiParams.build]] instead.
 */
export function createKpiParams(json: any): KpiParams {
  return KpiParams.build(json);
}

/**
 * KpiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class KpiParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, KpiParams> {
  /**
   * Representation of the [[KpiParams.kpiCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KPICode', this, 'Edm.String');
  /**
   * Representation of the [[KpiParams.kpiName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  kpiName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('KPIName', this, 'Edm.String');

  /**
   * Creates an instance of KpiParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, KpiParams);
  }
}

export namespace KpiParams {
  /**
   * Metadata information on all properties of the `KpiParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<KpiParams>[] = [{
    originalName: 'KPICode',
    name: 'kpiCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'KPIName',
    name: 'kpiName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): KpiParams {
    return deserializeComplexTypeV4(json, KpiParams);
  }
}
