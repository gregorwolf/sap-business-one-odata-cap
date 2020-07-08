import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DepreciationAreaParams
 */
export interface DepreciationAreaParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DepreciationAreaParams.build]] instead.
 */
export declare function createDepreciationAreaParams(json: any): DepreciationAreaParams;
/**
 * DepreciationAreaParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepreciationAreaParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DepreciationAreaParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationAreaParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DepreciationAreaParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DepreciationAreaParams;
}
//# sourceMappingURL=DepreciationAreaParams.d.ts.map