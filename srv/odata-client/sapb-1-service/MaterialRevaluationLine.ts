/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FifoLayer } from './FifoLayer';
import { SnbLines } from './SnbLines';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * MaterialRevaluationLine
 */
export interface MaterialRevaluationLine {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
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
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Actual Price.
   * @nullable
   */
  actualPrice?: number;
  /**
   * On Hand.
   * @nullable
   */
  onHand?: number;
  /**
   * Debit Credit.
   * @nullable
   */
  debitCredit?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Revaluation Decrement Account.
   * @nullable
   */
  revaluationDecrementAccount?: string;
  /**
   * Revaluation Increment Account.
   * @nullable
   */
  revaluationIncrementAccount?: string;
  /**
   * Reval Amount To Stock.
   * @nullable
   */
  revalAmountToStock?: number;
  /**
   * Project.
   * @nullable
   */
  project?: string;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: string;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: string;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: string;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: string;
  /**
   * Fifo Layers.
   * @nullable
   */
  fifoLayers?: FifoLayer[];
  /**
   * Snb Lines Collection.
   * @nullable
   */
  snbLinesCollection?: SnbLines[];
}

/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationLine.build]] instead.
 */
export function createMaterialRevaluationLine(json: any): MaterialRevaluationLine {
  return MaterialRevaluationLine.build(json);
}

/**
 * MaterialRevaluationLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationLine> {
  /**
   * Representation of the [[MaterialRevaluationLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[MaterialRevaluationLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[MaterialRevaluationLine.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[MaterialRevaluationLine.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.actualPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualPrice', this, 'Edm.Double');
  /**
   * Representation of the [[MaterialRevaluationLine.onHand]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  onHand: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OnHand', this, 'Edm.Double');
  /**
   * Representation of the [[MaterialRevaluationLine.debitCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DebitCredit', this, 'Edm.Double');
  /**
   * Representation of the [[MaterialRevaluationLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[MaterialRevaluationLine.revaluationDecrementAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revaluationDecrementAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RevaluationDecrementAccount', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.revaluationIncrementAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revaluationIncrementAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RevaluationIncrementAccount', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.revalAmountToStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revalAmountToStock: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RevalAmountToStock', this, 'Edm.Double');
  /**
   * Representation of the [[MaterialRevaluationLine.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationLine.fifoLayers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fifoLayers: CollectionField<EntityT, FifoLayer> = new CollectionField('FIFOLayers', this, FifoLayer);
  /**
   * Representation of the [[MaterialRevaluationLine.snbLinesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  snbLinesCollection: CollectionField<EntityT, SnbLines> = new CollectionField('SNBLinesCollection', this, SnbLines);

  /**
   * Creates an instance of MaterialRevaluationLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MaterialRevaluationLine);
  }
}

export namespace MaterialRevaluationLine {
  /**
   * Metadata information on all properties of the `MaterialRevaluationLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationLine>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDescription',
    name: 'itemDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ActualPrice',
    name: 'actualPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OnHand',
    name: 'onHand',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DebitCredit',
    name: 'debitCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RevaluationDecrementAccount',
    name: 'revaluationDecrementAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RevaluationIncrementAccount',
    name: 'revaluationIncrementAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RevalAmountToStock',
    name: 'revalAmountToStock',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule2',
    name: 'distributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule3',
    name: 'distributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule4',
    name: 'distributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule5',
    name: 'distributionRule5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FIFOLayers',
    name: 'fifoLayers',
    type: FifoLayer,
    isCollection: true
  }, {
    originalName: 'SNBLinesCollection',
    name: 'snbLinesCollection',
    type: SnbLines,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | FifoLayer | SnbLines }): MaterialRevaluationLine {
    return deserializeComplexTypeV4(json, MaterialRevaluationLine);
  }
}
