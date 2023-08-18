/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { ProductTreeLine } from './ProductTreeLine';
import { ProductTreeStage } from './ProductTreeStage';
import type { ProductTreesApi } from './ProductTreesApi';
import { BoItemTreeTypes } from './BoItemTreeTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Items, ItemsType } from './Items';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Projects, ProjectsType } from './Projects';
import { PriceLists, PriceListsType } from './PriceLists';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';

/**
 * This class represents the entity "ProductTrees" of service "SAPB1".
 */
export class ProductTrees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductTreesType<T>
{
  /**
   * Technical entity name for ProductTrees.
   */
  static _entityName = 'ProductTrees';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ProductTrees entity
   */
  static _keys = ['TreeCode'];
  /**
   * Tree Code.
   */
  treeCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Tree Type.
   * @nullable
   */
  treeType?: BoItemTreeTypes | null;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project.
   * @nullable
   */
  project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Avg Prod Size.
   * @nullable
   */
  planAvgProdSize?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Hide Bom Components In Printout.
   * @nullable
   */
  hideBomComponentsInPrintout?: BoYesNoEnum | null;
  /**
   * Product Description.
   * @nullable
   */
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Tree Lines.
   * @nullable
   */
  productTreeLines?: ProductTreeLine<T>[] | null;
  /**
   * Product Tree Stages.
   * @nullable
   */
  productTreeStages?: ProductTreeStage<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;
  /**
   * One-to-one navigation property to the {@link DistributionRules} entity.
   */
  distributionRule6?: DistributionRules<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  project2?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link PriceLists} entity.
   */
  priceList2?: PriceLists<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductionOrders} entity.
   */
  productionOrders!: ProductionOrders<T>[];

  constructor(readonly _entityApi: ProductTreesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductTreesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  treeCode: DeserializedType<T, 'Edm.String'>;
  treeType?: BoItemTreeTypes | null;
  quantity?: DeserializedType<T, 'Edm.Double'> | null;
  distributionRule?: DeserializedType<T, 'Edm.String'> | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule2?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule3?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule4?: DeserializedType<T, 'Edm.String'> | null;
  distributionRule5?: DeserializedType<T, 'Edm.String'> | null;
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  planAvgProdSize?: DeserializedType<T, 'Edm.Double'> | null;
  hideBomComponentsInPrintout?: BoYesNoEnum | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productTreeLines?: ProductTreeLine<T>[] | null;
  productTreeStages?: ProductTreeStage<T>[] | null;
  item?: ItemsType<T> | null;
  distributionRule6?: DistributionRulesType<T> | null;
  project2?: ProjectsType<T> | null;
  priceList2?: PriceListsType<T> | null;
  productionOrders: ProductionOrdersType<T>[];
}
