import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ResourceParams
 */
export interface ResourceParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceParams.build]] instead.
 */
export declare function createResourceParams(json: any): ResourceParams;
/**
 * ResourceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ResourceParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ResourceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceParams;
}
//# sourceMappingURL=ResourceParams.d.ts.map