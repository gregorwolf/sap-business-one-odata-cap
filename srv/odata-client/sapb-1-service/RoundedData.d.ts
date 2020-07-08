import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * RoundedData
 */
export interface RoundedData {
    /**
     * Value.
     * @nullable
     */
    value?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[RoundedData.build]] instead.
 */
export declare function createRoundedData(json: any): RoundedData;
/**
 * RoundedDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RoundedDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[RoundedData.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace RoundedData {
    function build(json: {
        [keys: string]: FieldType;
    }): RoundedData;
}
//# sourceMappingURL=RoundedData.d.ts.map