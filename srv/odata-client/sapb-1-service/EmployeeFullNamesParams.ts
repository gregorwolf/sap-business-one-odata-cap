/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class EmployeeFullNamesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeFullNamesParams> {
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

  /**
   * Creates an instance of EmployeeFullNamesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeFullNamesParams);
  }
}

export namespace EmployeeFullNamesParams {
  /**
   * Metadata information on all properties of the `EmployeeFullNamesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeFullNamesParams>[] = [{
    originalName: 'EmployeeID',
    name: 'employeeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EmployeeFullName',
    name: 'employeeFullName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeFullNamesParams {
    return deserializeComplexTypeV4(json, EmployeeFullNamesParams);
  }
}
