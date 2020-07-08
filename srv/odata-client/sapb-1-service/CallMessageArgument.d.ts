import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CallMessageArgument
 */
export interface CallMessageArgument {
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
 * @deprecated Since v1.6.0. Use [[CallMessageArgument.build]] instead.
 */
export declare function createCallMessageArgument(json: any): CallMessageArgument;
/**
 * CallMessageArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CallMessageArgumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CallMessageArgument.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CallMessageArgument.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CallMessageArgument {
    function build(json: {
        [keys: string]: FieldType;
    }): CallMessageArgument;
}
//# sourceMappingURL=CallMessageArgument.d.ts.map