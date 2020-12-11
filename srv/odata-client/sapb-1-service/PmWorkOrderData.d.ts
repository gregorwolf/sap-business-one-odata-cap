import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmWorkOrderData
 */
export interface PmWorkOrderData {
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
 * @deprecated Since v1.6.0. Use [[PmWorkOrderData.build]] instead.
 */
export declare function createPmWorkOrderData(json: any): PmWorkOrderData;
/**
 * PmWorkOrderDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmWorkOrderDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmWorkOrderData> {
    /**
     * Representation of the [[PmWorkOrderData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmWorkOrderData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmWorkOrderData.docNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmWorkOrderData.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmWorkOrderDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmWorkOrderData {
    /**
     * Metadata information on all properties of the `PmWorkOrderData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmWorkOrderData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmWorkOrderData;
}
//# sourceMappingURL=PmWorkOrderData.d.ts.map