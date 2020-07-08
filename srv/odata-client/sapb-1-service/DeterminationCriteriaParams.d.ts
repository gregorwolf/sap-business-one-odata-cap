import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DeterminationCriteriaParams
 */
export interface DeterminationCriteriaParams {
    /**
     * Dmc Id.
     * @nullable
     */
    dmcId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DeterminationCriteriaParams.build]] instead.
 */
export declare function createDeterminationCriteriaParams(json: any): DeterminationCriteriaParams;
/**
 * DeterminationCriteriaParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeterminationCriteriaParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DeterminationCriteriaParams.dmcId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dmcId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DeterminationCriteriaParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DeterminationCriteriaParams;
}
//# sourceMappingURL=DeterminationCriteriaParams.d.ts.map