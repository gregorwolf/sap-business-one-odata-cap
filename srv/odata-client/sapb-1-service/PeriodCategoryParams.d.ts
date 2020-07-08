import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PeriodCategoryParams
 */
export interface PeriodCategoryParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PeriodCategoryParams.build]] instead.
 */
export declare function createPeriodCategoryParams(json: any): PeriodCategoryParams;
/**
 * PeriodCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PeriodCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PeriodCategoryParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PeriodCategoryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PeriodCategoryParams;
}
//# sourceMappingURL=PeriodCategoryParams.d.ts.map