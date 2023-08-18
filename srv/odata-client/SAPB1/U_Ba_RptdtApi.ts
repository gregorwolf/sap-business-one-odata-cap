/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Rptdt } from './U_Ba_Rptdt';
import { U_Ba_RptdtRequestBuilder } from './U_Ba_RptdtRequestBuilder';
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
export class U_Ba_RptdtApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Rptdt<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_RptdtApi<DeSerializersT> {
    return new U_Ba_RptdtApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Rptdt;

  requestBuilder(): U_Ba_RptdtRequestBuilder<DeSerializersT> {
    return new U_Ba_RptdtRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Rptdt<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Rptdt<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Rptdt<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Rptdt, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Rptdt, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_MX_ROW_N: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ASSET_N: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ITEM_N: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_APCH: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_ACQ_D: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_PLAN_UL: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REM_L: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DPR_T: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_APCST: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_APC: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_RETM: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_TRSFER: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_WRT_UP: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_ACC_DPR: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_NBVST: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_DPR: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_APC_EN: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_NBV_EN: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_LEVEL: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LINE_TYPE: OrderableEdmTypeField<
      U_Ba_Rptdt<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Rptdt<DeSerializers>>;
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
         * Static representation of the {@link uMxRowN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MX_ROW_N: fieldBuilder.buildEdmTypeField(
          'U_MXRowN',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uAssetN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ASSET_N: fieldBuilder.buildEdmTypeField(
          'U_AssetN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uItemN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ITEM_N: fieldBuilder.buildEdmTypeField('U_ItemN', 'Edm.String', true),
        /**
         * Static representation of the {@link uApch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APCH: fieldBuilder.buildEdmTypeField('U_APCH', 'Edm.Double', true),
        /**
         * Static representation of the {@link uAcqD} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACQ_D: fieldBuilder.buildEdmTypeField(
          'U_AcqD',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uPlanUl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PLAN_UL: fieldBuilder.buildEdmTypeField(
          'U_PlanUL',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRemL} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REM_L: fieldBuilder.buildEdmTypeField('U_RemL', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uDprT} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_T: fieldBuilder.buildEdmTypeField('U_DprT', 'Edm.String', true),
        /**
         * Static representation of the {@link uApcst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APCST: fieldBuilder.buildEdmTypeField('U_APCST', 'Edm.Double', true),
        /**
         * Static representation of the {@link uApc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APC: fieldBuilder.buildEdmTypeField('U_APC', 'Edm.Double', true),
        /**
         * Static representation of the {@link uRetm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RETM: fieldBuilder.buildEdmTypeField('U_Retm', 'Edm.Double', true),
        /**
         * Static representation of the {@link uTrsfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TRSFER: fieldBuilder.buildEdmTypeField(
          'U_Trsfer',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uWrtUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_WRT_UP: fieldBuilder.buildEdmTypeField('U_WrtUp', 'Edm.Double', true),
        /**
         * Static representation of the {@link uAccDpr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACC_DPR: fieldBuilder.buildEdmTypeField(
          'U_AccDpr',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uNbvst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NBVST: fieldBuilder.buildEdmTypeField('U_NBVST', 'Edm.Double', true),
        /**
         * Static representation of the {@link uDpr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR: fieldBuilder.buildEdmTypeField('U_Dpr', 'Edm.Double', true),
        /**
         * Static representation of the {@link uApcEn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_APC_EN: fieldBuilder.buildEdmTypeField('U_APCEn', 'Edm.Double', true),
        /**
         * Static representation of the {@link uNbvEn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NBV_EN: fieldBuilder.buildEdmTypeField('U_NBVEn', 'Edm.Double', true),
        /**
         * Static representation of the {@link uLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LEVEL: fieldBuilder.buildEdmTypeField('U_Level', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LINE_TYPE: fieldBuilder.buildEdmTypeField(
          'U_LineType',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Rptdt)
      };
    }

    return this._schema;
  }
}
