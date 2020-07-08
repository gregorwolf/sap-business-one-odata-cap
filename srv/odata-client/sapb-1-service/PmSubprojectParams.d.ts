import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmSubprojectParams
 */
export interface PmSubprojectParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectParams.build]] instead.
 */
export declare function createPmSubprojectParams(json: any): PmSubprojectParams;
/**
 * PmSubprojectParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmSubprojectParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmSubprojectParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmSubprojectParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PmSubprojectParams;
}
//# sourceMappingURL=PmSubprojectParams.d.ts.map