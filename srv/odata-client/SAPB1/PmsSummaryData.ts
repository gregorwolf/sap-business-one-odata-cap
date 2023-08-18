/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * PmsSummaryData
 */
export interface PmsSummaryData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Subproject Budget.
   * @nullable
   */
  subprojectBudget?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Open Amount Purchase.
   * @nullable
   */
  sumOpenAmountPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Invoiced Amount Purchase.
   * @nullable
   */
  sumInvoicedAmountPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Amount Purchase.
   * @nullable
   */
  totalAmountPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Variance Purchase.
   * @nullable
   */
  totalVariancePurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Variance Perception Purchase.
   * @nullable
   */
  variancePerceptionPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Subproject Budget.
   * @nullable
   */
  accumSubprojectBudget?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Open Amount Purchase.
   * @nullable
   */
  accumOpenAmountPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Invoiced Amount Purchase.
   * @nullable
   */
  accumInvoicedAmountPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Total Purchase.
   * @nullable
   */
  accumTotalPurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Total Variance Purchase.
   * @nullable
   */
  accumTotalVariancePurchase?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Variance Perception Purchase.
   * @nullable
   */
  accumVariancePerceptionPurchase?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Potential Subproject Amount.
   * @nullable
   */
  potentialSubprojectAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Open Amount Sales.
   * @nullable
   */
  sumOpenAmountSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Invoiced Amount Sales.
   * @nullable
   */
  sumInvoicedAmountSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Amount Sales.
   * @nullable
   */
  totalAmountSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Variance Sales.
   * @nullable
   */
  totalVarianceSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Variance Perception Sales.
   * @nullable
   */
  variancePerceptionSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Potential Subproject Amount.
   * @nullable
   */
  accumPotentialSubprojectAmount?: DeserializedType<
    DeSerializersT,
    'Edm.Double'
  >;
  /**
   * Accum Open Amount Sales.
   * @nullable
   */
  accumOpenAmountSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Invoiced Amount Sales.
   * @nullable
   */
  accumInvoicedAmountSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Total Sales.
   * @nullable
   */
  accumTotalSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Total Variance Sales.
   * @nullable
   */
  accumTotalVarianceSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Variance Perception Sales.
   * @nullable
   */
  accumVariancePerceptionSales?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Actual Item Component Cost.
   * @nullable
   */
  actualItemComponentCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Actual Resource Component Cost.
   * @nullable
   */
  actualResourceComponentCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Actual Additional Cost.
   * @nullable
   */
  actualAdditionalCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Actual Product Cost.
   * @nullable
   */
  actualProductCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Actual By Product Cost.
   * @nullable
   */
  actualByProductCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Variance.
   * @nullable
   */
  totalVariance?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Actual Closing Date.
   * @nullable
   */
  actualClosingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Overdue.
   * @nullable
   */
  overdue?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * PmsSummaryDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsSummaryDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmsSummaryData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmsSummaryData.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmsSummaryData.subprojectBudget} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subprojectBudget: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SubprojectBudget',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.sumOpenAmountPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumOpenAmountPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SumOpenAmountPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.sumInvoicedAmountPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumInvoicedAmountPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SumInvoicedAmountPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.totalAmountPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalAmountPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalAmountPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.totalVariancePurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVariancePurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalVariancePurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.variancePerceptionPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePerceptionPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VariancePerceptionPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumSubprojectBudget} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumSubprojectBudget: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumSubprojectBudget',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumOpenAmountPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumOpenAmountPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumOpenAmountPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumInvoicedAmountPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumInvoicedAmountPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumInvoicedAmountPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumTotalPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumTotalPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumTotalVariancePurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalVariancePurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumTotalVariancePurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumVariancePerceptionPurchase} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumVariancePerceptionPurchase: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumVariancePerceptionPurchase',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.potentialSubprojectAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  potentialSubprojectAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PotentialSubprojectAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.sumOpenAmountSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumOpenAmountSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SumOpenAmountSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.sumInvoicedAmountSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumInvoicedAmountSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SumInvoicedAmountSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.totalAmountSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalAmountSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalAmountSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.totalVarianceSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVarianceSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalVarianceSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.variancePerceptionSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePerceptionSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VariancePerceptionSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumPotentialSubprojectAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumPotentialSubprojectAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumPotentialSubprojectAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumOpenAmountSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumOpenAmountSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumOpenAmountSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumInvoicedAmountSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumInvoicedAmountSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumInvoicedAmountSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumTotalSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumTotalSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumTotalVarianceSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumTotalVarianceSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumTotalVarianceSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.accumVariancePerceptionSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumVariancePerceptionSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccumVariancePerceptionSales',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.actualItemComponentCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualItemComponentCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualItemComponentCost',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.actualResourceComponentCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualResourceComponentCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualResourceComponentCost',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.actualAdditionalCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualAdditionalCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualAdditionalCost',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.actualProductCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualProductCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualProductCost',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.actualByProductCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualByProductCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualByProductCost',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.totalVariance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalVariance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalVariance', 'Edm.Double', true);
  /**
   * Representation of the {@link PmsSummaryData.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.actualClosingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualClosingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ActualClosingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PmsSummaryData.overdue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overdue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Overdue', 'Edm.Int32', true);

  /**
   * Creates an instance of PmsSummaryDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmsSummaryData, fieldOptions);
  }
}

export namespace PmsSummaryData {
  /**
   * Metadata information on all properties of the `PmsSummaryData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmsSummaryData>[] = [
    {
      originalName: 'LineID',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SubprojectBudget',
      name: 'subprojectBudget',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumOpenAmountPurchase',
      name: 'sumOpenAmountPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumInvoicedAmountPurchase',
      name: 'sumInvoicedAmountPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalAmountPurchase',
      name: 'totalAmountPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalVariancePurchase',
      name: 'totalVariancePurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VariancePerceptionPurchase',
      name: 'variancePerceptionPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumSubprojectBudget',
      name: 'accumSubprojectBudget',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumOpenAmountPurchase',
      name: 'accumOpenAmountPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumInvoicedAmountPurchase',
      name: 'accumInvoicedAmountPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumTotalPurchase',
      name: 'accumTotalPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumTotalVariancePurchase',
      name: 'accumTotalVariancePurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumVariancePerceptionPurchase',
      name: 'accumVariancePerceptionPurchase',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PotentialSubprojectAmount',
      name: 'potentialSubprojectAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumOpenAmountSales',
      name: 'sumOpenAmountSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumInvoicedAmountSales',
      name: 'sumInvoicedAmountSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalAmountSales',
      name: 'totalAmountSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalVarianceSales',
      name: 'totalVarianceSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VariancePerceptionSales',
      name: 'variancePerceptionSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumPotentialSubprojectAmount',
      name: 'accumPotentialSubprojectAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumOpenAmountSales',
      name: 'accumOpenAmountSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumInvoicedAmountSales',
      name: 'accumInvoicedAmountSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumTotalSales',
      name: 'accumTotalSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumTotalVarianceSales',
      name: 'accumTotalVarianceSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumVariancePerceptionSales',
      name: 'accumVariancePerceptionSales',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ActualItemComponentCost',
      name: 'actualItemComponentCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ActualResourceComponentCost',
      name: 'actualResourceComponentCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ActualAdditionalCost',
      name: 'actualAdditionalCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ActualProductCost',
      name: 'actualProductCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ActualByProductCost',
      name: 'actualByProductCost',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalVariance',
      name: 'totalVariance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ActualClosingDate',
      name: 'actualClosingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Overdue',
      name: 'overdue',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
