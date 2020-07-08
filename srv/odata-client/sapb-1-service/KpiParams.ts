/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class KpiParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace KpiParams {
  export function build(json: { [keys: string]: FieldType }): KpiParams {
    return createComplexType(json, {
      KPICode: (kpiCode: string) => ({ kpiCode: edmToTs(kpiCode, 'Edm.String') }),
      KPIName: (kpiName: string) => ({ kpiName: edmToTs(kpiName, 'Edm.String') })
    });
  }
}
