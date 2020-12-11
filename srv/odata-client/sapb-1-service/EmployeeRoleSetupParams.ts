/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class EmployeeRoleSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeRoleSetupParams> {
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

  /**
   * Creates an instance of EmployeeRoleSetupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeRoleSetupParams);
  }
}

export namespace EmployeeRoleSetupParams {
  /**
   * Metadata information on all properties of the `EmployeeRoleSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeRoleSetupParams>[] = [{
    originalName: 'TypeID',
    name: 'typeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeRoleSetupParams {
    return deserializeComplexTypeV4(json, EmployeeRoleSetupParams);
  }
}
