import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmStageData
 */
export interface PmStageData {
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
 * @deprecated Since v1.6.0. Use [[PmStageData.build]] instead.
 */
export declare function createPmStageData(json: any): PmStageData;
/**
 * PmStageDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmStageDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmStageData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.stageType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.closeDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    closeDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.task]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    task: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.expectedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expectedCosts: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.invoicedAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    invoicedAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.openAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.invoicedAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    invoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.openAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.percentualCompletness]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    percentualCompletness: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.stageOwner]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageOwner: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStage1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStage2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStage3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStage4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStage4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStageId1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStageId2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStageId3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.dependsOnStageId4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dependsOnStageId4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attachmentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.uniqueId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uniqueId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmStageData.finishedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    finishedDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace PmStageData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmStageData;
}
//# sourceMappingURL=PmStageData.d.ts.map