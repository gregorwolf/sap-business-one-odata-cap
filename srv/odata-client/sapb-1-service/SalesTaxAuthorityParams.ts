/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesTaxAuthorityParams
 */
export interface SalesTaxAuthorityParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Type.
   * @nullable
   */
  type?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesTaxAuthorityParams.build]] instead.
 */
export function createSalesTaxAuthorityParams(json: any): SalesTaxAuthorityParams {
  return SalesTaxAuthorityParams.build(json);
}

/**
 * SalesTaxAuthorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesTaxAuthorityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesTaxAuthorityParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[SalesTaxAuthorityParams.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Type', this, 'Edm.Int32');
}

export namespace SalesTaxAuthorityParams {
  export function build(json: { [keys: string]: FieldType }): SalesTaxAuthorityParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Type: (type: number) => ({ type: edmToTs(type, 'Edm.Int32') })
    });
  }
}
