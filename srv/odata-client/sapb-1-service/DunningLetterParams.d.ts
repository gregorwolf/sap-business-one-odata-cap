import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class DunningLetterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DunningLetterParams> {
    /**
     * Representation of the [[DunningLetterParams.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DunningLetterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DunningLetterParams {
    /**
     * Metadata information on all properties of the `DunningLetterParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DunningLetterParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DunningLetterParams;
}
//# sourceMappingURL=DunningLetterParams.d.ts.map