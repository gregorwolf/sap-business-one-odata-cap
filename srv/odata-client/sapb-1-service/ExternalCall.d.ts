import { Moment } from 'moment';
import { CallArgument } from './CallArgument';
import { CallMessage } from './CallMessage';
import { ExternalCallStatusEnum } from './ExternalCallStatusEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Status.
     * @nullable
     */
    status?: ExternalCallStatusEnum;
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
    callArguments?: CallArgument[];
    /**
     * Call Messages.
     * @nullable
     */
    callMessages?: CallMessage[];
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalCall.build]] instead.
 */
export declare function createExternalCall(json: any): ExternalCall;
/**
 * ExternalCallField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalCallField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalCall> {
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
     * Representation of the [[ExternalCall.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
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
    callArguments: CollectionField<EntityT, CallArgument>;
    /**
     * Representation of the [[ExternalCall.callMessages]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    callMessages: CollectionField<EntityT, CallMessage>;
    /**
     * Creates an instance of ExternalCallField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExternalCall {
    /**
     * Metadata information on all properties of the `ExternalCall` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExternalCall>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | CallArgument | CallMessage;
    }): ExternalCall;
}
//# sourceMappingURL=ExternalCall.d.ts.map