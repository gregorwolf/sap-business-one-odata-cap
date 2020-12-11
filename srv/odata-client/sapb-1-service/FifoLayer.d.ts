import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FifoLayer
 */
export interface FifoLayer {
    /**
     * Transaction Sequence Num.
     * @nullable
     */
    transactionSequenceNum?: number;
    /**
     * Layer Id.
     * @nullable
     */
    layerId?: number;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Price.
     * @nullable
     */
    price?: number;
    /**
     * Line Total.
     * @nullable
     */
    lineTotal?: number;
    /**
     * Base Line.
     * @nullable
     */
    baseLine?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[FifoLayer.build]] instead.
 */
export declare function createFifoLayer(json: any): FifoLayer;
/**
 * FifoLayerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FifoLayerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FifoLayer> {
    /**
     * Representation of the [[FifoLayer.transactionSequenceNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionSequenceNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FifoLayer.layerId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layerId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FifoLayer.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FifoLayer.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FifoLayer.lineTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[FifoLayer.baseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of FifoLayerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FifoLayer {
    /**
     * Metadata information on all properties of the `FifoLayer` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FifoLayer>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FifoLayer;
}
//# sourceMappingURL=FifoLayer.d.ts.map