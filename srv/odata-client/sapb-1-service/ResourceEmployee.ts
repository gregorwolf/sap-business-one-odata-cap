/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ResourceEmployee
 */
export interface ResourceEmployee {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Employee.
   * @nullable
   */
  employee?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceEmployee.build]] instead.
 */
export function createResourceEmployee(json: any): ResourceEmployee {
  return ResourceEmployee.build(json);
}

/**
 * ResourceEmployeeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceEmployeeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ResourceEmployee.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceEmployee.employee]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employee: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Employee', this, 'Edm.String');
}

export namespace ResourceEmployee {
  export function build(json: { [keys: string]: FieldType }): ResourceEmployee {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Employee: (employee: string) => ({ employee: edmToTs(employee, 'Edm.String') })
    });
  }
}
