import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesStageParams
 */
export interface SalesStageParams {
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesStageParams.build]] instead.
 */
export declare function createSalesStageParams(json: any): SalesStageParams;
/**
 * SalesStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesStageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesStageParams.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesStageParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesStageParams;
}
//# sourceMappingURL=SalesStageParams.d.ts.map