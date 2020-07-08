/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PackagesTypeParams
 */
export interface PackagesTypeParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PackagesTypeParams.build]] instead.
 */
export function createPackagesTypeParams(json: any): PackagesTypeParams {
  return PackagesTypeParams.build(json);
}

/**
 * PackagesTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PackagesTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PackagesTypeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
}

export namespace PackagesTypeParams {
  export function build(json: { [keys: string]: FieldType }): PackagesTypeParams {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') })
    });
  }
}
