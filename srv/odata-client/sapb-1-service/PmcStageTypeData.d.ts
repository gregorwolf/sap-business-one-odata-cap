import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmcStageTypeData
 */
export interface PmcStageTypeData {
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Stage Name.
     * @nullable
     */
    stageName?: string;
    /**
     * Stage Description.
     * @nullable
     */
    stageDescription?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcStageTypeData.build]] instead.
 */
export declare function createPmcStageTypeData(json: any): PmcStageTypeData;
/**
 * PmcStageTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcStageTypeDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcStageTypeData> {
    /**
     * Representation of the [[PmcStageTypeData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcStageTypeData.stageName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmcStageTypeData.stageDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PmcStageTypeDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmcStageTypeData {
    /**
     * Metadata information on all properties of the `PmcStageTypeData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmcStageTypeData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmcStageTypeData;
}
//# sourceMappingURL=PmcStageTypeData.d.ts.map