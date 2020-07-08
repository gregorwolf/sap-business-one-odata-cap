import { Moment } from 'moment';
import { CallMessageArgument, CallMessageArgumentField } from './CallMessageArgument';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
    callMessageArguments?: CallMessageArgument;
}
/**
 * @deprecated Since v1.6.0. Use [[CallMessage.build]] instead.
 */
export declare function createCallMessage(json: any): CallMessage;
/**
 * CallMessageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CallMessageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CallMessage.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
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
    callMessageArguments: CallMessageArgumentField<EntityT>;
}
export declare namespace CallMessage {
    function build(json: {
        [keys: string]: FieldType | CallMessageArgument;
    }): CallMessage;
}
//# sourceMappingURL=CallMessage.d.ts.map