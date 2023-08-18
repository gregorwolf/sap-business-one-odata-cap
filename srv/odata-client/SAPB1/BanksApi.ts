/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Banks } from './Banks';
import { BanksRequestBuilder } from './BanksRequestBuilder';
import { CountriesApi } from './CountriesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { HouseBankAccountsApi } from './HouseBankAccountsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BanksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Banks<DeSerializersT>, DeSerializersT>
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
  ): BanksApi<DeSerializersT> {
    return new BanksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      Banks<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Banks<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link houseBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNTS: OneToManyLink<
      Banks<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CountriesApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      HouseBankAccountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COUNTRY: new OneToOneLink('Country', this, linkedApis[0]),
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[1]),
      HOUSE_BANK_ACCOUNTS: new OneToManyLink(
        'HouseBankAccounts',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = Banks;

  requestBuilder(): BanksRequestBuilder<DeSerializersT> {
    return new BanksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Banks<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Banks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Banks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Banks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Banks, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BANK_CODE: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTFOR_OUTGOING_CHECKS: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCHFOR_OUTGOING_CHECKS: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_CHECK_NUMBER: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SWIFT_NO: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_CODE: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_OFFICE: EnumField<
      Banks<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ABSOLUTE_ENTRY: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_BANK_ACCOUNT_KEY: OrderableEdmTypeField<
      Banks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      Banks<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      Banks<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link houseBankAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOUSE_BANK_ACCOUNTS: OneToManyLink<
      Banks<DeSerializersT>,
      DeSerializersT,
      HouseBankAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Banks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link bankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE: fieldBuilder.buildEdmTypeField(
          'BankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountforOutgoingChecks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTFOR_OUTGOING_CHECKS: fieldBuilder.buildEdmTypeField(
          'AccountforOutgoingChecks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchforOutgoingChecks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCHFOR_OUTGOING_CHECKS: fieldBuilder.buildEdmTypeField(
          'BranchforOutgoingChecks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nextCheckNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'NextCheckNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link swiftNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SWIFT_NO: fieldBuilder.buildEdmTypeField('SwiftNo', 'Edm.String', true),
        /**
         * Static representation of the {@link iban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
        /**
         * Static representation of the {@link countryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'CountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_OFFICE: fieldBuilder.buildEnumField(
          'PostOffice',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link absoluteEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSOLUTE_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsoluteEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultBankAccountKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BANK_ACCOUNT_KEY: fieldBuilder.buildEdmTypeField(
          'DefaultBankAccountKey',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Banks)
      };
    }

    return this._schema;
  }
}
