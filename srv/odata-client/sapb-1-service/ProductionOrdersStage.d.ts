import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProductionOrdersStage
 */
export interface ProductionOrdersStage {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
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
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Required Days.
     * @nullable
     */
    requiredDays?: number;
    /**
     * Waiting Days.
     * @nullable
     */
    waitingDays?: number;
    /**
     * Calculation Proportion.
     * @nullable
     */
    calculationProportion?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrdersStage.build]] instead.
 */
export declare function createProductionOrdersStage(json: any): ProductionOrdersStage;
/**
 * ProductionOrdersStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductionOrdersStageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductionOrdersStage> {
    /**
     * Representation of the [[ProductionOrdersStage.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.sequenceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.stageEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.requiredDays]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    requiredDays: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.waitingDays]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    waitingDays: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersStage.calculationProportion]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculationProportion: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ProductionOrdersStageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProductionOrdersStage {
    /**
     * Metadata information on all properties of the `ProductionOrdersStage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProductionOrdersStage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProductionOrdersStage;
}
//# sourceMappingURL=ProductionOrdersStage.d.ts.map