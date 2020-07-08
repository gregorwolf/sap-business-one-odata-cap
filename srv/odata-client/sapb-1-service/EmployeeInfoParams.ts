/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeInfoParams
 */
export interface EmployeeInfoParams {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeInfoParams.build]] instead.
 */
export function createEmployeeInfoParams(json: any): EmployeeInfoParams {
  return EmployeeInfoParams.build(json);
}

/**
 * EmployeeInfoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeInfoParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeInfoParams.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
}

export namespace EmployeeInfoParams {
  export function build(json: { [keys: string]: FieldType }): EmployeeInfoParams {
    return createComplexType(json, {
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') })
    });
  }
}
