/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BinLocationAttributeParams
 */
export interface BinLocationAttributeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Attribute.
   * @nullable
   */
  attribute?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BinLocationAttributeParams.build]] instead.
 */
export function createBinLocationAttributeParams(json: any): BinLocationAttributeParams {
  return BinLocationAttributeParams.build(json);
}

/**
 * BinLocationAttributeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BinLocationAttributeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BinLocationAttributeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BinLocationAttributeParams.attribute]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute', this, 'Edm.Int32');
  /**
   * Representation of the [[BinLocationAttributeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace BinLocationAttributeParams {
  export function build(json: { [keys: string]: FieldType }): BinLocationAttributeParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      Attribute: (attribute: number) => ({ attribute: edmToTs(attribute, 'Edm.Int32') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
