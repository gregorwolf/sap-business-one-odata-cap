/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ProductTreeLine
 */
export interface ProductTreeLine {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Inventory Uom.
   * @nullable
   */
  inventoryUom?: string;
  /**
   * Comment.
   * @nullable
   */
  comment?: string;
  /**
   * Parent Item.
   * @nullable
   */
  parentItem?: string;
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Project.
   * @nullable
   */
  project?: string;
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
   * Wip Account.
   * @nullable
   */
  wipAccount?: string;
  /**
   * Line Text.
   * @nullable
   */
  lineText?: string;
  /**
   * Additional Quantity.
   * @nullable
   */
  additionalQuantity?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Child Num.
   * @nullable
   */
  childNum?: number;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProductTreeLine.build]] instead.
 */
export function createProductTreeLine(json: any): ProductTreeLine {
  return ProductTreeLine.build(json);
}

/**
 * ProductTreeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductTreeLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ProductTreeLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[ProductTreeLine.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[ProductTreeLine.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.inventoryUom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryUom: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryUOM', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.comment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  comment: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Comment', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.parentItem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentItem: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ParentItem', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeLine.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.project]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  project: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Project', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.wipAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WipAccount', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.lineText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineText', this, 'Edm.String');
  /**
   * Representation of the [[ProductTreeLine.additionalQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ProductTreeLine.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeLine.childNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ChildNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ProductTreeLine.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
}

export namespace ProductTreeLine {
  export function build(json: { [keys: string]: FieldType }): ProductTreeLine {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      InventoryUOM: (inventoryUom: string) => ({ inventoryUom: edmToTs(inventoryUom, 'Edm.String') }),
      Comment: (comment: string) => ({ comment: edmToTs(comment, 'Edm.String') }),
      ParentItem: (parentItem: string) => ({ parentItem: edmToTs(parentItem, 'Edm.String') }),
      PriceList: (priceList: number) => ({ priceList: edmToTs(priceList, 'Edm.Int32') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      Project: (project: string) => ({ project: edmToTs(project, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      WipAccount: (wipAccount: string) => ({ wipAccount: edmToTs(wipAccount, 'Edm.String') }),
      LineText: (lineText: string) => ({ lineText: edmToTs(lineText, 'Edm.String') }),
      AdditionalQuantity: (additionalQuantity: number) => ({ additionalQuantity: edmToTs(additionalQuantity, 'Edm.Double') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      ChildNum: (childNum: number) => ({ childNum: edmToTs(childNum, 'Edm.Int32') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') })
    });
  }
}
