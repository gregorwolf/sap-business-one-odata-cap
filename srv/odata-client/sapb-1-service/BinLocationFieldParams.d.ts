import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BinLocationFieldParams
 */
export interface BinLocationFieldParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BinLocationFieldParams.build]] instead.
 */
export declare function createBinLocationFieldParams(json: any): BinLocationFieldParams;
/**
 * BinLocationFieldParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BinLocationFieldParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BinLocationFieldParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BinLocationFieldParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BinLocationFieldParams;
}
//# sourceMappingURL=BinLocationFieldParams.d.ts.map