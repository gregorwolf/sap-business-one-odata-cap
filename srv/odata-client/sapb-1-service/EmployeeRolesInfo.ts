/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeRolesInfo
 */
export interface EmployeeRolesInfo {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Role Id.
   * @nullable
   */
  roleId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeRolesInfo.build]] instead.
 */
export function createEmployeeRolesInfo(json: any): EmployeeRolesInfo {
  return EmployeeRolesInfo.build(json);
}

/**
 * EmployeeRolesInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeRolesInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeRolesInfo.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeRolesInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeRolesInfo.roleId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roleId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RoleID', this, 'Edm.Int32');
}

export namespace EmployeeRolesInfo {
  export function build(json: { [keys: string]: FieldType }): EmployeeRolesInfo {
    return createComplexType(json, {
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      RoleID: (roleId: number) => ({ roleId: edmToTs(roleId, 'Edm.Int32') })
    });
  }
}
