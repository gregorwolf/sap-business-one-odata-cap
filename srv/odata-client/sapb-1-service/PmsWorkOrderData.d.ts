import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmsWorkOrderData
 */
export interface PmsWorkOrderData {
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
     * Doc Number.
     * @nullable
     */
    docNumber?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmsWorkOrderData.build]] instead.
 */
export declare function createPmsWorkOrderData(json: any): PmsWorkOrderData;
/**
 * PmsWorkOrderDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsWorkOrderDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsWorkOrderData> {
    /**
     * Representation of the [[PmsWorkOrderData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsWorkOrderData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsWorkOrderData.docNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsWorkOrderData.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmsWorkOrderDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmsWorkOrderData {
    /**
     * Metadata information on all properties of the `PmsWorkOrderData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmsWorkOrderData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmsWorkOrderData;
}
//# sourceMappingURL=PmsWorkOrderData.d.ts.map