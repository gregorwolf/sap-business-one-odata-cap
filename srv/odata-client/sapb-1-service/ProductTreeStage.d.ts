import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ProductTreeStageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ProductTreeStage {
    function build(json: {
        [keys: string]: FieldType;
    }): ProductTreeStage;
}
//# sourceMappingURL=ProductTreeStage.d.ts.map