/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetDistributions } from './BudgetDistributions';
import { BudgetDistributionsRequestBuilder } from './BudgetDistributionsRequestBuilder';
import { BudgetsApi } from './BudgetsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetDistributionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetDistributions<DeSerializersT>, DeSerializersT>
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
  ): BudgetDistributionsApi<DeSerializersT> {
    return new BudgetDistributionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGETS: OneToManyLink<
      BudgetDistributions<DeSerializersT>,
      DeSerializersT,
      BudgetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [BudgetsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      BUDGETS: new OneToManyLink('Budgets', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BudgetDistributions;

  requestBuilder(): BudgetDistributionsRequestBuilder<DeSerializersT> {
    return new BudgetDistributionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetDistributions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetDistributions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetDistributions<DeSerializersT>,
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
    typeof BudgetDistributions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetDistributions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEPTEMBER: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    AUGUST: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    JULY: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    JUNE: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAY: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    APRIL: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MARCH: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FEBRUARY: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DECEMBER: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    NOVEMBER: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    OCTOBER: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    JANUARY: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BUDGET_AMOUNT: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION_CODE: OrderableEdmTypeField<
      BudgetDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgets} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGETS: OneToManyLink<
      BudgetDistributions<DeSerializersT>,
      DeSerializersT,
      BudgetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetDistributions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link september} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPTEMBER: fieldBuilder.buildEdmTypeField(
          'September',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link august} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUGUST: fieldBuilder.buildEdmTypeField('August', 'Edm.Double', true),
        /**
         * Static representation of the {@link july} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JULY: fieldBuilder.buildEdmTypeField('July', 'Edm.Double', true),
        /**
         * Static representation of the {@link june} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JUNE: fieldBuilder.buildEdmTypeField('June', 'Edm.Double', true),
        /**
         * Static representation of the {@link may} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAY: fieldBuilder.buildEdmTypeField('May', 'Edm.Double', true),
        /**
         * Static representation of the {@link april} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APRIL: fieldBuilder.buildEdmTypeField('April', 'Edm.Double', true),
        /**
         * Static representation of the {@link march} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARCH: fieldBuilder.buildEdmTypeField('March', 'Edm.Double', true),
        /**
         * Static representation of the {@link february} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEBRUARY: fieldBuilder.buildEdmTypeField(
          'February',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link december} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECEMBER: fieldBuilder.buildEdmTypeField(
          'December',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link november} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOVEMBER: fieldBuilder.buildEdmTypeField(
          'November',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link october} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCTOBER: fieldBuilder.buildEdmTypeField('October', 'Edm.Double', true),
        /**
         * Static representation of the {@link january} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JANUARY: fieldBuilder.buildEdmTypeField('January', 'Edm.Double', true),
        /**
         * Static representation of the {@link budgetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BudgetAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link divisionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_CODE: fieldBuilder.buildEdmTypeField(
          'DivisionCode',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetDistributions)
      };
    }

    return this._schema;
  }
}
