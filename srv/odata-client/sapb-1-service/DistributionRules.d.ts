import { DistributionRulesRequestBuilder } from './DistributionRulesRequestBuilder';
import { DistributionRuleLine } from './DistributionRuleLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DistributionRules" of service "SAPB1".
 */
export declare class DistributionRules extends EntityV4 implements DistributionRulesType {
    /**
     * Technical entity name for DistributionRules.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Factor Code.
     * @nullable
     */
    factorCode?: string;
    /**
     * Factor Description.
     * @nullable
     */
    factorDescription?: string;
    /**
     * Total Factor.
     * @nullable
     */
    totalFactor?: number;
    /**
     * Direct.
     * @nullable
     */
    direct?: string;
    /**
     * In Which Dimension.
     * @nullable
     */
    inWhichDimension?: number;
    /**
     * Active.
     * @nullable
     */
    active?: BoYesNoEnum;
    /**
     * Is Fixed Amount.
     * @nullable
     */
    isFixedAmount?: BoYesNoEnum;
    /**
     * Distribution Rule Lines.
     * @nullable
     */
    distributionRuleLines?: DistributionRuleLine[];
    /**
     * One-to-many navigation property to the [[ProductionOrders]] entity.
     */
    productionOrders: ProductionOrders[];
    /**
     * One-to-many navigation property to the [[ProductTrees]] entity.
     */
    productTrees: ProductTrees[];
    /**
     * One-to-many navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccounts: ChartOfAccounts[];
    /**
     * One-to-many navigation property to the [[BudgetScenarios]] entity.
     */
    budgetScenarios: BudgetScenarios[];
    /**
     * One-to-many navigation property to the [[AdditionalExpenses]] entity.
     */
    additionalExpenses: AdditionalExpenses[];
    /**
     * One-to-one navigation property to the [[Dimensions]] entity.
     */
    dimension: Dimensions;
    /**
     * One-to-many navigation property to the [[Deposits]] entity.
     */
    deposits: Deposits[];
    /**
     * Returns an entity builder to construct instances of `DistributionRules`.
     * @returns A builder that constructs instances of entity type `DistributionRules`.
     */
    static builder(): EntityBuilderType<DistributionRules, DistributionRulesType>;
    /**
     * Returns a request builder to construct requests for operations on the `DistributionRules` entity type.
     * @returns A `DistributionRules` request builder.
     */
    static requestBuilder(): DistributionRulesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DistributionRules`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DistributionRules`.
     */
    static customField(fieldName: string): CustomFieldV4<DistributionRules>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { BudgetScenarios, BudgetScenariosType } from './BudgetScenarios';
import { AdditionalExpenses, AdditionalExpensesType } from './AdditionalExpenses';
import { Dimensions, DimensionsType } from './Dimensions';
import { Deposits, DepositsType } from './Deposits';
export interface DistributionRulesType {
    factorCode?: string | null;
    factorDescription?: string | null;
    totalFactor?: number | null;
    direct?: string | null;
    inWhichDimension?: number | null;
    active?: BoYesNoEnum | null;
    isFixedAmount?: BoYesNoEnum | null;
    distributionRuleLines?: DistributionRuleLine[] | null;
    productionOrders: ProductionOrdersType[];
    productTrees: ProductTreesType[];
    chartOfAccounts: ChartOfAccountsType[];
    budgetScenarios: BudgetScenariosType[];
    additionalExpenses: AdditionalExpensesType[];
    dimension: DimensionsType;
    deposits: DepositsType[];
}
export declare namespace DistributionRules {
    /**
     * Static representation of the [[factorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTOR_CODE: StringField<DistributionRules>;
    /**
     * Static representation of the [[factorDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTOR_DESCRIPTION: StringField<DistributionRules>;
    /**
     * Static representation of the [[totalFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_FACTOR: NumberField<DistributionRules>;
    /**
     * Static representation of the [[direct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIRECT: StringField<DistributionRules>;
    /**
     * Static representation of the [[inWhichDimension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IN_WHICH_DIMENSION: NumberField<DistributionRules>;
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE: EnumField<DistributionRules>;
    /**
     * Static representation of the [[isFixedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_FIXED_AMOUNT: EnumField<DistributionRules>;
    /**
     * Static representation of the [[distributionRuleLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_LINES: CollectionField<DistributionRules, DistributionRuleLine>;
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS: OneToManyLink<DistributionRules, ProductionOrders>;
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TREES: OneToManyLink<DistributionRules, ProductTrees>;
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNTS: OneToManyLink<DistributionRules, ChartOfAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[budgetScenarios]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_SCENARIOS: OneToManyLink<DistributionRules, BudgetScenarios>;
    /**
     * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_EXPENSES: OneToManyLink<DistributionRules, AdditionalExpenses>;
    /**
     * Static representation of the one-to-one navigation property [[dimension]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION: OneToOneLink<DistributionRules, Dimensions>;
    /**
     * Static representation of the one-to-many navigation property [[deposits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPOSITS: OneToManyLink<DistributionRules, Deposits>;
    /**
     * All fields of the DistributionRules entity.
     */
    const _allFields: Array<StringField<DistributionRules> | NumberField<DistributionRules> | EnumField<DistributionRules> | CollectionField<DistributionRules, DistributionRuleLine> | OneToManyLink<DistributionRules, ProductionOrders> | OneToManyLink<DistributionRules, ProductTrees> | OneToManyLink<DistributionRules, ChartOfAccounts> | OneToManyLink<DistributionRules, BudgetScenarios> | OneToManyLink<DistributionRules, AdditionalExpenses> | OneToOneLink<DistributionRules, Dimensions> | OneToManyLink<DistributionRules, Deposits>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DistributionRules>;
    /**
     * All key fields of the DistributionRules entity.
     */
    const _keyFields: Array<Field<DistributionRules>>;
    /**
     * Mapping of all key field names to the respective static field property DistributionRules.
     */
    const _keys: {
        [keys: string]: Field<DistributionRules>;
    };
}
//# sourceMappingURL=DistributionRules.d.ts.map