/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountCategory } from './AccountCategory';
import { AccountCategoryRequestBuilder } from './AccountCategoryRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { AccountCategorySourceEnum } from './AccountCategorySourceEnum';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AccountCategoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccountCategory<DeSerializersT>, DeSerializersT>
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
  ): AccountCategoryApi<DeSerializersT> {
    return new AccountCategoryApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      AccountCategory<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ChartOfAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNTS: new OneToManyLink(
        'ChartOfAccounts',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AccountCategory;

  requestBuilder(): AccountCategoryRequestBuilder<DeSerializersT> {
    return new AccountCategoryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccountCategory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccountCategory<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AccountCategory<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AccountCategory, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccountCategory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_CODE: OrderableEdmTypeField<
      AccountCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      AccountCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_SOURCE: EnumField<
      AccountCategory<DeSerializers>,
      DeSerializersT,
      AccountCategorySourceEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      AccountCategory<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccountCategory<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link categoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'CategoryCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categorySource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_SOURCE: fieldBuilder.buildEnumField(
          'CategorySource',
          AccountCategorySourceEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccountCategory)
      };
    }

    return this._schema;
  }
}
