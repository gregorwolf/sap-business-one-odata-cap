import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmcPriorityData
 */
export interface PmcPriorityData {
    /**
     * Priority Id.
     * @nullable
     */
    priorityId?: number;
    /**
     * Priority Name.
     * @nullable
     */
    priorityName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcPriorityData.build]] instead.
 */
export declare function createPmcPriorityData(json: any): PmcPriorityData;
/**
 * PmcPriorityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcPriorityDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcPriorityData> {
    /**
     * Representation of the [[PmcPriorityData.priorityId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priorityId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcPriorityData.priorityName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priorityName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PmcPriorityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmcPriorityData {
    /**
     * Metadata information on all properties of the `PmcPriorityData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmcPriorityData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmcPriorityData;
}
//# sourceMappingURL=PmcPriorityData.d.ts.map