/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ResourceDailyCapacity
 */
export interface ResourceDailyCapacity {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Factor 1.
   * @nullable
   */
  factor1?: number;
  /**
   * Factor 2.
   * @nullable
   */
  factor2?: number;
  /**
   * Factor 3.
   * @nullable
   */
  factor3?: number;
  /**
   * Factor 4.
   * @nullable
   */
  factor4?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Single Run.
   * @nullable
   */
  singleRun?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceDailyCapacity.build]] instead.
 */
export function createResourceDailyCapacity(json: any): ResourceDailyCapacity {
  return ResourceDailyCapacity.build(json);
}

/**
 * ResourceDailyCapacityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceDailyCapacityField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ResourceDailyCapacity.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceDailyCapacity.factor1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor1', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.factor2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor2', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.factor3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor3', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.factor4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor4', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[ResourceDailyCapacity.singleRun]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRun: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SingleRun', this, 'Edm.Double');
}

export namespace ResourceDailyCapacity {
  export function build(json: { [keys: string]: FieldType }): ResourceDailyCapacity {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Factor1: (factor1: number) => ({ factor1: edmToTs(factor1, 'Edm.Double') }),
      Factor2: (factor2: number) => ({ factor2: edmToTs(factor2, 'Edm.Double') }),
      Factor3: (factor3: number) => ({ factor3: edmToTs(factor3, 'Edm.Double') }),
      Factor4: (factor4: number) => ({ factor4: edmToTs(factor4, 'Edm.Double') }),
      Total: (total: number) => ({ total: edmToTs(total, 'Edm.Double') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      SingleRun: (singleRun: number) => ({ singleRun: edmToTs(singleRun, 'Edm.Double') })
    });
  }
}
