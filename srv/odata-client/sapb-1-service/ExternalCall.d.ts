import { Moment } from 'moment';
import { CallArgument, CallArgumentField } from './CallArgument';
import { CallMessage, CallMessageField } from './CallMessage';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExternalCall
 */
export interface ExternalCall {
    /**
     * Id.
     * @nullable
     */
    id?: number;
    /**
     * Category.
     * @nullable
     */
    category?: number;
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
     * Last Update Date.
     * @nullable
     */
    lastUpdateDate?: Moment;
    /**
     * Last Update Time.
     * @nullable
     */
    lastUpdateTime?: number;
    /**
     * Last Update User Code.
     * @nullable
     */
    lastUpdateUserCode?: string;
    /**
     * Call Arguments.
     * @nullable
     */
    callArguments?: CallArgument;
    /**
     * Call Messages.
     * @nullable
     */
    callMessages?: CallMessage;
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalCall.build]] instead.
 */
export declare function createExternalCall(json: any): ExternalCall;
/**
 * ExternalCallField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalCallField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExternalCall.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalCall.category]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    category: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalCall.creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalCall.creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationTime: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalCall.lastUpdateDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastUpdateDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalCall.lastUpdateTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastUpdateTime: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalCall.lastUpdateUserCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastUpdateUserCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalCall.callArguments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    callArguments: CallArgumentField<EntityT>;
    /**
     * Representation of the [[ExternalCall.callMessages]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    callMessages: CallMessageField<EntityT>;
}
export declare namespace ExternalCall {
    function build(json: {
        [keys: string]: FieldType | CallArgument | CallMessage;
    }): ExternalCall;
}
//# sourceMappingURL=ExternalCall.d.ts.map