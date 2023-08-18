/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseTypes } from './ExpenseTypes';
import { ExpenseTypesRequestBuilder } from './ExpenseTypesRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { SalesTaxCodesApi } from './SalesTaxCodesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExpenseTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseTypes<DeSerializersT>, DeSerializersT>
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
  ): ExpenseTypesApi<DeSerializersT> {
    return new ExpenseTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      ExpenseTypes<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      ExpenseTypes<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      SalesTaxCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      SALES_TAX_CODE: new OneToOneLink('SalesTaxCode', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ExpenseTypes;

  requestBuilder(): ExpenseTypesRequestBuilder<DeSerializersT> {
    return new ExpenseTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExpenseTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExpenseTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXPENSE_TYPE: OrderableEdmTypeField<
      ExpenseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_NAME: OrderableEdmTypeField<
      ExpenseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_ACCOUNT: OrderableEdmTypeField<
      ExpenseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_BY_COMPANY: EnumField<
      ExpenseTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VAT_GROUP: OrderableEdmTypeField<
      ExpenseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      ExpenseTypes<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      ExpenseTypes<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExpenseType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expenseName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_NAME: fieldBuilder.buildEdmTypeField(
          'ExpenseName',
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
         * Static representation of the {@link paidByCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_BY_COMPANY: fieldBuilder.buildEnumField(
          'PaidByCompany',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link vatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_GROUP: fieldBuilder.buildEdmTypeField(
          'VatGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseTypes)
      };
    }

    return this._schema;
  }
}
