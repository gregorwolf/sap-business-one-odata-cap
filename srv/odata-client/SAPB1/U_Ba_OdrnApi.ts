/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Odrn } from './U_Ba_Odrn';
import { U_Ba_OdrnRequestBuilder } from './U_Ba_OdrnRequestBuilder';
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
  Time,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Ba_OdrnApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Odrn<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_OdrnApi<DeSerializersT> {
    return new U_Ba_OdrnApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Odrn;

  requestBuilder(): U_Ba_OdrnRequestBuilder<DeSerializersT> {
    return new U_Ba_OdrnRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Odrn<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Odrn<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Odrn<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Odrn, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Odrn, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RUN_ID: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_STATUS: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CANCELED: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RVRSL_RUN: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_POST_DATE: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PERIOD: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_KEY_DATE: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_REMARK: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_NUM_DOCS: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_SUM_DEPR: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_REL_DATE: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_REL_TIME: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_REL_USER: OrderableEdmTypeField<
      U_Ba_Odrn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Odrn<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uRunId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RUN_ID: fieldBuilder.buildEdmTypeField('U_RunID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uDprArId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_AR_ID: fieldBuilder.buildEdmTypeField(
          'U_DprArID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_STATUS: fieldBuilder.buildEdmTypeField('U_Status', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uCanceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CANCELED: fieldBuilder.buildEdmTypeField(
          'U_Canceled',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRvrslRun} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RVRSL_RUN: fieldBuilder.buildEdmTypeField(
          'U_RvrslRun',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uPostDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_DATE: fieldBuilder.buildEdmTypeField(
          'U_PostDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uFisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_FisYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PERIOD: fieldBuilder.buildEdmTypeField('U_Period', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uKeyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_KEY_DATE: fieldBuilder.buildEdmTypeField(
          'U_KeyDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uRemark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REMARK: fieldBuilder.buildEdmTypeField(
          'U_Remark',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uNumDocs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NUM_DOCS: fieldBuilder.buildEdmTypeField(
          'U_NumDocs',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uSumDepr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SUM_DEPR: fieldBuilder.buildEdmTypeField(
          'U_SumDepr',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uRelDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REL_DATE: fieldBuilder.buildEdmTypeField(
          'U_RelDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uRelTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REL_TIME: fieldBuilder.buildEdmTypeField(
          'U_RelTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uRelUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REL_USER: fieldBuilder.buildEdmTypeField(
          'U_RelUser',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Odrn)
      };
    }

    return this._schema;
  }
}
