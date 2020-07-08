/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeFullNamesParams
 */
export interface EmployeeFullNamesParams {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
  /**
   * Employee Full Name.
   * @nullable
   */
  employeeFullName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeFullNamesParams.build]] instead.
 */
export function createEmployeeFullNamesParams(json: any): EmployeeFullNamesParams {
  return EmployeeFullNamesParams.build(json);
}

/**
 * EmployeeFullNamesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeFullNamesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeFullNamesParams.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeFullNamesParams.employeeFullName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeFullName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EmployeeFullName', this, 'Edm.String');
}

export namespace EmployeeFullNamesParams {
  export function build(json: { [keys: string]: FieldType }): EmployeeFullNamesParams {
    return createComplexType(json, {
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') }),
      EmployeeFullName: (employeeFullName: string) => ({ employeeFullName: edmToTs(employeeFullName, 'Edm.String') })
    });
  }
}
