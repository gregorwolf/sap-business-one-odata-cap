/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdditionalExpensesRequestBuilder } from './AdditionalExpensesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAeDistMthd } from './BoAeDistMthd';
import { DrawingMethodEnum } from './DrawingMethodEnum';
import { FreightTypeEnum } from './FreightTypeEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AdditionalExpenses" of service "SAPB1".
 */
export class AdditionalExpenses extends EntityV4 implements AdditionalExpensesType {
  /**
   * Technical entity name for AdditionalExpenses.
   */
  static _entityName = 'AdditionalExpenses';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[VatGroups]] entity.
   */
  vatGroup!: VatGroups;
  /**
   * One-to-one navigation property to the [[DistributionRules]] entity.
   */
  distributionRule6!: DistributionRules;
  /**
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project2!: Projects;

  /**
   * Returns an entity builder to construct instances of `AdditionalExpenses`.
   * @returns A builder that constructs instances of entity type `AdditionalExpenses`.
   */
  static builder(): EntityBuilderType<AdditionalExpenses, AdditionalExpensesType> {
    return EntityV4.entityBuilder(AdditionalExpenses);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AdditionalExpenses` entity type.
   * @returns A `AdditionalExpenses` request builder.
   */
  static requestBuilder(): AdditionalExpensesRequestBuilder {
    return new AdditionalExpensesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdditionalExpenses`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AdditionalExpenses`.
   */
  static customField(fieldName: string): CustomFieldV4<AdditionalExpenses> {
    return EntityV4.customFieldSelector(fieldName, AdditionalExpenses);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace AdditionalExpenses {
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<AdditionalExpenses> = new StringField('Name', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[revenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUES_ACCOUNT: StringField<AdditionalExpenses> = new StringField('RevenuesAccount', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[expenseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_ACCOUNT: StringField<AdditionalExpenses> = new StringField('ExpenseAccount', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[taxLiable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_LIABLE: EnumField<AdditionalExpenses> = new EnumField('TaxLiable', AdditionalExpenses);
  /**
   * Static representation of the [[fixedAmountRevenues]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_AMOUNT_REVENUES: NumberField<AdditionalExpenses> = new NumberField('FixedAmountRevenues', AdditionalExpenses, 'Edm.Double');
  /**
   * Static representation of the [[fixedAmountExpenses]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_AMOUNT_EXPENSES: NumberField<AdditionalExpenses> = new NumberField('FixedAmountExpenses', AdditionalExpenses, 'Edm.Double');
  /**
   * Static representation of the [[outputVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTPUT_VAT_GROUP: StringField<AdditionalExpenses> = new StringField('OutputVATGroup', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[inputVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INPUT_VAT_GROUP: StringField<AdditionalExpenses> = new StringField('InputVATGroup', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[distributionMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_METHOD: EnumField<AdditionalExpenses> = new EnumField('DistributionMethod', AdditionalExpenses);
  /**
   * Static representation of the [[includein1099]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDEIN_1099: EnumField<AdditionalExpenses> = new EnumField('Includein1099', AdditionalExpenses);
  /**
   * Static representation of the [[freightOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREIGHT_OFFSET_ACCOUNT: StringField<AdditionalExpenses> = new StringField('FreightOffsetAccount', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[wtLiable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WT_LIABLE: StringField<AdditionalExpenses> = new StringField('WTLiable', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[expensCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENS_CODE: NumberField<AdditionalExpenses> = new NumberField('ExpensCode', AdditionalExpenses, 'Edm.Int32');
  /**
   * Static representation of the [[expenseExemptedAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_EXEMPTED_ACCOUNT: StringField<AdditionalExpenses> = new StringField('ExpenseExemptedAccount', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[revenuesExemptedAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUES_EXEMPTED_ACCOUNT: StringField<AdditionalExpenses> = new StringField('RevenuesExemptedAccount', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE: StringField<AdditionalExpenses> = new StringField('DistributionRule', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[drawingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAWING_METHOD: EnumField<AdditionalExpenses> = new EnumField('DrawingMethod', AdditionalExpenses);
  /**
   * Static representation of the [[freightType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREIGHT_TYPE: EnumField<AdditionalExpenses> = new EnumField('FreightType', AdditionalExpenses);
  /**
   * Static representation of the [[stock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK: EnumField<AdditionalExpenses> = new EnumField('Stock', AdditionalExpenses);
  /**
   * Static representation of the [[lastPurchasePrice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_PURCHASE_PRICE: EnumField<AdditionalExpenses> = new EnumField('LastPurchasePrice', AdditionalExpenses);
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<AdditionalExpenses> = new StringField('Project', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_2: StringField<AdditionalExpenses> = new StringField('DistributionRule2', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_3: StringField<AdditionalExpenses> = new StringField('DistributionRule3', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_4: StringField<AdditionalExpenses> = new StringField('DistributionRule4', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the [[distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_5: StringField<AdditionalExpenses> = new StringField('DistributionRule5', AdditionalExpenses, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<AdditionalExpenses, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', AdditionalExpenses, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: OneToOneLink<AdditionalExpenses, VatGroups> = new OneToOneLink('VatGroup', AdditionalExpenses, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_6: OneToOneLink<AdditionalExpenses, DistributionRules> = new OneToOneLink('DistributionRule6', AdditionalExpenses, DistributionRules);
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<AdditionalExpenses, Projects> = new OneToOneLink('Project2', AdditionalExpenses, Projects);
  /**
   * All fields of the AdditionalExpenses entity.
   */
  export const _allFields: Array<StringField<AdditionalExpenses> | EnumField<AdditionalExpenses> | NumberField<AdditionalExpenses> | OneToOneLink<AdditionalExpenses, ChartOfAccounts> | OneToOneLink<AdditionalExpenses, VatGroups> | OneToOneLink<AdditionalExpenses, DistributionRules> | OneToOneLink<AdditionalExpenses, Projects>> = [
    AdditionalExpenses.NAME,
    AdditionalExpenses.REVENUES_ACCOUNT,
    AdditionalExpenses.EXPENSE_ACCOUNT,
    AdditionalExpenses.TAX_LIABLE,
    AdditionalExpenses.FIXED_AMOUNT_REVENUES,
    AdditionalExpenses.FIXED_AMOUNT_EXPENSES,
    AdditionalExpenses.OUTPUT_VAT_GROUP,
    AdditionalExpenses.INPUT_VAT_GROUP,
    AdditionalExpenses.DISTRIBUTION_METHOD,
    AdditionalExpenses.INCLUDEIN_1099,
    AdditionalExpenses.FREIGHT_OFFSET_ACCOUNT,
    AdditionalExpenses.WT_LIABLE,
    AdditionalExpenses.EXPENS_CODE,
    AdditionalExpenses.EXPENSE_EXEMPTED_ACCOUNT,
    AdditionalExpenses.REVENUES_EXEMPTED_ACCOUNT,
    AdditionalExpenses.DISTRIBUTION_RULE,
    AdditionalExpenses.DRAWING_METHOD,
    AdditionalExpenses.FREIGHT_TYPE,
    AdditionalExpenses.STOCK,
    AdditionalExpenses.LAST_PURCHASE_PRICE,
    AdditionalExpenses.PROJECT,
    AdditionalExpenses.DISTRIBUTION_RULE_2,
    AdditionalExpenses.DISTRIBUTION_RULE_3,
    AdditionalExpenses.DISTRIBUTION_RULE_4,
    AdditionalExpenses.DISTRIBUTION_RULE_5,
    AdditionalExpenses.CHART_OF_ACCOUNT,
    AdditionalExpenses.VAT_GROUP,
    AdditionalExpenses.DISTRIBUTION_RULE_6,
    AdditionalExpenses.PROJECT_2
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AdditionalExpenses> = new AllFields('*', AdditionalExpenses);
  /**
   * All key fields of the AdditionalExpenses entity.
   */
  export const _keyFields: Array<Field<AdditionalExpenses>> = [AdditionalExpenses.EXPENS_CODE];
  /**
   * Mapping of all key field names to the respective static field property AdditionalExpenses.
   */
  export const _keys: { [keys: string]: Field<AdditionalExpenses> } = AdditionalExpenses._keyFields.reduce((acc: { [keys: string]: Field<AdditionalExpenses> }, field: Field<AdditionalExpenses>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
