/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmTimeSheetParams
 */
export interface PmTimeSheetParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmTimeSheetParams.build]] instead.
 */
export function createPmTimeSheetParams(json: any): PmTimeSheetParams {
  return PmTimeSheetParams.build(json);
}

/**
 * PmTimeSheetParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmTimeSheetParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmTimeSheetParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
}

export namespace PmTimeSheetParams {
  export function build(json: { [keys: string]: FieldType }): PmTimeSheetParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') })
    });
  }
}
