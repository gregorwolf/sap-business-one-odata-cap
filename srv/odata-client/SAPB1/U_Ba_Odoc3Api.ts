/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Odoc3 } from './U_Ba_Odoc3';
import { U_Ba_Odoc3RequestBuilder } from './U_Ba_Odoc3RequestBuilder';
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
export class U_Ba_Odoc3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Odoc3<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_Odoc3Api<DeSerializersT> {
    return new U_Ba_Odoc3Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Odoc3;

  requestBuilder(): U_Ba_Odoc3RequestBuilder<DeSerializersT> {
    return new U_Ba_Odoc3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Odoc3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Odoc3<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Odoc3<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Odoc3, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Odoc3, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_NUM: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POS_NUM: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CANCELED: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACCOUNT: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POST_PRD: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TRNS_ID: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POST_DATE: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_APC: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_OR_DP: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_UN_DP: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_DP_KEY: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_DP: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SALES_REV: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_RETIR_EXP: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_RETIR_REV: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_RETIR_DAT: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_TRNF_ASST: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_TYP_ID: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_DATE: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_USE_LIFE: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REM_LIFE: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_QTY: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SALVAGE_V: OrderableEdmTypeField<
      U_Ba_Odoc3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Odoc3<DeSerializers>>;
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
         * Static representation of the {@link uDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'U_DocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPosNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POS_NUM: fieldBuilder.buildEdmTypeField(
          'U_PosNum',
          'Edm.Int32',
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
         * Static representation of the {@link uCanceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CANCELED: fieldBuilder.buildEdmTypeField(
          'U_Canceled',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'U_Account',
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
         * Static representation of the {@link uPostPrd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_PRD: fieldBuilder.buildEdmTypeField(
          'U_PostPrd',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uTrnsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TRNS_ID: fieldBuilder.buildEdmTypeField(
          'U_TrnsID',
          'Edm.String',
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
         * Static representation of the {@link uApc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APC: fieldBuilder.buildEdmTypeField('U_APC', 'Edm.Double', true),
        /**
         * Static representation of the {@link uOrDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OR_DP: fieldBuilder.buildEdmTypeField('U_OrDp', 'Edm.Double', true),
        /**
         * Static representation of the {@link uUnDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UN_DP: fieldBuilder.buildEdmTypeField('U_UnDp', 'Edm.Double', true),
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
         * Static representation of the {@link uSpDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_DP: fieldBuilder.buildEdmTypeField('U_SpDp', 'Edm.Double', true),
        /**
         * Static representation of the {@link uSalesRev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALES_REV: fieldBuilder.buildEdmTypeField(
          'U_SalesRev',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uRetirExp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RETIR_EXP: fieldBuilder.buildEdmTypeField(
          'U_RetirExp',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uRetirRev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RETIR_REV: fieldBuilder.buildEdmTypeField(
          'U_RetirRev',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uRetirDat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RETIR_DAT: fieldBuilder.buildEdmTypeField(
          'U_RetirDat',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uTrnfAsst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TRNF_ASST: fieldBuilder.buildEdmTypeField(
          'U_TrnfAsst',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDprTypId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_TYP_ID: fieldBuilder.buildEdmTypeField(
          'U_DprTypID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDprDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_DATE: fieldBuilder.buildEdmTypeField(
          'U_DprDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uUseLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USE_LIFE: fieldBuilder.buildEdmTypeField(
          'U_UseLife',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRemLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REM_LIFE: fieldBuilder.buildEdmTypeField(
          'U_RemLife',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QTY: fieldBuilder.buildEdmTypeField('U_Qty', 'Edm.Double', true),
        /**
         * Static representation of the {@link uSalvageV} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALVAGE_V: fieldBuilder.buildEdmTypeField(
          'U_SalvageV',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Odoc3)
      };
    }

    return this._schema;
  }
}
