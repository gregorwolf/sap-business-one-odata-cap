import { Moment } from 'moment';
import { CallMessageArgument } from './CallMessageArgument';
import { CallMessageTypeEnum } from './CallMessageTypeEnum';
import { CallMessageStatusEnum } from './CallMessageStatusEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CallMessage
 */
export interface CallMessage {
    /**
     * Id.
     * @nullable
     */
    id?: number;
    /**
     * Type.
     * @nullable
     */
    type?: CallMessageTypeEnum;
    /**
     * Error Code.
     * @nullable
     */
    errorCode?: string;
    /**
     * Message Body.
     * @nullable
     */
    messageBody?: string;
    /**
     * Status.
     * @nullable
     */
    status?: CallMessageStatusEnum;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Creation Time.
     * @nullable
     */
    creationTime?: number;
    /**
     * Call Message Arguments.
     * @nullable
     */
    callMessageArguments?: CallMessageArgument[];
}
/**
 * @deprecated Since v1.6.0. Use [[CallMessage.build]] instead.
 */
export declare function createCallMessage(json: any): CallMessage;
/**
 * CallMessageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CallMessageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CallMessage> {
    /**
     * Representation of the [[CallMessage.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessage.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessage.errorCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    errorCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessage.messageBody]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    messageBody: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessage.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessage.creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[CallMessage.creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationTime: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessage.callMessageArguments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    callMessageArguments: CollectionField<EntityT, CallMessageArgument>;
    /**
     * Creates an instance of CallMessageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CallMessage {
    /**
     * Metadata information on all properties of the `CallMessage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CallMessage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | CallMessageArgument;
    }): CallMessage;
}
//# sourceMappingURL=CallMessage.d.ts.map