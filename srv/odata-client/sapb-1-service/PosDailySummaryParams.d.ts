import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PosDailySummaryParams
 */
export interface PosDailySummaryParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PosDailySummaryParams.build]] instead.
 */
export declare function createPosDailySummaryParams(json: any): PosDailySummaryParams;
/**
 * PosDailySummaryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PosDailySummaryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PosDailySummaryParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PosDailySummaryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PosDailySummaryParams;
}
//# sourceMappingURL=PosDailySummaryParams.d.ts.map