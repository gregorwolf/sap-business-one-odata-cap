/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialYears } from './FinancialYears';
import { FinancialYearsRequestBuilder } from './FinancialYearsRequestBuilder';
import { TcsAccumulationBaseEnum } from './TcsAccumulationBaseEnum';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class FinancialYearsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FinancialYears<DeSerializersT>, DeSerializersT>
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
  ): FinancialYearsApi<DeSerializersT> {
    return new FinancialYearsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FinancialYears;

  requestBuilder(): FinancialYearsRequestBuilder<DeSerializersT> {
    return new FinancialYearsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FinancialYears<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FinancialYears<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FinancialYears<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FinancialYears, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FinancialYears, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      FinancialYears<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      FinancialYears<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FinancialYears<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      FinancialYears<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      FinancialYears<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ASSESS_YEAR: OrderableEdmTypeField<
      FinancialYears<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TCS_ACCUMULATION_BASE: EnumField<
      FinancialYears<DeSerializers>,
      DeSerializersT,
      TcsAccumulationBaseEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FinancialYears<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link assessYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESS_YEAR: fieldBuilder.buildEdmTypeField(
          'AssessYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tcsAccumulationBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_ACCUMULATION_BASE: fieldBuilder.buildEnumField(
          'TCSAccumulationBase',
          TcsAccumulationBaseEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FinancialYears)
      };
    }

    return this._schema;
  }
}
