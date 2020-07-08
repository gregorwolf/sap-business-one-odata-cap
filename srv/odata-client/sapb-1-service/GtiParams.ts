/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * GtiParams
 */
export interface GtiParams {
  /**
   * Inbound File.
   * @nullable
   */
  inboundFile?: string;
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[GtiParams.build]] instead.
 */
export function createGtiParams(json: any): GtiParams {
  return GtiParams.build(json);
}

/**
 * GtiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GtiParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GtiParams.inboundFile]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inboundFile: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InboundFile', this, 'Edm.String');
  /**
   * Representation of the [[GtiParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
}

export namespace GtiParams {
  export function build(json: { [keys: string]: FieldType }): GtiParams {
    return createComplexType(json, {
      InboundFile: (inboundFile: string) => ({ inboundFile: edmToTs(inboundFile, 'Edm.String') }),
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') })
    });
  }
}
