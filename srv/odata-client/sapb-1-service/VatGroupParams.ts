/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * VatGroupParams
 */
export interface VatGroupParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[VatGroupParams.build]] instead.
 */
export function createVatGroupParams(json: any): VatGroupParams {
  return VatGroupParams.build(json);
}

/**
 * VatGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class VatGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[VatGroupParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace VatGroupParams {
  export function build(json: { [keys: string]: FieldType }): VatGroupParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
