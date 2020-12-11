import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmcAreaData
 */
export interface PmcAreaData {
    /**
     * Area Id.
     * @nullable
     */
    areaId?: number;
    /**
     * Area Name.
     * @nullable
     */
    areaName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcAreaData.build]] instead.
 */
export declare function createPmcAreaData(json: any): PmcAreaData;
/**
 * PmcAreaDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcAreaDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcAreaData> {
    /**
     * Representation of the [[PmcAreaData.areaId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    areaId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcAreaData.areaName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    areaName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PmcAreaDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmcAreaData {
    /**
     * Metadata information on all properties of the `PmcAreaData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmcAreaData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmcAreaData;
}
//# sourceMappingURL=PmcAreaData.d.ts.map