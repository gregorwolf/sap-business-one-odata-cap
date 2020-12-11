import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmsSummaryData
 */
export interface PmsSummaryData {
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
 * @deprecated Since v1.6.0. Use [[PmsSummaryData.build]] instead.
 */
export declare function createPmsSummaryData(json: any): PmsSummaryData;
/**
 * PmsSummaryDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsSummaryDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsSummaryData> {
    /**
     * Representation of the [[PmsSummaryData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.subprojectBudget]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectBudget: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.sumOpenAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumOpenAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.sumInvoicedAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumInvoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.totalAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.totalVariancePurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalVariancePurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.variancePerceptionPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variancePerceptionPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumSubprojectBudget]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumSubprojectBudget: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumOpenAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumOpenAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumInvoicedAmountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumInvoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumTotalPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumTotalVariancePurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalVariancePurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumVariancePerceptionPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumVariancePerceptionPurchase: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.potentialSubprojectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    potentialSubprojectAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.sumOpenAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumOpenAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.sumInvoicedAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumInvoicedAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.totalAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.totalVarianceSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalVarianceSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.variancePerceptionSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variancePerceptionSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumPotentialSubprojectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumPotentialSubprojectAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumOpenAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumOpenAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumInvoicedAmountSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumInvoicedAmountSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumTotalSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumTotalVarianceSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumTotalVarianceSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.accumVariancePerceptionSales]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accumVariancePerceptionSales: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.actualItemComponentCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualItemComponentCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.actualResourceComponentCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualResourceComponentCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.actualAdditionalCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualAdditionalCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.actualProductCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualProductCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.actualByProductCost]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualByProductCost: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.totalVariance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalVariance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.actualClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualClosingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PmsSummaryData.overdue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    overdue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PmsSummaryDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmsSummaryData {
    /**
     * Metadata information on all properties of the `PmsSummaryData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmsSummaryData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmsSummaryData;
}
//# sourceMappingURL=PmsSummaryData.d.ts.map