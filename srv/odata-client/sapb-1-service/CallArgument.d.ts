import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CallArgument
 */
export interface CallArgument {
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CallArgument.build]] instead.
 */
export declare function createCallArgument(json: any): CallArgument;
/**
 * CallArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CallArgumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CallArgument.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CallArgument.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CallArgument {
    function build(json: {
        [keys: string]: FieldType;
    }): CallArgument;
}
//# sourceMappingURL=CallArgument.d.ts.map