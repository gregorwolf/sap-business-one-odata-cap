/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bnoint2 } from './U_Bnoint2';
import { U_Bnoint2RequestBuilder } from './U_Bnoint2RequestBuilder';
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
export class U_Bnoint2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bnoint2<DeSerializersT>, DeSerializersT>
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
  ): U_Bnoint2Api<DeSerializersT> {
    return new U_Bnoint2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bnoint2;

  requestBuilder(): U_Bnoint2RequestBuilder<DeSerializersT> {
    return new U_Bnoint2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bnoint2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bnoint2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bnoint2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bnoint2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bnoint2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_HEADER_ID: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ITEM_ID: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ROW_STAT: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_NUM: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LINE_NUM: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_REC_TYPE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_D_DATE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_BP_CNTRY: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DST_STATE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_INCOTERM: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TA_TYPE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TRN_MODE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PORT: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COMM_CODE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ORI_CNTRY: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ORI_STATE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CUST_PROC: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TAX_CD_EXT: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_NET_MAS_SG: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_NET_MASS: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_NET_MAS_UN: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SUP_MAS_SG: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SUP_MASS: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_SUP_MAS_UN: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VALUE_SG: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VALUE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_VALUE_FC: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_FRGN_CURR: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BRD_VAL_SG: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BRD_VALUE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_DOM_FRG_ID: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RETURN_ID: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CORR_MON: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CORR_YEAR: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CORR_SIGN: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CORR_DOC: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CORR_ITEM: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CORR_TYPE: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAT_REG_NB: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CHANGED: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CHG_ID: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CHG_USER: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CHG_TIME: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_DELETED: OrderableEdmTypeField<
      U_Bnoint2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bnoint2<DeSerializers>>;
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
         * Static representation of the {@link uHeaderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_HEADER_ID: fieldBuilder.buildEdmTypeField(
          'U_HeaderID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'U_ItemID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRowStat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ROW_STAT: fieldBuilder.buildEdmTypeField(
          'U_RowStat',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link uLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'U_LineNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRecType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REC_TYPE: fieldBuilder.buildEdmTypeField(
          'U_RecType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDocDDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_D_DATE: fieldBuilder.buildEdmTypeField(
          'U_DocDDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uBpCntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_CNTRY: fieldBuilder.buildEdmTypeField(
          'U_BpCntry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDstState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DST_STATE: fieldBuilder.buildEdmTypeField(
          'U_DstState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uIncoterm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_INCOTERM: fieldBuilder.buildEdmTypeField(
          'U_Incoterm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_TYPE: fieldBuilder.buildEdmTypeField(
          'U_TAType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTrnMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TRN_MODE: fieldBuilder.buildEdmTypeField(
          'U_TrnMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PORT: fieldBuilder.buildEdmTypeField('U_Port', 'Edm.String', true),
        /**
         * Static representation of the {@link uCommCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COMM_CODE: fieldBuilder.buildEdmTypeField(
          'U_CommCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOriCntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ORI_CNTRY: fieldBuilder.buildEdmTypeField(
          'U_OriCntry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOriState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ORI_STATE: fieldBuilder.buildEdmTypeField(
          'U_OriState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCustProc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CUST_PROC: fieldBuilder.buildEdmTypeField(
          'U_CustProc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaxCdExt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TAX_CD_EXT: fieldBuilder.buildEdmTypeField(
          'U_TaxCdExt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uNetMasSg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NET_MAS_SG: fieldBuilder.buildEdmTypeField(
          'U_NetMasSg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uNetMass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NET_MASS: fieldBuilder.buildEdmTypeField(
          'U_NetMass',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uNetMasUn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NET_MAS_UN: fieldBuilder.buildEdmTypeField(
          'U_NetMasUn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSupMasSg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SUP_MAS_SG: fieldBuilder.buildEdmTypeField(
          'U_SupMasSg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSupMass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SUP_MASS: fieldBuilder.buildEdmTypeField(
          'U_SupMass',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uSupMasUn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SUP_MAS_UN: fieldBuilder.buildEdmTypeField(
          'U_SupMasUn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uValueSg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VALUE_SG: fieldBuilder.buildEdmTypeField(
          'U_ValueSg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VALUE: fieldBuilder.buildEdmTypeField('U_Value', 'Edm.Double', true),
        /**
         * Static representation of the {@link uValueFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VALUE_FC: fieldBuilder.buildEdmTypeField(
          'U_ValueFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uFrgnCurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FRGN_CURR: fieldBuilder.buildEdmTypeField(
          'U_FrgnCurr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBrdValSg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BRD_VAL_SG: fieldBuilder.buildEdmTypeField(
          'U_BrdValSg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBrdValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BRD_VALUE: fieldBuilder.buildEdmTypeField(
          'U_BrdValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDomFrgId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOM_FRG_ID: fieldBuilder.buildEdmTypeField(
          'U_DomFrgId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uReturnId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RETURN_ID: fieldBuilder.buildEdmTypeField(
          'U_ReturnId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCorrMon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CORR_MON: fieldBuilder.buildEdmTypeField(
          'U_CorrMon',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCorrYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CORR_YEAR: fieldBuilder.buildEdmTypeField(
          'U_CorrYear',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCorrSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CORR_SIGN: fieldBuilder.buildEdmTypeField(
          'U_CorrSign',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCorrDoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CORR_DOC: fieldBuilder.buildEdmTypeField(
          'U_CorrDoc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCorrItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CORR_ITEM: fieldBuilder.buildEdmTypeField(
          'U_CorrItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCorrType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CORR_TYPE: fieldBuilder.buildEdmTypeField(
          'U_CorrType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uVatRegNb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAT_REG_NB: fieldBuilder.buildEdmTypeField(
          'U_VATRegNB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CHANGED: fieldBuilder.buildEdmTypeField(
          'U_Changed',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uChgId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CHG_ID: fieldBuilder.buildEdmTypeField('U_ChgID', 'Edm.String', true),
        /**
         * Static representation of the {@link uChgUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CHG_USER: fieldBuilder.buildEdmTypeField(
          'U_ChgUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uChgTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CHG_TIME: fieldBuilder.buildEdmTypeField(
          'U_ChgTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DELETED: fieldBuilder.buildEdmTypeField(
          'U_Deleted',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bnoint2)
      };
    }

    return this._schema;
  }
}
