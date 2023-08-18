/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Cdtn } from './U_Ba_Cdtn';
import { U_Ba_CdtnRequestBuilder } from './U_Ba_CdtnRequestBuilder';
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
export class U_Ba_CdtnApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Cdtn<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_CdtnApi<DeSerializersT> {
    return new U_Ba_CdtnApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Cdtn;

  requestBuilder(): U_Ba_CdtnRequestBuilder<DeSerializersT> {
    return new U_Ba_CdtnRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Cdtn<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Cdtn<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Cdtn<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Cdtn, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Cdtn, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACCT_DETN: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DESC: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_BALANC: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_CLR_ACQ: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_ORD: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_ORD_ACC: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_UNP: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_UNP_ACC: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_SA_REV_N: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_RE_EXP_N: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_RE_REV_N: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_SA_REV_G: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_RE_EXP_G: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_RE_REV_G: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_RE_NB_VE: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_RE_NB_VR: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_CLR_DSC: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_SP: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_SP_ACC: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AC_REV_RE: OrderableEdmTypeField<
      U_Ba_Cdtn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Cdtn<DeSerializers>>;
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
         * Static representation of the {@link uAcctDetn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACCT_DETN: fieldBuilder.buildEdmTypeField(
          'U_AcctDetn',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DESC: fieldBuilder.buildEdmTypeField('U_Desc', 'Edm.String', true),
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
         * Static representation of the {@link uAcClrAcq} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_CLR_ACQ: fieldBuilder.buildEdmTypeField(
          'U_AcClrAcq',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcOrd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_ORD: fieldBuilder.buildEdmTypeField('U_AcOrd', 'Edm.String', true),
        /**
         * Static representation of the {@link uAcOrdAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_ORD_ACC: fieldBuilder.buildEdmTypeField(
          'U_AcOrdAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcUnp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_UNP: fieldBuilder.buildEdmTypeField('U_AcUnp', 'Edm.String', true),
        /**
         * Static representation of the {@link uAcUnpAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_UNP_ACC: fieldBuilder.buildEdmTypeField(
          'U_AcUnpAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcSaRevN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_SA_REV_N: fieldBuilder.buildEdmTypeField(
          'U_AcSaRevN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcReExpN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_RE_EXP_N: fieldBuilder.buildEdmTypeField(
          'U_AcReExpN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcReRevN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_RE_REV_N: fieldBuilder.buildEdmTypeField(
          'U_AcReRevN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcSaRevG} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_SA_REV_G: fieldBuilder.buildEdmTypeField(
          'U_AcSaRevG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcReExpG} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_RE_EXP_G: fieldBuilder.buildEdmTypeField(
          'U_AcReExpG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcReRevG} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_RE_REV_G: fieldBuilder.buildEdmTypeField(
          'U_AcReRevG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcReNbVe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_RE_NB_VE: fieldBuilder.buildEdmTypeField(
          'U_AcReNBVe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcReNbVr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_RE_NB_VR: fieldBuilder.buildEdmTypeField(
          'U_AcReNBVr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcClrDsc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_CLR_DSC: fieldBuilder.buildEdmTypeField(
          'U_AcClrDsc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcSp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_SP: fieldBuilder.buildEdmTypeField('U_AcSp', 'Edm.String', true),
        /**
         * Static representation of the {@link uAcSpAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_SP_ACC: fieldBuilder.buildEdmTypeField(
          'U_AcSpAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcRevRe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AC_REV_RE: fieldBuilder.buildEdmTypeField(
          'U_AcRevRe',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Cdtn)
      };
    }

    return this._schema;
  }
}
