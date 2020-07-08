import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BusinessPlaceIeNumber
 */
export interface BusinessPlaceIeNumber {
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Ie Number.
     * @nullable
     */
    ieNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceIeNumber.build]] instead.
 */
export declare function createBusinessPlaceIeNumber(json: any): BusinessPlaceIeNumber;
/**
 * BusinessPlaceIeNumberField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPlaceIeNumberField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BusinessPlaceIeNumber.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceIeNumber.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceIeNumber.ieNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ieNumber: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BusinessPlaceIeNumber {
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPlaceIeNumber;
}
//# sourceMappingURL=BusinessPlaceIeNumber.d.ts.map