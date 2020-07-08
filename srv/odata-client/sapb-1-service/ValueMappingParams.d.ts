import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ValueMappingParams
 */
export interface ValueMappingParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ValueMappingParams.build]] instead.
 */
export declare function createValueMappingParams(json: any): ValueMappingParams;
/**
 * ValueMappingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ValueMappingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ValueMappingParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ValueMappingParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ValueMappingParams;
}
//# sourceMappingURL=ValueMappingParams.d.ts.map