import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CostCenterTypeParams
 */
export interface CostCenterTypeParams {
    /**
     * Cost Center Type Code.
     * @nullable
     */
    costCenterTypeCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CostCenterTypeParams.build]] instead.
 */
export declare function createCostCenterTypeParams(json: any): CostCenterTypeParams;
/**
 * CostCenterTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CostCenterTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CostCenterTypeParams.costCenterTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costCenterTypeCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CostCenterTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CostCenterTypeParams;
}
//# sourceMappingURL=CostCenterTypeParams.d.ts.map