import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CostElementParams
 */
export interface CostElementParams {
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
 * @deprecated Since v1.6.0. Use [[CostElementParams.build]] instead.
 */
export declare function createCostElementParams(json: any): CostElementParams;
/**
 * CostElementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CostElementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CostElementParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CostElementParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CostElementParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CostElementParams;
}
//# sourceMappingURL=CostElementParams.d.ts.map