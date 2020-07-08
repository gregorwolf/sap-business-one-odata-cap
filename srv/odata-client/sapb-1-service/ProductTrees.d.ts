import { ProductTreesRequestBuilder } from './ProductTreesRequestBuilder';
import { ProductTreeLine } from './ProductTreeLine';
import { ProductTreeStage } from './ProductTreeStage';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ProductTrees" of service "SAPB1".
 */
export declare class ProductTrees extends Entity implements ProductTreesType {
    /**
     * Technical entity name for ProductTrees.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ProductTrees.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Tree Code.
     * @nullable
     */
    treeCode?: string;
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
    productionOrders: ProductionOrders[];
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[DistributionRules]] entity.
     */
    distributionRule6: DistributionRules;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project2: Projects;
    /**
     * One-to-one navigation property to the [[PriceLists]] entity.
     */
    priceList2: PriceLists;
    /**
     * Returns an entity builder to construct instances `ProductTrees`.
     * @returns A builder that constructs instances of entity type `ProductTrees`.
     */
    static builder(): EntityBuilderType<ProductTrees, ProductTreesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ProductTrees` entity type.
     * @returns A `ProductTrees` request builder.
     */
    static requestBuilder(): ProductTreesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductTrees`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProductTrees`.
     */
    static customField(fieldName: string): CustomField<ProductTrees>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { Items, ItemsType } from './Items';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Projects, ProjectsType } from './Projects';
import { PriceLists, PriceListsType } from './PriceLists';
export interface ProductTreesType {
    treeCode?: string;
    quantity?: number;
    distributionRule?: string;
    project?: string;
    distributionRule2?: string;
    distributionRule3?: string;
    distributionRule4?: string;
    distributionRule5?: string;
    priceList?: number;
    warehouse?: string;
    planAvgProdSize?: number;
    productDescription?: string;
    productTreeLines?: ProductTreeLine[];
    productTreeStages?: ProductTreeStage[];
    productionOrders: ProductionOrdersType[];
    item: ItemsType;
    distributionRule6: DistributionRulesType;
    project2: ProjectsType;
    priceList2: PriceListsType;
}
export interface ProductTreesTypeForceMandatory {
    treeCode: string;
    quantity: number;
    distributionRule: string;
    project: string;
    distributionRule2: string;
    distributionRule3: string;
    distributionRule4: string;
    distributionRule5: string;
    priceList: number;
    warehouse: string;
    planAvgProdSize: number;
    productDescription: string;
    productTreeLines: ProductTreeLine[];
    productTreeStages: ProductTreeStage[];
    productionOrders: ProductionOrdersType[];
    item: ItemsType;
    distributionRule6: DistributionRulesType;
    project2: ProjectsType;
    priceList2: PriceListsType;
}
export declare namespace ProductTrees {
    /**
     * Static representation of the [[treeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TREE_CODE: StringField<ProductTrees>;
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY: NumberField<ProductTrees>;
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE: StringField<ProductTrees>;
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: StringField<ProductTrees>;
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_2: StringField<ProductTrees>;
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_3: StringField<ProductTrees>;
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_4: StringField<ProductTrees>;
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_5: StringField<ProductTrees>;
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: NumberField<ProductTrees>;
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: StringField<ProductTrees>;
    /**
     * Static representation of the [[planAvgProdSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_AVG_PROD_SIZE: NumberField<ProductTrees>;
    /**
     * Static representation of the [[productDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_DESCRIPTION: StringField<ProductTrees>;
    /**
     * Static representation of the [[productTreeLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TREE_LINES: CollectionField<ProductTrees>;
    /**
     * Static representation of the [[productTreeStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TREE_STAGES: CollectionField<ProductTrees>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<ProductTrees, ProductionOrders>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<ProductTrees, Items>;
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_6: OneToOneLink<ProductTrees, DistributionRules>;
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_2: OneToOneLink<ProductTrees, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_2: OneToOneLink<ProductTrees, PriceLists>;
    /**
     * All fields of the ProductTrees entity.
     */
    const _allFields: Array<StringField<ProductTrees> | NumberField<ProductTrees> | CollectionField<ProductTrees> | OneToManyLink<ProductTrees, ProductionOrders> | OneToOneLink<ProductTrees, Items> | OneToOneLink<ProductTrees, DistributionRules> | OneToOneLink<ProductTrees, Projects> | OneToOneLink<ProductTrees, PriceLists>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ProductTrees>;
    /**
     * All key fields of the ProductTrees entity.
     */
    const _keyFields: Array<Field<ProductTrees>>;
    /**
     * Mapping of all key field names to the respective static field property ProductTrees.
     */
    const _keys: {
        [keys: string]: Field<ProductTrees>;
    };
}
//# sourceMappingURL=ProductTrees.d.ts.map