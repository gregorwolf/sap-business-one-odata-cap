/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class EmployeeRolesInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeRolesInfo> {
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

  /**
   * Creates an instance of EmployeeRolesInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeRolesInfo);
  }
}

export namespace EmployeeRolesInfo {
  /**
   * Metadata information on all properties of the `EmployeeRolesInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeRolesInfo>[] = [{
    originalName: 'EmployeeID',
    name: 'employeeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RoleID',
    name: 'roleId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeRolesInfo {
    return deserializeComplexTypeV4(json, EmployeeRolesInfo);
  }
}
