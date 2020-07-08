import { MessageDataLine, MessageDataLineField } from './MessageDataLine';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createMessageDataColumn(json: any): MessageDataColumn;
/**
 * MessageDataColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MessageDataColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MessageDataColumn.columnName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MessageDataColumn.messageDataLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    messageDataLines: MessageDataLineField<EntityT>;
}
export declare namespace MessageDataColumn {
    function build(json: {
        [keys: string]: FieldType | MessageDataLine;
    }): MessageDataColumn;
}
//# sourceMappingURL=MessageDataColumn.d.ts.map