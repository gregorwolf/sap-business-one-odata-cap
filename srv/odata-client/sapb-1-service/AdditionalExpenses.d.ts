import { AdditionalExpensesRequestBuilder } from './AdditionalExpensesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAeDistMthd } from './BoAeDistMthd';
import { DrawingMethodEnum } from './DrawingMethodEnum';
import { FreightTypeEnum } from './FreightTypeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AdditionalExpenses" of service "SAPB1".
 */
export declare class AdditionalExpenses extends EntityV4 implements AdditionalExpensesType {
    /**
     * Technical entity name for AdditionalExpenses.
     */
    static _entityName: string;
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
     * Tax Liable.
     * @nullable
     */
    taxLiable?: BoYesNoEnum;
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
     * Distribution Method.
     * @nullable
     */
    distributionMethod?: BoAeDistMthd;
    /**
     * Includein 1099.
     * @nullable
     */
    includein1099?: BoYesNoEnum;
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
     * Drawing Method.
     * @nullable
     */
    drawingMethod?: DrawingMethodEnum;
    /**
     * Freight Type.
     * @nullable
     */
    freightType?: FreightTypeEnum;
    /**
     * Stock.
     * @nullable
     */
    stock?: BoYesNoEnum;
    /**
     * Last Purchase Price.
     * @nullable
     */
    lastPurchasePrice?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `AdditionalExpenses`.
     * @returns A builder that constructs instances of entity type `AdditionalExpenses`.
     */
    static builder(): EntityBuilderType<AdditionalExpenses, AdditionalExpensesType>;
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
    static customField(fieldName: string): CustomFieldV4<AdditionalExpenses>;
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
    name?: string | null;
    revenuesAccount?: string | null;
    expenseAccount?: string | null;
    taxLiable?: BoYesNoEnum | null;
    fixedAmountRevenues?: number | null;
    fixedAmountExpenses?: number | null;
    outputVatGroup?: string | null;
    inputVatGroup?: string | null;
    distributionMethod?: BoAeDistMthd | null;
    includein1099?: BoYesNoEnum | null;
    freightOffsetAccount?: string | null;
    wtLiable?: string | null;
    expensCode?: number | null;
    expenseExemptedAccount?: string | null;
    revenuesExemptedAccount?: string | null;
    distributionRule?: string | null;
    drawingMethod?: DrawingMethodEnum | null;
    freightType?: FreightTypeEnum | null;
    stock?: BoYesNoEnum | null;
    lastPurchasePrice?: BoYesNoEnum | null;
    project?: string | null;
    distributionRule2?: string | null;
    distributionRule3?: string | null;
    distributionRule4?: string | null;
    distributionRule5?: string | null;
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
     * Static representation of the [[taxLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_LIABLE: EnumField<AdditionalExpenses>;
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
     * Static representation of the [[distributionMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_METHOD: EnumField<AdditionalExpenses>;
    /**
     * Static representation of the [[includein1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDEIN_1099: EnumField<AdditionalExpenses>;
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
     * Static representation of the [[drawingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAWING_METHOD: EnumField<AdditionalExpenses>;
    /**
     * Static representation of the [[freightType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREIGHT_TYPE: EnumField<AdditionalExpenses>;
    /**
     * Static representation of the [[stock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK: EnumField<AdditionalExpenses>;
    /**
     * Static representation of the [[lastPurchasePrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_PURCHASE_PRICE: EnumField<AdditionalExpenses>;
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
    const _allFields: Array<StringField<AdditionalExpenses> | EnumField<AdditionalExpenses> | NumberField<AdditionalExpenses> | OneToOneLink<AdditionalExpenses, ChartOfAccounts> | OneToOneLink<AdditionalExpenses, VatGroups> | OneToOneLink<AdditionalExpenses, DistributionRules> | OneToOneLink<AdditionalExpenses, Projects>>;
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