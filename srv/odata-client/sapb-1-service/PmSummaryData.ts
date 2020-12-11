/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createPmSummaryData(json: any): PmSummaryData {
  return PmSummaryData.build(json);
}

/**
 * PmSummaryDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmSummaryDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmSummaryData> {
  /**
   * Representation of the [[PmSummaryData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmSummaryData.subprojectBudget]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectBudget: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubprojectBudget', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.sumOpenAmountPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumOpenAmountPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumOpenAmountPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.sumInvoicedAmountPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumInvoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumInvoicedAmountPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.totalAmountPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalAmountPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalAmountPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.totalVariancePurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVariancePurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalVariancePurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.variancePerceptionPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePerceptionPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariancePerceptionPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumSubprojectBudget]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumSubprojectBudget: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumSubprojectBudget', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumOpenAmountPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumOpenAmountPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumOpenAmountPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumInvoicedAmountPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumInvoicedAmountPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumInvoicedAmountPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumTotalPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumTotalPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumTotalVariancePurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalVariancePurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumTotalVariancePurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumVariancePerceptionPurchase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumVariancePerceptionPurchase: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumVariancePerceptionPurchase', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.potentialSubprojectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  potentialSubprojectAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PotentialSubprojectAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.sumOpenAmountSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumOpenAmountSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumOpenAmountSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.sumInvoicedAmountSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumInvoicedAmountSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SumInvoicedAmountSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.totalAmountSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalAmountSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalAmountSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.totalVarianceSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVarianceSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalVarianceSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.variancePerceptionSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePerceptionSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariancePerceptionSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumPotentialSubprojectAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumPotentialSubprojectAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumPotentialSubprojectAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumOpenAmountSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumOpenAmountSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumOpenAmountSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumInvoicedAmountSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumInvoicedAmountSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumInvoicedAmountSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumTotalSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumTotalSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumTotalVarianceSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalVarianceSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumTotalVarianceSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.accumVariancePerceptionSales]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumVariancePerceptionSales: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumVariancePerceptionSales', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.actualItemComponentCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualItemComponentCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualItemComponentCost', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.actualResourceComponentCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualResourceComponentCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualResourceComponentCost', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.actualAdditionalCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualAdditionalCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualAdditionalCost', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.actualProductCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualProductCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualProductCost', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.actualByProductCost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualByProductCost: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualByProductCost', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.totalVariance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVariance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalVariance', this, 'Edm.Double');
  /**
   * Representation of the [[PmSummaryData.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmSummaryData.actualClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualClosingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ActualClosingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmSummaryData.overdue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overdue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Overdue', this, 'Edm.Int32');

  /**
   * Creates an instance of PmSummaryDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmSummaryData);
  }
}

export namespace PmSummaryData {
  /**
   * Metadata information on all properties of the `PmSummaryData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmSummaryData>[] = [{
    originalName: 'LineID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SubprojectBudget',
    name: 'subprojectBudget',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumOpenAmountPurchase',
    name: 'sumOpenAmountPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumInvoicedAmountPurchase',
    name: 'sumInvoicedAmountPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalAmountPurchase',
    name: 'totalAmountPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalVariancePurchase',
    name: 'totalVariancePurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VariancePerceptionPurchase',
    name: 'variancePerceptionPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumSubprojectBudget',
    name: 'accumSubprojectBudget',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumOpenAmountPurchase',
    name: 'accumOpenAmountPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumInvoicedAmountPurchase',
    name: 'accumInvoicedAmountPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumTotalPurchase',
    name: 'accumTotalPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumTotalVariancePurchase',
    name: 'accumTotalVariancePurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumVariancePerceptionPurchase',
    name: 'accumVariancePerceptionPurchase',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PotentialSubprojectAmount',
    name: 'potentialSubprojectAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumOpenAmountSales',
    name: 'sumOpenAmountSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SumInvoicedAmountSales',
    name: 'sumInvoicedAmountSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalAmountSales',
    name: 'totalAmountSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalVarianceSales',
    name: 'totalVarianceSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VariancePerceptionSales',
    name: 'variancePerceptionSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumPotentialSubprojectAmount',
    name: 'accumPotentialSubprojectAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumOpenAmountSales',
    name: 'accumOpenAmountSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumInvoicedAmountSales',
    name: 'accumInvoicedAmountSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumTotalSales',
    name: 'accumTotalSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumTotalVarianceSales',
    name: 'accumTotalVarianceSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumVariancePerceptionSales',
    name: 'accumVariancePerceptionSales',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ActualItemComponentCost',
    name: 'actualItemComponentCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ActualResourceComponentCost',
    name: 'actualResourceComponentCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ActualAdditionalCost',
    name: 'actualAdditionalCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ActualProductCost',
    name: 'actualProductCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ActualByProductCost',
    name: 'actualByProductCost',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'TotalVariance',
    name: 'totalVariance',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ActualClosingDate',
    name: 'actualClosingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Overdue',
    name: 'overdue',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmSummaryData {
    return deserializeComplexTypeV4(json, PmSummaryData);
  }
}
