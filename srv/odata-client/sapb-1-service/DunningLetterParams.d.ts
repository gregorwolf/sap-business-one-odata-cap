import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DunningLetterParams
 */
export interface DunningLetterParams {
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DunningLetterParams.build]] instead.
 */
export declare function createDunningLetterParams(json: any): DunningLetterParams;
/**
 * DunningLetterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DunningLetterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DunningLetterParams.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DunningLetterParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DunningLetterParams;
}
//# sourceMappingURL=DunningLetterParams.d.ts.map