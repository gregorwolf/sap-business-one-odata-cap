/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class EmployeePositionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace EmployeePositionParams {
  export function build(json: { [keys: string]: FieldType }): EmployeePositionParams {
    return createComplexType(json, {
      PositionID: (positionId: number) => ({ positionId: edmToTs(positionId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
