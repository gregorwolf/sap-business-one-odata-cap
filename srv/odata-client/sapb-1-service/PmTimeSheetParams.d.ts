import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class PmTimeSheetParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmTimeSheetParams> {
    /**
     * Representation of the [[PmTimeSheetParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmTimeSheetParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmTimeSheetParams {
    /**
     * Metadata information on all properties of the `PmTimeSheetParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmTimeSheetParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmTimeSheetParams;
}
//# sourceMappingURL=PmTimeSheetParams.d.ts.map