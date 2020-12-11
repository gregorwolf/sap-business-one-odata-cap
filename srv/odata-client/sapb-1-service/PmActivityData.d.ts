import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmActivityData
 */
export interface PmActivityData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Activity Id.
     * @nullable
     */
    activityId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmActivityData.build]] instead.
 */
export declare function createPmActivityData(json: any): PmActivityData;
/**
 * PmActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmActivityDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmActivityData> {
    /**
     * Representation of the [[PmActivityData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmActivityData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmActivityData.activityId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmActivityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmActivityData {
    /**
     * Metadata information on all properties of the `PmActivityData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmActivityData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmActivityData;
}
//# sourceMappingURL=PmActivityData.d.ts.map