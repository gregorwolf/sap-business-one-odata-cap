/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FifoLayer } from './FifoLayer';
import { SnbLines } from './SnbLines';
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
 * MaterialRevaluationLine
 */
export interface MaterialRevaluationLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Actual Price.
   * @nullable
   */
  actualPrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * On Hand.
   * @nullable
   */
  onHand?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Debit Credit.
   * @nullable
   */
  debitCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Revaluation Decrement Account.
   * @nullable
   */
  revaluationDecrementAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Revaluation Increment Account.
   * @nullable
   */
  revaluationIncrementAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reval Amount To Stock.
   * @nullable
   */
  revalAmountToStock?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fifo Layers.
   * @nullable
   */
  fifoLayers?: DeserializedType<DeSerializersT, 'SAPB1.FIFOLayer'>;
  /**
   * Snb Lines Collection.
   * @nullable
   */
  snbLinesCollection?: DeserializedType<DeSerializersT, 'SAPB1.SNBLines'>;
}

/**
 * MaterialRevaluationLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MaterialRevaluationLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.itemDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ItemDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.quantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Quantity', 'Edm.Double', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.price} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Price', 'Edm.Double', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.actualPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ActualPrice', 'Edm.Double', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.onHand} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  onHand: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OnHand', 'Edm.Double', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.debitCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DebitCredit', 'Edm.Double', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.revaluationDecrementAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revaluationDecrementAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RevaluationDecrementAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.revaluationIncrementAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revaluationIncrementAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RevaluationIncrementAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.revalAmountToStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revalAmountToStock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RevalAmountToStock',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.project} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true);
  /**
   * Representation of the {@link MaterialRevaluationLine.distributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.distributionRule2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.distributionRule3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.distributionRule4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.distributionRule5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationLine.fifoLayers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fifoLayers: CollectionField<EntityT, DeSerializersT, FifoLayer, true, false> =
    this._fieldBuilder.buildCollectionField('FIFOLayers', FifoLayer, true);
  /**
   * Representation of the {@link MaterialRevaluationLine.snbLinesCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  snbLinesCollection: CollectionField<
    EntityT,
    DeSerializersT,
    SnbLines,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'SNBLinesCollection',
    SnbLines,
    true
  );

  /**
   * Creates an instance of MaterialRevaluationLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      MaterialRevaluationLine,
      fieldOptions
    );
  }
}

export namespace MaterialRevaluationLine {
  /**
   * Metadata information on all properties of the `MaterialRevaluationLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationLine>[] =
    [
      {
        originalName: 'LineNum',
        name: 'lineNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ItemCode',
        name: 'itemCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ItemDescription',
        name: 'itemDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Quantity',
        name: 'quantity',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Price',
        name: 'price',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'WarehouseCode',
        name: 'warehouseCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ActualPrice',
        name: 'actualPrice',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'OnHand',
        name: 'onHand',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DebitCredit',
        name: 'debitCredit',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'RevaluationDecrementAccount',
        name: 'revaluationDecrementAccount',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'RevaluationIncrementAccount',
        name: 'revaluationIncrementAccount',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'RevalAmountToStock',
        name: 'revalAmountToStock',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Project',
        name: 'project',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule',
        name: 'distributionRule',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule2',
        name: 'distributionRule2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule3',
        name: 'distributionRule3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule4',
        name: 'distributionRule4',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DistributionRule5',
        name: 'distributionRule5',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'FIFOLayers',
        name: 'fifoLayers',
        type: FifoLayer,
        isCollection: true
      },
      {
        originalName: 'SNBLinesCollection',
        name: 'snbLinesCollection',
        type: SnbLines,
        isCollection: true
      }
    ];
}
