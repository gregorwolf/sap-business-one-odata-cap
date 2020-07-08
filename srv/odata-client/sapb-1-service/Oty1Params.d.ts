import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * Oty1Params
 */
export interface Oty1Params {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[Oty1Params.build]] instead.
 */
export declare function createOty1Params(json: any): Oty1Params;
/**
 * Oty1ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Oty1ParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Oty1Params.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Oty1Params {
    function build(json: {
        [keys: string]: FieldType;
    }): Oty1Params;
}
//# sourceMappingURL=Oty1Params.d.ts.map