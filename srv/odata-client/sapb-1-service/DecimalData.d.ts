import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DecimalData
 */
export interface DecimalData {
    /**
     * Value.
     * @nullable
     */
    value?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DecimalData.build]] instead.
 */
export declare function createDecimalData(json: any): DecimalData;
/**
 * DecimalDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DecimalDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DecimalData.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DecimalData.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DecimalData {
    function build(json: {
        [keys: string]: FieldType;
    }): DecimalData;
}
//# sourceMappingURL=DecimalData.d.ts.map