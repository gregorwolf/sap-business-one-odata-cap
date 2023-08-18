/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageDataLine } from './MessageDataLine';
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * MessageDataColumn
 */
export interface MessageDataColumn<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Column Name.
   * @nullable
   */
  columnName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Link.
   * @nullable
   */
  link?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Message Data Lines.
   * @nullable
   */
  messageDataLines?: DeserializedType<DeSerializersT, 'SAPB1.MessageDataLine'>;
}

/**
 * MessageDataColumnField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MessageDataColumnField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MessageDataColumn,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MessageDataColumn.columnName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ColumnName', 'Edm.String', true);
  /**
   * Representation of the {@link MessageDataColumn.link} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  link: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Link', BoYesNoEnum, true);
  /**
   * Representation of the {@link MessageDataColumn.messageDataLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  messageDataLines: CollectionField<
    EntityT,
    DeSerializersT,
    MessageDataLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'MessageDataLines',
    MessageDataLine,
    true
  );

  /**
   * Creates an instance of MessageDataColumnField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, MessageDataColumn, fieldOptions);
  }
}

export namespace MessageDataColumn {
  /**
   * Metadata information on all properties of the `MessageDataColumn` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MessageDataColumn>[] = [
    {
      originalName: 'ColumnName',
      name: 'columnName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Link',
      name: 'link',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MessageDataLines',
      name: 'messageDataLines',
      type: MessageDataLine,
      isCollection: true
    }
  ];
}
