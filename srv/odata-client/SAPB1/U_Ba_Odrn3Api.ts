/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Odrn3 } from './U_Ba_Odrn3';
import { U_Ba_Odrn3RequestBuilder } from './U_Ba_Odrn3RequestBuilder';
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
export class U_Ba_Odrn3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Odrn3<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_Odrn3Api<DeSerializersT> {
    return new U_Ba_Odrn3Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Odrn3;

  requestBuilder(): U_Ba_Odrn3RequestBuilder<DeSerializersT> {
    return new U_Ba_Odrn3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Odrn3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Odrn3<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Odrn3<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Odrn3, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Odrn3, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RUN_ID: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ACCT_DETN: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ASST_NUM: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_AC_ORD_DP: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_BALANC: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DEBIT: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_CREDIT: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_AC_SPE_DP: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_SPE_BAL: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DEBI_SP_DP: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_CRED_SP_DP: OrderableEdmTypeField<
      U_Ba_Odrn3<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Odrn3<DeSerializers>>;
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
         * Static representation of the {@link uAcctDetn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACCT_DETN: fieldBuilder.buildEdmTypeField(
          'U_AcctDetn',
          'Edm.Int32',
          true
        ),
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
         * Static representation of the {@link uAcOrdDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_ORD_DP: fieldBuilder.buildEdmTypeField(
          'U_AcOrdDp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcBalanc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_BALANC: fieldBuilder.buildEdmTypeField(
          'U_AcBalanc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEBIT: fieldBuilder.buildEdmTypeField('U_Debit', 'Edm.Double', true),
        /**
         * Static representation of the {@link uCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREDIT: fieldBuilder.buildEdmTypeField(
          'U_Credit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uAcSpeDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_SPE_DP: fieldBuilder.buildEdmTypeField(
          'U_AcSpeDp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcSpeBal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_SPE_BAL: fieldBuilder.buildEdmTypeField(
          'U_AcSpeBal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDebiSpDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEBI_SP_DP: fieldBuilder.buildEdmTypeField(
          'U_DebiSpDp',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uCredSpDp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CRED_SP_DP: fieldBuilder.buildEdmTypeField(
          'U_CredSpDp',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Odrn3)
      };
    }

    return this._schema;
  }
}
