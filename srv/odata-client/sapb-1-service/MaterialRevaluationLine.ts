/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FifoLayer, FifoLayerField } from './FifoLayer';
import { SnbLines, SnbLinesField } from './SnbLines';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  fifoLayers?: FifoLayer;
  /**
   * Snb Lines Collection.
   * @nullable
   */
  snbLinesCollection?: SnbLines;
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
export class MaterialRevaluationLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  fifoLayers: FifoLayerField<EntityT> = new FifoLayerField('FIFOLayers', this);
  /**
   * Representation of the [[MaterialRevaluationLine.snbLinesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  snbLinesCollection: SnbLinesField<EntityT> = new SnbLinesField('SNBLinesCollection', this);
}

export namespace MaterialRevaluationLine {
  export function build(json: { [keys: string]: FieldType | FifoLayer | SnbLines }): MaterialRevaluationLine {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      ActualPrice: (actualPrice: number) => ({ actualPrice: edmToTs(actualPrice, 'Edm.Double') }),
      OnHand: (onHand: number) => ({ onHand: edmToTs(onHand, 'Edm.Double') }),
      DebitCredit: (debitCredit: number) => ({ debitCredit: edmToTs(debitCredit, 'Edm.Double') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      RevaluationDecrementAccount: (revaluationDecrementAccount: string) => ({ revaluationDecrementAccount: edmToTs(revaluationDecrementAccount, 'Edm.String') }),
      RevaluationIncrementAccount: (revaluationIncrementAccount: string) => ({ revaluationIncrementAccount: edmToTs(revaluationIncrementAccount, 'Edm.String') }),
      RevalAmountToStock: (revalAmountToStock: number) => ({ revalAmountToStock: edmToTs(revalAmountToStock, 'Edm.Double') }),
      Project: (project: string) => ({ project: edmToTs(project, 'Edm.String') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      FIFOLayers: (fifoLayers: FifoLayer) => ({ fifoLayers: FifoLayer.build(fifoLayers) }),
      SNBLinesCollection: (snbLinesCollection: SnbLines) => ({ snbLinesCollection: SnbLines.build(snbLinesCollection) })
    });
  }
}
