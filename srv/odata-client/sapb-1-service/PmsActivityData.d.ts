import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmsActivityData
 */
export interface PmsActivityData {
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
 * @deprecated Since v1.6.0. Use [[PmsActivityData.build]] instead.
 */
export declare function createPmsActivityData(json: any): PmsActivityData;
/**
 * PmsActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsActivityDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsActivityData> {
    /**
     * Representation of the [[PmsActivityData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsActivityData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsActivityData.activityId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmsActivityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmsActivityData {
    /**
     * Metadata information on all properties of the `PmsActivityData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmsActivityData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmsActivityData;
}
//# sourceMappingURL=PmsActivityData.d.ts.map