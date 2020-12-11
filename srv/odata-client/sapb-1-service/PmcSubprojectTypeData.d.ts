import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmcSubprojectTypeData
 */
export interface PmcSubprojectTypeData {
    /**
     * Subproject Type Id.
     * @nullable
     */
    subprojectTypeId?: number;
    /**
     * Subproject Type Name.
     * @nullable
     */
    subprojectTypeName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcSubprojectTypeData.build]] instead.
 */
export declare function createPmcSubprojectTypeData(json: any): PmcSubprojectTypeData;
/**
 * PmcSubprojectTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcSubprojectTypeDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcSubprojectTypeData> {
    /**
     * Representation of the [[PmcSubprojectTypeData.subprojectTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectTypeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcSubprojectTypeData.subprojectTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectTypeName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PmcSubprojectTypeDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmcSubprojectTypeData {
    /**
     * Metadata information on all properties of the `PmcSubprojectTypeData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmcSubprojectTypeData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmcSubprojectTypeData;
}
//# sourceMappingURL=PmcSubprojectTypeData.d.ts.map