/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EcmCodeParams
 */
export interface EcmCodeParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EcmCodeParams.build]] instead.
 */
export function createEcmCodeParams(json: any): EcmCodeParams {
  return EcmCodeParams.build(json);
}

/**
 * EcmCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EcmCodeParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
}

export namespace EcmCodeParams {
  export function build(json: { [keys: string]: FieldType }): EcmCodeParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') })
    });
  }
}