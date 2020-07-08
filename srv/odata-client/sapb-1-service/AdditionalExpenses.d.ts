import { AdditionalExpensesRequestBuilder } from './AdditionalExpensesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "AdditionalExpenses" of service "SAPB1".
 */
export declare class AdditionalExpenses extends Entity implements AdditionalExpensesType {
    /**
     * Technical entity name for AdditionalExpenses.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AdditionalExpenses.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Revenues Account.
     * @nullable
     */
    revenuesAccount?: string;
    /**
     * Expense Account.
     * @nullable
     */
    expenseAccount?: string;
    /**
     * Fixed Amount Revenues.
     * @nullable
     */
    fixedAmountRevenues?: number;
    /**
     * Fixed Amount Expenses.
     * @nullable
     */
    fixedAmountExpenses?: number;
    /**
     * Output Vat Group.
     * @nullable
     */
    outputVatGroup?: string;
    /**
     * Input Vat Group.
     * @nullable
     */
    inputVatGroup?: string;
    /**
     * Freight Offset Account.
     * @nullable
     */
    freightOffsetAccount?: string;
    /**
     * Wt Liable.
     * @nullable
     */
    wtLiable?: string;
    /**
     * Expens Code.
     * @nullable
     */
    expensCode?: number;
    /**
     * Expense Exempted Account.
     * @nullable
     */
    expenseExemptedAccount?: string;
    /**
     * Revenues Exempted Account.
     * @nullable
     */
    revenuesExemptedAccount?: string;
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
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[VatGroups]] entity.
     */
    vatGroup: VatGroups;
    /**
     * One-to-one navigation property to the [[DistributionRules]] entity.
     */
    distributionRule6: DistributionRules;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project2: Projects;
    /**
     * Returns an entity builder to construct instances `AdditionalExpenses`.
     * @returns A builder that constructs instances of entity type `AdditionalExpenses`.
     */
    static builder(): EntityBuilderType<AdditionalExpenses, AdditionalExpensesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AdditionalExpenses` entity type.
     * @returns A `AdditionalExpenses` request builder.
     */
    static requestBuilder(): AdditionalExpensesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdditionalExpenses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AdditionalExpenses`.
     */
    static customField(fieldName: string): CustomField<AdditionalExpenses>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { VatGroups, VatGroupsType } from './VatGroups';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Projects, ProjectsType } from './Projects';
export interface AdditionalExpensesType {
    name?: string;
    revenuesAccount?: string;
    expenseAccount?: string;
    fixedAmountRevenues?: number;
    fixedAmountExpenses?: number;
    outputVatGroup?: string;
    inputVatGroup?: string;
    freightOffsetAccount?: string;
    wtLiable?: string;
    expensCode?: number;
    expenseExemptedAccount?: string;
    revenuesExemptedAccount?: string;
    distributionRule?: string;
    project?: string;
    distributionRule2?: string;
    distributionRule3?: string;
    distributionRule4?: string;
    distributionRule5?: string;
    chartOfAccount: ChartOfAccountsType;
    vatGroup: VatGroupsType;
    distributionRule6: DistributionRulesType;
    project2: ProjectsType;
}
export interface AdditionalExpensesTypeForceMandatory {
    name: string;
    revenuesAccount: string;
    expenseAccount: string;
    fixedAmountRevenues: number;
    fixedAmountExpenses: number;
    outputVatGroup: string;
    inputVatGroup: string;
    freightOffsetAccount: string;
    wtLiable: string;
    expensCode: number;
    expenseExemptedAccount: string;
    revenuesExemptedAccount: string;
    distributionRule: string;
    project: string;
    distributionRule2: string;
    distributionRule3: string;
    distributionRule4: string;
    distributionRule5: string;
    chartOfAccount: ChartOfAccountsType;
    vatGroup: VatGroupsType;
    distributionRule6: DistributionRulesType;
    project2: ProjectsType;
}
export declare namespace AdditionalExpenses {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVENUES_ACCOUNT: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[expenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_ACCOUNT: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[fixedAmountRevenues]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIXED_AMOUNT_REVENUES: NumberField<AdditionalExpenses>;
    /**
     * Static representation of the [[fixedAmountExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIXED_AMOUNT_EXPENSES: NumberField<AdditionalExpenses>;
    /**
     * Static representation of the [[outputVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTPUT_VAT_GROUP: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[inputVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INPUT_VAT_GROUP: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[freightOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREIGHT_OFFSET_ACCOUNT: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[wtLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_LIABLE: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[expensCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENS_CODE: NumberField<AdditionalExpenses>;
    /**
     * Static representation of the [[expenseExemptedAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_EXEMPTED_ACCOUNT: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[revenuesExemptedAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVENUES_EXEMPTED_ACCOUNT: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_2: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_3: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_4: StringField<AdditionalExpenses>;
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_5: StringField<AdditionalExpenses>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<AdditionalExpenses, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP: OneToOneLink<AdditionalExpenses, VatGroups>;
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_6: OneToOneLink<AdditionalExpenses, DistributionRules>;
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_2: OneToOneLink<AdditionalExpenses, Projects>;
    /**
     * All fields of the AdditionalExpenses entity.
     */
    const _allFields: Array<StringField<AdditionalExpenses> | NumberField<AdditionalExpenses> | OneToOneLink<AdditionalExpenses, ChartOfAccounts> | OneToOneLink<AdditionalExpenses, VatGroups> | OneToOneLink<AdditionalExpenses, DistributionRules> | OneToOneLink<AdditionalExpenses, Projects>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AdditionalExpenses>;
    /**
     * All key fields of the AdditionalExpenses entity.
     */
    const _keyFields: Array<Field<AdditionalExpenses>>;
    /**
     * Mapping of all key field names to the respective static field property AdditionalExpenses.
     */
    const _keys: {
        [keys: string]: Field<AdditionalExpenses>;
    };
}
//# sourceMappingURL=AdditionalExpenses.d.ts.map