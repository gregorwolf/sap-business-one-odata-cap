import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ResourcePropertyParams
 */
export interface ResourcePropertyParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourcePropertyParams.build]] instead.
 */
export declare function createResourcePropertyParams(json: any): ResourcePropertyParams;
/**
 * ResourcePropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourcePropertyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ResourcePropertyParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourcePropertyParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ResourcePropertyParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ResourcePropertyParams;
}
//# sourceMappingURL=ResourcePropertyParams.d.ts.map