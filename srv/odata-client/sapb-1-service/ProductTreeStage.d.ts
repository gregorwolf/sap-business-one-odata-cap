import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProductTreeStage
 */
export interface ProductTreeStage {
    /**
     * Father.
     * @nullable
     */
    father?: string;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Sequence Number.
     * @nullable
     */
    sequenceNumber?: number;
    /**
     * Stage Entry.
     * @nullable
     */
    stageEntry?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Waiting Days.
     * @nullable
     */
    waitingDays?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductTreeStage.build]] instead.
 */
export declare function createProductTreeStage(json: any): ProductTreeStage;
/**
 * ProductTreeStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductTreeStageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductTreeStage> {
    /**
     * Representation of the [[ProductTreeStage.father]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    father: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeStage.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeStage.sequenceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeStage.stageEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeStage.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductTreeStage.waitingDays]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    waitingDays: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ProductTreeStageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProductTreeStage {
    /**
     * Metadata information on all properties of the `ProductTreeStage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProductTreeStage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProductTreeStage;
}
//# sourceMappingURL=ProductTreeStage.d.ts.map