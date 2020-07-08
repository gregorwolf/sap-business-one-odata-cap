/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeStatusParams
 */
export interface EmployeeStatusParams {
  /**
   * Status Id.
   * @nullable
   */
  statusId?: number;
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
 * @deprecated Since v1.6.0. Use [[EmployeeStatusParams.build]] instead.
 */
export function createEmployeeStatusParams(json: any): EmployeeStatusParams {
  return EmployeeStatusParams.build(json);
}

/**
 * EmployeeStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeStatusParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeStatusParams.statusId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StatusId', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeStatusParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeStatusParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
}

export namespace EmployeeStatusParams {
  export function build(json: { [keys: string]: FieldType }): EmployeeStatusParams {
    return createComplexType(json, {
      StatusId: (statusId: number) => ({ statusId: edmToTs(statusId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
