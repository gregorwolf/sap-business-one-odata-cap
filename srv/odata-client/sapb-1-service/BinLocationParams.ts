/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BinLocationParams
 */
export interface BinLocationParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Bin Code.
   * @nullable
   */
  binCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BinLocationParams.build]] instead.
 */
export function createBinLocationParams(json: any): BinLocationParams {
  return BinLocationParams.build(json);
}

/**
 * BinLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BinLocationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BinLocationParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BinLocationParams.binCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BinCode', this, 'Edm.String');
}

export namespace BinLocationParams {
  export function build(json: { [keys: string]: FieldType }): BinLocationParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      BinCode: (binCode: string) => ({ binCode: edmToTs(binCode, 'Edm.String') })
    });
  }
}
