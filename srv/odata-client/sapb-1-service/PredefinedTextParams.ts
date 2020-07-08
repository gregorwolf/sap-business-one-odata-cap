/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PredefinedTextParams
 */
export interface PredefinedTextParams {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * Text Code.
   * @nullable
   */
  textCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PredefinedTextParams.build]] instead.
 */
export function createPredefinedTextParams(json: any): PredefinedTextParams {
  return PredefinedTextParams.build(json);
}

/**
 * PredefinedTextParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PredefinedTextParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PredefinedTextParams.numerator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Numerator', this, 'Edm.Int32');
  /**
   * Representation of the [[PredefinedTextParams.textCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TextCode', this, 'Edm.String');
}

export namespace PredefinedTextParams {
  export function build(json: { [keys: string]: FieldType }): PredefinedTextParams {
    return createComplexType(json, {
      Numerator: (numerator: number) => ({ numerator: edmToTs(numerator, 'Edm.Int32') }),
      TextCode: (textCode: string) => ({ textCode: edmToTs(textCode, 'Edm.String') })
    });
  }
}
