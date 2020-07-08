/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetScenariosRequestBuilder } from './BudgetScenariosRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BudgetScenarios" of service "SAPB1".
 */
export class BudgetScenarios extends Entity implements BudgetScenariosType {
  /**
   * Technical entity name for BudgetScenarios.
   */
  static _entityName = 'BudgetScenarios';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BudgetScenarios.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Initial Ratio Percentage.
   * @nullable
   */
  initialRatioPercentage?: number;
  /**
   * Startof Fiscal Year.
   * @nullable
   */
  startofFiscalYear?: Moment;
  /**
   * Basic Budget.
   * @nullable
   */
  basicBudget?: number;
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * Project.
   * @nullable
   */
  project?: string;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
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
   * One-to-one navigation property to the [[Projects]] entity.
   */
  project2!: Projects;
  /**
   * One-to-one navigation property to the [[DistributionRules]] entity.
   */
  distributionRule6!: DistributionRules;
  /**
   * One-to-many navigation property to the [[Budgets]] entity.
   */
  budgets!: Budgets[];

  /**
   * Returns an entity builder to construct instances `BudgetScenarios`.
   * @returns A builder that constructs instances of entity type `BudgetScenarios`.
   */
  static builder(): EntityBuilderType<BudgetScenarios, BudgetScenariosTypeForceMandatory> {
    return Entity.entityBuilder(BudgetScenarios);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BudgetScenarios` entity type.
   * @returns A `BudgetScenarios` request builder.
   */
  static requestBuilder(): BudgetScenariosRequestBuilder {
    return new BudgetScenariosRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BudgetScenarios`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BudgetScenarios`.
   */
  static customField(fieldName: string): CustomField<BudgetScenarios> {
    return Entity.customFieldSelector(fieldName, BudgetScenarios);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Projects, ProjectsType } from './Projects';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Budgets, BudgetsType } from './Budgets';

export interface BudgetScenariosType {
  name?: string;
  initialRatioPercentage?: number;
  startofFiscalYear?: Moment;
  basicBudget?: number;
  numerator?: number;
  project?: string;
  distributionRule?: string;
  distributionRule2?: string;
  distributionRule3?: string;
  distributionRule4?: string;
  distributionRule5?: string;
  project2: ProjectsType;
  distributionRule6: DistributionRulesType;
  budgets: BudgetsType[];
}

export interface BudgetScenariosTypeForceMandatory {
  name: string;
  initialRatioPercentage: number;
  startofFiscalYear: Moment;
  basicBudget: number;
  numerator: number;
  project: string;
  distributionRule: string;
  distributionRule2: string;
  distributionRule3: string;
  distributionRule4: string;
  distributionRule5: string;
  project2: ProjectsType;
  distributionRule6: DistributionRulesType;
  budgets: BudgetsType[];
}

export namespace BudgetScenarios {
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<BudgetScenarios> = new StringField('Name', BudgetScenarios, 'Edm.String');
  /**
   * Static representation of the [[initialRatioPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_RATIO_PERCENTAGE: NumberField<BudgetScenarios> = new NumberField('InitialRatioPercentage', BudgetScenarios, 'Edm.Double');
  /**
   * Static representation of the [[startofFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STARTOF_FISCAL_YEAR: DateField<BudgetScenarios> = new DateField('StartofFiscalYear', BudgetScenarios, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[basicBudget]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASIC_BUDGET: NumberField<BudgetScenarios> = new NumberField('BasicBudget', BudgetScenarios, 'Edm.Int32');
  /**
   * Static representation of the [[numerator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMERATOR: NumberField<BudgetScenarios> = new NumberField('Numerator', BudgetScenarios, 'Edm.Int32');
  /**
   * Static representation of the [[project]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT: StringField<BudgetScenarios> = new StringField('Project', BudgetScenarios, 'Edm.String');
  /**
   * Static representation of the [[distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE: StringField<BudgetScenarios> = new StringField('DistributionRule', BudgetScenarios, 'Edm.String');
  /**
   * Static representation of the [[distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_2: StringField<BudgetScenarios> = new StringField('DistributionRule2', BudgetScenarios, 'Edm.String');
  /**
   * Static representation of the [[distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_3: StringField<BudgetScenarios> = new StringField('DistributionRule3', BudgetScenarios, 'Edm.String');
  /**
   * Static representation of the [[distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_4: StringField<BudgetScenarios> = new StringField('DistributionRule4', BudgetScenarios, 'Edm.String');
  /**
   * Static representation of the [[distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_5: StringField<BudgetScenarios> = new StringField('DistributionRule5', BudgetScenarios, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[project2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROJECT_2: OneToOneLink<BudgetScenarios, Projects> = new OneToOneLink('Project2', BudgetScenarios, Projects);
  /**
   * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_RULE_6: OneToOneLink<BudgetScenarios, DistributionRules> = new OneToOneLink('DistributionRule6', BudgetScenarios, DistributionRules);
  /**
   * Static representation of the one-to-many navigation property [[budgets]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGETS: OneToManyLink<BudgetScenarios, Budgets> = new OneToManyLink('Budgets', BudgetScenarios, Budgets);
  /**
   * All fields of the BudgetScenarios entity.
   */
  export const _allFields: Array<StringField<BudgetScenarios> | NumberField<BudgetScenarios> | DateField<BudgetScenarios> | OneToOneLink<BudgetScenarios, Projects> | OneToOneLink<BudgetScenarios, DistributionRules> | OneToManyLink<BudgetScenarios, Budgets>> = [
    BudgetScenarios.NAME,
    BudgetScenarios.INITIAL_RATIO_PERCENTAGE,
    BudgetScenarios.STARTOF_FISCAL_YEAR,
    BudgetScenarios.BASIC_BUDGET,
    BudgetScenarios.NUMERATOR,
    BudgetScenarios.PROJECT,
    BudgetScenarios.DISTRIBUTION_RULE,
    BudgetScenarios.DISTRIBUTION_RULE_2,
    BudgetScenarios.DISTRIBUTION_RULE_3,
    BudgetScenarios.DISTRIBUTION_RULE_4,
    BudgetScenarios.DISTRIBUTION_RULE_5,
    BudgetScenarios.PROJECT_2,
    BudgetScenarios.DISTRIBUTION_RULE_6,
    BudgetScenarios.BUDGETS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BudgetScenarios> = new AllFields('*', BudgetScenarios);
  /**
   * All key fields of the BudgetScenarios entity.
   */
  export const _keyFields: Array<Field<BudgetScenarios>> = [BudgetScenarios.NUMERATOR];
  /**
   * Mapping of all key field names to the respective static field property BudgetScenarios.
   */
  export const _keys: { [keys: string]: Field<BudgetScenarios> } = BudgetScenarios._keyFields.reduce((acc: { [keys: string]: Field<BudgetScenarios> }, field: Field<BudgetScenarios>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
