/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageDataLine, MessageDataLineField } from './MessageDataLine';
import { CollectionField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
   * Message Data Lines.
   * @nullable
   */
  messageDataLines?: MessageDataLine;
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
export class MessageDataColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MessageDataColumn.columnName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnName', this, 'Edm.String');
  /**
   * Representation of the [[MessageDataColumn.messageDataLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  messageDataLines: MessageDataLineField<EntityT> = new MessageDataLineField('MessageDataLines', this);
}

export namespace MessageDataColumn {
  export function build(json: { [keys: string]: FieldType | MessageDataLine }): MessageDataColumn {
    return createComplexType(json, {
      ColumnName: (columnName: string) => ({ columnName: edmToTs(columnName, 'Edm.String') }),
      MessageDataLines: (messageDataLines: MessageDataLine) => ({ messageDataLines: MessageDataLine.build(messageDataLines) })
    });
  }
}
