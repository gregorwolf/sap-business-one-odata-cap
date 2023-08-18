/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdditionalExpenses } from './AdditionalExpenses';
import { AdditionalExpensesRequestBuilder } from './AdditionalExpensesRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { VatGroupsApi } from './VatGroupsApi';
import { DistributionRulesApi } from './DistributionRulesApi';
import { ProjectsApi } from './ProjectsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoAeDistMthd } from './BoAeDistMthd';
import { DrawingMethodEnum } from './DrawingMethodEnum';
import { FreightTypeEnum } from './FreightTypeEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AdditionalExpensesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdditionalExpenses<DeSerializersT>, DeSerializersT>
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
  ): AdditionalExpensesApi<DeSerializersT> {
    return new AdditionalExpensesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      VatGroupsApi<DeSerializersT>,
      DistributionRulesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      VAT_GROUP: new OneToOneLink('VatGroup', this, linkedApis[1]),
      DISTRIBUTION_RULE_6: new OneToOneLink(
        'DistributionRule6',
        this,
        linkedApis[2]
      ),
      PROJECT_2: new OneToOneLink('Project2', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = AdditionalExpenses;

  requestBuilder(): AdditionalExpensesRequestBuilder<DeSerializersT> {
    return new AdditionalExpensesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdditionalExpenses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdditionalExpenses<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AdditionalExpenses<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AdditionalExpenses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdditionalExpenses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUES_ACCOUNT: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_ACCOUNT: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_LIABLE: EnumField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FIXED_AMOUNT_REVENUES: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FIXED_AMOUNT_EXPENSES: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    OUTPUT_VAT_GROUP: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INPUT_VAT_GROUP: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_METHOD: EnumField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      BoAeDistMthd,
      true,
      true
    >;
    INCLUDEIN_1099: EnumField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FREIGHT_OFFSET_ACCOUNT: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WT_LIABLE: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENS_CODE: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSE_EXEMPTED_ACCOUNT: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUES_EXEMPTED_ACCOUNT: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAWING_METHOD: EnumField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      DrawingMethodEnum,
      true,
      true
    >;
    FREIGHT_TYPE: EnumField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      FreightTypeEnum,
      true,
      true
    >;
    STOCK: EnumField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LAST_PURCHASE_PRICE: EnumField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_2: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_3: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_4: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_5: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_VERSION: OrderableEdmTypeField<
      AdditionalExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      AdditionalExpenses<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdditionalExpenses<DeSerializers>>;
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
         * Static representation of the {@link revenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpenseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxLiable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LIABLE: fieldBuilder.buildEnumField('TaxLiable', BoYesNoEnum, true),
        /**
         * Static representation of the {@link fixedAmountRevenues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_AMOUNT_REVENUES: fieldBuilder.buildEdmTypeField(
          'FixedAmountRevenues',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link fixedAmountExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_AMOUNT_EXPENSES: fieldBuilder.buildEdmTypeField(
          'FixedAmountExpenses',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link outputVatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_VAT_GROUP: fieldBuilder.buildEdmTypeField(
          'OutputVATGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inputVatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_VAT_GROUP: fieldBuilder.buildEdmTypeField(
          'InputVATGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_METHOD: fieldBuilder.buildEnumField(
          'DistributionMethod',
          BoAeDistMthd,
          true
        ),
        /**
         * Static representation of the {@link includein1099} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDEIN_1099: fieldBuilder.buildEnumField(
          'Includein1099',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link freightOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FreightOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wtLiable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_LIABLE: fieldBuilder.buildEdmTypeField(
          'WTLiable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expensCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENS_CODE: fieldBuilder.buildEdmTypeField(
          'ExpensCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expenseExemptedAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_EXEMPTED_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpenseExemptedAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenuesExemptedAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUES_EXEMPTED_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevenuesExemptedAccount',
          'Edm.String',
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
         * Static representation of the {@link drawingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWING_METHOD: fieldBuilder.buildEnumField(
          'DrawingMethod',
          DrawingMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link freightType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_TYPE: fieldBuilder.buildEnumField(
          'FreightType',
          FreightTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link stock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK: fieldBuilder.buildEnumField('Stock', BoYesNoEnum, true),
        /**
         * Static representation of the {@link lastPurchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PURCHASE_PRICE: fieldBuilder.buildEnumField(
          'LastPurchasePrice',
          BoYesNoEnum,
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
         * Static representation of the {@link dataVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VERSION: fieldBuilder.buildEdmTypeField(
          'DataVersion',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdditionalExpenses)
      };
    }

    return this._schema;
  }
}
