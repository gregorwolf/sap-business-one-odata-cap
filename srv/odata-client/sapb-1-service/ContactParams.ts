/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ContactParams
 */
export interface ContactParams {
  /**
   * Contact Code.
   * @nullable
   */
  contactCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ContactParams.build]] instead.
 */
export function createContactParams(json: any): ContactParams {
  return ContactParams.build(json);
}

/**
 * ContactParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContactParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ContactParams.contactCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contactCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ContactCode', this, 'Edm.Int32');
}

export namespace ContactParams {
  export function build(json: { [keys: string]: FieldType }): ContactParams {
    return createComplexType(json, {
      ContactCode: (contactCode: number) => ({ contactCode: edmToTs(contactCode, 'Edm.Int32') })
    });
  }
}
