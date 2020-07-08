import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LandedCostParams
 */
export interface LandedCostParams {
    /**
     * Landed Cost Number.
     * @nullable
     */
    landedCostNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[LandedCostParams.build]] instead.
 */
export declare function createLandedCostParams(json: any): LandedCostParams;
/**
 * LandedCostParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LandedCostParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LandedCostParams.landedCostNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    landedCostNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace LandedCostParams {
    function build(json: {
        [keys: string]: FieldType;
    }): LandedCostParams;
}
//# sourceMappingURL=LandedCostParams.d.ts.map