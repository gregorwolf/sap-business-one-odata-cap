/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class MessageDataLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MessageDataLine> {
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

  /**
   * Creates an instance of MessageDataLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MessageDataLine);
  }
}

export namespace MessageDataLine {
  /**
   * Metadata information on all properties of the `MessageDataLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MessageDataLine>[] = [{
    originalName: 'Value',
    name: 'value',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Object',
    name: 'object',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ObjectKey',
    name: 'objectKey',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): MessageDataLine {
    return deserializeComplexTypeV4(json, MessageDataLine);
  }
}
