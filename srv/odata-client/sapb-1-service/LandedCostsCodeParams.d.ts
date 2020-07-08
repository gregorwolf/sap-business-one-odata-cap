import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LandedCostsCodeParams
 */
export interface LandedCostsCodeParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[LandedCostsCodeParams.build]] instead.
 */
export declare function createLandedCostsCodeParams(json: any): LandedCostsCodeParams;
/**
 * LandedCostsCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LandedCostsCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LandedCostsCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace LandedCostsCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): LandedCostsCodeParams;
}
//# sourceMappingURL=LandedCostsCodeParams.d.ts.map