import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmSummaryData
 */
export interface PmSummaryData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Subproject Budget.
     * @nullable
     */
    subprojectBudget?: number;
    /**
     * Sum Open Amount Purchase.
     * @nullable
     */
    sumOpenAmountPurchase?: number;
    /**
     * Sum Invoiced Amount Purchase.
     * @nullable
     */
    sumInvoicedAmountPurchase?: number;
    /**
     * Total Amount Purchase.
     * @nullable
     */
    totalAmountPurchase?: number;
    /**
     * Total Variance Purchase.
     * @nullable
     */
    totalVariancePurchase?: number;
    /**
     * Variance Perception Purchase.
     * @nullable
     */
    variancePerceptionPurchase?: number;
    /**
     * Accum Subproject Budget.
     * @nullable
     */
    accumSubprojectBudget?: number;
    /**
     * Accum Open Amount Purchase.
     * @nullable
     */
    accumOpenAmountPurchase?: number;
    /**
     * Accum Invoiced Amount Purchase.
     * @nullable
     */
    accumInvoicedAmountPurchase?: number;
    /**
     * Accum Total Purchase.
     * @nullable
     */
    accumTotalPurchase?: number;
    /**
     * Accum Total Variance Purchase.
     * @nullable
     */
    accumTotalVariancePurchase?: number;
    /**
     * Accum Variance Perception Purchase.
     * @nullable
     */
    accumVariancePerceptionPurchase?: number;
    /**
     * Potential Subproject Amount.
     * @nullable
     */
    potentialSubprojectAmount?: number;
    /**
     * Sum Open Amount Sales.
     * @nullable
     */
    sumOpenAmountSales?: number;
    /**
     * Sum Invoiced Amount Sales.
     * @nullable
     */
    sumInvoicedAmountSales?: number;
    /**
     * Total Amount Sales.
     * @nullable
     */
    totalAmountSales?: number;
    /**
     * Total Variance Sales.
     * @nullable
     */
    totalVarianceSales?: number;
    /**
     * Variance Perception Sales.
     * @nullable
     */
    variancePerceptionSales?: number;
    /**
     * Accum Potential Subproject Amount.
     * @nullable
     */
    accumPotentialSubprojectAmount?: number;
    /**
     * Accum Open Amount Sales.
     * @nullable
     */
    accumOpenAmountSales?: number;
    /**
     * Accum Invoiced Amount Sales.
     * @nullable
     */
    accumInvoicedAmountSales?: number;
    /**
     * Accum Total Sales.
     * @nullable
     */
    accumTotalSales?: number;
    /**
     * Accum Total Variance Sales.
     * @nullable
     */
    accumTotalVarianceSales?: number;
    /**
     * Accum Variance Perception Sales.
     * @nullable
     */
    accumVariancePerceptionSales?: number;
    /**
     * Actual Item Component Cost.
     * @nullable
     */
    actualItemComponentCost?: number;
    /**
     * Actual Resource Component Cost.
     * @nullable
     */
    actualResourceComponentCost?: number;
    /**
     * Actual Additional Cost.
     * @nullable
     */
    actualAdditionalCost?: number;
    /**
     * Actual Product Cost.
     * @nullable
     */
    actualProductCost?: number;
    /**
     * Actual By Product Cost.
     * @nullable
     */
    actualByProductCost?: number;
    /**
     * Total Variance.
     * @nullable
     */
    totalVariance?: number;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Actual Closing Date.
     * @nullable
     */
    actualClosingDate?: Moment;
    /**
     * Overdue.
     * @nullable
     */
    overdue?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmSummaryData.build]] instead.
 */
export declare function createPmSummaryData(json: any): PmSummaryData;
/**
 * PmSummaryDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmSummaryDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmSummaryData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.subprojectBudget]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectBudget: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.sumOpenAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumOpenAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.sumInvoicedAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumInvoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.totalAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.totalVariancePurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalVariancePurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.variancePerceptionPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variancePerceptionPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumSubprojectBudget]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumSubprojectBudget: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumOpenAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumOpenAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumInvoicedAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumInvoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumTotalPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumTotalVariancePurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalVariancePurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumVariancePerceptionPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumVariancePerceptionPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.potentialSubprojectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    potentialSubprojectAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.sumOpenAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumOpenAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.sumInvoicedAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumInvoicedAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.totalAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.totalVarianceSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalVarianceSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.variancePerceptionSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variancePerceptionSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumPotentialSubprojectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumPotentialSubprojectAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumOpenAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumOpenAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumInvoicedAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumInvoicedAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumTotalSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumTotalVarianceSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalVarianceSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.accumVariancePerceptionSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumVariancePerceptionSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.actualItemComponentCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualItemComponentCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.actualResourceComponentCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualResourceComponentCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.actualAdditionalCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualAdditionalCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.actualProductCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualProductCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.actualByProductCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualByProductCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.totalVariance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalVariance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.actualClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualClosingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmSummaryData.overdue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    overdue: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmSummaryData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmSummaryData;
}
//# sourceMappingURL=PmSummaryData.d.ts.map