/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetScenarios } from './BudgetScenarios';
import { BudgetScenariosRequestBuilder } from './BudgetScenariosRequestBuilder';
import { BudgetsApi } from './BudgetsApi';
import { ProjectsApi } from './ProjectsApi';
import { DistributionRulesApi } from './DistributionRulesApi';
import { BoRoundingMethod } from './BoRoundingMethod';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetScenariosApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetScenarios<DeSerializersT>, DeSerializersT>
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
  ): BudgetScenariosApi<DeSerializersT> {
    return new BudgetScenariosApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGETS: OneToManyLink<
      BudgetScenarios<DeSerializersT>,
      DeSerializersT,
      BudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      BudgetScenarios<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      BudgetScenarios<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetsApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      DistributionRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGETS: new OneToManyLink('Budgets', this, linkedApis[0]),
      PROJECT_2: new OneToOneLink('Project2', this, linkedApis[1]),
      DISTRIBUTION_RULE_6: new OneToOneLink(
        'DistributionRule6',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BudgetScenarios;

  requestBuilder(): BudgetScenariosRequestBuilder<DeSerializersT> {
    return new BudgetScenariosRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetScenarios<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetScenarios<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetScenarios<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetScenarios, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetScenarios,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIAL_RATIO_PERCENTAGE: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STARTOF_FISCAL_YEAR: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BASIC_BUDGET: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROUNDING_METHOD: EnumField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      BoRoundingMethod,
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_2: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_3: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_4: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_5: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COR_OCR_CODE: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COR_PRJ_CODE: OrderableEdmTypeField<
      BudgetScenarios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGETS: OneToManyLink<
      BudgetScenarios<DeSerializersT>,
      DeSerializersT,
      BudgetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      BudgetScenarios<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      BudgetScenarios<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetScenarios<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link initialRatioPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_RATIO_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'InitialRatioPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link startofFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTOF_FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'StartofFiscalYear',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link basicBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIC_BUDGET: fieldBuilder.buildEdmTypeField(
          'BasicBudget',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link roundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD: fieldBuilder.buildEnumField(
          'RoundingMethod',
          BoRoundingMethod,
          true
        ),
        /**
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
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
         * Static representation of the {@link uCorOcrCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_OCR_CODE: fieldBuilder.buildEdmTypeField(
          'U_COR_OcrCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCorPrjCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_PRJ_CODE: fieldBuilder.buildEdmTypeField(
          'U_COR_PrjCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetScenarios)
      };
    }

    return this._schema;
  }
}
