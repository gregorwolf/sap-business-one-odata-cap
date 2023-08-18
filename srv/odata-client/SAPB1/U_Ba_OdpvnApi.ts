/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Odpvn } from './U_Ba_Odpvn';
import { U_Ba_OdpvnRequestBuilder } from './U_Ba_OdpvnRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Ba_OdpvnApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Odpvn<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_OdpvnApi<DeSerializersT> {
    return new U_Ba_OdpvnApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Odpvn;

  requestBuilder(): U_Ba_OdpvnRequestBuilder<DeSerializersT> {
    return new U_Ba_OdpvnRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Odpvn<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Odpvn<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Odpvn<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Odpvn, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Odpvn, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ASST_NUM: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REF_FROM: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_REF_TO: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PRFT_CNTR: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PROJECT: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OR_DP_PLAN: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_KEY: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_DP_PLAN: OrderableEdmTypeField<
      U_Ba_Odpvn<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Odpvn<DeSerializers>>;
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
         * Static representation of the {@link uAsstNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ASST_NUM: fieldBuilder.buildEdmTypeField(
          'U_AsstNum',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link uRefFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REF_FROM: fieldBuilder.buildEdmTypeField(
          'U_RefFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uRefTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REF_TO: fieldBuilder.buildEdmTypeField(
          'U_RefTo',
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
         * Static representation of the {@link uPrftCntr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PRFT_CNTR: fieldBuilder.buildEdmTypeField(
          'U_PrftCntr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PROJECT: fieldBuilder.buildEdmTypeField(
          'U_Project',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOrDpPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OR_DP_PLAN: fieldBuilder.buildEdmTypeField(
          'U_OrDpPlan',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uSpDpKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_KEY: fieldBuilder.buildEdmTypeField(
          'U_SpDpKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSpDpPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_PLAN: fieldBuilder.buildEdmTypeField(
          'U_SpDpPlan',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Odpvn)
      };
    }

    return this._schema;
  }
}
