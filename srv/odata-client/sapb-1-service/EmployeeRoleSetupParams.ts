/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeRoleSetupParams
 */
export interface EmployeeRoleSetupParams {
  /**
   * Type Id.
   * @nullable
   */
  typeId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeRoleSetupParams.build]] instead.
 */
export function createEmployeeRoleSetupParams(json: any): EmployeeRoleSetupParams {
  return EmployeeRoleSetupParams.build(json);
}

/**
 * EmployeeRoleSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeRoleSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeRoleSetupParams.typeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TypeID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeRoleSetupParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
}

export namespace EmployeeRoleSetupParams {
  export function build(json: { [keys: string]: FieldType }): EmployeeRoleSetupParams {
    return createComplexType(json, {
      TypeID: (typeId: number) => ({ typeId: edmToTs(typeId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
