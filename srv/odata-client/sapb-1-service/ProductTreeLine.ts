/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoIssueMethod } from './BoIssueMethod';
import { ProductionItemType } from './ProductionItemType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Issue Method.
   * @nullable
   */
  issueMethod?: BoIssueMethod;
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
   * Item Type.
   * @nullable
   */
  itemType?: ProductionItemType;
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
export class ProductTreeLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductTreeLine> {
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
   * Representation of the [[ProductTreeLine.issueMethod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueMethod: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IssueMethod', this);
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
   * Representation of the [[ProductTreeLine.itemType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ItemType', this);
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

  /**
   * Creates an instance of ProductTreeLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProductTreeLine);
  }
}

export namespace ProductTreeLine {
  /**
   * Metadata information on all properties of the `ProductTreeLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductTreeLine>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IssueMethod',
    name: 'issueMethod',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'InventoryUOM',
    name: 'inventoryUom',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Comment',
    name: 'comment',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ParentItem',
    name: 'parentItem',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PriceList',
    name: 'priceList',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Project',
    name: 'project',
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
    originalName: 'WipAccount',
    name: 'wipAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemType',
    name: 'itemType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LineText',
    name: 'lineText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalQuantity',
    name: 'additionalQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ChildNum',
    name: 'childNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProductTreeLine {
    return deserializeComplexTypeV4(json, ProductTreeLine);
  }
}
