/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageDataLine } from './MessageDataLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * MessageDataColumn
 */
export interface MessageDataColumn {
  /**
   * Column Name.
   * @nullable
   */
  columnName?: string;
  /**
   * Link.
   * @nullable
   */
  link?: BoYesNoEnum;
  /**
   * Message Data Lines.
   * @nullable
   */
  messageDataLines?: MessageDataLine[];
}

/**
 * @deprecated Since v1.6.0. Use [[MessageDataColumn.build]] instead.
 */
export function createMessageDataColumn(json: any): MessageDataColumn {
  return MessageDataColumn.build(json);
}

/**
 * MessageDataColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MessageDataColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MessageDataColumn> {
  /**
   * Representation of the [[MessageDataColumn.columnName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnName', this, 'Edm.String');
  /**
   * Representation of the [[MessageDataColumn.link]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  link: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Link', this);
  /**
   * Representation of the [[MessageDataColumn.messageDataLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  messageDataLines: CollectionField<EntityT, MessageDataLine> = new CollectionField('MessageDataLines', this, MessageDataLine);

  /**
   * Creates an instance of MessageDataColumnField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MessageDataColumn);
  }
}

export namespace MessageDataColumn {
  /**
   * Metadata information on all properties of the `MessageDataColumn` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MessageDataColumn>[] = [{
    originalName: 'ColumnName',
    name: 'columnName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Link',
    name: 'link',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'MessageDataLines',
    name: 'messageDataLines',
    type: MessageDataLine,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | MessageDataLine }): MessageDataColumn {
    return deserializeComplexTypeV4(json, MessageDataColumn);
  }
}
