import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CockpitParams
 */
export interface CockpitParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CockpitParams.build]] instead.
 */
export declare function createCockpitParams(json: any): CockpitParams;
/**
 * CockpitParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CockpitParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CockpitParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CockpitParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CockpitParams;
}
//# sourceMappingURL=CockpitParams.d.ts.map