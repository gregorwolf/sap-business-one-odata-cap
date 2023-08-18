/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * MessageDataLine
 */
export interface MessageDataLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Value.
   * @nullable
   */
  value?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Object.
   * @nullable
   */
  object?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Object Key.
   * @nullable
   */
  objectKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * MessageDataLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MessageDataLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MessageDataLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MessageDataLine.value} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true);
  /**
   * Representation of the {@link MessageDataLine.object} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  object: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Object', 'Edm.String', true);
  /**
   * Representation of the {@link MessageDataLine.objectKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectKey', 'Edm.String', true);

  /**
   * Creates an instance of MessageDataLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, MessageDataLine, fieldOptions);
  }
}

export namespace MessageDataLine {
  /**
   * Metadata information on all properties of the `MessageDataLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MessageDataLine>[] = [
    {
      originalName: 'Value',
      name: 'value',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Object',
      name: 'object',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ObjectKey',
      name: 'objectKey',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
