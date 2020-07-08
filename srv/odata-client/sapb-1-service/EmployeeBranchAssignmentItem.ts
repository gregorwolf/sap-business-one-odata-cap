/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeBranchAssignmentItem
 */
export interface EmployeeBranchAssignmentItem {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeBranchAssignmentItem.build]] instead.
 */
export function createEmployeeBranchAssignmentItem(json: any): EmployeeBranchAssignmentItem {
  return EmployeeBranchAssignmentItem.build(json);
}

/**
 * EmployeeBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeBranchAssignmentItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeBranchAssignmentItem.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeBranchAssignmentItem.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
}

export namespace EmployeeBranchAssignmentItem {
  export function build(json: { [keys: string]: FieldType }): EmployeeBranchAssignmentItem {
    return createComplexType(json, {
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') }),
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') })
    });
  }
}
