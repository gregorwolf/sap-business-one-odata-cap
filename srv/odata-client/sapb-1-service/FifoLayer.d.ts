import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class FifoLayerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace FifoLayer {
    function build(json: {
        [keys: string]: FieldType;
    }): FifoLayer;
}
//# sourceMappingURL=FifoLayer.d.ts.map