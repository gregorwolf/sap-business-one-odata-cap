/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bosettings } from './U_Bosettings';
import { U_BosettingsRequestBuilder } from './U_BosettingsRequestBuilder';
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
export class U_BosettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bosettings<DeSerializersT>, DeSerializersT>
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
  ): U_BosettingsApi<DeSerializersT> {
    return new U_BosettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bosettings;

  requestBuilder(): U_BosettingsRequestBuilder<DeSerializersT> {
    return new U_BosettingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bosettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bosettings<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bosettings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bosettings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bosettings, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SYNC_CA: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SYNC_CO: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SYNC_TA: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_UPDATE_S: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_UPDATE_O: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PREVIEW: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RESOLVE_C: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CFLS_LOG: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USE_CA_CAT: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CA_CAT: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CA_FOLDER: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CA_RANGE: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_USE_CO_CAT: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_CAT: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_FOLDER: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_RANGE: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CO_FROM: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_TO: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_B_PS_FROM: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_B_PS_TO: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_G_RS_OF_B_PS: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_SALES_P: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USE_TA_CA: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TA_CAT: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TA_FOLDER: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CA_B_1_CR: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CA_BP_FROM: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CA_BP_TO: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CA_SALES_P: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CA_PRE_B_1: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_SYNC_BP: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_SYNC_OC: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_PRE_B_1: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CO_SN_PATH: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TA_RANGE: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TA_B_1_CR: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TA_BP_FROM: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TA_BP_TO: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TA_SALES_P: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TA_PRE_B_1: OrderableEdmTypeField<
      U_Bosettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bosettings<DeSerializers>>;
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
         * Static representation of the {@link uSyncCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYNC_CA: fieldBuilder.buildEdmTypeField(
          'U_SyncCa',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSyncCo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYNC_CO: fieldBuilder.buildEdmTypeField(
          'U_SyncCo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSyncTa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SYNC_TA: fieldBuilder.buildEdmTypeField(
          'U_SyncTa',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUpdateS} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UPDATE_S: fieldBuilder.buildEdmTypeField(
          'U_UpdateS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUpdateO} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UPDATE_O: fieldBuilder.buildEdmTypeField(
          'U_UpdateO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPreview} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PREVIEW: fieldBuilder.buildEdmTypeField(
          'U_Preview',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uResolveC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RESOLVE_C: fieldBuilder.buildEdmTypeField(
          'U_ResolveC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCflsLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CFLS_LOG: fieldBuilder.buildEdmTypeField(
          'U_CflsLog',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUseCaCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USE_CA_CAT: fieldBuilder.buildEdmTypeField(
          'U_UseCaCat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCaCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_CAT: fieldBuilder.buildEdmTypeField('U_CaCat', 'Edm.String', true),
        /**
         * Static representation of the {@link uCaFolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_FOLDER: fieldBuilder.buildEdmTypeField(
          'U_CaFolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCaRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_RANGE: fieldBuilder.buildEdmTypeField(
          'U_CaRange',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uUseCoCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USE_CO_CAT: fieldBuilder.buildEdmTypeField(
          'U_UseCoCat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCoCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_CAT: fieldBuilder.buildEdmTypeField('U_CoCat', 'Edm.String', true),
        /**
         * Static representation of the {@link uCoFolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_FOLDER: fieldBuilder.buildEdmTypeField(
          'U_CoFolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCoRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_RANGE: fieldBuilder.buildEdmTypeField(
          'U_CoRange',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCoFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_FROM: fieldBuilder.buildEdmTypeField(
          'U_CoFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCoTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_TO: fieldBuilder.buildEdmTypeField('U_CoTo', 'Edm.String', true),
        /**
         * Static representation of the {@link uBPsFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_B_PS_FROM: fieldBuilder.buildEdmTypeField(
          'U_BPsFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBPsTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_B_PS_TO: fieldBuilder.buildEdmTypeField(
          'U_BPsTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uGRsOfBPs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_G_RS_OF_B_PS: fieldBuilder.buildEdmTypeField(
          'U_GRsOfBPs',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uSalesP} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_SALES_P: fieldBuilder.buildEdmTypeField(
          'U_SalesP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUseTaCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USE_TA_CA: fieldBuilder.buildEdmTypeField(
          'U_UseTaCa',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_CAT: fieldBuilder.buildEdmTypeField('U_TaCat', 'Edm.String', true),
        /**
         * Static representation of the {@link uTaFolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_FOLDER: fieldBuilder.buildEdmTypeField(
          'U_TaFolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCaB1Cr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_B_1_CR: fieldBuilder.buildEdmTypeField(
          'U_CaB1Cr',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCaBpFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_BP_FROM: fieldBuilder.buildEdmTypeField(
          'U_CaBPFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCaBpTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_BP_TO: fieldBuilder.buildEdmTypeField(
          'U_CaBPTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCaSalesP} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_SALES_P: fieldBuilder.buildEdmTypeField(
          'U_CaSalesP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCaPreB1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CA_PRE_B_1: fieldBuilder.buildEdmTypeField(
          'U_CaPreB1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCoSyncBp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_SYNC_BP: fieldBuilder.buildEdmTypeField(
          'U_CoSyncBP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCoSyncOc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_SYNC_OC: fieldBuilder.buildEdmTypeField(
          'U_CoSyncOC',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCoPreB1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_PRE_B_1: fieldBuilder.buildEdmTypeField(
          'U_CoPreB1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCoSnPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CO_SN_PATH: fieldBuilder.buildEdmTypeField(
          'U_CoSnPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_RANGE: fieldBuilder.buildEdmTypeField(
          'U_TaRange',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uTaB1Cr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_B_1_CR: fieldBuilder.buildEdmTypeField(
          'U_TaB1Cr',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uTaBpFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_BP_FROM: fieldBuilder.buildEdmTypeField(
          'U_TaBPFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaBpTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_BP_TO: fieldBuilder.buildEdmTypeField(
          'U_TaBPTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaSalesP} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_SALES_P: fieldBuilder.buildEdmTypeField(
          'U_TaSalesP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaPreB1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TA_PRE_B_1: fieldBuilder.buildEdmTypeField(
          'U_TaPreB1',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bosettings)
      };
    }

    return this._schema;
  }
}
