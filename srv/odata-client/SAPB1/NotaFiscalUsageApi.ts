/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NotaFiscalUsage } from './NotaFiscalUsage';
import { NotaFiscalUsageRequestBuilder } from './NotaFiscalUsageRequestBuilder';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { DepreciationAreasApi } from './DepreciationAreasApi';
import { NotaFiscalCfopApi } from './NotaFiscalCfopApi';
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
  OrderableEdmTypeField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class NotaFiscalUsageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NotaFiscalUsage<DeSerializersT>, DeSerializersT>
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
  ): NotaFiscalUsageApi<DeSerializersT> {
    return new NotaFiscalUsageApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      NotaFiscalUsage<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationAreas} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREAS: OneToManyLink<
      NotaFiscalUsage<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalCfop} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_CFOP: OneToOneLink<
      NotaFiscalUsage<DeSerializersT>,
      DeSerializersT,
      NotaFiscalCfopApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GlAccountAdvancedRulesApi<DeSerializersT>,
      DepreciationAreasApi<DeSerializersT>,
      NotaFiscalCfopApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GL_ACCOUNT_ADVANCED_RULES: new OneToManyLink(
        'GLAccountAdvancedRules',
        this,
        linkedApis[0]
      ),
      DEPRECIATION_AREAS: new OneToManyLink(
        'DepreciationAreas',
        this,
        linkedApis[1]
      ),
      NOTA_FISCAL_CFOP: new OneToOneLink('NotaFiscalCFOP', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = NotaFiscalUsage;

  requestBuilder(): NotaFiscalUsageRequestBuilder<DeSerializersT> {
    return new NotaFiscalUsageRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NotaFiscalUsage<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NotaFiscalUsage<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NotaFiscalUsage<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NotaFiscalUsage, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        NotaFiscalUsage,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USAGE: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOMING_IN_STATE_CFOP_CODE: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOMING_OUT_STATE_CFOP_CODE: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOMING_IMPORT_CFOP_CODE: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTGOING_IN_STATE_CFOP_CODE: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTGOING_OUT_STATE_CFOP_CODE: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTGOING_EXPORT_CFOP_CODE: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NotaFiscalUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      NotaFiscalUsage<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationAreas} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREAS: OneToManyLink<
      NotaFiscalUsage<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalCfop} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_CFOP: OneToOneLink<
      NotaFiscalUsage<DeSerializersT>,
      DeSerializersT,
      NotaFiscalCfopApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<NotaFiscalUsage<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link usage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE: fieldBuilder.buildEdmTypeField('Usage', 'Edm.String', true),
        /**
         * Static representation of the {@link incomingInStateCfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOMING_IN_STATE_CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'IncomingInStateCFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomingOutStateCfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOMING_OUT_STATE_CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'IncomingOutStateCFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomingImportCfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOMING_IMPORT_CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'IncomingImportCFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outgoingInStateCfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTGOING_IN_STATE_CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'OutgoingInStateCFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outgoingOutStateCfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTGOING_OUT_STATE_CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'OutgoingOutStateCFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outgoingExportCfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTGOING_EXPORT_CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'OutgoingExportCFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NotaFiscalUsage)
      };
    }

    return this._schema;
  }
}
