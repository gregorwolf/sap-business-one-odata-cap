/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductTreesRequestBuilder } from './ProductTreesRequestBuilder';
import { ProductTreeLine } from './ProductTreeLine';
import { ProductTreeStage } from './ProductTreeStage';
import { BoItemTreeTypes } from './BoItemTreeTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ProductTrees" of service "SAPB1".
 */
export class ProductTrees extends EntityV4 implements ProductTreesType {
  /**
   * Technical entity name for ProductTrees.
   */
  static _entityName = 'ProductTrees';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Tree Code.
   * @nullable
   */
  treeCode?: string;
  /**
   * Tree Type.
   * @nullable
   */
  treeType?: BoItemTreeTypes;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
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
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Plan Avg Prod Size.
   * @nullable
   */
  planAvgProdSize?: number;
  /**
   * Hide Bom Components In Printout.
   * @nullable
   */
  hideBomComponentsInPrintout?: BoYesNoEnum;
  /**
   * Product Description.
   * @nullable
   */
  productDescription?: string;
  /**
   * Product Tree Lines.
   * @nullable
   */
  productTreeLines?: ProductTreeLine[];
  /**
   * Product Tree Stages.
   * @nullable
   */
  productTreeStages?: ProductTreeStage[];
  /**
   * One-to-many navigation property to the [[ProductionOrders]] entity.
   */
  productionOrders!: ProductionOrders[];
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[DistributionRules]] entity.
   */
  distributionRule6!: DistributionRules;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project2!: Projects;
  /**
   * One-to-one navigation property to the [[PriceLists]] entity.
   */
  priceList2!: PriceLists;

  /**
   * Returns an entity builder to construct instances of `ProductTrees`.
   * @returns A builder that constructs instances of entity type `ProductTrees`.
   */
  static builder(): EntityBuilderType<ProductTrees, ProductTreesType> {
    return EntityV4.entityBuilder(ProductTrees);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ProductTrees` entity type.
   * @returns A `ProductTrees` request builder.
   */
  static requestBuilder(): ProductTreesRequestBuilder {
    return new ProductTreesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductTrees`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ProductTrees`.
   */
  static customField(fieldName: string): CustomFieldV4<ProductTrees> {
    return EntityV4.customFieldSelector(fieldName, ProductTrees);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { Items, ItemsType } from './Items';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Projects, ProjectsType } from './Projects';
import { PriceLists, PriceListsType } from './PriceLists';

export interface ProductTreesType {
  treeCode?: string | null;
  treeType?: BoItemTreeTypes | null;
  quantity?: number | null;
  distributionRule?: string | null;
  project?: string | null;
  distributionRule2?: string | null;
  distributionRule3?: string | null;
  distributionRule4?: string | null;
  distributionRule5?: string | null;
  priceList?: number | null;
  warehouse?: string | null;
  planAvgProdSize?: number | null;
  hideBomComponentsInPrintout?: BoYesNoEnum | null;
  productDescription?: string | null;
  productTreeLines?: ProductTreeLine[] | null;
  productTreeStages?: ProductTreeStage[] | null;
  productionOrders: ProductionOrdersType[];
  item: ItemsType;
  distributionRule6: DistributionRulesType;
  project2: ProjectsType;
  priceList2: PriceListsType;
}

export namespace ProductTrees {
  /**
   * Static representation of the [[treeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TREE_CODE: StringField<ProductTrees> = new StringField('TreeCode', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[treeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TREE_TYPE: EnumField<ProductTrees> = new EnumField('TreeType', ProductTrees);
  /**
   * Static representation of the [[quantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY: NumberField<ProductTrees> = new NumberField('Quantity', ProductTrees, 'Edm.Double');
  /**
   * Static representation of the [[distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE: StringField<ProductTrees> = new StringField('DistributionRule', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<ProductTrees> = new StringField('Project', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_2: StringField<ProductTrees> = new StringField('DistributionRule2', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_3: StringField<ProductTrees> = new StringField('DistributionRule3', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_4: StringField<ProductTrees> = new StringField('DistributionRule4', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_5: StringField<ProductTrees> = new StringField('DistributionRule5', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[priceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: NumberField<ProductTrees> = new NumberField('PriceList', ProductTrees, 'Edm.Int32');
  /**
   * Static representation of the [[warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: StringField<ProductTrees> = new StringField('Warehouse', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[planAvgProdSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLAN_AVG_PROD_SIZE: NumberField<ProductTrees> = new NumberField('PlanAvgProdSize', ProductTrees, 'Edm.Double');
  /**
   * Static representation of the [[hideBomComponentsInPrintout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIDE_BOM_COMPONENTS_IN_PRINTOUT: EnumField<ProductTrees> = new EnumField('HideBOMComponentsInPrintout', ProductTrees);
  /**
   * Static representation of the [[productDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_DESCRIPTION: StringField<ProductTrees> = new StringField('ProductDescription', ProductTrees, 'Edm.String');
  /**
   * Static representation of the [[productTreeLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TREE_LINES: CollectionField<ProductTrees, ProductTreeLine> = new CollectionField('ProductTreeLines', ProductTrees, ProductTreeLine);
  /**
   * Static representation of the [[productTreeStages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TREE_STAGES: CollectionField<ProductTrees, ProductTreeStage> = new CollectionField('ProductTreeStages', ProductTrees, ProductTreeStage);
  /**
   * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCTION_ORDERS: OneToManyLink<ProductTrees, ProductionOrders> = new OneToManyLink('ProductionOrders', ProductTrees, ProductionOrders);
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<ProductTrees, Items> = new OneToOneLink('Item', ProductTrees, Items);
  /**
   * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_6: OneToOneLink<ProductTrees, DistributionRules> = new OneToOneLink('DistributionRule6', ProductTrees, DistributionRules);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<ProductTrees, Projects> = new OneToOneLink('Project2', ProductTrees, Projects);
  /**
   * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_2: OneToOneLink<ProductTrees, PriceLists> = new OneToOneLink('PriceList2', ProductTrees, PriceLists);
  /**
   * All fields of the ProductTrees entity.
   */
  export const _allFields: Array<StringField<ProductTrees> | EnumField<ProductTrees> | NumberField<ProductTrees> | CollectionField<ProductTrees, ProductTreeLine> | CollectionField<ProductTrees, ProductTreeStage> | OneToManyLink<ProductTrees, ProductionOrders> | OneToOneLink<ProductTrees, Items> | OneToOneLink<ProductTrees, DistributionRules> | OneToOneLink<ProductTrees, Projects> | OneToOneLink<ProductTrees, PriceLists>> = [
    ProductTrees.TREE_CODE,
    ProductTrees.TREE_TYPE,
    ProductTrees.QUANTITY,
    ProductTrees.DISTRIBUTION_RULE,
    ProductTrees.PROJECT,
    ProductTrees.DISTRIBUTION_RULE_2,
    ProductTrees.DISTRIBUTION_RULE_3,
    ProductTrees.DISTRIBUTION_RULE_4,
    ProductTrees.DISTRIBUTION_RULE_5,
    ProductTrees.PRICE_LIST,
    ProductTrees.WAREHOUSE,
    ProductTrees.PLAN_AVG_PROD_SIZE,
    ProductTrees.HIDE_BOM_COMPONENTS_IN_PRINTOUT,
    ProductTrees.PRODUCT_DESCRIPTION,
    ProductTrees.PRODUCT_TREE_LINES,
    ProductTrees.PRODUCT_TREE_STAGES,
    ProductTrees.PRODUCTION_ORDERS,
    ProductTrees.ITEM,
    ProductTrees.DISTRIBUTION_RULE_6,
    ProductTrees.PROJECT_2,
    ProductTrees.PRICE_LIST_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ProductTrees> = new AllFields('*', ProductTrees);
  /**
   * All key fields of the ProductTrees entity.
   */
  export const _keyFields: Array<Field<ProductTrees>> = [ProductTrees.TREE_CODE];
  /**
   * Mapping of all key field names to the respective static field property ProductTrees.
   */
  export const _keys: { [keys: string]: Field<ProductTrees> } = ProductTrees._keyFields.reduce((acc: { [keys: string]: Field<ProductTrees> }, field: Field<ProductTrees>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
