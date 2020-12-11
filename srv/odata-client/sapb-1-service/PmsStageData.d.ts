import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { StageDepTypeEnum } from './StageDepTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmsStageData
 */
export interface PmsStageData {
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
     * Stage Type.
     * @nullable
     */
    stageType?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Close Date.
     * @nullable
     */
    closeDate?: Moment;
    /**
     * Task.
     * @nullable
     */
    task?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Expected Costs.
     * @nullable
     */
    expectedCosts?: number;
    /**
     * Invoiced Amount Sales.
     * @nullable
     */
    invoicedAmountSales?: number;
    /**
     * Open Amount Sales.
     * @nullable
     */
    openAmountSales?: number;
    /**
     * Invoiced Amount Purchase.
     * @nullable
     */
    invoicedAmountPurchase?: number;
    /**
     * Open Amount Purchase.
     * @nullable
     */
    openAmountPurchase?: number;
    /**
     * Percentual Completness.
     * @nullable
     */
    percentualCompletness?: number;
    /**
     * Is Finished.
     * @nullable
     */
    isFinished?: BoYesNoEnum;
    /**
     * Stage Owner.
     * @nullable
     */
    stageOwner?: number;
    /**
     * Depends On Stage 1.
     * @nullable
     */
    dependsOnStage1?: number;
    /**
     * Depends On Stage 2.
     * @nullable
     */
    dependsOnStage2?: number;
    /**
     * Depends On Stage 3.
     * @nullable
     */
    dependsOnStage3?: number;
    /**
     * Depends On Stage 4.
     * @nullable
     */
    dependsOnStage4?: number;
    /**
     * Stage Dependency 1 Type.
     * @nullable
     */
    stageDependency1Type?: StageDepTypeEnum;
    /**
     * Stage Dependency 2 Type.
     * @nullable
     */
    stageDependency2Type?: StageDepTypeEnum;
    /**
     * Stage Dependency 3 Type.
     * @nullable
     */
    stageDependency3Type?: StageDepTypeEnum;
    /**
     * Stage Dependency 4 Type.
     * @nullable
     */
    stageDependency4Type?: StageDepTypeEnum;
    /**
     * Depends On Stage Id 1.
     * @nullable
     */
    dependsOnStageId1?: number;
    /**
     * Depends On Stage Id 2.
     * @nullable
     */
    dependsOnStageId2?: number;
    /**
     * Depends On Stage Id 3.
     * @nullable
     */
    dependsOnStageId3?: number;
    /**
     * Depends On Stage Id 4.
     * @nullable
     */
    dependsOnStageId4?: number;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Unique Id.
     * @nullable
     */
    uniqueId?: string;
    /**
     * Finished Date.
     * @nullable
     */
    finishedDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[PmsStageData.build]] instead.
 */
export declare function createPmsStageData(json: any): PmsStageData;
/**
 * PmsStageDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsStageDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsStageData> {
    /**
     * Representation of the [[PmsStageData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.stageType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.closeDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    closeDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.task]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    task: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.expectedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expectedCosts: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.invoicedAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    invoicedAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.openAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.invoicedAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    invoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.openAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.percentualCompletness]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentualCompletness: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.isFinished]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isFinished: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.stageOwner]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageOwner: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStage1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStage2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStage3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStage4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.stageDependency1Type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageDependency1Type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.stageDependency2Type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageDependency2Type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.stageDependency3Type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageDependency3Type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.stageDependency4Type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageDependency4Type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStageId1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStageId2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStageId3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.dependsOnStageId4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attachmentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.uniqueId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uniqueId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmsStageData.finishedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    finishedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of PmsStageDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmsStageData {
    /**
     * Metadata information on all properties of the `PmsStageData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmsStageData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmsStageData;
}
//# sourceMappingURL=PmsStageData.d.ts.map