/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeIdTypeParams
 */
export interface EmployeeIdTypeParams {
  /**
   * Id Type.
   * @nullable
   */
  idType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeIdTypeParams.build]] instead.
 */
export function createEmployeeIdTypeParams(json: any): EmployeeIdTypeParams {
  return EmployeeIdTypeParams.build(json);
}

/**
 * EmployeeIdTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeIdTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeIdTypeParams.idType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  idType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IDType', this, 'Edm.String');
}

export namespace EmployeeIdTypeParams {
  export function build(json: { [keys: string]: FieldType }): EmployeeIdTypeParams {
    return createComplexType(json, {
      IDType: (idType: string) => ({ idType: edmToTs(idType, 'Edm.String') })
    });
  }
}
