/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EmployeePositionParams
 */
export interface EmployeePositionParams {
  /**
   * Position Id.
   * @nullable
   */
  positionId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeePositionParams.build]] instead.
 */
export function createEmployeePositionParams(json: any): EmployeePositionParams {
  return EmployeePositionParams.build(json);
}

/**
 * EmployeePositionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeePositionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeePositionParams> {
  /**
   * Representation of the [[EmployeePositionParams.positionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  positionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PositionID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeePositionParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[EmployeePositionParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of EmployeePositionParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeePositionParams);
  }
}

export namespace EmployeePositionParams {
  /**
   * Metadata information on all properties of the `EmployeePositionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeePositionParams>[] = [{
    originalName: 'PositionID',
    name: 'positionId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeePositionParams {
    return deserializeComplexTypeV4(json, EmployeePositionParams);
  }
}
