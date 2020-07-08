import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ValueMappingCommunicationParams
 */
export interface ValueMappingCommunicationParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ValueMappingCommunicationParams.build]] instead.
 */
export declare function createValueMappingCommunicationParams(json: any): ValueMappingCommunicationParams;
/**
 * ValueMappingCommunicationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ValueMappingCommunicationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ValueMappingCommunicationParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ValueMappingCommunicationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ValueMappingCommunicationParams;
}
//# sourceMappingURL=ValueMappingCommunicationParams.d.ts.map