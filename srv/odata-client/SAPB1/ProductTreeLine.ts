/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoIssueMethod } from './BoIssueMethod';
import { ProductionItemType } from './ProductionItemType';
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
 * ProductTreeLine
 */
export interface ProductTreeLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price.
   * @nullable
   */
  price?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Issue Method.
   * @nullable
   */
  issueMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Inventory Uom.
   * @nullable
   */
  inventoryUom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Comment.
   * @nullable
   */
  comment?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Parent Item.
   * @nullable
   */
  parentItem?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Wip Account.
   * @nullable
   */
  wipAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Type.
   * @nullable
   */
  itemType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Line Text.
   * @nullable
   */
  lineText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Additional Quantity.
   * @nullable
   */
  additionalQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Child Num.
   * @nullable
   */
  childNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ProductTreeLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductTreeLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProductTreeLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProductTreeLine.itemCode} property for query construction.
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
   * Representation of the {@link ProductTreeLine.quantity} property for query construction.
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
   * Representation of the {@link ProductTreeLine.warehouse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Warehouse', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeLine.price} property for query construction.
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
   * Representation of the {@link ProductTreeLine.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeLine.issueMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issueMethod: EnumField<EntityT, DeSerializersT, BoIssueMethod, true, false> =
    this._fieldBuilder.buildEnumField('IssueMethod', BoIssueMethod, true);
  /**
   * Representation of the {@link ProductTreeLine.inventoryUom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryUom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InventoryUOM', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeLine.comment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  comment: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeLine.parentItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParentItem', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeLine.priceList} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PriceList', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductTreeLine.distributionRule} property for query construction.
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
   * Representation of the {@link ProductTreeLine.project} property for query construction.
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
   * Representation of the {@link ProductTreeLine.distributionRule2} property for query construction.
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
   * Representation of the {@link ProductTreeLine.distributionRule3} property for query construction.
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
   * Representation of the {@link ProductTreeLine.distributionRule4} property for query construction.
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
   * Representation of the {@link ProductTreeLine.distributionRule5} property for query construction.
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
   * Representation of the {@link ProductTreeLine.wipAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WipAccount', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeLine.itemType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: EnumField<
    EntityT,
    DeSerializersT,
    ProductionItemType,
    true,
    false
  > = this._fieldBuilder.buildEnumField('ItemType', ProductionItemType, true);
  /**
   * Representation of the {@link ProductTreeLine.lineText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineText', 'Edm.String', true);
  /**
   * Representation of the {@link ProductTreeLine.additionalQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ProductTreeLine.stageId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageID', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductTreeLine.childNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ChildNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductTreeLine.visualOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisualOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductTreeLine.itemName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemName', 'Edm.String', true);

  /**
   * Creates an instance of ProductTreeLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ProductTreeLine, fieldOptions);
  }
}

export namespace ProductTreeLine {
  /**
   * Metadata information on all properties of the `ProductTreeLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductTreeLine>[] = [
    {
      originalName: 'ItemCode',
      name: 'itemCode',
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
      originalName: 'Warehouse',
      name: 'warehouse',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Price',
      name: 'price',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IssueMethod',
      name: 'issueMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'InventoryUOM',
      name: 'inventoryUom',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Comment',
      name: 'comment',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ParentItem',
      name: 'parentItem',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PriceList',
      name: 'priceList',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DistributionRule',
      name: 'distributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Project',
      name: 'project',
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
      originalName: 'WipAccount',
      name: 'wipAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemType',
      name: 'itemType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LineText',
      name: 'lineText',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AdditionalQuantity',
      name: 'additionalQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StageID',
      name: 'stageId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ChildNum',
      name: 'childNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VisualOrder',
      name: 'visualOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemName',
      name: 'itemName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
