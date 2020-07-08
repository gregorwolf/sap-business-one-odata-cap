/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CustomsDeclarationParams
 */
export interface CustomsDeclarationParams {
  /**
   * Ccd Num.
   * @nullable
   */
  ccdNum?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CustomsDeclarationParams.build]] instead.
 */
export function createCustomsDeclarationParams(json: any): CustomsDeclarationParams {
  return CustomsDeclarationParams.build(json);
}

/**
 * CustomsDeclarationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CustomsDeclarationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CustomsDeclarationParams.ccdNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CCDNum', this, 'Edm.String');
}

export namespace CustomsDeclarationParams {
  export function build(json: { [keys: string]: FieldType }): CustomsDeclarationParams {
    return createComplexType(json, {
      CCDNum: (ccdNum: string) => ({ ccdNum: edmToTs(ccdNum, 'Edm.String') })
    });
  }
}
