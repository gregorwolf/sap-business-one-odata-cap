import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LocalEraParams
 */
export interface LocalEraParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[LocalEraParams.build]] instead.
 */
export declare function createLocalEraParams(json: any): LocalEraParams;
/**
 * LocalEraParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LocalEraParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LocalEraParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace LocalEraParams {
    function build(json: {
        [keys: string]: FieldType;
    }): LocalEraParams;
}
//# sourceMappingURL=LocalEraParams.d.ts.map