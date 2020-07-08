/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CallArgument
 */
export interface CallArgument {
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CallArgument.build]] instead.
 */
export function createCallArgument(json: any): CallArgument {
  return CallArgument.build(json);
}

/**
 * CallArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CallArgumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CallArgument.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[CallArgument.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');
}

export namespace CallArgument {
  export function build(json: { [keys: string]: FieldType }): CallArgument {
    return createComplexType(json, {
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Value: (value: string) => ({ value: edmToTs(value, 'Edm.String') })
    });
  }
}
