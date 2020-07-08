import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DepreciationTypePoolParams
 */
export interface DepreciationTypePoolParams {
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
 * @deprecated Since v1.6.0. Use [[DepreciationTypePoolParams.build]] instead.
 */
export declare function createDepreciationTypePoolParams(json: any): DepreciationTypePoolParams;
/**
 * DepreciationTypePoolParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepreciationTypePoolParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DepreciationTypePoolParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationTypePoolParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DepreciationTypePoolParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DepreciationTypePoolParams;
}
//# sourceMappingURL=DepreciationTypePoolParams.d.ts.map