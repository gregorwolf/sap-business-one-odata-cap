import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DepreciationTypeParams
 */
export interface DepreciationTypeParams {
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
 * @deprecated Since v1.6.0. Use [[DepreciationTypeParams.build]] instead.
 */
export declare function createDepreciationTypeParams(json: any): DepreciationTypeParams;
/**
 * DepreciationTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepreciationTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DepreciationTypeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DepreciationTypeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DepreciationTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DepreciationTypeParams;
}
//# sourceMappingURL=DepreciationTypeParams.d.ts.map