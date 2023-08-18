/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Cdpt } from './U_Ba_Cdpt';
import { U_Ba_CdptRequestBuilder } from './U_Ba_CdptRequestBuilder';
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
export class U_Ba_CdptApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Cdpt<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_CdptApi<DeSerializersT> {
    return new U_Ba_CdptApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Cdpt;

  requestBuilder(): U_Ba_CdptRequestBuilder<DeSerializersT> {
    return new U_Ba_CdptRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Cdpt<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Cdpt<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Cdpt<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Cdpt, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Cdpt, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_TYP_ID: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DP_METH_ID: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DEPR_TO: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_ROUNDING: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PER_ACQ_1: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PER_ACQ_2: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PER_RET: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAL_FROM: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_VAL_TO: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_S_BASE: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_S_DIVISOR: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_S_PERCENT: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_D_BASE: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_D_PERCENT: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_D_FACTOR: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_D_ALT_D_TYP: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_M_BASE_01: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_M_BASE_02: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_M_BASE_03: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_M_BASE_04: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_M_BASE_05: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_M_YEAR_01: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_M_YEAR_02: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_M_YEAR_03: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_M_YEAR_04: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_M_YEAR_05: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_M_PERC_01: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_M_PERC_02: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_M_PERC_03: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_M_PERC_04: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_M_PERC_05: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_DEF_NAME: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_INCLUDE: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_SALV_PERC: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_DPR_RT_MON: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PER_DP_REV: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_ACQ_PR_TYP: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SUB_PR_TYP: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RT_PR_TYP: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_MA_DEC_BA: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_METH: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_CONC_P: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_SP_MAX_PE: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SP_AD_DPR: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SP_AL_DPR: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DEPR_TP_ID: OrderableEdmTypeField<
      U_Ba_Cdpt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Cdpt<DeSerializers>>;
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
         * Static representation of the {@link uDprTypId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_TYP_ID: fieldBuilder.buildEdmTypeField(
          'U_DprTypID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDpMethId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DP_METH_ID: fieldBuilder.buildEdmTypeField(
          'U_DpMethID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDeprTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEPR_TO: fieldBuilder.buildEdmTypeField(
          'U_DeprTo',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ROUNDING: fieldBuilder.buildEdmTypeField(
          'U_Rounding',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPerAcq1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PER_ACQ_1: fieldBuilder.buildEdmTypeField(
          'U_PerAcq1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPerAcq2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PER_ACQ_2: fieldBuilder.buildEdmTypeField(
          'U_PerAcq2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPerRet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PER_RET: fieldBuilder.buildEdmTypeField(
          'U_PerRet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uValFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAL_FROM: fieldBuilder.buildEdmTypeField(
          'U_ValFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uValTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAL_TO: fieldBuilder.buildEdmTypeField(
          'U_ValTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uSBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_BASE: fieldBuilder.buildEdmTypeField('U_sBase', 'Edm.String', true),
        /**
         * Static representation of the {@link uSDivisor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_DIVISOR: fieldBuilder.buildEdmTypeField(
          'U_sDivisor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_S_PERCENT: fieldBuilder.buildEdmTypeField(
          'U_sPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_D_BASE: fieldBuilder.buildEdmTypeField('U_dBase', 'Edm.String', true),
        /**
         * Static representation of the {@link uDPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_D_PERCENT: fieldBuilder.buildEdmTypeField(
          'U_dPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_D_FACTOR: fieldBuilder.buildEdmTypeField(
          'U_dFactor',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDAltDTyp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_D_ALT_D_TYP: fieldBuilder.buildEdmTypeField(
          'U_dAltDTyp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMBase01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_BASE_01: fieldBuilder.buildEdmTypeField(
          'U_mBase01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMBase02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_BASE_02: fieldBuilder.buildEdmTypeField(
          'U_mBase02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMBase03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_BASE_03: fieldBuilder.buildEdmTypeField(
          'U_mBase03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMBase04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_BASE_04: fieldBuilder.buildEdmTypeField(
          'U_mBase04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMBase05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_BASE_05: fieldBuilder.buildEdmTypeField(
          'U_mBase05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMYear01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_YEAR_01: fieldBuilder.buildEdmTypeField(
          'U_mYear01',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uMYear02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_YEAR_02: fieldBuilder.buildEdmTypeField(
          'U_mYear02',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uMYear03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_YEAR_03: fieldBuilder.buildEdmTypeField(
          'U_mYear03',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uMYear04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_YEAR_04: fieldBuilder.buildEdmTypeField(
          'U_mYear04',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uMYear05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_YEAR_05: fieldBuilder.buildEdmTypeField(
          'U_mYear05',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uMPerc01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_PERC_01: fieldBuilder.buildEdmTypeField(
          'U_mPerc01',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uMPerc02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_PERC_02: fieldBuilder.buildEdmTypeField(
          'U_mPerc02',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uMPerc03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_PERC_03: fieldBuilder.buildEdmTypeField(
          'U_mPerc03',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uMPerc04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_PERC_04: fieldBuilder.buildEdmTypeField(
          'U_mPerc04',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uMPerc05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_M_PERC_05: fieldBuilder.buildEdmTypeField(
          'U_mPerc05',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDefName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEF_NAME: fieldBuilder.buildEdmTypeField(
          'U_DefName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uInclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_INCLUDE: fieldBuilder.buildEdmTypeField(
          'U_Include',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uSalvPerc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALV_PERC: fieldBuilder.buildEdmTypeField(
          'U_SalvPerc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDprRtMon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_RT_MON: fieldBuilder.buildEdmTypeField(
          'U_DprRtMon',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPerDpRev} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PER_DP_REV: fieldBuilder.buildEdmTypeField(
          'U_PerDpRev',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uAcqPrTyp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACQ_PR_TYP: fieldBuilder.buildEdmTypeField(
          'U_AcqPRTyp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSubPrTyp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SUB_PR_TYP: fieldBuilder.buildEdmTypeField(
          'U_SubPRTyp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRtPrTyp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RT_PR_TYP: fieldBuilder.buildEdmTypeField(
          'U_RtPRTyp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMaDecBa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MA_DEC_BA: fieldBuilder.buildEdmTypeField(
          'U_maDecBa',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSpMeth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_METH: fieldBuilder.buildEdmTypeField(
          'U_spMeth',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSpConcP} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_CONC_P: fieldBuilder.buildEdmTypeField(
          'U_spConcP',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uSpMaxPe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_MAX_PE: fieldBuilder.buildEdmTypeField(
          'U_spMaxPe',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uSpAdDpr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_AD_DPR: fieldBuilder.buildEdmTypeField(
          'U_spAdDpr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSpAlDpr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SP_AL_DPR: fieldBuilder.buildEdmTypeField(
          'U_spAlDpr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDeprTpId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEPR_TP_ID: fieldBuilder.buildEdmTypeField(
          'U_DeprTpID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Cdpt)
      };
    }

    return this._schema;
  }
}
