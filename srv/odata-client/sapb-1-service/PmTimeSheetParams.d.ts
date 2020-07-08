import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmTimeSheetParams
 */
export interface PmTimeSheetParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmTimeSheetParams.build]] instead.
 */
export declare function createPmTimeSheetParams(json: any): PmTimeSheetParams;
/**
 * PmTimeSheetParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmTimeSheetParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmTimeSheetParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmTimeSheetParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PmTimeSheetParams;
}
//# sourceMappingURL=PmTimeSheetParams.d.ts.map