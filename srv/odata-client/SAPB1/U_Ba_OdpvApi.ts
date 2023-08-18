/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Odpv } from './U_Ba_Odpv';
import { U_Ba_OdpvRequestBuilder } from './U_Ba_OdpvRequestBuilder';
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
export class U_Ba_OdpvApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Odpv<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_OdpvApi<DeSerializersT> {
    return new U_Ba_OdpvApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Odpv;

  requestBuilder(): U_Ba_OdpvRequestBuilder<DeSerializersT> {
    return new U_Ba_OdpvRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Odpv<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Odpv<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Odpv<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Odpv, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Odpv, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ASST_NUM: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_PERIOD: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DATE_TO: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_OR_DP_PLAN: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_OR_DP_ACT: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_PLAN: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_ACT: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_KEY: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PRFT_CNTR: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PROJECT: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DATE_FROM: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_OR_DP_ARD: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_ARD: OrderableEdmTypeField<
      U_Ba_Odpv<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Odpv<DeSerializers>>;
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
         * Static representation of the {@link uFisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_FisYear',
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
         * Static representation of the {@link uPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PERIOD: fieldBuilder.buildEdmTypeField('U_Period', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DATE_TO: fieldBuilder.buildEdmTypeField(
          'U_DateTo',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link uOrDpAct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OR_DP_ACT: fieldBuilder.buildEdmTypeField(
          'U_OrDpAct',
          'Edm.Double',
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
        /**
         * Static representation of the {@link uSpDpAct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_ACT: fieldBuilder.buildEdmTypeField(
          'U_SpDpAct',
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
         * Static representation of the {@link uDateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DATE_FROM: fieldBuilder.buildEdmTypeField(
          'U_DateFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uOrDpArd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OR_DP_ARD: fieldBuilder.buildEdmTypeField(
          'U_OrDpArd',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uSpDpArd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP_ARD: fieldBuilder.buildEdmTypeField(
          'U_SpDpArd',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Odpv)
      };
    }

    return this._schema;
  }
}
