/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * Attachments2Params
 */
export interface Attachments2Params {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[Attachments2Params.build]] instead.
 */
export function createAttachments2Params(json: any): Attachments2Params {
  return Attachments2Params.build(json);
}

/**
 * Attachments2ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Attachments2ParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Attachments2Params.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
}

export namespace Attachments2Params {
  export function build(json: { [keys: string]: FieldType }): Attachments2Params {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') })
    });
  }
}
