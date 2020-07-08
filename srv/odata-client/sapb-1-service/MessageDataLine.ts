/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * MessageDataLine
 */
export interface MessageDataLine {
  /**
   * Value.
   * @nullable
   */
  value?: string;
  /**
   * Object.
   * @nullable
   */
  object?: string;
  /**
   * Object Key.
   * @nullable
   */
  objectKey?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[MessageDataLine.build]] instead.
 */
export function createMessageDataLine(json: any): MessageDataLine {
  return MessageDataLine.build(json);
}

/**
 * MessageDataLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MessageDataLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MessageDataLine.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');
  /**
   * Representation of the [[MessageDataLine.object]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  object: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Object', this, 'Edm.String');
  /**
   * Representation of the [[MessageDataLine.objectKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectKey', this, 'Edm.String');
}

export namespace MessageDataLine {
  export function build(json: { [keys: string]: FieldType }): MessageDataLine {
    return createComplexType(json, {
      Value: (value: string) => ({ value: edmToTs(value, 'Edm.String') }),
      Object: (object: string) => ({ object: edmToTs(object, 'Edm.String') }),
      ObjectKey: (objectKey: string) => ({ objectKey: edmToTs(objectKey, 'Edm.String') })
    });
  }
}
