/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DunningLetterParams
 */
export interface DunningLetterParams {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DunningLetterParams.build]] instead.
 */
export function createDunningLetterParams(json: any): DunningLetterParams {
  return DunningLetterParams.build(json);
}

/**
 * DunningLetterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DunningLetterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DunningLetterParams.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
}

export namespace DunningLetterParams {
  export function build(json: { [keys: string]: FieldType }): DunningLetterParams {
    return createComplexType(json, {
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') })
    });
  }
}
