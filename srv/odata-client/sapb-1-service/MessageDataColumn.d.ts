import { MessageDataLine } from './MessageDataLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare function createMessageDataColumn(json: any): MessageDataColumn;
/**
 * MessageDataColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MessageDataColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MessageDataColumn> {
    /**
     * Representation of the [[MessageDataColumn.columnName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MessageDataColumn.link]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    link: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[MessageDataColumn.messageDataLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    messageDataLines: CollectionField<EntityT, MessageDataLine>;
    /**
     * Creates an instance of MessageDataColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MessageDataColumn {
    /**
     * Metadata information on all properties of the `MessageDataColumn` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MessageDataColumn>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | MessageDataLine;
    }): MessageDataColumn;
}
//# sourceMappingURL=MessageDataColumn.d.ts.map