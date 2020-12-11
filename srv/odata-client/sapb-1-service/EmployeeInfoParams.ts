/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class EmployeeInfoParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeInfoParams> {
  /**
   * Representation of the [[EmployeeInfoParams.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');

  /**
   * Creates an instance of EmployeeInfoParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeInfoParams);
  }
}

export namespace EmployeeInfoParams {
  /**
   * Metadata information on all properties of the `EmployeeInfoParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeInfoParams>[] = [{
    originalName: 'EmployeeID',
    name: 'employeeId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeInfoParams {
    return deserializeComplexTypeV4(json, EmployeeInfoParams);
  }
}
