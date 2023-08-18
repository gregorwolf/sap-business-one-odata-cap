/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductTrees } from './ProductTrees';
import { ProductTreesRequestBuilder } from './ProductTreesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { DistributionRulesApi } from './DistributionRulesApi';
import { ProjectsApi } from './ProjectsApi';
import { PriceListsApi } from './PriceListsApi';
import { ProductionOrdersApi } from './ProductionOrdersApi';
import { ProductTreeLine } from './ProductTreeLine';
import { ProductTreeStage } from './ProductTreeStage';
import { BoItemTreeTypes } from './BoItemTreeTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductTreesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductTrees<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProductTreesApi<DeSerializersT> {
    return new ProductTreesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST_2: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemsApi<DeSerializersT>,
      DistributionRulesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      PriceListsApi<DeSerializersT>,
      ProductionOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      DISTRIBUTION_RULE_6: new OneToOneLink(
        'DistributionRule6',
        this,
        linkedApis[1]
      ),
      PROJECT_2: new OneToOneLink('Project2', this, linkedApis[2]),
      PRICE_LIST_2: new OneToOneLink('PriceList2', this, linkedApis[3]),
      PRODUCTION_ORDERS: new OneToManyLink(
        'ProductionOrders',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = ProductTrees;

  requestBuilder(): ProductTreesRequestBuilder<DeSerializersT> {
    return new ProductTreesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductTrees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductTrees<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductTrees<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductTrees, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductTrees, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TREE_CODE: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TREE_TYPE: EnumField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      BoItemTreeTypes,
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DISTRIBUTION_RULE: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_2: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_3: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_4: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_5: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_LIST: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_AVG_PROD_SIZE: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    HIDE_BOM_COMPONENTS_IN_PRINTOUT: EnumField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TREE_LINES: CollectionField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      ProductTreeLine,
      true,
      true
    >;
    PRODUCT_TREE_STAGES: CollectionField<
      ProductTrees<DeSerializers>,
      DeSerializersT,
      ProductTreeStage,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST_2: OneToOneLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      ProductTrees<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductTrees<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link treeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREE_CODE: fieldBuilder.buildEdmTypeField(
          'TreeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link treeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREE_TYPE: fieldBuilder.buildEnumField(
          'TreeType',
          BoItemTreeTypes,
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link distributionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE: fieldBuilder.buildEdmTypeField(
          'DistributionRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
        /**
         * Static representation of the {@link distributionRule2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_2: fieldBuilder.buildEdmTypeField(
          'DistributionRule2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_3: fieldBuilder.buildEdmTypeField(
          'DistributionRule3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_4: fieldBuilder.buildEdmTypeField(
          'DistributionRule4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_5: fieldBuilder.buildEdmTypeField(
          'DistributionRule5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST: fieldBuilder.buildEdmTypeField(
          'PriceList',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planAvgProdSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_AVG_PROD_SIZE: fieldBuilder.buildEdmTypeField(
          'PlanAvgProdSize',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link hideBomComponentsInPrintout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_BOM_COMPONENTS_IN_PRINTOUT: fieldBuilder.buildEnumField(
          'HideBOMComponentsInPrintout',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTreeLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TREE_LINES: fieldBuilder.buildCollectionField(
          'ProductTreeLines',
          ProductTreeLine,
          true
        ),
        /**
         * Static representation of the {@link productTreeStages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TREE_STAGES: fieldBuilder.buildCollectionField(
          'ProductTreeStages',
          ProductTreeStage,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductTrees)
      };
    }

    return this._schema;
  }
}
